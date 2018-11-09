export class User {
  constructor(
    public bootcampUserId: number ,
    public userName: string,
    public email: string,
    public phoneNo: number,
    public topic: string,
    public timepreference: string,
    public subscribe: boolean
  ) {}
}
