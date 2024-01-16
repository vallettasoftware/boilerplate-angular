const AUTH_GROUP_NAME = '[AUTH]';

export class Register {
  static readonly type = `${AUTH_GROUP_NAME} Register`;
  constructor(public payload: { email: string; password: string }) {}
}

export class Login {
  static readonly type = `${AUTH_GROUP_NAME} Login`;
  constructor(public payload: { email: string; password: string }) {}
}

export class Logout {
  static readonly type = `${AUTH_GROUP_NAME} Logout`;
}
