import { useForm } from "react-hook-form";
import { useAuth } from "../hook/useAuth";
import { useAnonymousSignIn } from "../hook/useAnonymousSignIn";

function LoginPage() {
  const loginMutation = useAuth();
  const anonymousSignIn = useAnonymousSignIn();
  const { register, handleSubmit, reset } = useForm();

  function handleSubmitLogin(formData) {
    loginMutation.mutate(formData, {
      onSuccess: reset(),
    });
  }

  return (
    <div className="font-lato bg-crest flex min-h-screen items-center justify-center">
      <div className="">
        <h2 className="text-primary-brand-ocean-green mb-4 text-6xl font-bold uppercase">
          Order Flow
        </h2>
        {/* <h1 className="text-secondary-brand-cyprus mb-5 text-4xl font-bold">
          Sign in
        </h1> */}
        <div className="text-subtle mb-5 flex w-full flex-col gap-[10px]">
          <form onSubmit={handleSubmit(handleSubmitLogin)}>
            <label htmlFor="email">
              <span className="mb-[5px] block font-semibold">E-mail</span>
              <input
                {...register("email")}
                className="caret-secondary-brand-cyprus focus:border-primary-brand-ocean-green border-subtle placeholder:text-red block w-full rounded-md border-2 px-2 py-2 font-bold focus:border-2 focus:outline-0"
                type="text"
                placeholder="example@example.com"
              />
            </label>
            <label htmlFor="password" className="mb-[5px]">
              <span className="mb-[5px] block font-semibold"> Password</span>
              <input
                {...register("password")}
                className="caret-secondary-brand-cyprus focus:border-primary-brand-ocean-green border-subtle mb-5 block w-full rounded-md border-2 px-2 py-2 font-bold focus:border-2 focus:outline-0"
                type="password"
                placeholder="@#*%"
              />
            </label>

            <button
              disabled={loginMutation.isPending}
              type="submit"
              className="hover:bg-primary-brand-ocean-green bg-secondary-brand-cyprus mb-2.5 block w-full rounded-lg py-3 text-xl font-bold text-white hover:cursor-pointer"
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </button>
          </form>
          <button
            onClick={() => anonymousSignIn.mutate()}
            className="hover:bg-primary-brand-ocean-green bg-secondary-brand-cyprus block w-full rounded-lg py-3 text-xl font-bold text-white hover:cursor-pointer"
          >
            View as Guest
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
