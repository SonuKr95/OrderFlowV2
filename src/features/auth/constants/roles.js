export const ROLES = {
  ADMIN: "admin",
  STAFF: "staff",
  VIEWER: "viewer",
};

export const PERMISSIONS = {
  ADMIN: ROLES.ADMIN,
  VIEWER: ROLES.VIEWER,
  ADMIN_STAFF_VIEWER: [ROLES.ADMIN, ROLES.STAFF, ROLES.VIEWER],
};
