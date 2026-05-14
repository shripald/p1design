// PressONE UC feature matrix — sourced from
// https://pressone.net/products/hosted-voip/pressone-features/
//
// Column order: [name, SiteMgr, Simple, Basic, Advanced, CallCenter, CCSupervisor]
// Values: true | 'star' | 'add' (e.g. "Additional") | false
const Y = true, _ = false, ADD = 'add', STAR = 'star';

const MATRIX = [
  {
    cat: "System Features — Auto-Attendant",
    rows: [
      ["Visual AA Builder",                Y, _, _, _, _, _],
      ["Dial-by-Name directory",            Y, _, _, _, _, _],
      ["Dial-by-Extension",                 Y, _, _, _, _, _],
      ["Intro & post-welcome greetings",    Y, _, _, _, _, _],
      ["Multiple language support",         Y, _, _, _, _, _],
      ["Unlimited levels",                  Y, _, _, _, _, _],
    ],
  },
  {
    cat: "Call Pickup",
    rows: [
      ["Directed call pickup",              _, Y, Y, Y, Y, Y],
      ["Group pickup",                      _, Y, Y, Y, Y, Y],
      ["Site pickup",                       _, Y, Y, Y, Y, Y],
      ["Domain pickup",                     _, Y, Y, Y, Y, Y],
    ],
  },
  {
    cat: "Audio Conferencing (dedicated bridge)",
    rows: [
      ["Leader login & PIN",                Y, _, Y, Y, Y, Y],
      ["Participant PIN",                   Y, _, Y, Y, Y, Y],
      ["Require leader to start",           Y, _, Y, Y, Y, Y],
      ["Begin & end times",                 Y, _, Y, Y, Y, Y],
      ["Max participants",                  Y, _, Y, Y, Y, Y],
      ["Save / announce participants",      Y, _, Y, Y, Y, Y],
      ["Arrive / depart tones",             Y, _, Y, Y, Y, Y],
      ["Conference reports",                Y, _, _, _, _, _],
    ],
  },
  {
    cat: "Transfers",
    rows: [
      ["Blind",                             Y, Y, Y, Y, Y, Y],
      ["Attended",                          Y, Y, Y, Y, Y, Y],
      ["Transfer to voicemail",             Y, Y, Y, Y, Y, Y],
    ],
  },
  {
    cat: "Platform Integrations",
    rows: [
      ["Screen pop to 100s of apps",        Y, _, Y, Y, Y, Y],
      ["Deep CRM / ERP integration",        _, _, _, Y, ADD, ADD],
      ["Full REST API",                     _, _, _, Y, Y, Y],
    ],
  },
  {
    cat: "Monitoring",
    rows: [
      ["Listen-in",                         Y, _, _, _, _, Y],
      ["Barge-in",                          Y, _, _, _, _, Y],
      ["Whisper",                           Y, _, _, _, _, Y],
    ],
  },
  {
    cat: "Multicast Paging",
    rows: [
      ["Overhead paging",                   Y, Y, Y, Y, Y, Y],
      ["Device / phone-based paging",       Y, Y, Y, Y, Y, Y],
    ],
  },
  {
    cat: "Call Parking",
    rows: [
      ["Static call parking",               _, Y, Y, Y, Y, Y],
      ["Parking on a button",               _, Y, Y, Y, Y, Y],
      ["Dynamic call park (orbit)",         _, Y, Y, Y, Y, Y],
    ],
  },
  {
    cat: "Call Disposition & Notation",
    rows: [
      ["Notes",                             Y, _, Y, Y, Y, Y],
      ["Nested reasons",                    Y, _, Y, Y, Y, Y],
    ],
  },
  {
    cat: "Text-to-Speech",
    rows: [
      ["Music on hold",                     Y, _, Y, Y, Y, Y],
      ["Voicemail greetings",               Y, _, Y, Y, Y, Y],
      ["Auto-attendants",                   Y, _, _, _, _, _],
      ["Queue announcements",               Y, _, _, _, _, Y],
      ["Messages to agents",                Y, _, _, _, _, Y],
    ],
  },
  {
    cat: "Speech Recognition",
    rows: [
      ["Auto-attendants (speech-to-text)",  Y, _, _, _, _, _],
    ],
  },
  {
    cat: "Phone & Device",
    rows: [
      ["Intercom / auto-answer",            Y, _, Y, Y, Y, Y],
      ["Hot desking",                       _, _, Y, Y, Y, Y],
      ["Multiple device management",        Y, _, Y, Y, Y, Y],
      ["Visual button builder",             Y, _, Y, Y, _, _],
    ],
  },
  {
    cat: "Call Recording",
    rows: [
      ["Always-on",                         Y, STAR, Y, Y, Y, Y],
      ["Device-based recording",            Y, _, Y, Y, Y, Y],
      ["Mid-call recording / redaction",    Y, _, Y, Y, Y, Y],
      ["Remote storage (AWS / Wasabi / SFTP / FTP)", Y, _, _, _, _, _],
      ["Domain-wide recording",             Y, _, _, _, _, _],
    ],
  },
  {
    cat: "Answering Rules",
    rows: [
      ["Ring timeout",                      Y, Y, Y, Y, Y, Y],
      ["Do Not Disturb",                    Y, Y, Y, Y, Y, Y],
      ["Call screening",                    Y, Y, Y, Y, Y, Y],
      ["Call forwarding (all states)",      Y, Y, Y, Y, Y, Y],
      ["Simultaneous ring",                 Y, Y, Y, Y, Y, Y],
      ["Sequential ringing",                Y, Y, Y, Y, Y, Y],
      ["Answer confirmation",               Y, Y, Y, Y, Y, Y],
    ],
  },
  {
    cat: "Personal Conference Bridge",
    rows: [
      ["Leader login & PIN",                _, _, Y, Y, _, _],
      ["Participant PIN",                   _, _, Y, Y, _, _],
      ["Require leader to start",           _, _, Y, Y, _, _],
      ["Begin / end times",                 _, _, Y, Y, _, _],
      ["Max participants",                  _, _, Y, Y, _, _],
      ["Save / announce participants",      _, _, Y, Y, _, _],
      ["Arrive / depart tones",             _, _, Y, Y, _, _],
    ],
  },
  {
    cat: "Voicemail",
    rows: [
      ["Voicemail-to-email",                Y, Y, Y, Y, Y, _],
      ["Voice distribution & copy",         Y, Y, Y, Y, Y, _],
      ["Transcription",                     _, _, _, Y, _, _],
    ],
  },
  {
    cat: "OneFAX",
    rows: [
      ["Fax-to-email",                      _, _, _, Y, _, _],
      ["Email-to-fax",                      _, _, _, Y, _, _],
      ["Fax portal",                        _, _, _, Y, _, _],
      ["Fax-to-fax (ATA)",                  _, _, _, Y, _, _],
    ],
  },
  {
    cat: "Calling Essentials",
    rows: [
      ["Call waiting",                      Y, Y, Y, Y, Y, Y],
      ["Operator forward",                  _, _, Y, Y, _, _],
      ["Presence",                          Y, Y, Y, Y, Y, Y],
      ["Time frames (personal & company)",  Y, _, Y, Y, Y, Y],
      ["Music on hold",                     Y, _, Y, Y, _, Y],
    ],
  },
  {
    cat: "Identity & Security",
    rows: [
      ["Single Sign-On (Google / Microsoft / Apple)", Y, Y, Y, Y, Y, Y],
      ["Multi-factor auth",                 Y, Y, Y, Y, Y, Y],
      ["Secure password requirements",      Y, Y, Y, Y, Y, Y],
      ["Forced password reset",             Y, Y, Y, Y, Y, Y],
      ["Email-based reset",                 Y, Y, Y, Y, Y, Y],
      ["reCAPTCHA",                         Y, Y, Y, Y, Y, Y],
      ["TLS + SRTP audio encryption",       Y, Y, Y, Y, Y, Y],
      ["Dictionary attack prevention",      Y, Y, Y, Y, Y, Y],
      ["Authorization codes",               Y, Y, Y, Y, Y, Y],
      ["Dial permissions",                  Y, Y, Y, Y, Y, Y],
      ["Class of service",                  Y, Y, Y, Y, Y, Y],
    ],
  },
  {
    cat: "Group Chat & Messaging",
    rows: [
      ["Group chat",                        Y, Y, Y, Y, Y, Y],
      ["SMS / MMS",                         _, _, ADD, Y, _, _],
    ],
  },
  {
    cat: "WebRTC / Progressive Web App",
    rows: [
      ["Video conferencing",                Y, _, Y, Y, Y, Y],
      ["Chat",                              Y, _, Y, Y, Y, Y],
      ["SMS",                               Y, _, ADD, Y, _, _],
    ],
  },
  {
    cat: "Softphones (iOS · Android · Windows · macOS)",
    rows: [
      ["SNAPmobile",                        Y, _, Y, Y, Y, Y],
      ["Microsoft Teams softphone",         ADD, _, ADD, Y, _, _],
    ],
  },
  {
    cat: "Meeting Spaces",
    rows: [
      ["Scheduling",                        _, _, _, Y, _, _],
      ["Personal meeting rooms",            _, _, _, Y, _, _],
      ["Webinars",                          _, _, _, Y, _, _],
      ["Active speaker",                    _, _, _, Y, _, _],
      ["Recording",                         _, _, _, Y, _, _],
      ["Screen share",                      _, _, _, Y, _, _],
      ["Public / private chat",             _, _, _, Y, _, _],
    ],
  },
  {
    cat: "Contact Center — Live Stats",
    rows: [
      ["Callers waiting",                   _, _, _, _, Y, Y],
      ["Avg wait time",                     _, _, _, _, Y, Y],
      ["Avg handling time",                 _, _, _, _, Y, Y],
      ["Abandon rate",                      _, _, _, _, Y, Y],
      ["Calls answered",                    _, _, _, _, Y, Y],
      ["Call volume",                       _, _, _, _, Y, Y],
    ],
  },
  {
    cat: "Contact Center — Reporting",
    rows: [
      ["Queue statistics",                  _, _, _, _, Y, Y],
      ["Agent statistics",                  _, _, _, _, Y, Y],
      ["Agent availability",                _, _, _, _, Y, Y],
      ["DNIS statistics",                   _, _, _, _, _, Y],
    ],
  },
  {
    cat: "Call Queue Routing",
    rows: [
      ["Round-robin (longest idle)",        _, _, _, _, Y, Y],
      ["Tiered round-robin",                _, _, _, _, Y, Y],
      ["Ring all",                          _, _, _, _, Y, Y],
      ["Linear",                            _, _, _, _, Y, Y],
      ["Linear cascade — initial ring",     _, _, _, _, Y, Y],
      ["Linear cascade — add after timeout", _, _, _, _, Y, Y],
      ["Call park",                         _, _, _, _, Y, Y],
      ["Forward if unavailable",            _, _, _, _, Y, Y],
      ["Forward if unanswered",             _, _, _, _, Y, Y],
      ["Call back",                         _, _, _, _, Y, Y],
      ["Interstitial audio announcements",  _, _, _, _, Y, Y],
    ],
  },
  {
    cat: "Call Queue Thresholds",
    rows: [
      ["Max expected wait time",            _, _, _, _, _, Y],
      ["Max queue length",                  _, _, _, _, _, Y],
      ["Queue ring timeout",                _, _, _, _, _, Y],
      ["Agent ring timeout",                _, _, _, _, _, Y],
    ],
  },
  {
    cat: "Agent Settings",
    rows: [
      ["Agent status (built-in & custom)",  _, _, _, _, Y, Y],
      ["Wrap-up time",                      _, _, _, _, Y, Y],
      ["Max simultaneous calls",            _, _, _, _, Y, Y],
      ["Forward if unavailable",            _, _, _, _, Y, Y],
      ["Queue priority for agent",          _, _, _, _, Y, Y],
      ["Request confirmation",              _, _, _, _, Y, Y],
      ["Auto-answer",                       _, _, _, _, Y, Y],
      ["Pick-up waiting calls",             _, _, _, _, Y, Y],
      ["Transfer waiting calls",            _, _, _, _, Y, Y],
      ["Prioritize waiting calls",          _, _, _, _, _, Y],
      ["Agent web phone (stats / controls / chat)", _, _, _, _, Y, Y],
    ],
  },
  {
    cat: "General Queue Settings",
    rows: [
      ["Call recording",                    _, _, _, _, Y, Y],
      ["Statistics",                        _, _, _, _, Y, _],
      ["Message to agent",                  _, _, _, _, Y, _],
      ["Require agents",                    _, _, _, _, _, Y],
      ["Require music on hold",             _, _, _, _, _, Y],
      ["Logout agent on missed call",       _, _, _, _, _, Y],
      ["Intro greetings",                   _, _, _, _, _, Y],
    ],
  },
  {
    cat: "SMS Queuing",
    rows: [
      ["Queues accept SMS conversations",   _, _, _, _, Y, Y],
      ["SMS queueing statistics",           _, _, _, _, _, Y],
    ],
  },
  {
    cat: "Real-Time Analytics",
    rows: [
      ["Real-time analytics dashboard",     _, _, _, _, _, Y],
      ["Custom wallboards for call centers", _, _, _, _, _, Y],
      ["Create / edit / share wallboards & KPIs", _, _, _, _, _, Y],
      ["Chart types (line, gauge, stat, grid, notes, iFrame)", _, _, _, _, _, Y],
    ],
  },
  {
    cat: "Company-Wide Reporting (Site Manager)",
    rows: [
      ["Peak active calls",                 Y, _, _, _, _, _],
      ["Call volume",                       Y, _, _, _, _, _],
      ["Total minutes",                     Y, _, _, _, _, _],
      ["Users & applications (qtys)",       Y, _, _, _, _, _],
      ["Usage stats (voice / SMS)",         Y, _, _, _, _, _],
      ["Call history with recording",       Y, _, _, _, _, _],
      ["Cradle-to-grave reporting",         Y, _, _, _, _, _],
    ],
  },
  {
    cat: "Sites",
    rows: [
      ["Geographic segmentation",           Y, _, _, _, _, _],
      ["Site Manager scope (users / devices / queues / numbers)", Y, _, _, _, _, _],
      ["Custom caller ID per site",         Y, _, _, _, _, _],
      ["Custom 911 per site",               Y, _, _, _, _, _],
    ],
  },
];
