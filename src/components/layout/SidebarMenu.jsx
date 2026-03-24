import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROLES } from "../../features/auth/constants/roles";
import { useLocation } from "react-router-dom";

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

  {
    text: "Create Order",
    iconName: "arrowupdown",
    access: [ROLES.ADMIN, ROLES.VIEWER],
    url: "/createorder",
  },
];

export default function SidebarMenu({ collapsed }) {
  const location = useLocation();
  const userRole = useSelector((state) => state.auth.userRole);
  const allowedMenu = menu.filter((item) => item.access.includes(userRole));

  return (
    <div className="mb-10">
      <p className="text-text-secondary mb-3 text-sm">Main Menu</p>
      {allowedMenu.map((item) => {
        const { text, iconName, url } = item;
        const isActive = location.pathname === url;

        // items without url (section headers / future pages)
        if (!url) {
          return <SidebarItem key={text} text={text} iconName={iconName} />;
        }

        return (
          <Link key={text} to={url}>
            <SidebarItem
              text={text}
              iconName={iconName}
              collapsed={collapsed}
              active={isActive}
            />
          </Link>
        );
      })}
    </div>
  );
}
