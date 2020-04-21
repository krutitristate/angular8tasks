import { Injectable } from "@angular/core";
import { Theme, light, dark } from "./../task5/task5";

@Injectable({
  providedIn: "root"
})

export class Task5Service {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  /**
   * @name getAvailableThemes
   * @desc returns the available theme
  */
  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  /**
   * @name getActiveTheme
   * @desc returns the active them
  */
  getActiveTheme(): Theme {
    return this.active;
  }

  /**
   * @name isDarkTheme
   * @desc returns boolen value by verifying dark theme
  */
  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  /**
   * @name isDarkTheme
   * @desc set active theme as dark theme
  */
  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  /**
   * @name setLightTheme
   * @desc set active theme as light theme
  */
  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  /**
   * @name setActiveTheme
   * @desc set active theme as per theme paramter
   * @param theme {Theme}
  */
  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}