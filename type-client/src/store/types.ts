export interface RootState {
  // version: string;
}

export interface UserState {
  user: User | null;
}

export interface User {
  name: string;
  email: string;
}
