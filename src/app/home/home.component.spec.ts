import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DebugElement, DestroyRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Favorite, FavoriteCategory } from '../favorites/favorite.model';
import { setupTestData } from '../common-tests/setup-test-data';
import { FavoritesService } from '../favorites/favorite-service/favorites.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: DebugElement;
  let favoritesService: jasmine.SpyObj<FavoritesService>;
  let destroyRef: jasmine.SpyObj<DestroyRef>;
  let favorites: Favorite[];

  beforeEach(async () => {
    const favoritesServiceSpy = jasmine.createSpyObj('FavoritesService', [
      'getNumberOfFavoriteMovies',
      'getNumberOfFavoriteBooks',
    ]);
    const destroyRefSpy = jasmine.createSpyObj('DestroyRef', ['onDestroy']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: FavoritesService, useValue: favoritesServiceSpy },
        { provide: DestroyRef, useValue: destroyRefSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    favoritesService = TestBed.inject(
      FavoritesService
    ) as jasmine.SpyObj<FavoritesService>;
    destroyRef = TestBed.inject(DestroyRef) as jasmine.SpyObj<DestroyRef>;

    favorites = setupTestData();
  });

  it('should create the component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should have header with title 'Simple Fav Summary'`, () => {
    const headerEl = element.query(By.css('h2'))
      .nativeElement as HTMLHeadingElement;
    expect(headerEl.textContent).toBe('Simple Fav Summary');
  });

  it(`should have container with 'main-container' class`, () => {
    const divEl = element.query(By.css('.main-container'))
      .nativeElement as HTMLDivElement;
    expect(divEl).toBeTruthy();
  });

  it(`should have mat-card with subtitles: 'Number of favorites movies' and 'Number of favorites books'`, () => {
    const subtitles = [
      'Number of favorites movies',
      'Number of favorites books',
    ];
    const matCardSubTitleElements = element.queryAll(
      By.css('mat-card-subtitle')
    );
    matCardSubTitleElements.forEach((subtitle, index) => {
      const el = subtitle.nativeElement;
      expect(el.textContent).toBe(subtitles[index]);
    });
  });

  it('should call the FavoritesService methods on init', () => {
    const moviesResponse = favorites.filter(
      (fav) => fav.category === FavoriteCategory.Book
    ).length;
    const booksResponse = favorites.filter(
      (fav) => fav.category === FavoriteCategory.Movie
    ).length;

    favoritesService.getNumberOfFavoriteMovies.and.returnValue(
      of(moviesResponse)
    );
    favoritesService.getNumberOfFavoriteBooks.and.returnValue(
      of(booksResponse)
    );

    fixture.detectChanges();

    expect(favoritesService.getNumberOfFavoriteMovies).toHaveBeenCalled();
    expect(favoritesService.getNumberOfFavoriteBooks).toHaveBeenCalled();
  });

  it(`should display correct number of favorites movies and books`, () => {
    component.numberOfFavoritesBooks = favorites.filter(
      (fav) => fav.category === FavoriteCategory.Book
    ).length;
    component.numberOfFavoritesMovies = favorites.filter(
      (fav) => fav.category === FavoriteCategory.Movie
    ).length;

    fixture.detectChanges();

    const noOfMatCardTitleElements = element.queryAll(By.css('mat-card-title'));

    expect(noOfMatCardTitleElements.length).toBe(2);
    expect(noOfMatCardTitleElements[0].nativeElement.textContent).toBe('7'); //movies
    expect(noOfMatCardTitleElements[1].nativeElement.textContent).toBe('6'); //books
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = spyOn(component['destroyRef'], 'onDestroy');

    fixture.detectChanges();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });
});
