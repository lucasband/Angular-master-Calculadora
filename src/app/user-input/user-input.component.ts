import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { investmentInput } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
calculate = output<investmentInput>()
EnteredInitialInvestment = signal('0');
EnteredAnnualInvestment = signal('0');
EnteredExpectedReturn = signal('5');
EnteredDuration = signal('10');

onSubmit(){
  console.log('Fall')
  this.calculate.emit({
     initialInvestment: +this.EnteredInitialInvestment(),
    duration: +this.EnteredAnnualInvestment(),
    expectedReturn: +this.EnteredExpectedReturn(),
    annualInvestment: +this.EnteredDuration(),
  })
  this.EnteredInitialInvestment.set('0')
  this.EnteredAnnualInvestment.set('0')
  this.EnteredExpectedReturn.set('5')
  this.EnteredDuration.set('10')
}
}
