import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        onLogin(data.user);
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-[#dedde0] text-black rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-1 font-semibold ">
            Username
          </label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1 font-semibold">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// const API_BASE = import.meta.env.VITE_API_BASE_URL;

// const LoginForm = ({ onLogin }) => {
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Call your backend login API
//     try {
//       const res = await fetch(`${API_BASE}/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         // Store token if needed
//         localStorage.setItem("token", data.token);
//         onLogin(data.user);
//       } else {
//         alert(data.msg || "Login failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <Card className="max-w-sm mx-auto mt-10 p-6">
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="username">Username</Label>
//             <Input
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               name="password"
//               type="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <Button type="submit" className="w-full">
//             Log In
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default LoginForm;
