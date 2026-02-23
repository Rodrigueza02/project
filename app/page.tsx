export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#D7C2D8] to-[#B96FA0] flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-[#F4F1F6] rounded-[30px] shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-[45%_55%]">
        {/* LEFT PANEL */}
        <div className="relative h-[400px] md:h-auto">

          {/* Imagen ocupando TODO con 4 bordes redondeados */}
          <img
            src="/astronaut.png"
            alt="Astronaut"
            className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
          />

          {/* Overlay suave */}
          <div className="absolute inset-0 bg-black/20 rounded-[30px]" />

          {/* Contenido encima */}
          <div className="relative z-10 flex flex-col justify-between h-full p-10 text-white">

            {/* Texto superior */}
            <div>
              <p className="text-sm font-semibold opacity-90 mb-6">
                Astro
              </p>

              <h2 className="text-4xl font-bold leading-snug">
                Exploring new frontiers,
                <br />
                one step at a time.
              </h2>
            </div>

            {/* Texto inferior */}
            <p className="text-sm opacity-90">
              Beyond Earth's grasp
            </p>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="px-14 py-14">

          <div className="flex justify-between items-center mb-8">
            <span className="text-sm font-semibold text-gray-400">
              Astro
            </span>

            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Already a member? Sign in ↑
            </a>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Create Account
          </h1>

          {/* Social buttons */}
<div className="flex gap-4 mb-6">

  {/* Google */}
  <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#4A148C] hover:bg-[#3b0f6f] text-white text-sm font-medium transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="#ffffff"
    >
      <path d="M21.35 11.1H12v2.98h5.36c-.23 1.24-1.39 3.64-5.36 3.64-3.23 0-5.86-2.67-5.86-5.96s2.63-5.96 5.86-5.96c1.84 0 3.07.79 3.78 1.47l2.58-2.5C17.18 3.6 14.83 2.5 12 2.5 6.76 2.5 2.5 6.78 2.5 12s4.26 9.5 9.5 9.5c5.48 0 9.1-3.85 9.1-9.27 0-.62-.07-1.08-.15-1.53z" />
    </svg>
    Sign up with Google
  </button>

  {/* Facebook */}
  <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="#1877F2"
    >
      <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 3h-2.2v7A10 10 0 0022 12z"/>
    </svg>
    with Facebook
  </button>

</div>

          <p className="text-xs text-gray-500 mb-6">
            Or sign up using your email address
          </p>

          <form className="space-y-5">

            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-full bg-gray-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Email or Phone no.
              </label>
              <input
                type="email"
                className="w-full px-5 py-3 rounded-full bg-gray-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-full bg-gray-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-5 py-3 rounded-full bg-gray-200 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" />
              <span>I agree to all terms and Privacy Policy</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#14002B] text-white font-semibold shadow-lg"
            >
              Sign up
            </button>

            <p className="text-xs text-gray-600 mt-4">
              Already have an account? Log in
            </p>

          </form>

        </div>

      </div>

    </main>
  );
}