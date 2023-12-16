import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This service is provided in the root module, making it available throughout the app
})
export class CountryService {
  private apiUrl = 'https://api.worldbank.org/v2/country/'; // Base URL for the World Bank Country API

  // Injecting the HttpClient service to make HTTP requests
  constructor(private http: HttpClient) {}

  /**
   * Fetches data for a specific country from the World Bank API.
   * 
   * @param countryCode The ISO country code for which to retrieve data.
   * @returns An Observable that emits the fetched data.
   */
  getCountryData(countryCode: string): Observable<any> {
    // Construct the URL with the country code and request format, then make the GET request
    return this.http.get<any>(`${this.apiUrl}${countryCode}?format=json`);
  }
}
