import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './components/crib-listing/crib-listing.component';
import { CribCardComponent } from './components/crib-card/crib-card.component';

import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';

import { AddListingFormComponent } from './components/add-listing-form/add-listing-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CribsService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
