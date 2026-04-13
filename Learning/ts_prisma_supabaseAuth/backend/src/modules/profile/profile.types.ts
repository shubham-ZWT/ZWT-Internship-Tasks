export enum Role {
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
  HR = "HR",
}

export interface CreateProfileInput {
  userId: string;
  email: string;
  fullName?: string;
  role?: Role;
}

export interface UpdateProfileInput {
  fullName?: string;
  role?: Role;
}