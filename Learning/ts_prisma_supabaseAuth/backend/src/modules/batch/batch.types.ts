export interface CreateBatchInput {
  name: string;
  collegeId: string;
}

export interface UpdateBatchInput {
  name?: string;
  isActive?: boolean;
}

export interface BatchResponse {
  id: string;
  name: string;
  collegeId: string;
  inviteCode: string;
  isActive: boolean;
  createdAt: Date;
  studentCount?: number;
}

export interface BatchWithCollege extends BatchResponse {
  college: {
    id: string;
    name: string;
  };
}

export interface StudentRegistrationInput {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  inviteCode: string;
}