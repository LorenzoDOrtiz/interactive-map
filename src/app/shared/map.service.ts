import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This decorator marks the service as one that should be provided in the root injector, making it available throughout the app.
})
export class MapService {
  // Private Subject to act as the data source for country selection events.
  private countrySelectedSubject = new Subject<string>();
  
  // Public Observable that components can subscribe to for country selection events.
  // The Observable is derived from the Subject, making it possible to observe changes to the Subject.
  countrySelected$: Observable<string> = this.countrySelectedSubject.asObservable();

  // Method to trigger country selection events.
  // Components can call this method to emit a new country code, which will be picked up by any subscribers.
  selectCountry(countryCode: string) {
    this.countrySelectedSubject.next(countryCode);
  }
}
