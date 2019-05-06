export interface iUserData {
  email: string;
  adress: string;
  phone: string;
  avatar: string;
  username: string;
}
export class UserData {
  constructor(
    public email: string,
    public adress: string,
    public phone: string,
    public avatar: string,
    public username: string,
  ) {}
}
