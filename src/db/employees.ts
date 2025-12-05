import { Employee } from "../types/employee";

const employees: Employee[] = [
  {
    id: "2daadc6e-22d1-4c54-b67b-a0db668c6585",
    name: "Renee Hirthe",
    pointBalance: 9779,
  },
  {
    id: "c84a234d-0bdb-468c-a450-144492387f92",
    name: "Heather Bednar",
    pointBalance: 2739,
  },
  {
    id: "0ac968f2-95a6-4ecf-9b44-491866a869eb",
    name: "Bob Skiles I",
    pointBalance: 8595,
  },
  {
    id: "e7fe5155-5383-4b7e-b966-f85ef68e98fe",
    name: "Mr. Corey Altenwerth",
    pointBalance: 309,
  },
  {
    id: "74fc2351-b16c-4e88-8de3-bf6a434fa1b3",
    name: "Bethany Jenkins II",
    pointBalance: 7825,
  },
  {
    id: "11b00876-ab65-4f46-88e9-53a59d84ac75",
    name: "Erik Bailey",
    pointBalance: 2430,
  },
  {
    id: "c06ef3bb-8486-4336-b76b-94501cf0fe36",
    name: "Annette Sawayn",
    pointBalance: 2955,
  },
];

export function getAllEmployees(): Employee[] {
  return employees;
}

export function getEmployeeById(id: string): Employee | undefined {
  return employees.find((employee) => employee.id === id);
}
