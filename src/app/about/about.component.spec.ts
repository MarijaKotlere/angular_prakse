import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { By } from '@angular/platform-browser';

describe('AboutMeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();
  });

  it('should create the about me component', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the welcome heading', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to My Portfolio');
  });

  it('should render the introductory paragraph', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraph = compiled.querySelector('p') as HTMLElement;
    expect(paragraph.textContent).toContain('Discover the art of photography through my lens.');
  });

  it('should render the example photo', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.src).toContain('assets/images/image-photographer-4.jpg');
    expect(img.alt).toBe('Example Photo');
  });

  it('should render the education heading', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraphs = compiled.querySelectorAll('p');
    expect(paragraphs[1].textContent).toBe('Education:');
  });

  it('should render the list of educational institutions', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll('ul li');
    expect(listItems.length).toBe(4);
    expect(listItems[0].textContent).toContain('New York Institute of Photography');
    expect(listItems[1].textContent).toContain('ArtCenter College of Design, Pasadena');
    expect(listItems[2].textContent).toContain('International Center of Photography, New York');
    expect(listItems[3].textContent).toContain('Royal College of Art, London');
  });
});
