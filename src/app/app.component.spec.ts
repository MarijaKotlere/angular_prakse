import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterOutlet, RouterModule],
      providers: [provideRouter(routes)]
    }).compileComponents()
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'photographer-portfolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('photographer-portfolio');
  });

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('nav.fixed-nav ul li a');

    expect(navLinks.length).toBe(5);  // Проверяем, что есть 5 ссылок
    expect(navLinks[0].textContent).toContain('Home');
    expect(navLinks[1].textContent).toContain('About me');
    expect(navLinks[2].textContent).toContain('Services');
    expect(navLinks[3].textContent).toContain('Gallery');
    expect(navLinks[4].textContent).toContain('Contacts');
  });
});
