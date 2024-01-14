export interface IDecodedToken {
  aud: string;
  email: string;
  role: Role;
  exp: number;
  iat: number;
  iss: string;
  nbf: number;
}

export enum Role {
  Admin = 'Admin',
  Investigator = 'Investigator',
}

export class AuthModel {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
