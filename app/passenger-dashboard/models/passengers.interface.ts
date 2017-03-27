export interface Child {
  name: string;
  age: number
}

export interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkedInDate: any;
  children: Child[] | null;
}