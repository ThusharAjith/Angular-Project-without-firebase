import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';

// Firebase modules
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

// routes are being defined here
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'featured', component: FeaturedProductsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'shopnow', component: FeaturedProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [
    NavBarComponent,
    AboutUsComponent,
    FeaturedProductsComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize Firebase
    AngularFireAuthModule, // Import Firebase Auth Module
    AngularFirestoreModule, // Import Firestore Module
  ],
  exports: [
    NavBarComponent,
    AboutUsComponent,
    FeaturedProductsComponent,
    HomeComponent,
    RouterModule, // to be used in other modules
  ],
})
export class UserModule { }
