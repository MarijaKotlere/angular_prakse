import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponent]
    }).compileComponents()
    .then(async () => {
      fixture = await TestBed.createComponent(ServicesComponent);
      component = fixture.componentInstance;  
    });
  });

  // beforeEach(() => {
  // });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    console.log(component);
  });
  
  it('should render the Services heading', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const heading = compiled.querySelector('h2');
    expect(heading).toBeTruthy(); // Check if heading element exists
    expect(heading.textContent).toContain('Services');
  });

  it('should render the portrait photography section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const portraitPhotography = compiled.querySelector('.portrait-photography');
    expect(portraitPhotography).toBeTruthy(); // Check if portrait photography section exists
    expect(portraitPhotography.textContent).toContain('Portrait Photography');
  });

  it('should render the wedding photography section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const weddingPhotography = compiled.querySelector('.wedding-photography');
    expect(weddingPhotography).toBeTruthy(); // Check if wedding photography section exists
    expect(weddingPhotography.textContent).toContain('Wedding Photography');
  });

  it('should render the event photography section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const eventPhotography = compiled.querySelector('.event-photography');
    expect(eventPhotography).toBeTruthy(); // Check if event photography section exists
    expect(eventPhotography.textContent).toContain('Event Photography');
  });

  it('should render the landscape photography section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const landscapePhotography = compiled.querySelector('.landscape-photography');
    expect(landscapePhotography).toBeTruthy(); // Check if landscape photography section exists
    expect(landscapePhotography.textContent).toContain('Landscape Photography');
  });

  it('should render the product photography section', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const productPhotography = compiled.querySelector('.product-photography');
    expect(productPhotography).toBeTruthy(); // Check if product photography section exists
    expect(productPhotography.textContent).toContain('Product Photography');
  });
});
