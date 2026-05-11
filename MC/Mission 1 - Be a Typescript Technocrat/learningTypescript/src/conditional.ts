// ConditionalType

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeoplesVehicle = {
  bike: string;
  car: string;
  speedBoat: string;
};

type CheckVehicle<T> = T extends "bike" | "car" | "speedBoat" ? true : false;

type HasBike = CheckVehicle<"bike">;
