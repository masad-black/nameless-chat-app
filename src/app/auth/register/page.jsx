"use client";

import { useState, useActionState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  MessageCircle,
  Zap,
  Users,
  Share2,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { registerNewUser } from "@/app/actions/auth/auth.js";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, pending] = useActionState(
    async (_prevState, formData) => {
      return await registerNewUser(formData);
    },
    undefined
  );
  const router = useRouter(null);

  // after the new user created redirect to login page
  useEffect(() => {
    if (state?.response) {
      router.push("/auth/login");
    }
  }, [state]);

  // console.log("state: ", state);
  // console.log("action: ", formAction);
  // console.log("pending: ", pending);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Blue Section */}
      <div className="flex-1 bg-blue-600 flex flex-col justify-center items-center text-white px-12">
        <div className="max-w-md text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <MessageCircle size={48} className="text-white" />
              <MessageCircle
                size={32}
                className="absolute -top-2 -right-2 text-white opacity-80"
              />
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-4xl font-bold mb-4">ChatFlow</h1>

          {/* Tagline */}
          <p className="text-xl mb-12 text-blue-100">
            Connect with friends and colleagues in real-time conversations
          </p>

          {/* Features */}
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Zap size={18} />
                <span className="text-blue-100">Instant messaging</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Users size={18} />
                <span className="text-blue-100">Group conversations</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Share2 size={18} />
                <span className="text-blue-100">Share stories & updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="flex-1 bg-gray-50 flex flex-col justify-center items-center px-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Create New Account
            </h2>
            <p className="text-gray-600">
              Join thousands of users already chatting
            </p>
          </div>

          {/* Form */}
          <form action={formAction} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  required
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              {state?.errors?.username && (
                <p className="text-red-500 text-sm">
                  {state.errors.username[0]}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              {state?.errors?.email && (
                <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {state?.errors?.password &&
                state?.errors?.password?.map((err, idx) => (
                  <p className="text-red-500 text-sm gap-y-0.5">
                    {state.errors.password[idx]}
                  </p>
                ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => signIn()} // move to next-auth login page.
                className="text-blue-600 hover:underline font-medium"
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
