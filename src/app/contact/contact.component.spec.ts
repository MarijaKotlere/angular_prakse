import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();
  });

  it('should create the contact component', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the title', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('My Contacts');
  });

  it('should render the contact instruction', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Contact me by email or on Instagram');
  });

  it('should render the email address', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p:nth-of-type(2)')?.textContent).toContain('Email: jane.doe@gmail.com');
  });

  it('should render the Instagram handle', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p:nth-of-type(3)')?.textContent).toContain('Instagram: photo.world_official');
  });

  it('should render the contact image', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.src).toContain('assets/images/image-photographer-3.jpg');
    expect(img.alt).toBe('Photo 3');
  });
});
it('should render the comment form', () => {
  const fixture = TestBed.createComponent(ContactComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('form')).toBeTruthy();
  expect(compiled.querySelector('label[for="name"]')?.textContent).toContain('Username:');
  expect(compiled.querySelector('label[for="comment"]')?.textContent).toContain('Your comment:');
  expect(compiled.querySelector('button[type="submit"]')?.textContent).toContain('Submit');
});
it('should render comments and delete buttons', () => {
  const fixture = TestBed.createComponent(ContactComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  const commentList = compiled.querySelectorAll('ul li');
  expect(commentList.length).toBeGreaterThan(0);
  commentList.forEach((comment, index) => {
    expect(comment.querySelector('button')?.textContent).toContain('Delete');
    expect(comment.querySelector('span')?.textContent).toMatch(/^[^:]+: .+/);
  });
});
it('should add a new comment', () => {
  const fixture = TestBed.createComponent(ContactComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  const nameInput = compiled.querySelector('input#name') as HTMLInputElement;
  const commentInput = compiled.querySelector('input#comment') as HTMLInputElement;
  const submitButton = compiled.querySelector('button[type="submit"]') as HTMLButtonElement;

  nameInput.value = 'John Doe';
  nameInput.dispatchEvent(new Event('input'));
  commentInput.value = 'This is a test comment';
  commentInput.dispatchEvent(new Event('input'));
  
  submitButton.click();
  fixture.detectChanges();

  const commentList = compiled.querySelectorAll('ul li');
  const lastComment = commentList[commentList.length - 1];
  expect(lastComment.querySelector('span')?.textContent).toContain('John Doe: This is a test comment');
});
it('should delete a comment', () => {
  const fixture = TestBed.createComponent(ContactComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  const initialCommentCount = compiled.querySelectorAll('ul li').length;
  const deleteButton = compiled.querySelector('ul li button') as HTMLButtonElement;

  deleteButton.click();
  fixture.detectChanges();

  const updatedCommentCount = compiled.querySelectorAll('ul li').length;
  expect(updatedCommentCount).toBe(initialCommentCount - 1);
});