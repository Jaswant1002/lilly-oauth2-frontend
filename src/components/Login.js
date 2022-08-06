import Github from "../img/github.png";

const Login = () => {
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Login to Git</h1>
      <div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
      </div>
    </div>
  );
};

export default Login;
