//* Union

type userRole = "admin" | "user";

const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};
getDashboard("guest");

//* InterSection - &

type Employee = {
  id: number;
  name: string;
  phoneNumber: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShabeb: EmployeeManager = {
  id: 101,
  name: "Chowdhury Shabeb",
  phoneNumber: "123",
  designation: "manager",
  teamSize: 20,
};
