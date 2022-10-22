import { Component, OnInit } from '@angular/core'
import { Foodlist } from 'src/app/module/foodlist'
//Services

import { FoodlistService } from 'src/app/services/foodlist.service'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Foodlist | any = []

  constructor(private foodlistService: FoodlistService) {}

  ngOnInit(): void {
    this.foodlistService.foodList().subscribe({
      next: (res) => (this.foodList = res),
      error: (err) => err,
    })
    this.foodlistService.emitEvent.subscribe({
      next: (res: Foodlist) => {
        alert(`Você adicionou ${res.nome} na sua lista de comida !`)
        return this.foodList.push(res)
      },
    })
  }

  public deleteFood(id: number) {
    return this.foodlistService.foodListDelete(id).subscribe({
      next: (_) => {
        this.foodList = this.foodList.filter((item: Foodlist) => {
          return id !== item.id
        })
      },
      error: (error) => error,
    })
  }

  public editFood(value: string, id: number) {
    return this.foodlistService.foodListEdit(value, id).subscribe({
      next: (res) => {
        return console.log(res)
      },
      error: (error) => error,
    })
  }
}
