import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROLES } from "../../features/auth/constants/roles";

const menu = [
  {
    text: "Dashboard",
    iconName: "dashboard",
    url: "/dashboard",
    access: [ROLES.ADMIN, ROLES.VIEWER],
  },
  {
    text: "Order Management",
    iconName: "cart",
    url: "/orders",
    access: [ROLES.ADMIN, ROLES.STAFF, ROLES.VIEWER],
  },
  {
    text: "Customers",
    iconName: "customers",
    url: "/customer",
    access: [ROLES.ADMIN, ROLES.VIEWER],
  },
  {
    text: "Inventory Management",
    iconName: "categories",
    url: "/inventory",
    access: [ROLES.ADMIN, ROLES.STAFF, ROLES.VIEWER],
  },
  // {
  //   text: "Transaction",
  //   iconName: "card",
  //   url: "/transaction",
  //   access: [ROLES.ADMIN, ROLES.STAFF],
  // },
  {
    text: "Add Products",
    iconName: "circleplus",
    url: "/addproduct",
    access: [ROLES.ADMIN, ROLES.STAFF, ROLES.VIEWER],
  },
  {
    text: "Product List",
    iconName: "productlist",
    url: "/productlist",
    access: [ROLES.ADMIN, ROLES.STAFF, ROLES.VIEWER],
  },
  {
    text: "Archived Products",
    iconName: "deleteicon",
    url: "/product/archived",
    access: [ROLES.ADMIN, ROLES.STAFF, ROLES.VIEWER],
  },
  // {
  //   text: "Admin Page",
  //   iconName: "user",
  //   access: [ROLES.ADMIN],
  // },
  // {
  //   text: "Settings",
  //   iconName: "settings",
  //   access: [ROLES.ADMIN],
  // },
  {
    text: "Create Order",
    iconName: "arrowupdown",
    access: [ROLES.ADMIN, ROLES.VIEWER],
    url: "dev",
  },
];

/*
function renderMenu(menu) {
  return menu.map((item) => {
    const { text, iconName, url } = item;
    return (
      <Link to={url ?? "/"}>
        <SidebarItem key={item.text} text={text} iconName={iconName} />
      </Link>
    );
  });
}

function SidebarMenu() {
  const loggedUserRole = useSelector((state) => state.auth.role);

  return (
    <>
      <div className="mb-10">
        <p className="mb-2 text-[#6A717F]">Main menu</p>
        {renderMenu(menu)}
      </div>
    </>
  );
}
  */

function SidebarMenu() {
  const userRole = useSelector((state) => state.auth.userRole);
  const allowedMenu = menu.filter((item) => item.access.includes(userRole));

  return (
    <div className="mb-10">
      <p className="mb-2 text-[#6A717F]">Main menu</p>

      {allowedMenu.map((item) => {
        const { text, iconName, url } = item;

        // items without url (section headers / future pages)
        if (!url) {
          return (
            <SidebarItem key={text} text={text} iconName={iconName} disabled />
          );
        }

        return (
          <Link key={text} to={url}>
            <SidebarItem text={text} iconName={iconName} />
          </Link>
        );
      })}
    </div>
  );
}

export default SidebarMenu;
