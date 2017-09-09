import { AngularFireModule } from 'angularfire2';
import { AppPage } from './app.po';
import { environment } from '../src/environments/environment';

describe('nglx App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have browser title DreamPlace', (done) => {
    page.navigateTo();
    page.getBrowserTitle()
      .then((title) => {
        expect(title).toEqual('DreamPlace');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
