import React from "react";
import { LogIn, Cloud } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {
  let { register, handleSubmit, onLoginSubmit, errors, navigate } = useAuth();

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-400 font-sans flex flex-col justify-between items-center p-6 relative overflow-hidden">
      {/* Decorative smooth ambient background mesh graphic */}
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-500 to-transparent blur-2xl"></div>

      {/* Main Spacer for centering card vertically */}
      <div className="flex-1 flex items-center justify-center w-full z-10">
        {/* Sign In Center Card Box */}
        <div className="w-full max-w-110 bg-[#111218] border border-gray-800/40 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/50">
          {/* Logo Branding */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-11 h-11 bg-[#4f3cc9] rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-600/20">
              {/* Centralized Node Symbol */}
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight mb-1">
              Synthetix AI
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              Sign in to your workspace
            </p>
          </div>

          {/* Social Platforms Row */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#171923] border border-gray-800/60 hover:bg-[#1f2231] text-gray-300 rounded-lg py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              <Cloud size={14} className="text-gray-400" />
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-[#171923] border border-gray-800/60 hover:bg-[#1f2231] text-gray-300 rounded-lg py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              {/* <Github size={14} className="text-gray-400" /> */}
              Github
            </button>
          </div>

          {/* Text Flow Indicator Line */}
          <div className="relative my-6 text-center">
            <span className="bg-[#111218] px-3 text-[10px] font-medium text-gray-600 tracking-wide relative z-10">
              or continue with email
            </span>
            <div className="absolute w-full h-px bg-gray-900 top-1/2 left-0 transform -translate-y-1/2"></div>
          </div>

          {/* Auth Interactive Fields */}
          <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address format",
                  },
                })}
                className={`w-full bg-[#0a0b10] border ${errors.email ? "border-red-500/50" : "border-gray-800/70"} focus:border-indigo-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-gray-700 transition-colors`}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Form Entry */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
                className={`w-full bg-[#0a0b10] border ${errors.password ? "border-red-500/50" : "border-gray-800/70"} focus:border-indigo-500 focus:outline-none rounded-lg px-4 py-3 text-sm text-white placeholder-gray-700 transition-colors`}
              />
              {errors.password && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Keep Signed In State */}
            <div className="pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  {...register("staySignedIn")}
                  className="rounded bg-[#0a0b10] border-gray-800 text-indigo-600 focus:ring-0 focus:ring-offset-0 accent-indigo-500 w-3.5 h-3.5"
                />
                <span className="text-xs text-gray-500 font-medium">
                  Stay signed in
                </span>
              </label>
            </div>

            {/* Form Confirmation Trigger */}
            <button
              type="submit"
              className="w-full bg-[#634df2] hover:bg-[#523de0] text-white font-medium rounded-lg py-3 text-sm flex items-center justify-center gap-2 transition-colors mt-2 shadow-lg shadow-indigo-600/10"
            >
              Sign In <LogIn size={15} />
            </button>
          </form>

          {/* Fallback Nav Anchor */}
          <p className="text-xs text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-white font-medium hover:underline tracking-wide cursor-pointer"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>

      {/* Footer Branding Layer */}
      <footer className="w-full text-center text-[10px] text-gray-600 space-y-1.5 z-10 pt-4">
        <div>© 2024 Synthetix AI. Enterprise Intelligence Platforms.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
