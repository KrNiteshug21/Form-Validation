import { useState } from "react";
import { FaEyeSlash, FaEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [signupMail, setSignupMail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [signupPwdType, setsignupPwdType] = useState("password");
  return (
    <div className="signupContainer formContainer">
      <h2>Signup</h2>
      <form
        className="signinForm"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(signupMail, signupPwd, confirmPwd);
          if (signupPwd !== confirmPwd) alert("Both password must be same!");
          setSignupMail("");
          setSignupPwd("");
          setConfirmPwd("");
        }}
      >
        <label htmlFor="mail">Email:</label>
        <input
          type="text"
          value={signupMail}
          name="mail"
          onChange={(e) => setSignupMail(e.target.value)}
          placeholder="Email..."
          required
        />
        <label id="password">Password:</label>
        <input
          type={signupPwdType}
          value={signupPwd}
          name="password"
          onChange={(e) => setSignupPwd(e.target.value)}
          placeholder="Password..."
          required
        />
        <label id="confirm">Confirm Password:</label>
        <input
          type={signupPwdType}
          value={confirmPwd}
          name="confirm"
          onChange={(e) => setConfirmPwd(e.target.value)}
          placeholder="Confirm Password..."
          required
        />
        {signupPwdType === "text" ? (
          <FaEye
            className="eyeIcon2"
            onClick={() => setsignupPwdType("password")}
          />
        ) : (
          <FaEyeSlash
            className="eyeIcon2"
            onClick={() => setsignupPwdType("text")}
          />
        )}
        <input className="signupBtn" type="submit" value="Signup" />
      </form>

      <p>Or</p>
      <a href="#" className="loginWithFacebook">
        <FaFacebook /> Login with Facebook
      </a>
      <a href="#" className="loginWithGoogle">
        <FcGoogle />
        Login with Google
      </a>
    </div>
  );
};

export default Signup;
