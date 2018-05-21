export interface iSession {
  aud: string;
  iss: string;
  exp: number;
  email: string;
  out_key:string;
  roles: string[];
}