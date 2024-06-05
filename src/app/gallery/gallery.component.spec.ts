import { TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
    }).compileComponents();
  });

  it('should create the gallery component', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render four images', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const images = compiled.querySelectorAll('img');
    expect(images.length).toBe(4);
  });

  it('should render the first image with correct src and alt attributes', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img[src="assets/images/image-photographer-2.jpg"]') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.alt).toBe('Photo 2');
  });

  it('should render the second image with correct src and alt attributes', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img[src="assets/images/image-photographer-11.jpg"]') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.alt).toBe('Photo 11');
  });

  it('should render the third image with correct src and alt attributes', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img[src="assets/images/image-photographer-12.jpg"]') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.alt).toBe('Photo 12');
  });

  it('should render the fourth image with correct src and alt attributes', () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img[src="assets/images/image-photographer-13.jpg"]') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.alt).toBe('Photo 13');
  });
});
