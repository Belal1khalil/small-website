import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { object, string } from "yup";

export default function Login() {
  const passwordRegex = /^.{6,}$/;
  async function handleLogin(values) {
    try {
      const options = {
        url: "https://fakestoreapi.com/auth/login",
        method: "POST",
        data: values,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data && data.token) {
        toast.success("Login successful!");
        // Optionally handle token storage or redirect here
      } else {
        toast.error("Username or password incorrect");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Failed to log in. Please try again.");
    }
  }
  const validationSchema = object({
    username: string()
      .required("Name is required")
      .min(3, "Name must be at least 3 char")
      .max(25, "Name can not be more than 25 char"),

    password: string()
      .required("Password is required")
      .matches(passwordRegex, "Password must be at least 6 characters"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });
  return (
    <>
      <form
        className=" max-w-md mx-auto  p-8 rounded-lg shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          <i className="fa-solid fa-user text-2xl text-primary-800 "></i>
          Login
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          />
        </div>

        {/* Terms */}
        <div className="flex items-center mb-6">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-primary-600 hover:underline">
              terms and conditions
            </a>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary-800 hover:bg-primary-900 text-white font-semibold py-2 rounded transition duration-300"
        >
          Login
        </button>

        {/* Login link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-primary-600 hover:underline ml-1">
            SignUp
          </a>
        </p>
      </form>
    </>
  );
}
