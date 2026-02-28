(function () {
  const api_url = "http://localhost:3000/api/chat";
  const scriptTag = document.currentScript;
  const ownerId = scriptTag.getAttribute("data-owner-id");

  if (!ownerId) {
    console.error("Owner ID is required for the chatbot to function.");
    return;
  }

  const button = document.createElement("div");
  button.innerHTML = "Chat with us!";

  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    zIndex: 1000,
  });
  document.body.appendChild(button);

  const chatWindow = document.createElement("div");
  Object.assign(chatWindow.style, {
    position: "fixed",
    bottom: "70px",
    right: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    display: "none",
    flexDirection: "column",
    zIndex: 1000,
  });

  chatWindow.innerHTML = `
  <div style="
    background: #000;
    color: #fff;
    padding: 12px 14px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  ">
    <span>Customer Support</span>
    <span id="chat-close" style="cursor: pointer; font-size: 16px;">&times;</span>
  </div>

  <div id="chat-messages" style="
    flex: 1;
    padding: 12px;
    overflow-y: auto;
    background: #f9fafb;
    display: flex;
    flex-direction: column;
  "></div>


  <div>
    <input id="chat-input" type="text" placeholder="Type your message..."/>
    <button id="chat-send">Send</button>
  </div>

`;
  document.body.appendChild(chatWindow);

  button.onclick = () => {
    chatWindow.style.display =
      chatWindow.style.display === "none" ? "flex" : "none";
  };

  document.querySelector("#chat-close").onclick = () => {
    chatWindow.style.display = "none";
  };

  const input = document.querySelector("#chat-input");
  const sendButton = document.querySelector("#chat-send");
  const messagesContainer = document.querySelector("#chat-messages");

  function addMessage(text, from) {
    const bubble = document.createElement("div");
    bubble.innerHTML = text;
    Object.assign(bubble.style, {
      maxWidth: "78%",
      padding: "8px 12px",
      borderRadius: "14px",
      fontSize: "13px",
      lineHeight: "1.4",
      marginBottom: "8px",
      alignSelf: from === "user" ? "flex-end" : "flex-start",
      background: from === "user" ? "#000" : "#e5e7eb",
      color: from === "user" ? "#fff" : "#111",
      borderTopRightRadius: from === "user" ? "4px" : "14px",
      borderTopLeftRadius: from === "user" ? "14px" : "4px",
    });
    messagesContainer.appendChild(bubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  sendButton.onclick = async () => {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const typingIndicator = document.createElement("div");
    typingIndicator.innerHTML = "Support is typing...";
    Object.assign(typingIndicator.style, {
      fontSize: "12px",
      color: "#555",
      marginBottom: "8px",
      fontStyle: "italic",
    });
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    try {
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ownerId,
          message: text,
        }),
      });
      const data = await response.json();
      messagesContainer.removeChild(typingIndicator);
      addMessage(data.response, "Something went wrong", "ai");
    } catch (error) {
      messagesContainer.removeChild(typingIndicator);
      addMessage("Something went wrong. Please try again later.", "ai");
    }
  };
})();
