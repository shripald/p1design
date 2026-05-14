function ChatLauncher() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { from: "them", text: "Hey there! 👋 I'm Casey from PressONE. What brings you in today?" },
  ]);
  const [draft, setDraft] = React.useState("");

  const send = () => {
    if (!draft.trim()) return;
    const text = draft.trim();
    setMessages(m => [...m, { from: "me", text }]);
    setDraft("");
    setTimeout(() => {
      setMessages(m => [...m, { from: "them", text: "Got it — let me grab someone from sales. Two minutes." }]);
    }, 800);
  };

  return (
    <React.Fragment>
      {open && (
        <div className="chat-panel">
          <div className="head">
            <div className="t">PressONE Support</div>
            <div className="s">A real person · usually replies in 2 min</div>
          </div>
          <div className="body">
            {messages.map((m, i) => (
              <div className={`chat-bubble ${m.from}`} key={i}>{m.text}</div>
            ))}
          </div>
          <div className="compose">
            <input
              type="text"
              placeholder="Type a message…"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <button className="send" onClick={send} aria-label="Send">
              <Icon name="send" size={16} />
            </button>
          </div>
        </div>
      )}
      <button
        className="chat-launcher"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <Icon name={open ? "x" : "chat"} size={26} />
      </button>
    </React.Fragment>
  );
}
window.ChatLauncher = ChatLauncher;
