import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component'; // Importing the MapComponent

const routes: Routes = [
  // Define the default route with an empty path
  // When the app is accessed with no specific path, it will navigate to the MapComponent
  { path: '', component: MapComponent },
];

@NgModule({
  imports: [
    // Configure the router at the application's root level by passing the routes to RouterModule.forRoot
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] // Export RouterModule so it will be available throughout the app
})
export class AppRoutingModule { }
