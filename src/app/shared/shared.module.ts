import { Input, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InputComponent } from './input/input.component'
import { FormsModule } from '@angular/forms'
import { OutputComponent } from './output/output.component'

@NgModule({
  declarations: [InputComponent, OutputComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent, OutputComponent],
})
export class SharedModule {}
