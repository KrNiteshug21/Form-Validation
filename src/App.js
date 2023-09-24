import { useEffect, useState, useRef } from "react";
import {
  FaEyeSlash,
  FaEye,
  // FaFacebook,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function App() {
  const userRef = useRef();
  const [user, setUser] = useState("");
  const [validuser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validpwd, setValidPwd] = useState(false);

  const [confirmPwd, setConfirmPwd] = useState("");
  const [isMatch, setIsMatch] = useState(false);

  const [pwdType, setPwdType] = useState("password");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
  }, [user, validuser]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setIsMatch(pwd === confirmPwd && pwd?.length);
  }, [confirmPwd, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, pwd, confirmPwd);
    setUser("");
    setPwd("");
    setConfirmPwd("");
  };

  const handleDisable = () => {
    if (!validuser | !validpwd || !isMatch) return true;
    else return false;
  };

  return (
    <main className="App">
      <section className="formContainer setWidth">
        <h2 style={{ textAlign: "center" }}>Signup</h2>
        <form className="signinForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">Username:</label>
            <span>{validuser && <FaCheck />}</span>
            <span>{!validuser && userFocus && user && <FaTimes />}</span>
          </div>
          <input
            type="text"
            value={user}
            ref={userRef}
            name="user"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username..."
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            required
          />
          {!validuser && userFocus && user && (
            <p>
              <AiOutlineInfoCircle /> 4 to 24 character.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          )}
          <div>
            <label id="password">Password:</label>
            <span>{validpwd && <FaCheck />}</span>
            <span>{!validpwd && pwd && <FaTimes />}</span>
          </div>
          <input
            type={pwdType}
            value={pwd}
            name="password"
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Password..."
            required
          />
          {!validpwd && pwd && (
            <p>
              {" "}
              <AiOutlineInfoCircle /> Password must 8 to 24 characters in length
              <br />
              Atleat one uppercase letter.
              <br /> Atleat one lowercase letter
              <br /> Atleat one digit.
              <br /> Atleat one special characters: !@#$% allowed
            </p>
          )}
          <div>
            <label id="confirm">Confirm Password:</label>
            <span>{isMatch ? <FaCheck /> : ""}</span>
            <span>{!isMatch && confirmPwd ? <FaTimes /> : ""}</span>
          </div>
          <input
            type={pwdType}
            value={confirmPwd}
            name="confirm"
            onChange={(e) => setConfirmPwd(e.target.value)}
            placeholder="Confirm Password..."
            required
          />
          {(!validpwd || !validuser || !isMatch) && confirmPwd && (
            <p>
              <AiOutlineInfoCircle /> Both password should match.
            </p>
          )}
          {pwdType === "text" ? (
            <FaEye
              className="eyeIcon2"
              onClick={() => setPwdType("password")}
            />
          ) : (
            <FaEyeSlash
              className="eyeIcon2"
              onClick={() => setPwdType("text")}
            />
          )}
          <button
            disabled={() => handleDisable}
            className="signupBtn"
            type="submit"
          >
            Signup
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
