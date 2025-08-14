import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
EnteredInitialInvestment = signal('0');
EnteredAnnualInvestment = signal('0');
EnteredExpectedReturn = signal('5');
EnteredDuration = signal('10');

constructor(private investmentService: InvestmentService){}

onSubmit(){
  console.log('Fall')
  this.investmentService.calculateInvestmentResults({
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
