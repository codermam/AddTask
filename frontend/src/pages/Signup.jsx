import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { signupUser } from "../services/authService";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response =
      await signupUser(formData);

    alert(response.data.message);

    console.log(response.data);
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Signup failed"
    );
  }
};

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/10 via-base-200 to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="card bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body p-8">

            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold">
                Create Account
              </h1>
              <p className="text-base-content/70 mt-2">
                Sign up to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Full Name
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <User size={18} className="text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    className="grow"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Email
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <Mail size={18} className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="grow"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Password
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <Lock size={18} className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="grow"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </label>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Confirm Password
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <Lock size={18} className="text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="••••••••"
                    className="grow"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <button
                className="btn btn-primary w-full mt-2 text-lg"
                type="submit"
              >
                Create Account
              </button>

            </form>

            <div className="divider my-6">OR</div>

            <button className="btn btn-outline w-full">
              Continue with Google
            </button>

            <p className="text-center mt-6 text-sm">
              Already have an account?
              <Link
                to="/"
                className="ml-1 font-semibold text-primary hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;