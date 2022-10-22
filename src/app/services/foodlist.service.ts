import { HttpClient } from '@angular/common/http'
import { EventEmitter, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Foodlist } from '../module/foodlist'

@Injectable({
  providedIn: 'root',
})
export class FoodlistService {
  public emitEvent = new EventEmitter()

  //http://localhost:3000/list-food

  private list: Array<string> = ['x-bacon', 'feijao', 'ovo']

  private url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  /* public foodList() {
    return this.list
  } */

  public foodList(): Observable<Foodlist> {
    return this.http.get<Foodlist>(`${this.url}list-food`).pipe(
      (res) => res,
      (err) => err,
    )
  }

  public foodListAdd(value: string): Observable<Foodlist> {
    return this.http
      .post<Foodlist>(`${this.url}list-food`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error,
      )
  }

  public foodListAlert(value: Foodlist) {
    return this.emitEvent.emit(value)
  }

  public foodListEdit(value: string, id: number) {
    return this.http
      .put<Foodlist>(`${this.url}list-food/${id}`, { nome: value })
      .pipe(
        (res) => res,
        (error) => error,
      )
  }

  public foodListDelete(id: number) {
    return this.http.delete<Foodlist>(`${this.url}list-food/${id}`).pipe(
      (res) => res,
      (error) => error,
    )
  }
}
