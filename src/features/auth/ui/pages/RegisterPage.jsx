import React from "react";
import { User, Mail, Lock, ShieldCheck } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {
  let { register, handleSubmit, onRegisterSubmit, errors, navigate } =
    useAuth();

  return (
    <div className="min-h-screen bg-[#0d0e12] text-gray-300 font-sans flex flex-col justify-between">
      {/* Main Splitscreen Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side Banner */}
        <div className="w-full md:w-[42%] bg-linear-to-br from-[#0c1020] via-[#091833] to-[#0d0e12] p-8 md:p-16 flex flex-col justify-between relative overflow-hidden border-r border-gray-800/30">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent blur-3xl"></div>

          <div className="z-10">
            <span className="text-white font-semibold text-lg tracking-wide">
              Synthetix AI
            </span>
          </div>

          <div className="my-auto pt-16 pb-12 z-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
              <span className="text-sm">✦</span> NEXT-GEN INTELLIGENCE
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Accelerate your team's intelligence.
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
              Connect your enterprise data to our specialized AI models and
              unlock unparalleled strategic insights in seconds.
            </p>
          </div>

          <div className="flex gap-12 z-10 border-t border-gray-800/50 pt-6">
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">
                99.9%
              </div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                Uptime SLA
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">
                ISO
              </div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                27001 Certified
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-[58%] bg-[#090a0f] p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                Create your account
              </h2>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-5"
            >
              {/* Full Name Field */}
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className={`w-full bg-[#131520] border ${errors.fullName ? "border-red-500/50" : "border-gray-800/80"} focus:border-indigo-500 focus:outline-none rounded-lg pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 transition-colors`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Mail size={16} />
                  </div>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full bg-[#131520] border ${errors.email ? "border-red-500/50" : "border-gray-800/80"} focus:border-indigo-500 focus:outline-none rounded-lg pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 transition-colors`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className={`w-full bg-[#131520] border ${errors.password ? "border-red-500/50" : "border-gray-800/80"} focus:border-indigo-500 focus:outline-none rounded-lg pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 transition-colors`}
                  />
                </div>
                {errors.password && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.password.message}
                  </p>
                )}

                {/* Password Strength Indicator Meter */}
                <div className="mt-3">
                  <div className="flex h-1 gap-1">
                    <div className="w-1/4 bg-indigo-500 rounded-sm"></div>
                    <div className="w-1/4 bg-indigo-500 rounded-sm"></div>
                    <div className="w-1/4 bg-indigo-500 rounded-sm"></div>
                    <div className="w-1/4 bg-gray-800 rounded-sm"></div>
                  </div>
                  <span className="text-[10px] text-indigo-400 font-medium mt-1 inline-block">
                    Strong password
                  </span>
                </div>
              </div>

              {/* Checkbox Term Links */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    {...register("agreeTerms", {
                      required: "You must agree to the terms",
                    })}
                    className="mt-0.5 rounded bg-[#131520] border-gray-800 text-indigo-600 focus:ring-0 focus:ring-offset-0 accent-indigo-500"
                  />
                  <span className="text-xs text-gray-400 leading-normal">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-gray-300 underline hover:text-white transition-colors"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-gray-300 underline hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.agreeTerms.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#b19ffb] hover:bg-[#a08df0] text-black font-semibold rounded-lg py-3 text-sm transition-colors mt-2 shadow-lg shadow-indigo-500/10"
              >
                Create Account
              </button>
            </form>

            {/* Social Oauth Section */}
            <div className="relative my-6 text-center">
              <span className="bg-[#090a0f] px-3 text-[10px] uppercase font-semibold text-gray-600 tracking-widest relative z-10">
                Or continue with
              </span>
              <div className="absolute w-full h-px bg-gray-900 top-1/2 left-0 transform -translate-y-1/2"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#0d0e15] border border-gray-800/80 hover:bg-[#131520] text-gray-300 rounded-lg py-2.5 text-xs font-medium transition-colors">
                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#0d0e15] border border-gray-800/80 hover:bg-[#131520] text-gray-300 rounded-lg py-2.5 text-xs font-medium transition-colors">
                <ShieldCheck size={14} className="text-indigo-400" />
                SSO
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-8">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/")}
                className="text-white font-medium hover:underline cursor-pointer"
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
