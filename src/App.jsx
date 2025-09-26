import { useState } from "react";

import Login from "./pages/Login";

function App() {
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

  let name = "ali";
  return (
    <>
      <Login
      name={name}
        email={email}
        setEmail={setEmail}
        pwd={pwd}
        setPwd={setPwd}
        handleSubmit={handleSubmit}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </>
  );
}

export default App;
