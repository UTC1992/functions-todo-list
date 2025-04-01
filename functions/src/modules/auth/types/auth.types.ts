export interface IUser {
  uid: string;
  email: string;
  displayName?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthResponse {
  token: string;
  user: IUser;
}

export interface IValidateEmailRequest {
  email: string;
}
