interface Engine {
  displacement: number;
  power: number;
  torque: number;
  type: string;
}

interface Car {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  acceleration: number;
  category: string;
  description: string;
  engine: Engine;
  image: string;
  make: string;
  model: string;
  price: number;
  showcase: string[];
  summary: string;
  topSpeed: number;
  weight: number;
  year: number;
  design: {
    title: string;
    description: string;
    image: string;
  };
  performance: {
    title: string;
    description: string;
    image: string;
  };
}

interface CarList {
  [index: number]: Car;
}
