import { useAuth } from "../../hooks/useAuth";
const Login = () => {
  const {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    loginSubmit,
    navigate,
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#121116] px-4 py-3 text-white">
      {/* Login Card */}
      <div className="mx-auto w-full max-w-76.75 rounded-lg border border-white/10 bg-[#1d1b20] px-5.5 py-5.5 shadow-xl">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="flex h-8.5 w-8.5 items-center justify-center rounded-md bg-[#7254bb]">
            <span className="text-xl">✣</span>
          </div>

          <h1 className="mt-3 text-[18px] font-bold">team-sync</h1>

          <p className="mt-1 text-[10px] text-gray-300">
            Sign in to your workspace
          </p>
        </div>

        {/* Social Login */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex h-7.25 items-center justify-center gap-2 rounded-md border border-white/10 bg-[#302e33] text-[9px] font-semibold transition hover:bg-[#39373c]"
          >
            <span className="text-sm">☁</span>
            GOOGLE
          </button>

          <button
            type="button"
            className="flex h-7.25 items-center justify-center gap-2 rounded-md border border-white/10 bg-[#302e33] text-[9px] font-semibold transition hover:bg-[#39373c]"
          >
            <span className="text-sm">▣</span>
            GITHUB
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/5"></div>

          <span className="text-[9px] text-gray-400">
            or continue with email
          </span>

          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(loginSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="mb-1.5 block text-[9px] font-semibold text-gray-200">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className={`h-7.5 w-full rounded-md border bg-[#0f0e12] px-3 text-[10px] text-white outline-none placeholder:text-gray-600 focus:border-[#7958c2] ${
                errors.email ? "border-red-500" : "border-white/10"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="mt-1 text-[8px] text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-[9px] font-semibold text-gray-200">
                PASSWORD
              </label>

              <button
                type="button"
                className="text-[8px] text-purple-300 hover:text-purple-200"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`h-7.5 w-full rounded-md border bg-[#0f0e12] px-3 pr-12 text-[10px] text-white outline-none placeholder:text-gray-600 focus:border-[#7958c2] ${
                  errors.password ? "border-red-500" : "border-white/10"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters required",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] text-purple-300"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-[8px] text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Stay Signed In */}
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="h-3 w-3 accent-purple-500"
              {...register("rememberMe")}
            />

            <span className="text-[8px] text-gray-300">Stay signed in</span>
          </label>

          {/* Sign In */}
          <button
            type="submit"
            className="flex h-9.25 w-full items-center justify-center gap-2 rounded-md bg-[#7051b7] text-[10px] font-medium transition hover:bg-[#805fc8] active:scale-[0.99]"
          >
            Sign In
            <span className="text-sm">↪</span>
          </button>
        </form>

        {/* Bottom Divider */}
        <div className="my-5 h-px bg-white/5"></div>

        {/* Signup */}
        <p className="text-center text-[9px] text-gray-300">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            type="button"
            className="font-semibold text-purple-300 hover:text-purple-200 cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>

      {/* Footer */}
      <footer className="mx-auto mt-4 max-w-100 text-center">
        <p className="text-[9px] text-gray-600">
          © 2024 team-sync. Enterprise Intelligence Platforms.
        </p>

        <div className="mt-2 flex justify-center gap-4 text-[8px] text-gray-600">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </footer>

      {/* Decorative Bottom Right */}
      <div className="pointer-events-none fixed bottom-0 right-0 hidden h-44 w-44 opacity-20 md:block">
        <div className="absolute inset-8 rounded-full border border-purple-400/20 blur-sm"></div>
        <div className="absolute inset-5 rotate-45 rounded-[40%] border border-purple-300/10"></div>
        <div className="absolute inset-10 -rotate-45 rounded-[40%] border border-purple-300/10"></div>
      </div>
    </div>
  );
};

export default Login;
