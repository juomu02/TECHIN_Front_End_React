import RobotProfilePicture from "../assets/robot.png";
import UserProfilePicture from "../assets/profile-1.jpg";
import "./ChatMessage.css";

function ChatMessage({ message, sender, messageTime }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          src={RobotProfilePicture}
          className="chat-message-profile"
          alt=""
        />
      )}
      <div className="chat-message-text">
        {message}
        {messageTime && <div className="timestamp">{messageTime}</div>}
      </div>

      {sender === "user" && (
        <img
          src={UserProfilePicture}
          className="chat-message-profile user-image"
          alt=""
        />
      )}
    </div>
  );
}

export default ChatMessage;
