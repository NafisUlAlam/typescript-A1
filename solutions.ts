const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) return value * multiplier;
  return value * 2;
};

const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    input = input.trim().toLowerCase();
    return input;
  } else if (typeof input === "number") {
    input *= 10;
    return input;
  } else {
    if (input) return "Active";
    else return "Inactive";
  }
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string => {
  return `"Location: ${locationName} (${latitude}, ${longitude})"`;
};

const concatenateArrays = <T>(...args: T[][]): T[] => {
  let answer: T[] = [];
  for (let e of args) {
    for (let f of e) {
      answer.push(f);
    }
  }
  return answer;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courseArr: Course[],
  minStudents: number,
): Course[] => {
  let answer = courseArr.filter(
    (item) => item.isPublished && item.students >= minStudents,
  );

  return answer;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  let answer = items.map((item) => item[key]);

  return answer;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() {
    return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `"Manager of ${this.department}: ${this.name}"`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve('"Access Granted"');
      }, 1000);
    } else {
      reject(new Error('"Access Denied: Must be 18 or older"'));
    }
  });
};
export {};
