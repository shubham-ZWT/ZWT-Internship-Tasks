export interface CreateCollegeInput {
  name: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface UpdateCollegeInput {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}