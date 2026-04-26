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
          <p className="mt-1 text-sm text-gray-400">Try the app instantly</p>
        </div>

        {/* Admin Demo Login */}

        <button
          onClick={() =>
            handleSubmitLogin({
              email: "admin@example.com",
              password: "7?CXva$76sw!",
            })
          }
          className="bg-primary hover:bg-primary/90 mb-2.5 w-full rounded-lg border border-white/10 py-2.5 font-medium text-white shadow-lg transition hover:cursor-pointer disabled:opacity-50"
          disabled={loginMutation.isPending}
        >
          Login as Admin (Demo)
        </button>

        {/* Staff Demo Login */}

        <button
          onClick={() =>
            handleSubmitLogin({
              email: "staff@example.com",
              password: "7+5p4]Uud2",
            })
          }
          className="bg-primary/60 hover:bg-primary/70 mb-2.5 w-full rounded-lg border border-white/10 py-2.5 font-medium text-white opacity-90 shadow-sm transition hover:cursor-pointer disabled:opacity-50"
          disabled={loginMutation.isPending}
        >
          Login as Staff (Demo)
        </button>

        {/* Anonymous Viewer login */}
        <button
          onClick={() => anonymousSignIn.mutate()}
          className="bg-primary/30 hover:bg-primary/60 mb-2.5 w-full rounded-lg border border-white/10 py-2.5 font-medium text-white opacity-90 transition hover:cursor-pointer disabled:opacity-50"
          disabled={anonymousSignIn.isPending}
        >
          Continue as Viewer
        </button>

        {/* Divider */}
        <div className="my-5 flex items-center gap-2">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
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
            className="bg-primary/10 hover:bg-primary/30 w-full rounded-lg py-2.5 font-medium text-white transition hover:cursor-pointer disabled:opacity-50"
          >
            Login
          </button>
        </form>

        <p className="text-primary mt-3.5 font-mono font-bold">
          Demo data resets periodically to maintain consistency.
        </p>
      </div>
    </div>
  );
}
