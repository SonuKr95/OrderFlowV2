import { createContext, useContext, useState, useEffect } from "react";
import { getUserRole } from "../../../features/auth/api/getUserRole";

const userRoleContext = createContext();

// 1. The Provider Component
function UserRoleProvider({ children }) {
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRole() {
      try {
        const role = await getUserRole();
        setUserRole(role);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRole();
  }, []);

  return (
    <userRoleContext.Provider value={{ userRole }}>
      {children}
    </userRoleContext.Provider>
  );
}

function useUserRole() {
  const context = useContext(userRoleContext);

  // Safety check: helps catch bugs if you use the hook outside the Provider
  if (context === undefined) {
    throw new Error("useUserRole must be used within a UserRoleProvider");
  }

  return context;
}

export { UserRoleProvider, useUserRole };
