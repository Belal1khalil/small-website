import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

export default function Signup() {
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  async function SignUp(values) {
    try {
      const options = {
        url: "https://fakestoreapi.com/users",
        method: "POST",
        data: values,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data, status } = await axios.request(options);
      if (status === 200 || status === 201) {
        toast.success("User created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error("Something went wrong");
      }

      console.log(data);
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  }
  const validationSchema = object({
    username: string()
      .required("Name is required")
      .min(3, "Name must be at least 3 char")
      .max(25, "Name can not be more than 25 char"),
    email: string().required("Email is required").email("Email is invalid"),
    password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: SignUp,
  });

  return (
    <>
      <form
        className=" max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Signup
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

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
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
          Signup
        </button>

        {/* Login link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?
          <a href="/login" className="text-primary-600 hover:underline ml-1">
            Login
          </a>
        </p>
      </form>
    </>
  );
}
