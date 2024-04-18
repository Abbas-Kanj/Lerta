import React, { useState } from "react";

import { sendRequest } from "../../../request-method/request";

const Signup = ({ setIsLogin }) => {
  const [user, setUserData] = useState({
    name: "",
    username: "",
    password: "",
  });

  return (
    <div className="py-[40px] px-[60px] bg-purple-950/20 flex flex-col gap-[20px] items-center rounded-md md:min-w-[400px]">
      <h1 className="font-bold text-xl">Signup</h1>
      <input
        type="text"
        placeholder="name"
        className="input-style w-full"
        onChange={(e) => setUserData((u) => ({ ...u, name: e.target.value }))}
      />
      <input
        type="text"
        placeholder="username"
        className="input-style w-full"
        onChange={(e) =>
          setUserData((u) => ({ ...u, username: e.target.value }))
        }
      />
      <input
        type="password"
        placeholder="password"
        className="input-style w-full"
        onChange={(e) =>
          setUserData((u) => ({ ...u, password: e.target.value }))
        }
      />
      <button type="button" className="btn-style bg-primary">
        Signup
      </button>
      <small>
        Already have an account?{" "}
        <span
          className="text-purple-400 font-bold hover:opacity-80 cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Login
        </span>
      </small>
    </div>
  );
};

export default Signup;
