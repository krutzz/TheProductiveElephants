export class Alert {
  public newAlert: boolean;
  public type: string;
  public message: string;

  constructor() {
    this.newAlert = false;
    this.message = '';
    this.type = '';
  }
  public close(): void {
    this.newAlert = false;
    this.message = '';
    this.type = '';
  }
  public danger(errorMessage: string): void {
    this.newAlert = true;
    this.message = errorMessage;
    this.type = 'danger';
  }
}
