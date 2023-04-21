import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
    private http: HttpClient  ) { }

  getCategoryList() {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer 59945ae221ec46828fb36f45d30119c9`)

    return this.http.post<any>(
      `https://api.takeshape.io/project/a1f89b36-7924-459d-9f5b-66f3cc87b16e/production/graphql`,
      {
        query : `query{
          getCategoryList {
            items {
              title
              _id
            }
          }
        }`
      },
      {headers}
    ).pipe(
      map((categories) => categories.data.getCategoryList.items),
    )
  }
}
