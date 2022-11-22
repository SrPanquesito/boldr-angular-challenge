import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
    constructor() {}

    public darkMode: boolean = false;

    init() {
        this.setBodyDarkmode();
    }

    setBodyDarkmode() {
        document.body.style.backgroundColor = this.darkMode ? "rgb(9, 10, 11)" : "rgb(246, 247, 248)";
        return document.body.style.backgroundColor
    }

    toggleDarkmode() {
        this.darkMode = !this.darkMode;
        this.setBodyDarkmode();
        return this.darkMode
    }
}