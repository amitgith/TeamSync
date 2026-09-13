import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const {
    showPassword,
    setShowPassword,
    register,
    handleSubmit,
    errors,
    password,
    registerSubmit,
    strength,
    navigate,
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#111014] text-white">
      {/* Main */}
      <div className="flex min-h-[calc(100vh-54px)]">
        {/* ================= LEFT PANEL ================= */}
        <section className="relative hidden w-[40%] overflow-hidden border-r border-white/10 bg-[#071226] lg:block">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(72,116,190,0.35),transparent_45%)]" />

            <div className="absolute left-[-10%] top-[20%] h-125 w-125 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-linear-to-t from-[#071226] via-[#071226]/80 to-transparent" />
          </div>

          {/* Logo */}
          <div className="relative z-10 p-6">
            <h1 className="text-xl font-bold tracking-tight">team-sync</h1>
          </div>

          {/* Decorative AI Graphic */}
          <div className="absolute left-1/2 top-[22%] h-85 w-85 -translate-x-1/2">
            <div className="absolute inset-0 rounded-[45%] bg-linear-to-br from-blue-400/10 via-purple-400/10 to-transparent blur-xl" />

            {[...Array(18)].map((_, index) => (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 h-0.5 origin-left bg-linear-to-r from-blue-300/60 to-transparent"
                style={{
                  width: `${120 + (index % 5) * 45}px`,
                  transform: `rotate(${index * 20}deg)`,
                }}
              />
            ))}

            {[...Array(20)].map((_, index) => (
              <span
                key={index}
                className="absolute h-1 w-1 rounded-full bg-blue-300/60"
                style={{
                  left: `${20 + ((index * 37) % 65)}%`,
                  top: `${15 + ((index * 53) % 70)}%`,
                }}
              />
            ))}

            <div className="absolute inset-[25%] rounded-full border border-blue-300/10 bg-blue-400/5 blur-sm" />
          </div>

          {/* Content */}
          <div className="absolute bottom-28 left-6 right-6 z-10">
            <div className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-300">
              <span className="text-base">✦</span>
              Next-gen intelligence
            </div>

            <h2 className="max-w-md text-3xl font-bold leading-tight">
              Accelerate your team's
              <br />
              intelligence.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-300">
              Connect your enterprise data to our specialized AI models and
              unlock unparalleled strategic insights in seconds.
            </p>

            <div className="mt-8 flex gap-10">
              <div>
                <p className="text-lg font-bold">99.9%</p>
                <p className="text-[9px] text-gray-400">Uptime SLA</p>
              </div>

              <div>
                <p className="text-lg font-bold">ISO</p>
                <p className="text-[9px] text-gray-400">27001 Certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RIGHT PANEL ================= */}
        <section className="flex flex-1 items-center justify-center px-6 py-10">
          <div className="w-full max-w-107.5">
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Create your account
              </h2>

              <p className="mt-1 text-[11px] text-gray-300">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(registerSubmit)} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold">
                  Full Name
                </label>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <UserIcon />
                  </span>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={`h-11 w-full rounded-md border bg-[#1b191d] pl-11 pr-4 text-xs text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400 ${
                      errors.fullName ? "border-red-500" : "border-white/15"
                    }`}
                    {...register("fullName", {
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters required",
                      },
                    })}
                  />
                </div>

                {errors.fullName && (
                  <p className="mt-1 text-[10px] text-red-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold">
                  Email Address
                </label>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <MailIcon />
                  </span>

                  <input
                    type="email"
                    placeholder="name@company.com"
                    className={`h-11 w-full rounded-md border bg-[#1b191d] pl-11 pr-4 text-xs text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400 ${
                      errors.email ? "border-red-500" : "border-white/15"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-[10px] text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-[10px] font-semibold">
                  Password
                </label>

                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <LockIcon />
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={`h-11 w-full rounded-md border bg-[#1b191d] pl-11 pr-11 text-xs text-white outline-none transition placeholder:text-gray-600 focus:border-purple-400 ${
                      errors.password ? "border-red-500" : "border-white/15"
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {/* Password Strength */}
                {password && (
                  <>
                    <div className="mt-2 flex gap-1">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className={`h-0.75 flex-1 rounded-full ${
                            item <= strength ? "bg-purple-400" : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="mt-1 text-[10px] text-purple-300">
                      {strength <= 1
                        ? "Weak password"
                        : strength <= 2
                          ? "Fair password"
                          : strength <= 3
                            ? "Good password"
                            : "Strong password"}
                    </p>
                  </>
                )}

                {errors.password && (
                  <p className="mt-1 text-[10px] text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-3.5 w-3.5 accent-purple-500"
                    {...register("terms", {
                      required: "Please accept the terms",
                    })}
                  />

                  <span className="text-[9px] leading-4 text-gray-300">
                    I agree to the{" "}
                    <span className="text-purple-300">Terms of Service</span>{" "}
                    and <span className="text-purple-300">Privacy Policy</span>.
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-1 text-[10px] text-red-400">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="h-10 w-full rounded-md bg-linear-to-r from-[#7452b9] to-[#c5a6ff] text-xs font-semibold text-[#17111f] transition hover:opacity-90 active:scale-[0.99]"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />

              <span className="text-[8px] uppercase tracking-wider text-gray-600">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-md border border-white/15 text-xs font-medium transition hover:bg-white/5"
              >
                <span className="text-sm">◉</span>
                Google
              </button>

              <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-md border border-white/15 text-xs font-medium transition hover:bg-white/5"
              >
                <span className="text-sm">✣</span>
                SSO
              </button>
            </div>

            {/* Login */}
            <p className="mt-10 text-center text-xs text-gray-300">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/")}
                type="button"
                className="font-semibold text-purple-300 hover:text-purple-200 cursor-pointer"
              >
                Log In
              </button>
            </p>
          </div>
        </section>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="flex min-h-13.5 items-center justify-between border-t border-white/10 px-5 text-[9px] text-gray-400">
        <p className="text-base font-bold text-gray-200">team-sync</p>

        <div className="hidden gap-6 md:flex">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security</span>
          <span>System Status</span>
        </div>

        <p className="hidden md:block">
          © 2024 <team-sync></team-sync>. Enterprise Intelligence Platforms.
        </p>
      </footer>
    </div>
  );
};

/* ================= ICONS ================= */

const UserIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="8" r="3" />
    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

export default Register;
