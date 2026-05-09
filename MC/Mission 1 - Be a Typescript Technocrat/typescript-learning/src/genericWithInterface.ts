interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandCharaWatch {
  heartBeatRate: string;
  stopwatch: boolean;
}

interface AppleWatch {
  heartBeatRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

// PoorDeveloper
const poorDeveloper: Developer<
  BrandCharaWatch,
  { brand: "Yamaha"; engineCapacity: "200CC" }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "DELL",
    model: "Latitude5470",
    releasedYear: "2022",
  },
  smartWatch: {
    heartBeatRate: "200",
    stopwatch: true,
  },
};

// RichDeveloper
const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "MAC",
    model: "Pro3",
    releasedYear: "2024",
  },
  smartWatch: {
    heartBeatRate: "200",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
  bike: null,
};
