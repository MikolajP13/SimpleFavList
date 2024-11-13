import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  DialogMode,
  Favorite,
  FavoriteDialogData,
  FavoriteForm,
  FavoriteNewEdit,
} from '../favorite.model';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogRef,
} from '@angular/material/dialog';
import { LowerCasePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FavoritesService } from '../favorite-service/favorites.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-favorite-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatIconModule,
    MatButtonModule,
    LowerCasePipe,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './favorite-dialog.component.html',
  styleUrl: './favorite-dialog.component.css',
})
export class FavoriteDialogComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<FavoriteDialogComponent>);
  private favoritesService = inject(FavoritesService);
  private destroyRef = inject(DestroyRef);
  data = inject<FavoriteDialogData>(MAT_DIALOG_DATA);
  favForm!: FormGroup<FavoriteForm>;

  titleErrorMessage = signal('');
  creatorErrorMessage = signal('');
  releaseYearErrorMessage = signal('');
  descriptionErrorMessage = signal('');
  imgUrlErrorMessage = signal('');

  get favControls() {
    return this.favForm.controls;
  }

  ngOnInit(): void {
    this.initFavForm(this.data.favorite);

    const subscription = merge(
      this.favControls.title.statusChanges,
      this.favControls.title.valueChanges,
      this.favControls.creator.statusChanges,
      this.favControls.creator.valueChanges,
      this.favControls.releaseYear.statusChanges,
      this.favControls.releaseYear.valueChanges,
      this.favControls.description.statusChanges,
      this.favControls.description.valueChanges,
      this.favControls.imgUrl.statusChanges,
      this.favControls.imgUrl.valueChanges
    ).subscribe(() => this.updateErrorMessage());

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSubmit() {
    const favorite: FavoriteNewEdit = {
      category: this.data.favoriteCategory,
      creator: this.favForm.value.creator!,
      releaseYear: this.favForm.value.releaseYear!,
      title: this.favForm.value.title!,
      description: this.favForm.value.description!,
      imgUrl: this.favForm.value.imgUrl!,
    };

    if (this.data.dialogMode === DialogMode.New) {
      this.favoritesService.postFavorite(favorite).subscribe();
    } else if (this.data.dialogMode === DialogMode.Edit) {
      this.favoritesService
        .putFavorite(this.data.favorite.id, favorite)
        .subscribe();
    }

    this.onClose();
  }

  onClose() {
    this.dialogRef.close();
  }

  updateErrorMessage() {
    if (this.favControls.title.hasError('required')) {
      this.titleErrorMessage.set('Title is required');
    } else {
      this.titleErrorMessage.set('');
    }

    if (this.favControls.creator.hasError('required')) {
      this.creatorErrorMessage.set('Creator is required');
    } else {
      this.creatorErrorMessage.set('');
    }

    if (this.favControls.releaseYear.hasError('required')) {
      this.releaseYearErrorMessage.set('Year is required');
    } else {
      this.releaseYearErrorMessage.set('');
    }

    if (this.favControls.description.hasError('required')) {
      this.descriptionErrorMessage.set('Description is required');
    } else {
      this.descriptionErrorMessage.set('');
    }

    if (this.favControls.imgUrl.hasError('required')) {
      this.imgUrlErrorMessage.set('Image is required');
    } else {
      this.imgUrlErrorMessage.set('');
    }
  }

  private initFavForm(fav: Favorite) {
    this.favForm = new FormGroup({
      creator: new FormControl(fav ? fav.creator : '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      releaseYear: new FormControl(fav ? fav.releaseYear : '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      title: new FormControl(fav ? fav.title : '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      description: new FormControl(fav ? fav.description : '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      imgUrl: new FormControl(fav ? fav.imgUrl : '', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
}
