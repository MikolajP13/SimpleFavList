import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
      });
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'SimpleFavLists' title`, () => {
    expect(component.title).toEqual('SimpleFavLists');
  });

  it(`should have a container with the class 'app-container'`, () => {
    const divContainer = element.query(By.css('.app-container'));
    expect(divContainer).toBeTruthy();
  });

  it(`it should have header and content div inside the container`, () => {
    const appHeaderEl = element.query(By.css('.app-container > .header'));
    const routerOutletEl = element.query(By.css('.app-container > .content'));
    expect(appHeaderEl).toBeTruthy();
    expect(routerOutletEl).toBeTruthy();
  });

  it('should include app-header in the DOM', () => {
    const appHeaderEl = element.query(By.css('app-header'));
    expect(appHeaderEl).toBeTruthy();
  });

  it('should have router-outlet in the DOM', () => {
    const routerOutletEl = element.query(By.css('router-outlet'));
    expect(routerOutletEl).toBeTruthy();
  });
});
