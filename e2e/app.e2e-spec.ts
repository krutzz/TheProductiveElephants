import { AngularFireModule } from 'angularfire2';
import { AppPage } from './app.po';
import { environment } from '../src/environments/environment';

describe('nglx App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have browser title DreamPlace', (done) => {
    page.navigateTo('/');
    page.getBrowserTitle()
      .then((title) => {
        expect(title).toEqual('DreamPlace');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should display user email after registration', (done) => {
    const user = {
      mail: 'test@gmail.com',
      pass: 'testtest',
      fName: 'Gosho',
      lName: 'Georgiev'
    };
    page.navigateTo('/');
    const signUpEl = page.getElementByCSS('#signUP');
    signUpEl.click()
      .then(() => {
        const mailEl = page.getElementByCSS('#email');
        return mailEl.sendKeys(user.mail);
      })
      .then(() => {
        const passEl = page.getElementByCSS('#password');
        return passEl.sendKeys(user.pass);
      })
      .then(() => {
        const fNameEl = page.getElementByCSS('#firstName');
        return fNameEl.sendKeys(user.fName);
      })
      .then(() => {
        const lNameEl = page.getElementByCSS('#lastName');
        return lNameEl.sendKeys(user.lName);
      })
      .then(() => {
        // tslint:disable-next-line:max-line-length
        const submit = page.getElementByCSS('body > app-root > div > div > div.col-xl-8.col-lg-12.col-md-12.col-xs-12 > app-signup > div > div > form > button');
        return submit.click();
      })
      .then(() => {
        const headerMailEl = page.getElementByCSS('#navbarsExampleDefault > ul:nth-child(2) > li:nth-child(1) > a');
        return headerMailEl.getText();
      })
      .then((text) => {
        expect(text).toEqual(user.mail);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
