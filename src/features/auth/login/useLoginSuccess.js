import { useDispatch } from "react-redux";
import { setAuthUser } from "../state/userSlice";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../../../app/queryClient";
import toast from "react-hot-toast";

export function useLoginSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return function handleLoginSuccess(data) {
    const { loggerUserRole } = data;
    const { email } = data.user;
    const { id } = data.user;

    console.log(loggerUserRole);
    dispatch(
      setAuthUser({
        email: email,
        loggerUserRole,
      }),
    );
    toast.success("Logged In");

    localStorage.setItem(
      "auth",
      JSON.stringify({
        email,
        role: loggerUserRole,
        id, // if backend provides one
      }),
    );
    queryClient.invalidateQueries(["auth"]);

    if (loggerUserRole === "admin") {
      navigate("/dashboard", { replace: true });
    }
    if (loggerUserRole === "staff") {
      navigate("/productlist", { replace: true });
    }
  };
}
