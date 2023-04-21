import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, finalize, tap } from 'rxjs';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading$.next(true);
    this.categoriesService.getCategoryList()
      .pipe(
        tap((response) => {
          this.categories = response
        }),
        catchError(() => {
          return [];
        }),
        finalize(() => {
          this.loading$.next(false);
        })
      )
      .subscribe();
  }

  openCategory(_id: string): void {
    this.router.navigate(['category/', _id]);
  }
}
