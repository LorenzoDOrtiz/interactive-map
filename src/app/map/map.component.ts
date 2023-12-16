import { Component } from '@angular/core';
import { MapService } from '../shared/map.service'; // Importing the MapService

@Component({
  selector: 'app-map', // The CSS selector for this component
  templateUrl: './map.component.svg', // The SVG file used as a template for this component
  styleUrls: ['./map.component.css'] // The CSS file for styling this component
})
export class MapComponent {
  private lastClickedPath: SVGElement | null = null; // Stores the last clicked SVG path element
  private defaultColor: string = ''; // Default color for SVG paths, set this to your preferred default color

  constructor(private mapService: MapService) {} // Injecting MapService for component communication

  // Method to change the color of a clicked SVG path element
  changeColor(event: MouseEvent) {
    const target = event.target as SVGElement; // Cast the event target to SVGElement

    // Do nothing if the same path is clicked again
    if (this.lastClickedPath === target) {
      return;
    }

    // Reset the color of the previously clicked path, if any
    if (this.lastClickedPath) {
      this.lastClickedPath.style.fill = this.defaultColor;
    }

    // Check if the clicked target is an SVG element and has an ID
    if (target && target.id) {
      // Generate a random RGB color
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const randomColor = `rgb(${r}, ${g}, ${b})`;

      // Change the fill color of the clicked SVG element
      target.style.fill = randomColor;

      // Update the reference to the last clicked path
      this.lastClickedPath = target;

      // Notify other components (through MapService) about the selected country
      this.mapService.selectCountry(target.id);
    }
  }
}
