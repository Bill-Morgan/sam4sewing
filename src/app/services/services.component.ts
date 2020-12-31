import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  leftItems = [
    "Wedding Gowns",
    "Bride’s Maids’ Dresses",
    "Mothers’ Dresses",
    "Flower Girls’ Dresses",
    "Formal/Prom Dresses",
    "Beaded Dresses",
    "Pregnancy Alterations",
    "Corsets Added",
    "Custom Veils",
    "Dress Steaming",
    "Men’s Alterations",
    "Suits",
    "Skirts and Slacks",
    "Shirts",
    "Jeans Repair",
    "Waist in/out",
    "Crotch in/out",
    "Sides in/out"]

    rightItems = [
      "Shorten Shoulders",
      "Shorten Sleeves",
      "Hems by Hand or Machine",
      "Hems w/ Cuff",
      "Replace Lining",
      "Button Repairs",
      "Button Holes",
      "Taper Sleeves",
      "Shorten Coat",
      "Repair Jeans",
      "Lower Collar",
      "Shorten Collar",
      "Replace Zippers",
      "Taper legs",
      "Mending Work",
      "Slip Rentals",
      "Custom Craft Items",
      "Memorial Bears",
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
