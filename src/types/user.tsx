export interface user {
  id: number;
  password?: string;
  email: string;
  last_login: Date;
  is_superuser: boolean;
  first_name: string;
  last_name: string;
  username: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: Date;
  movil: string;
  prefijo: string;
}
