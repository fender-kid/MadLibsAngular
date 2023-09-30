import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-logic',
  templateUrl: './my-logic.component.html',
  styleUrls: ['./my-logic.component.css']
})
export class MyLogicComponent implements OnInit {
  // Variables for user input.
  adj1: string = '';
  noun1: string = '';
  adj2: string = '';
  clothing: string = '';
  bodyPart: string = '';
  verb1: string = '';
  food: string = '';

  // Variable to display the mad lib
  madLibDisplay: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Method to be called on form submission
  onFormSubmit(): void {
    if (this.isFormValid()) {
      this.madLibStoryDisplay();
    }
  }

  // Method to check form validity
  isFormValid(): boolean {
    const fields = [this.adj1, this.noun1, this.adj2, this.clothing, this.bodyPart, this.verb1, this.food];
    for (const field of fields) {
      if (!field) {
        alert('All fields must be filled out!');
        return false;
      }
    }
    return true;
  }

  // Method to display the mad lib story
  madLibStoryDisplay(): void {
    const story = `My friends and I started a secret club! We meet every day by the <b>${this.adj1}</b> <b>${this.noun1}</b>. Our club has some very special rules. If you want to join, you have to wear a <b>${this.adj2}</b> <b>${this.clothing}</b> on your <b> ${this.bodyPart}</b>. You are not allowed to <b>${this.verb1}</b> during meetings, and you can only eat <b>${this.food}</b> for your meals. If you are interested in joining, let me know!`;
    this.madLibDisplay = story;
  }
}
