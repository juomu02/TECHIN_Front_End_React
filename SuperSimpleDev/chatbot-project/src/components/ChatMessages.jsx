import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage.jsx";
import "./ChatMessages.css";

function useAutoScroll(dependencies) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);
  return chatMessagesRef;
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages);

  if (chatMessages.length === 0) {
    return (
      <div className="chat-messages-container" ref={chatMessagesRef}>
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message unsing the textbow
          below.
        </p>
      </div>
    );
  } else
    return (
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              messageTime={chatMessage.messageTime}
              key={chatMessage.id}
            />
          );
        })}
      </div>
    );
}

export default ChatMessages;
