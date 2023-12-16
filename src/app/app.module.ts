import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Routing module for handling navigation
import { AppComponent } from './app.component'; // Root component of your application
import { MapComponent } from './map/map.component'; // Custom component for displaying maps
import { NavbarComponent } from './navbar/navbar.component'; // Custom component for the navigation bar
import { InformationComponent } from './information/information.component'; // Custom component to display country information
import { HttpClientModule } from '@angular/common/http'; // Module to handle HTTP requests

@NgModule({
  declarations: [
    // Components that belong to this module
    AppComponent,
    MapComponent,
    NavbarComponent,
    InformationComponent
  ],
  imports: [
    // Other Angular modules whose exported classes are needed by component templates declared in this module
    BrowserModule, // Provides services that are essential to launch and run a browser app
    AppRoutingModule, // Contains the set of routable views and their paths (defined in app-routing.module.ts)
    HttpClientModule // Enables the HTTP services for the whole application
  ],
  providers: [], // Used to register service providers at the root level
  bootstrap: [AppComponent] // The main application view, called the root component, that hosts all other app views
})
export class AppModule { }
