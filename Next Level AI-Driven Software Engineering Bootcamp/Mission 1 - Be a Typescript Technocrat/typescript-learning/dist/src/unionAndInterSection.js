"use strict";
//* Union
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else {
        return "Guest Dashboard";
    }
};
getDashboard("guest");
const ChowdhuryShabeb = {
    id: 101,
    name: "Chowdhury Shabeb",
    phoneNumber: "123",
    designation: "manager",
    teamSize: 20,
};
//# sourceMappingURL=unionAndInterSection.js.map