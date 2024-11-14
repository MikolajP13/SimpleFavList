import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { routes } from '../app.routes';
import { provideHttpClient } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element: DebugElement;
  let router: Router;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter(routes), provideHttpClient()],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        router = TestBed.inject(Router);
        component = fixture.componentInstance;
        element = fixture.debugElement;
      });
    harness = await RouterTestingHarness.create();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'Simple Fav' title`, () => {
    const title = element.query(By.css('.toolbar > span'))
      .nativeElement as HTMLSpanElement;
    expect(title.textContent).toBe('Simple Fav');
  });

  it('should have three buttons', () => {
    const buttonCounter = element.queryAll(By.css('button')).length;
    expect(buttonCounter).toBe(3);
  });

  it(`should have button with accurate labels`, () => {
    const spansText = ['Home', 'Favorites Movies', 'Favorites Books'];
    const spanElements = element.queryAll(
      By.css('button .mdc-button__label span')
    );

    spanElements.forEach((spanEl, index) => {
      console.log(spanEl);
      expect(spanEl.nativeElement.textContent).toBe(spansText[index]);
    });
  });

  it(`should have button with routerLink set to '/'`, () => {
    const homeButtonEl = element.query(By.css('button'));
    expect(homeButtonEl.attributes['routerLink']).toBe('/');
  });

  it(`should have accurate router links`, () => {
    const linksRoute = ['/', '/fav-movies', '/fav-books'];
    const links = element.queryAll(By.css('button'));

    links.forEach((link, index) => {
      const el = link.attributes['routerLink'];
      expect(el).toBe(linksRoute[index]);
    });
  });

  it(`should navigate to accurate links`, async () => {
    const linksRoute = ['/', '/fav-movies', '/fav-books'];

    for (let index = 0; index < linksRoute.length; index++) {
      await harness.navigateByUrl(linksRoute[index]);
      expect(router.url).toBe(linksRoute[index]);
    }
  });
});
