export interface iUserData {
  email: string;
  address: string;
  phone: string;
  avatar: string;
  username: string;
}
export class UserData {
  constructor(
    public email = '',
    public address = '',
    public phone = '',
    public avatar = '',
    public username = 'GUEST',
  ) {}
}
