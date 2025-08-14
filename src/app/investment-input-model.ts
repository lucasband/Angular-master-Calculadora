export interface investmentInput {
  initialInvestment: number;
  annualInvestment: number; 
  expectedReturn: number;
  duration: number;
}

export interface results {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};
