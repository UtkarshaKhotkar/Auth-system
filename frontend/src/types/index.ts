export interface User {
  id: string;
  email: string;
  name: string;
  role: 'USER' | 'ADMIN';
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

export interface LoginData {
  email: string;
  password: string;
}
