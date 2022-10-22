import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class FoodlistService {
  public emitEvent = new EventEmitter()

  private list: Array<string> = ['x-bacon', 'feijao', 'ovo']

  constructor() {}

  public foodList() {
    return this.list
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value)
    return this.list.push(value)
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value)
  }
}