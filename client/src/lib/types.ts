// Tax Form Data
export interface TaxFormData {
  filingStatus: "single" | "married" | "marriedSeparate" | "headOfHousehold";
  state: string;
  visaRestrictions: "no" | "yes" | "unknown";
  w2Income: number;
  llcProfit: number;
  sCorpProfit: number;
  capitalGains: number;
  otherIncome: number;
  itemizedDeductions: number;
  nolCarryforward: number;
  manualDonationUnits?: number;
}

// Current Tax Situation
export interface CurrentTaxResults {
  originalIncome: number; // Income before NOL application
  totalIncome: number; // Income after NOL application
  nolUsed: number;
  remainingNol: number;
  deductions: number;
  taxableIncome: number;
  federalTax: number;
  stateTax: number;
  capitalGainsTax: number;
  totalTax: number;
  effectiveTaxRate: number;
  existingBusinessLoss?: number;
  additionalNolFromEbl?: number;
}

// Strategy 1 (Leveraged Donations)
export interface Strategy1Results {
  units: number;
  contributionAmount: number;
  totalDeductions: number;
  deductionsUsed: number;
  deductionsCarriedForward: number;
  taxableIncome: number;
  federalTax: number;
  stateTax: number;
  capitalGainsTax: number;
  capitalGainsSavings: number;
  totalTax: number;
  roi: number;
}

// Strategy 2 (Solar Leasing)
export interface Strategy2Results {
  contributionAmount: number;
  federalDeductions: number;
  stateDeductions: number;
  futureStateDeductions: number;
  netFutureSavings: number;
  stateIncomeFromSolar: number;
  stateTaxableIncome: number;
  taxCredits: number;
  incomeGeneratedYear1: number;
  incomeGeneratedYear2: number;
  businessLoss: number;
  eblLimit: number;
  allowedBusinessLoss: number;
  nolCarryforward: number;
  taxableIncome: number;
  federalTax: number;
  taxCreditsApplied: number;
  stateTax: number;
  capitalGainsTax: number;
  capitalGainsSavings: number;
  totalTax: number;
  totalSavingsIncludingNol: number;
  roi: number;
}

// Combined Strategy
export interface CombinedStrategyResults {
  strategy1Units: number;
  strategy1Contribution: number;
  strategy1Deductions: number;
  strategy2Contribution: number;
  strategy2Deductions: number;
  futureStateDeductions: number;
  netFutureSavings: number;
  strategy2Credits: number;
  totalInvestment: number;
  incomeGeneratedYear1: number;
  incomeGeneratedYear2: number;
  strategy1CarryForward: number;
  strategy2CarryForward: number;
  strategy2BusinessLoss: number;
  strategy2EblLimit: number;
  strategy2AllowedBusinessLoss: number;
  strategy2NolCarryforward: number;
  unusedTaxCredits: number;
  taxableIncome: number;
  federalTax: number;
  creditsApplied: number;
  stateTax: number;
  capitalGainsTax: number;
  capitalGainsSavings: number;
  incomeTax: number;
  totalTax: number;
  totalSavingsIncludingNol: number;
  effectiveTaxRate: number;
  roi: number;
}

// Complete Tax Results
export interface TaxResults {
  current: CurrentTaxResults;
  strategy1: Strategy1Results | null;
  strategy2: Strategy2Results | null;
  combined: CombinedStrategyResults | null;
}
