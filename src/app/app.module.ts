import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeadingComponent } from './heading/heading.component'
import { DatabindingComponent } from './databinding/databinding.component'
import { FormsModule } from '@angular/forms'
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component'
import { DiretivasAtributesComponent } from './diretivas-atributes/diretivas-atributes.component'
import { SharedModule } from './shared/shared.module';
import { FormsComponent } from './forms/forms.component'

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    DatabindingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributesComponent,
    FormsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
