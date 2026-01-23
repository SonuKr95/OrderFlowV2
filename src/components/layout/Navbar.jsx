import { bell, darkmodeswitch, search } from "../../icons/_index";
import { useList } from "../../app/context/hook/_useList";
import { useLogout } from "../../features/auth/session/useLogout";

function Navbar() {
  // const { list } = useList();
  const logout = useLogout();
  // console.log(list);

  return (
    <div className="col-start-2 col-end-3 flex h-24 items-center justify-between self-start bg-teal-100 px-6 py-9">
      <div className="">
        <p className="text-2xl font-bold">{"Dashboard"}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <img src={bell} alt="" className="h-[20px]" />
        <img src={darkmodeswitch} alt="" className="h-[20px]" />
        <div>
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
