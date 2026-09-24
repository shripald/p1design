#!/usr/bin/env python3
"""Copy PressONE product sheets from p1design into the pressone-docs library.

p1design keeps sheets in product_sheets/ with shared files one level up
(../colors_and_type.css, ../assets/). pressone-docs serves them from products/
with everything alongside (colors_and_type.css, assets/) and a Copy-link button.

Usage: sync_to_docs.py <p1design_dir> <pressone_docs_dir>
Exits non-zero on any problem so the workflow fails loudly instead of
publishing a broken sheet.
"""
import re
import shutil
import sys
from pathlib import Path

COPYLINK = '  <script src="/assets/copylink.js" defer></script>\n'
SHARED_FILES = ["sheet.css", "brochure.css", "pressone-uc.data.js"]
# Logos the sheets reference; copied into products/assets/.
ASSETS = [
    "pressone-logo.svg",
    "pressone-logo-white.svg",
    "pressone-mark.svg",
    "meeting-spaces-logo.svg",
    "meeting-spaces-logo-white.svg",
]
SKIP_SHEETS = {"index.html"}  # p1design's own sheet index; docs has its homepage


def fail(msg: str) -> None:
    print(f"::error::{msg}")
    sys.exit(1)


def warn(msg: str) -> None:
    print(f"::warning::{msg}")


def transform_sheet(text: str, name: str) -> str:
    text = re.sub(r"<!-- @dsCard[^\n]*-->\n", "", text)
    text = text.replace("../colors_and_type.css", "colors_and_type.css")
    text = text.replace("../assets/", "assets/")
    if "copylink.js" not in text:
        if "</body>" not in text:
            fail(f"{name}: no </body> tag, cannot add the Copy-link script")
        text = text.replace("</body>", COPYLINK + "</body>", 1)
    leftover = re.findall(r'(?:href|src)="\.\./[^"]*"', text)
    if leftover:
        fail(f"{name}: unresolved parent-folder links {leftover} (docs keeps shared files in products/)")
    return text


def main() -> None:
    if len(sys.argv) != 3:
        fail("usage: sync_to_docs.py <p1design_dir> <pressone_docs_dir>")
    src, dst = Path(sys.argv[1]).resolve(), Path(sys.argv[2]).resolve()
    sheets_dir, out_dir = src / "product_sheets", dst / "products"
    for p in (sheets_dir, out_dir, src / "colors_and_type.css", dst / "index.html"):
        if not p.exists():
            fail(f"missing {p}")

    written = []
    for sheet in sorted(sheets_dir.glob("*.html")):
        if sheet.name in SKIP_SHEETS:
            continue
        out = out_dir / sheet.name
        new = transform_sheet(sheet.read_text(encoding="utf-8"), sheet.name)
        if not out.exists() or out.read_text(encoding="utf-8") != new:
            out.write_text(new, encoding="utf-8")
            written.append(f"products/{sheet.name}")

    copies = [(sheets_dir / f, out_dir / f) for f in SHARED_FILES]
    copies.append((src / "colors_and_type.css", out_dir / "colors_and_type.css"))
    copies += [(src / "assets" / a, out_dir / "assets" / a) for a in ASSETS]
    for s, d in copies:
        if not s.exists():
            fail(f"missing source file {s}")
        d.parent.mkdir(parents=True, exist_ok=True)
        if not d.exists() or d.read_bytes() != s.read_bytes():
            shutil.copyfile(s, d)
            written.append(str(d.relative_to(dst)))

    # New sheets won't appear on the docs homepage until someone adds a card.
    index = (dst / "index.html").read_text(encoding="utf-8")
    for sheet in sorted(sheets_dir.glob("*.html")):
        if sheet.name not in SKIP_SHEETS and f"products/{sheet.name}" not in index:
            warn(f"products/{sheet.name} has no card in pressone-docs index.html; add one so it shows in the library")

    print("updated:" if written else "no changes")
    for w in written:
        print(f"  {w}")


if __name__ == "__main__":
    main()
