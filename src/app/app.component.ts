import { Component, ViewChild } from '@angular/core';
import { InformationComponent } from './information/information.component'; 

@Component({
  selector: 'app-root', // The CSS selector that represents this component
  templateUrl: './app.component.html', // The location of the component's template file
  styleUrls: ['./app.component.css'] // The location of the component's private CSS styles
})
export class AppComponent {
  title = 'd280_app'; // Property for the title, can be used in the template

  // ViewChild decorator to access the InformationComponent instance
  // This allows for direct interaction with the InformationComponent
  @ViewChild(InformationComponent, { static: false }) infoComponent: InformationComponent;

  // Method to handle country selection
  // It's called when a country is selected in the map component
  onCountrySelected(countryCode: string) {
    // Checks if the InformationComponent instance is available
    if (this.infoComponent) {
      // Calls the updateCountryInfo method of InformationComponent to update its data
      this.infoComponent.updateCountryInfo(countryCode);
    }
  }
}
