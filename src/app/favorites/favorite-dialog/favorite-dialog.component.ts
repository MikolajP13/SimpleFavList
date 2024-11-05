import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Favorite, FavoriteDialogData } from '../favorite.model';
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
  data = inject<FavoriteDialogData>(MAT_DIALOG_DATA);
  favForm!: FormGroup;

  ngOnInit(): void {
    this.initFavForm(this.data.favorite);
  }

  onSubmit() {
    console.log('submitted');
  }

  onClose() {
    this.dialogRef.close();
  }

  private initFavForm(fav: Favorite) {
    this.favForm = new FormGroup({
      creator: new FormControl(fav ? fav.creator : '', {
        validators: [Validators.required],
      }),
      releaseYear: new FormControl(fav ? fav.releaseYear : '', {
        validators: [Validators.required],
      }),
      title: new FormControl(fav ? fav.title : '', {
        validators: [Validators.required],
      }),
      description: new FormControl(fav ? fav.description : '', {
        validators: [Validators.required],
      }),
      imgUrl: new FormControl(fav ? fav.imgUrl : '', {
        validators: [Validators.required],
      }),
    });
  }
}
