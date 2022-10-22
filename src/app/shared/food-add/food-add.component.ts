import { Component, OnInit } from '@angular/core'
import { FoodlistService } from 'src/app/services/foodlist.service'

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss'],
})
export class FoodAddComponent implements OnInit {
  constructor(private addfood: FoodlistService) {}

  ngOnInit(): void {}

  public listAddItem(value: string) {
    return this.addfood.foodListAdd(value)
  }
}
