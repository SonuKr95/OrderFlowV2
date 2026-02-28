export const ROLES = {
  ADMIN: "admin",
  STAFF: "staff",
  VIEWER: "viewer",
};

export const PERMISSIONS = {
  ADMIN_ONLY: [ROLES.ADMIN],
  ADMIN_STAFF: [ROLES.ADMIN, ROLES.STAFF],
};
