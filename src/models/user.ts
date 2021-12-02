export interface User {
  id_user: string;
  name: string;
  role: string;
  logo: string;
  bio: string;
}

export interface UserValidation {
  id_user_validation: string;
  username: string;
  password: string;
  user: User;
}
