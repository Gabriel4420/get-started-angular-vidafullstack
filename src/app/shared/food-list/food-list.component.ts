import { Component, OnInit } from '@angular/core'
//Services

import { FoodlistService } from 'src/app/services/foodlist.service'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<string> = []

  constructor(private foodlistService: FoodlistService) {}

  ngOnInit(): void {
    this.foodList = this.foodlistService.foodList()
    this.foodlistService.emitEvent.subscribe({
      next: (res: string) =>
        alert(`Você adicionou ${res} na sua lista de comida !`),
    })
  }
}
