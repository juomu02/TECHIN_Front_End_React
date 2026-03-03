import { useState } from "react";

function Inputs() {
  const [showPassword, setShowPassword] = useState(true);

  function toggleShowPassword() {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  }

  return (
    <>
      <div>
        <input type="email" className="input" placeholder="Email" />
      </div>
      <div>
        <input
          type={showPassword ? "password" : "text"}
          className="input"
          placeholder="Password"
        />
        <button className="button" onClick={toggleShowPassword}>
          {showPassword ? "Show" : "Hide"}
        </button>
      </div>
    </>
  );
}

export default Inputs;