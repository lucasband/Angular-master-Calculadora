import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
@Output() calculate = new EventEmitter<{
   initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
}>()
EnteredInitialInvestment = '0';
EnteredAnnualInvestment = '0';
EnteredExpectedReturn = '5';
EnteredDuration = '10';

onSubmit(){
  console.log('Fall')
  this.calculate.emit({
     initialInvestment: +this.EnteredInitialInvestment,
    duration: +this.EnteredAnnualInvestment,
    expectedReturn: +this.EnteredExpectedReturn,
    annualInvestment: +this.EnteredDuration,
  })
}
}
