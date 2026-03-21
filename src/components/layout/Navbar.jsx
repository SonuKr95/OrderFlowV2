import { bell, darkmodeswitch, search } from "../../icons/_index";
import { useList } from "../../app/context/hook/_useList";
import { useLogout } from "../../features/auth/session/useLogout";
import { useSelector } from "react-redux";

function Navbar() {
  const { userRole } = useSelector((state) => state.auth);
  console.log(userRole);

  // const { list } = useList();

  const logout = useLogout();
  // console.log(list);

  return (
    <div className="col-start-2 col-end-3 flex h-24 items-center justify-between self-start bg-blue-200 px-6 py-9">
      <div className="">
        <p className="text-2xl font-bold">{"Dashboard"}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div>
          <span className="m-2.5">{userRole?.toUpperCase()}</span>
          <button
            onClick={() => {
              if (confirm("Are you sure you want to logout?")) {
                logout();
              }
            }}
            className="rounded-md bg-[#615fff] px-2.5 py-2.5 font-bold text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
