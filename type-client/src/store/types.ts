export interface RootState {
  // version: string;
}

export interface UserState {
  user: User | null;
  authToken: AuthToken | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthToken {
  ['access-token']: string;
  client: string;
  uid: string;
}
