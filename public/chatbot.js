(function () {
  const api_url = "http://localhost:3000/api/chat";
  const scriptTag = document.currentScript;
  const ownerId = scriptTag.getAttribute("data-owner-id");

  if (!ownerId) {
    console.error("Owner ID is required for the chatbot to function.");
    return;
  }

  /* ---------------- Base Styles ---------------- */

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes typingDots {
      0% { opacity: 0.3; }
      50% { opacity: 1; }
      100% { opacity: 0.3; }
    }

    .chat-scroll::-webkit-scrollbar {
      width: 6px;
    }
    .chat-scroll::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.18);
      border-radius: 10px;
    }
  `;
  document.head.appendChild(style);

  /* ---------------- Floating Button ---------------- */

  const button = document.createElement("div");
  button.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
      </svg>
      <span>Chat</span>
    </div>
  `;

  Object.assign(button.style, {
    position: "fixed",
    bottom: "32px",
    right: "32px",
    padding: "12px 22px",
    background: "#000",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "999px",
    cursor: "pointer",
    boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
    zIndex: 9999,
    transition: "all 0.2s ease",
  });

  button.onmouseenter = () => {
    button.style.transform = "translateY(-2px)";
    button.style.boxShadow = "0 16px 40px rgba(0,0,0,0.35)";
  };

  button.onmouseleave = () => {
    button.style.transform = "translateY(0)";
  };

  document.body.appendChild(button);

  /* ---------------- Chat Window ---------------- */

  const chatWindow = document.createElement("div");

  Object.assign(chatWindow.style, {
    position: "fixed",
    bottom: "100px",
    right: "32px",
    width: "380px",
    height: "540px",
    background: "#ffffff",
    borderRadius: "22px",
    display: "none",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 50px 120px rgba(0,0,0,0.2)",
    fontFamily: "Inter, system-ui, sans-serif",
    zIndex: 9999,
  });

  chatWindow.innerHTML = `
    <div style="
      background:#000;
      color:#fff;
      padding:18px 20px;
      font-weight:600;
      font-size:15px;
      display:flex;
      justify-content:space-between;
      align-items:center;
    ">
      <div style="display:flex;align-items:center;gap:10px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
          <path d="M21 18a3 3 0 0 1-3 3h-2"/>
          <path d="M3 18a3 3 0 0 0 3 3h2"/>
        </svg>
        <span>Customer Support</span>
      </div>
      <span id="chat-close" style="cursor:pointer;font-size:18px;opacity:0.7;">×</span>
    </div>

    <div id="chat-messages" class="chat-scroll" style="
      flex:1;
      padding:24px;
      overflow-y:auto;
      background:#f7f7f7;
      display:flex;
      flex-direction:column;
    "></div>

    <div style="
      padding:18px;
      border-top:1px solid #f0f0f0;
      display:flex;
      gap:10px;
      background:#fff;
    ">
      <input id="chat-input" type="text" placeholder="Type your message..."
        style="
          flex:1;
          padding:12px 16px;
          border-radius:16px;
          border:1px solid #eaeaea;
          outline:none;
          font-size:13px;
          background:#fafafa;
        "
      />
      <button id="chat-send"
        style="
          display:flex;
          align-items:center;
          justify-content:center;
          width:46px;
          height:46px;
          background:#000;
          color:#fff;
          border:none;
          border-radius:14px;
          cursor:pointer;
        "
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 2L11 13"/>
          <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(chatWindow);

  button.onclick = () => {
    chatWindow.style.display =
      chatWindow.style.display === "none" ? "flex" : "none";
  };

  document.getElementById("chat-close").onclick = () => {
    chatWindow.style.display = "none";
  };

  const input = document.getElementById("chat-input");
  const sendButton = document.getElementById("chat-send");
  const messagesContainer = document.getElementById("chat-messages");

  /* ---------------- Messages ---------------- */

  function addMessage(text, from) {
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.gap = "10px";
    wrapper.style.marginBottom = "16px";
    wrapper.style.alignSelf = from === "user" ? "flex-end" : "flex-start";

    if (from === "ai") {
      const avatar = document.createElement("div");
      avatar.innerHTML = `
        <div style="
          width:30px;
          height:30px;
          border-radius:50%;
          background:#000;
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8">
            <circle cx="12" cy="12" r="9"/>
            <path d="M9 10h.01M15 10h.01M9 15h6"/>
          </svg>
        </div>
      `;
      wrapper.appendChild(avatar);
    }

    const bubble = document.createElement("div");
    bubble.innerText = text;

    Object.assign(bubble.style, {
      maxWidth: "260px",
      padding: "14px 18px",
      borderRadius: "20px",
      fontSize: "13px",
      lineHeight: "1.6",
      background: from === "user" ? "#000" : "#fff",
      color: from === "user" ? "#fff" : "#111",
      border: from === "user" ? "none" : "1px solid #ececec",
      boxShadow:
        from === "user"
          ? "0 8px 24px rgba(0,0,0,0.25)"
          : "0 8px 24px rgba(0,0,0,0.05)",
      animation: "fadeInUp 0.2s ease",
    });

    wrapper.appendChild(bubble);
    messagesContainer.appendChild(wrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function showTyping() {
    const typing = document.createElement("div");
    typing.innerHTML = `
      <span style="animation:typingDots 1s infinite;">•</span>
      <span style="animation:typingDots 1s infinite 0.2s;">•</span>
      <span style="animation:typingDots 1s infinite 0.4s;">•</span>
    `;
    Object.assign(typing.style, {
      fontSize: "18px",
      color: "#000",
      marginBottom: "16px",
    });
    messagesContainer.appendChild(typing);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    typing.id = "typing-indicator";
  }

  function removeTyping() {
    const el = document.getElementById("typing-indicator");
    if (el) el.remove();
  }

  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";
    sendButton.disabled = true;
    showTyping();

    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ownerId, message: text }),
      });

      const data = await response.json();
      removeTyping();
      addMessage(data.response || data, "ai");
    } catch {
      removeTyping();
      addMessage("Something went wrong. Please try again.", "ai");
    }

    sendButton.disabled = false;
  }

  sendButton.onclick = sendMessage;
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
})();
