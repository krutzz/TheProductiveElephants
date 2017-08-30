export class Alert {
  public newAlert: boolean;
  public type: string;
  public message: string;

  constructor() {
    this.newAlert = false;
    this.message = '';
    this.type = '';
  }
  public Close(): void {
    this.newAlert = false;
    this.message = '';
    this.type = '';
  }
}
