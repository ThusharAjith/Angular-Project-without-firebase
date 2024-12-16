import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ContactComponent } from './user/contact/contact.component';
import { CartComponent } from './user/cart/cart.component';
import { FooterComponent } from './user/footer/footer.component';
import { ProfileComponent } from './user/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CartComponent,
    FooterComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule //user module is imported here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
