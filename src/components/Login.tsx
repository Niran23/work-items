import { useState } from "react";

type LoginProps = {
  setPage: (page: string) => void;
};

function Login({ setPage }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      username === "standard_user" &&
      password === "secret_sauce"
    ) {
      setError("");
      setPage("products");
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <div className="min-h-screen bg-[#f0faf7] flex flex-col items-center pt-12">

      {/* Logo */}
      <h1 className="text-4xl font-normal mb-12">
        swag labs
      </h1>

      {/* Login Card */}
      <div className="w-[900px] max-w-[90%] bg-white rounded-lg overflow-hidden">

        {/* Login Form */}
        <div className="flex flex-col items-center py-14">

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-[250px] border-b border-gray-300 py-3 mb-6 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[250px] border-b border-gray-300 py-3 mb-6 outline-none"
          />

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm mb-5 text-center">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-[250px] bg-[#3ddc97] py-4 rounded font-medium cursor-pointer hover:bg-[#32c985]"
          >
            Login
          </button>

        </div>

        {/* Information Section */}
        <div className="bg-[#092b26] text-white p-8 flex justify-between">

          {/* Usernames */}
          <div>
            <h2 className="font-bold mb-6">
              Accepted usernames are:
            </h2>

            <p className="mb-3">standard_user</p>
            <p className="mb-3">locked_out_user</p>
            <p className="mb-3">problem_user</p>
            <p className="mb-3">
              performance_glitch_user
            </p>
            <p className="mb-3">error_user</p>
            <p>visual_user</p>
          </div>

          {/* Password */}
          <div>
            <h2 className="font-bold mb-6">
              Password for all users:
            </h2>

            <p>secret_sauce</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;