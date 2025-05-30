# Tax Strategy Calculator

A cutting-edge tax strategy optimization platform that leverages advanced computational techniques to help high-income earners minimize tax liability through intelligent financial modeling and dynamic strategy projection.

## Overview

This Tax Strategy Calculator is designed for tax advisors to demonstrate the ROI of working with their tax advisory firm. The calculator compares clients' taxes in their current situation versus using advanced tax planning strategies, showing potential tax savings to justify the advisor's services.

## Key Features

### Advanced Tax Strategies
- **Strategy 1: Leveraged Donations** - Provides $5 in tax deductions for every $1 contributed
- **Strategy 2: Solar Leasing Business** - Leverages tax credits and depreciation deductions
- **Combined Strategy** - Optimally combines both strategies for maximum benefit

### Intelligent Optimization
- **Cent-level precision** in tax optimization calculations
- **Dynamic investment scaling** based on 75% federal tax credit limits
- **Marginal benefit analysis** ensuring each dollar invested yields >$1 in tax savings
- **EBL (Excessive Business Loss) limit handling** with NOL carryforward calculations

### Comprehensive Tax Calculations
- **2025 federal and state tax brackets** with accurate calculations
- **Capital gains tax optimization** with income-dependent rate calculations
- **Multi-year strategy simulation** including future state tax benefits
- **NOL future value analysis** for comprehensive tax planning

## Technology Stack

### Frontend
- **React** with TypeScript for robust type checking
- **Vite** for fast development and building
- **TailwindCSS** with shadcn/ui component library
- **React Hook Form** with Zod validation
- **React Query** for efficient state management

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** for data persistence
- **Zod** for input validation

## Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # UI components including tax strategy displays
│   │   ├── lib/           # Tax calculation engine and utilities
│   │   └── pages/         # Application pages
├── server/                # Express.js backend
│   ├── tax-calculations/  # Tax calculation logic modules
│   └── routes/           # API route handlers
├── shared/               # Shared schemas and types
└── components.json       # shadcn/ui configuration
```

## Key Components

### Tax Calculation Engine
- **Federal and state tax calculations** with 2025 tax brackets
- **Strategy optimization algorithms** with marginal analysis
- **EBL limit enforcement** and NOL carryforward projections
- **Future state tax benefits** calculation for years 2-6

### User Interface
- **Tax Calculator Form** - Comprehensive financial information input
- **Strategy Comparison Display** - Side-by-side tax strategy analysis
- **Interactive Results** - Detailed breakdowns with ROI calculations
- **Manual Override Controls** - Expert adjustments for donation strategies

## Tax Strategies Explained

### Strategy 1: Leveraged Donations
- Utilizes charitable giving vehicles that provide enhanced deductions
- Respects IRS 50% of income cap for charitable deductions
- Replaces standard deduction with itemized deductions
- Provides immediate tax benefits with high ROI

### Strategy 2: Solar Leasing Business
- Leverages 36% Investment Tax Credit (ITC) for solar equipment
- Utilizes 82% bonus depreciation for immediate deductions
- Generates business income while providing tax benefits
- Handles state-specific depreciation rules and future benefits

### Combined Strategy
- Applies Strategy 1 first to reduce taxable income
- Optimizes Strategy 2 based on post-Strategy-1 tax situation
- Accounts for cumulative business losses and EBL limits
- Maximizes overall tax savings while maintaining viability

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/david-at-ppa/tax-strategy-calculator.git
   cd tax-strategy-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Required for database connection
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## Usage

1. **Input Financial Information**
   - W-2 income, business profits, capital gains
   - Filing status and state of residence
   - Existing deductions and NOL carryforwards

2. **Review Current Tax Situation**
   - See baseline tax calculations
   - Understand effective tax rates
   - Identify optimization opportunities

3. **Analyze Tax Strategies**
   - Compare Strategy 1 (Leveraged Donations)
   - Evaluate Strategy 2 (Solar Leasing Business)
   - Review Combined Strategy benefits

4. **Expert Adjustments**
   - Override automatic donation unit calculations
   - Fine-tune strategy parameters
   - Customize for specific client situations

## Key Features for Tax Advisors

### Lead Qualification Tool
- Quickly identify high-value prospects
- Demonstrate potential tax savings
- Justify advisory service fees

### Educational Resource
- Explain complex tax strategies clearly
- Show mathematical basis for recommendations
- Build client confidence in tax planning

### Compliance & Accuracy
- Based on 2025 tax law and regulations
- Handles EBL limits and NOL rules correctly
- Accounts for state-specific tax variations

## Technical Highlights

### Optimization Algorithms
- **Binary search optimization** for precise investment amounts
- **Marginal benefit analysis** ensuring optimal ROI
- **Credit utilization maximization** up to 75% ITC limits
- **EBL-aware calculations** with proper NOL generation

### Data Integrity
- **Cent-level precision** throughout calculations
- **Type-safe operations** with TypeScript
- **Input validation** using Zod schemas
- **Error handling** for edge cases

### Performance
- **Efficient calculations** with optimized algorithms
- **Responsive UI** with minimal re-renders
- **Fast development** with Vite hot reloading
- **Production-ready** build optimization

## Contributing

This project uses modern development practices:
- TypeScript for type safety
- ESLint and Prettier for code quality
- Component-based architecture
- Comprehensive error handling

## License

This project is proprietary software designed for tax advisory professionals.

## Support

For technical support or questions about tax calculations, please contact the development team.

---

**Note**: This calculator is designed for educational and advisory purposes. Always consult with qualified tax professionals for specific tax advice and ensure compliance with current tax regulations.