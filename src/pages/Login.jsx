import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userEmail = "ali@gmail.com";
    let userPwd = "123";

    if (email == userEmail && pwd == userPwd) {
      setIsLogin(true);
      console.log(email, pwd);
    } else {
      alert("not Valid email and password");
    }
  };
  return (
    <div>
      {isLogin == true ? (
        <div>
          <h2>welcome to ali</h2>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            padding: "80px",
            gap: "30px",
            border: "1px solid #a18cd1",
            borderRadius: "10px",
            margin: "90px auto",
            width: "400px",
            height: "400px",
            backgroundImage:
              "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#815cd5ff" }}>
            Login Form
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              style={{
                padding: "10px",
                border: "1px solid #9177ceff",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Enter the Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              style={{
                padding: "10px",
                border: "1px solid #9177ceff",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Enter the Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <button
              style={{
                width: "80px",
                margin: "0 auto",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundImage:
                  "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
              }}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
