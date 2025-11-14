import { Request } from 'express';

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    email: string;
    name: string;
    role: string;
  };
}

export interface JWTPayload {
  userId: string;
  email: string;
  name: string;
  role: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

export interface LoginRequest {
  email: string;
  password: string;
}
