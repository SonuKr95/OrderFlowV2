import { fetchUserRole } from "../login/fetchUserRole";
export const savedLogin = async () => {
  const auth = localStorage.getItem("auth");
  if (!auth) return null;
  try {
    const fetchLoginData = JSON.parse(auth);
    const { id, role } = fetchLoginData;
    const validateSavedLoginRole = await fetchUserRole(id);
    if (role === validateSavedLoginRole) {
      return fetchLoginData;
    } else {
      localStorage.removeItem("auth");
      return null;
    }
  } catch (e) {
    console.error("Auth verification failed:", e);
    localStorage.removeItem("auth");
    return null;
  }
};

/*
Acknowledge the ID Vulnerability: Mention that verifying by id is a placeholder. Explain that in a real app, an attacker could manually change the id in localStorage to bypass local checks.

Define the Next Step (JWT): State that your next iteration will use JWT (JSON Web Tokens). This allows the backend to verify the user's identity securely using a digital signature that the client cannot forge.

Future Security Goal: Mention that for a production-ready app, you would eventually move sensitive tokens to HTTP-only Cookies to protect against Cross-Site Scripting (XSS) attacks. 

*/
