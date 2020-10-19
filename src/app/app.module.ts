import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponenteComponent } from './componente/componente.component';
import { UserComponent } from './user/user.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MyPipePipe } from './pipes/my-pipe/my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    UserComponent,
    UserCardComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
