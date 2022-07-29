import { Lock, Person } from "@mui/icons-material";
import "./style.css";
const Login = () => {
  return (
    <>
      <div id="bg"></div>
      <form>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "50px",
          }}>
          Login
        </h1>
        <div className="form-field">
          <Person
            style={{
              margin: "5px",
            }}
          />
          <input type="email" placeholder="Email / Username" required />
        </div>

        <div className="form-field">
          <Lock
            style={{
              margin: "5px",
            }}
          />
          <input type="password" placeholder="Password" required />
        </div>

        <div className="form-btn">
          <button className="btn" type="submit">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
