import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
EnteredInitialInvestment = '0';
EnteredAnnualInvestment = '0';
EnteredExpectedReturn = '5';
EnteredDuration = '10';

onSubmit(){
  console.log('submitted')
}
}
