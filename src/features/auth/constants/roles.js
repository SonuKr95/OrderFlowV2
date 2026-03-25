export const ROLES = {
  ADMIN: "admin",
  STAFF: "staff",
  VIEWER: "viewer",
};

//viewer and admin role they have same route, however CRUD is blocked on viewer role with RLS. this is done to access all routes for viewers as same as admin
export const PERMISSIONS = {
  ADMIN_ONLY: [ROLES.ADMIN],
  ADMIN_STAFF: [ROLES.ADMIN, ROLES.STAFF],
};
