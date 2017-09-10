export class User {
  public email: string;
  public firstName: string;
  public lastName: string;

  public uid: string;

  public province: string;

  constructor(email: string, firstname: string, lastName: string, province: string) {
    this.email = email;
    this.firstName = firstname;
    this.lastName = lastName;
    this.province = province;

  }
}
