import type { User } from "@/interfaces/user.interface";

// LOgin, Register, CheckStatus
export interface AuthResponse {
  user: User;
  token: string;
}
