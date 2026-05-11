const user1: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNumber: string;
  address: {
    division: string;
    city: string;
  };
} = {
  id: 101,
  name: {
    firstName: "Asif",
    lastName: "Hossain",
  },
  gender: "male",
  contactNumber: "1234567890",
  address: {
    division: "Dhaka",
    city: "Manikganj",
  },
};

const user2: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNumber: string;
  address: {
    division: string;
    city: string;
  };
} = {
  id: 101,
  name: {
    firstName: "Asif",
    lastName: "Hossain",
  },
  gender: "male",
  contactNumber: "1234567890",
  address: {
    division: "Dhaka",
    city: "Manikganj",
  },
};

type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;

const myName: Name = "ASIF";

// Function
type AddFunction = (num1: number, num2: number) => number;

const add: AddFunction = (num1, num2) => num1 + num2;
