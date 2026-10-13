export type UserStatus = "ACTIVE" | "INACTIVE";

export type UserRole = "ADMIN" | "EMPLOYEE" | "DRIVER";

export type UserPermission =
  | "BOOK_TRIP"
  | "MANAGE_BUSES"
  | "MANAGE_ROLES"
  | "MANAGE_TRIPS"
  | "MANAGE_USERS"
  | "UPDATE_LIVE_LOCATION"
  | "VIEW_ALL_RESERVATIONS";

export interface User {
  userId: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: UserStatus;
  roles: UserRole[];
  permissions: UserPermission[];
}

export interface LoginResponse {
  accessToken: string;
  tokenType: "Bearer";
  expiresInSeconds: number;
  user: User;
}