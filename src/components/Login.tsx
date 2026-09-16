import { useState } from "react";

type LoginProps = {
  onLogin: () => void;
};

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === "standard_user" &&
      password === "secret_sauce"
    ) {
      onLogin();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f0faf7] pt-10">

      <h1 className="text-center text-4xl font-normal">
        flex justify
      </h1>

      <div className="mx-auto mt-12 w-[900px] max-w-[90%] overflow-hidden rounded-lg bg-white">

        {/* Login Form */}
        <div className="mx-auto w-[315px] p-10">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-5 block h-11 w-full border-0 border-b border-gray-300 px-2 text-base outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-5 block h-11 w-full border-0 border-b border-gray-300 px-2 text-base outline-none"
          />

          <button
            onClick={handleLogin}
            className="mt-5 h-[54px] w-full rounded bg-[#3ddc97] text-base"
          >
            Login
          </button>

        </div>

        {/* Information Section */}
        <div className="flex justify-between bg-[#102522] px-8 py-10 text-white">

          <div>
            <h3 className="mb-6 text-[17px] font-semibold">
              Accepted usernames are:
            </h3>

            <p className="my-2 font-mono">standard_user</p>
            <p className="my-2 font-mono">locked_out_user</p>
            <p className="my-2 font-mono">problem_user</p>
            <p className="my-2 font-mono">performance_glitch_user</p>
            <p className="my-2 font-mono">error_user</p>
            <p className="my-2 font-mono">visual_user</p>
          </div>

          <div>
            <h3 className="mb-6 text-[17px] font-semibold">
              Password for all users:
            </h3>

            <p className="my-2 font-mono">
              secret_sauce
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;