import dayjs from "dayjs";
import { useState } from "react";
import { Chatbot } from "supersimpledev";
import LoadingSpinner from "../assets/loading-spinner.gif";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText === "") return;

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        messageTime: dayjs().format("HH:mm:ssa"),
        id: crypto.randomUUID(),
      },
    ];

    setInputText("");

    setChatMessages([
      ...newChatMessages,
      {
        message: (
          <img className="loading-spinner" src={LoadingSpinner} alt="" />
        ),
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(inputText);
    setIsLoading(false);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        messageTime: dayjs().format("HH:mm:ssa"),
        id: crypto.randomUUID(),
      },
    ]);
  }

  function clearInputText() {
    setInputText("");
  }

  function evaluateKey(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      clearInputText();
    }
  }

  function handleClearChat() {
    localStorage.removeItem('messages');
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={evaluateKey}
        className="chat-input"
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
      <button className="clear-button" onClick={handleClearChat}>Clear</button>
    </div>
  );
}

export default ChatInput;
