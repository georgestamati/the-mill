import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient  ) { }

  getProductList() {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer 59945ae221ec46828fb36f45d30119c9`)

    return this.http.post<any>(`https://api.takeshape.io/project/a1f89b36-7924-459d-9f5b-66f3cc87b16e/production/graphql`,
        {
          query:`query{
            getProductList{
              items{
                category{
                  title
                  _id
                }
                price
                name
                description
                image{
                  title
                  sourceUrl
                }
                _id
              }
            }
          }`
        },
        {headers}
      )
      .pipe(
        map((products) => products.data.getProductList.items)
      );
  }

  getProduct(id: string) {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer 59945ae221ec46828fb36f45d30119c9`)

    return this.http.post<any>(`https://api.takeshape.io/project/a1f89b36-7924-459d-9f5b-66f3cc87b16e/production/graphql`,
      {
        query: `query ($id: ID!){
          getProduct(_id: $id){
            category{
              title
              _id
            }
            price
            name
            description
            image{
              title
              sourceUrl
            }
            _id
          }
        }`,
        variables: { id }
      },
      {headers}
    )
    .pipe(
      map((product) => product.data.getProduct),
    )
  }
}
