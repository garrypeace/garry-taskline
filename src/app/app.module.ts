import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurfaceComponent } from './surface/surface.component';
import { ItemComponent } from './item/item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutofocusDirective } from './shared/directives/autofocus/autofocus.directive';
import { HeaderComponent } from './header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PostponeChoiceComponent } from './postpone-choice/postpone-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    SurfaceComponent,
    ItemComponent,
    AutofocusDirective,
    HeaderComponent,
    PostponeChoiceComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatButtonToggleModule,
  ],
})
export class AppModule {}
