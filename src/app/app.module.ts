import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {InitLayoutComponent} from './pages/init-layout/init-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {CreateBookComponent} from './pages/create-book/create-book.component';
import {BookDetailComponent} from './pages/book-detail/book-detail.component';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ReactiveFormsModule} from '@angular/forms';
import {BookItemComponent} from './components/book-item/book-item.component';
import {NgxTextOverflowClampModule} from 'ngx-text-overflow-clamp/dist';

@NgModule({
  declarations: [
    AppComponent,
    InitLayoutComponent,
    HeaderComponent,
    CreateBookComponent,
    BookDetailComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    BrowserAnimationsModule,
    MatToolbarModule,
    StoreRouterConnectingModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    NgxTextOverflowClampModule,
    MatAutocompleteModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
