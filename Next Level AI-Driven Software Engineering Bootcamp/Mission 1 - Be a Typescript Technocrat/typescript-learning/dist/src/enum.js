"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};
const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
//# sourceMappingURL=enum.js.map