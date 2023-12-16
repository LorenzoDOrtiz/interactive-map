import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../shared/map.service'; // Importing the MapService
import { CountryService } from '../country.service'; // Importing the CountryService
import { Subscription } from 'rxjs'; // Importing Subscription from rxjs for managing observables

@Component({
  selector: 'app-information', // The CSS selector for this component
  templateUrl: './information.component.html', // The HTML template for this component
  styleUrls: ['./information.component.css'] // The CSS file for styling this component
})
export class InformationComponent implements OnInit, OnDestroy {
  private countrySubscription: Subscription; // Subscription to handle observable unsubscription
  public countryInfo: any; // Public property to store country information

  // Constructor to inject the MapService and CountryService
  constructor(
    private mapService: MapService,
    private countryService: CountryService
  ) {}

  // OnInit lifecycle hook to subscribe to the countrySelected observable
  ngOnInit() {
    this.countrySubscription = this.mapService.countrySelected$.subscribe(countryCode => {
      this.updateCountryInfo(countryCode); // Calls updateCountryInfo when a country is selected
    });
  }

  // OnDestroy lifecycle hook to unsubscribe from the observable
  ngOnDestroy() {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }
  }

  // Method to update the country information
  updateCountryInfo(countryCode: string) {
    this.countryService.getCountryData(countryCode).subscribe(
      data => {
        if (data && data.length > 1 && data[1].length > 0) {
          this.countryInfo = data[1][0]; // Assuming the country info is in this part of the response
        } else {
          this.countryInfo = null; // Handle case where no data is returned
        }
      },
      error => {
        console.error('Error fetching country data:', error); // Logging any error that occurs during the fetch
        this.countryInfo = null; // Setting countryInfo to null in case of error
      }
    );
  }
}
