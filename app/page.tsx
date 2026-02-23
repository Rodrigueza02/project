export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#D7C2D8] to-[#B96FA0] flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-[#F4F1F6] rounded-[30px] shadow-2xl overflow-hidden md:grid md:grid-cols-[45%_55%]">

        {/* LEFT PANEL */}
        <div className="relative h-[600px] md:h-auto">

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
            <button className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#4C1D95] to-[#6D28D9] text-white text-sm font-medium shadow-md">
              Sign up with Google
            </button>

            <button className="flex-1 py-3 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
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