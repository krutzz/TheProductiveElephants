import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { MockPostDirective } from './tests-mocks/mock-post.directive';
import { MostpoluarComponent } from './mostpoluar.component';
import { NewPostPipe } from '../pipes/transform-to-post/new-post.pipe';
import { Post } from './../../shared/models/post';
import { PostServiceMockService } from '../providers/posts-service-mock/post-service-mock.service';
import { PostsService } from '../providers/posts-service/Posts.service';
import { ReversePipe } from '../pipes/reverse/reverse.pipe';

const post = new Post({
  '$key': '-KsXmtFl4altqKAOtexA',
  'category': 'Cars',
  'date': 'Sun Aug 27 2017 11:25:17 GMT+0300 (FLE Daylight Time)',
  'description': 'No description',
  // tslint:disable-next-line:max-line-length
  'images': ['https://firebasestorage.googleapis.com/v0/b/nglx-98be4.appspot.com/o/posts%2FSun%20Aug%2027%202017%2011%3A25%3A17%20GMT%2B0300%20(FLE%20Daylight%20Time)_lambo1.jpg?alt=media&token=11f3fc4c-7a48-4e56-a016-7b511b2eb646'],
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

describe('MostpoluarComponent', () => {
  let component: MostpoluarComponent;
  let fixture: ComponentFixture<MostpoluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MostpoluarComponent,
        ReversePipe,
        NewPostPipe,
        MockPostDirective
      ],
      providers: [
        { provide: PostsService, useClass: PostServiceMockService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostpoluarComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain post component', () => {
    // Arrange.
    const mockPostEl = fixture.debugElement.query(By.directive(MockPostDirective));

    // Assert.
    expect(mockPostEl).toBeTruthy();
  });

  it('should pass down post element', () => {
    // Arrange.
    const mockPostEl = fixture.debugElement.query(By.directive(MockPostDirective));
    const mockTaskCmp = mockPostEl.injector.get(MockPostDirective) as MockPostDirective;

    // Assert.
    expect(mockTaskCmp.post).toBeTruthy();
    expect(mockTaskCmp.post).toEqual(post);
  });

});
