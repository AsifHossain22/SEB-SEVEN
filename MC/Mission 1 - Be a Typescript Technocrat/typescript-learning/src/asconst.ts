// AsConstAssertion

// Enum
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

/*
{
readonly Admin : "Admin", 
readonly Editor: "Editor",
readonly Viewer: "Viewer",


1. typeof operator
2. keyof operator

const user = {
id: 101, 
name: "Asif",
}

typeof user;

{
id: number,
name: string,
}

typeof UserRoles

{
Admin: "Admin",
Editor: "Editor",
Viewer: "Viewer",
}

keyof typeof UserRoles
"Admin" | "Editor" | "Viewer"


"ADMIN" | "EDITOR" | "VIEWER"

UserRoles["Admin"] >>> "ADMIN"


} 
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
