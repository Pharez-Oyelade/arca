type mortgageInputTypes = {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
};

function calculateMortgage({
  homePrice,
  downPayment,
  interestRate,
  loanTerm,
}: mortgageInputTypes) {
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const totalPayment = loanTerm * 12;

  if (monthlyRate === 0) return loanAmount / totalPayment; //0% interest

  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayment))) /
    (Math.pow(1 + monthlyRate, totalPayment) - 1);

  return monthlyPayment;
}

export default calculateMortgage;
