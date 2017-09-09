import { AngularFireModule } from 'angularfire2';
import { AppPage } from './app.po';
import { browser } from 'protractor';
import { environment } from '../src/environments/environment';

describe('nglx App Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.ignoreSynchronization = true;
  });

  it('should have browser title DreamPlace', (done) => {
    page.navigateTo('/');
    page.getBrowserTitle()
      .then((title) => {
        expect(title).toEqual('DreamPlace');
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });

  it('should display user email after registration', (done) => {
    const user = {
      mail: 'test@gmail.com',
      pass: 'testtest',
      fName: 'Gosho',
      lName: 'Georgiev'
    };
    page.navigateTo('/')
      .then(() => {
        const signUpEl = page.getElementById('signUP');
        return signUpEl.click();
      }).then(() => {
        const mailEl = page.getElementById('email');
        return mailEl.sendKeys(user.mail);
      })
      .then(() => {
        const passEl = page.getElementById('password');
        return passEl.sendKeys(user.pass);
      })
      .then(() => {
        const fNameEl = page.getElementById('firstName');
        return fNameEl.sendKeys(user.fName);
      })
      .then(() => {
        const lNameEl = page.getElementById('lastName');
        return lNameEl.sendKeys(user.lName);
      })
      .then(() => {
        // tslint:disable-next-line:max-line-length
        const submit = page.getElementByCSS('body > app-root > div > div > div.col-xl-8.col-lg-12.col-md-12.col-xs-12 > app-signup > div > div > form > button');
        return submit.click();
      })
      .then(() => {
        browser.sleep(1000);
        const headerMailEl = page.getElementByCSS('#navbarsExampleDefault > ul:nth-child(2) > li:nth-child(1) > a');
        return headerMailEl.getText();
      })
      .then((text) => {
        expect(text).toEqual(user.mail);
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });

  it('should display user email after sign in', (done) => {
    const user = {
      mail: 'test@gmail.com',
      pass: 'testtest',
      fName: 'Gosho',
      lName: 'Georgiev'
    };
    page.navigateTo('/')
      .then(() => {
        const logOut = page.getElementById('logOut');
        return logOut.isPresent();
      })
      .then((isPresent) => {
        if (isPresent) {
          const logOut = page.getElementById('logOut');
          return logOut.click();
        }
      })
      .then(() => {
        const signInEl = page.getElementById('signIN');
        return signInEl.click();
      }).then(() => {
        const mailEl = page.getElementById('email');
        return mailEl.sendKeys(user.mail);
      })
      .then(() => {
        const passEl = page.getElementById('password');
        return passEl.sendKeys(user.pass);
      })
      .then(() => {
        // tslint:disable-next-line:max-line-length
        const submit = page.getElementByCSS('body > app-root > div > div > div.col-xl-8.col-lg-12.col-md-12.col-xs-12 > app-signin > div > div > form > button');
        return submit.click();
      })
      .then(() => {
        browser.sleep(1000);
        const headerMailEl = page.getElementByCSS('#navbarsExampleDefault > ul:nth-child(2) > li:nth-child(1) > a');
        return headerMailEl.getText();
      })
      .then((text) => {
        expect(text).toEqual(user.mail);
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });

});
