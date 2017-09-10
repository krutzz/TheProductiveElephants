import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FormatEmptyPipe } from '../pipes/format-empty/format-empty.pipe';
import { MockLoadImageDirective } from "../../tests/tests-mocks/mock-load-image.directive";
import { Post } from '../../shared/models/post';
import { PostComponent } from './post.component';
import { RemoveSpacesPipe } from '../pipes/remove-spaces/remove-spaces.pipe';
import { RouterLinkStubDirective } from "../../tests/tests-mocks/router-link-stub.directive";

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  const post = new Post({
    '$key': '-KsXmtFl4altqKAOtexA',
    'category': 'Cars',
    'date': 'Sun Aug 27 2017 11:25:17 GMT+0300 (FLE Daylight Time)',
    'description': 'No description',
    // tslint:disable-next-line:max-line-length
    'images': ['img'],
    'price': '100000',
    'province': 'Sofia',
    'title': 'Lamborghini',
    'user': [{
      'email': 'krutz@gmail.com',
      'providerId': 'password',
      'uid': 'krutz@gmail.com'
    }],
    'views': 5
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostComponent,
        MockLoadImageDirective,
        RouterLinkStubDirective,
        RemoveSpacesPipe,
        FormatEmptyPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = post;
    fixture.detectChanges();
  });

  it('should contain img component', () => {
    // Arrange.
    const mockImgEl = fixture.debugElement.query(By.directive(MockLoadImageDirective));

    // Assert.
    expect(mockImgEl).toBeTruthy();
  });

  it('should pass src to img element', () => {
    // Arrange.
    const mockImgEl = fixture.debugElement.query(By.directive(MockLoadImageDirective));
    const mockImgCmp = mockImgEl.injector.get(MockLoadImageDirective) as MockLoadImageDirective;

    // Assert.
    expect(mockImgCmp.src).toBeTruthy();
    expect(mockImgCmp.src).toEqual(post.img);
  });

  it('should display user email in card header element', () => {
    // Arrange.
    const de = fixture.debugElement.query(By.css('.card-header'));
    const el: HTMLElement = de.nativeElement;

    // Assert.
    expect(el.innerHTML).toEqual(post.user[0].email);
  });

  it('should display title of the post in card block h1 tag ', () => {
    // Arrange.
    const de = fixture.debugElement.query(By.css('h5'));
    const el: HTMLElement = de.nativeElement;

    // Assert.
    expect(el.innerHTML).toEqual(post.title);
  });

  it('should display title of the post in card block p tag ', () => {
    // Arrange.
    const de = fixture.debugElement.query(By.css('p'));
    const el: HTMLElement = de.nativeElement;

    // Assert.
    expect(el.innerHTML).toEqual(post.description);
  });

  it('should display date in card-footer and be formated as MMM DD, YYYY ', () => {
    // Arrange.
    const de = fixture.debugElement.query(By.css('.card-footer> div:nth-child(1)'));
    const el: HTMLElement = de.nativeElement;

    // Assert.
    expect(el.innerHTML).toEqual('Aug 27, 2017');
  });

  it('should display price in card-footer and be formated as Price: €XXX,xx', () => {
    // Arrange.
    const de = fixture.debugElement.query(By.css('.card-footer> div:nth-child(2)'));
    const el: HTMLElement = de.nativeElement;

    // Assert.
    expect(el.innerHTML).toEqual('Price: €100,000.00');
  });

  it('Link should contain correct path', () => {
    // Arrange.
    const de = fixture.debugElement.query(By.css('a'));
    const el: HTMLElement = de.nativeElement;

    el.click();

    const mockLinkEl = fixture.debugElement.query(By.directive(RouterLinkStubDirective));
    const mockLinkCmp = mockLinkEl.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective;

    // Assert.
    expect(mockLinkCmp.navigatedTo).toEqual(['/posts', post.$key]);
  });

});
