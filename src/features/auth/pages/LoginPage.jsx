import { useForm } from "react-hook-form";
import { useAuth } from "../hook/useAuth";
import { useAnonymousSignIn } from "../hook/useAnonymousSignIn";

export default function LoginPage() {
  const loginMutation = useAuth();
  const anonymousSignIn = useAnonymousSignIn();
  const { register, handleSubmit, reset } = useForm();

  function handleSubmitLogin(formData) {
    loginMutation.mutate(formData, {
      onSuccess: reset(),
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] px-4">
      {/* Card */}

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        {/* Heading */}

        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-white">Order Flow</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage your orders efficiently
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(handleSubmitLogin)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="example@example.com"
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 transition outline-none focus:ring-1"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              {...register("password", {
                required: true,
              })}
              type="password"
              placeholder="••••••••"
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 transition outline-none focus:ring-1"
            />
          </div>

          <button
            disabled={loginMutation.isPending}
            type="submit"
            className="bg-primary w-full rounded-lg py-2.5 font-semibold text-white transition hover:cursor-pointer hover:bg-indigo-600 disabled:opacity-50"
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-5 flex items-center gap-2">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        {/* Guest login */}
        <button
          onClick={() => anonymousSignIn.mutate()}
          className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 font-medium text-gray-300 transition hover:cursor-pointer hover:bg-white/10"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
}
