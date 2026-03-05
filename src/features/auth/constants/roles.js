export const ROLES = {
  ADMIN: "admin",
  STAFF: "staff",
  VIEWER: "viewer",
};

//Permissions for routes; for viewer and admin role they have same route, however CRUD is blocked on viewer role with RLS.
export const PERMISSIONS = {
  ADMIN_ONLY: [ROLES.ADMIN],
  ADMIN_STAFF: [ROLES.ADMIN, ROLES.STAFF],
};
