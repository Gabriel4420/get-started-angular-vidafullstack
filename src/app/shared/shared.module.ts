import { Input, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

//Components
import { InputComponent } from './input/input.component'
import { OutputComponent } from './output/output.component'
import { FoodListComponent } from './food-list/food-list.component'
import { FoodAddComponent } from './food-add/food-add.component'

@NgModule({
  declarations: [
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    InputComponent,
    OutputComponent,
    FoodListComponent,
    FoodAddComponent,
  ],
})
export class SharedModule {}
