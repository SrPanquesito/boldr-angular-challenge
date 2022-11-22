import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
    constructor() {}

    public darkMode: boolean = false;

    init() {
        this.checkDarkmode();
        this.setBodyDarkmode();
    }

    checkDarkmode() {
        this.darkMode = localStorage.getItem('theme') === 'dark' ? true : false;
    }

    setBodyDarkmode() {
        document.body.style.backgroundColor = this.darkMode ? "rgb(9, 10, 11)" : "rgb(246, 247, 248)";
        return document.body.style.backgroundColor
    }

    toggleDarkmode() {
        localStorage.getItem('theme') === 'dark' ? localStorage.removeItem('theme') : localStorage.setItem('theme', 'dark');
        this.checkDarkmode();
        this.setBodyDarkmode();
        return this.darkMode
    }
}