#Cypress + Cucumber + Allure Automation Framework (Swag Labs)
# Project Title
# Badges
# Short Description
## Key Features
## Project Overview
## Install the Project
## Pre‑requisites
## Cucumber Setup
## Reports Setup
## Allure Report
## Run All Tests
## Run a Single Test
## Add Additional Dependencies
## CI/CD Integration   ← NEW SECTION GOES HERE
## Folder Structure
## How to Navigate This Project

A modular, scalable end‑to‑end automation framework built with Cypress, Cucumber (BDD), TypeScript, and Allure reporting.
This project demonstrates clean architecture, reusable step definitions, page‑object patterns, and CI‑ready configuration for modern web testing.

Key features:
BDD with Gherkin scenarios
Page Object Model (POM)
TypeScript for type‑safe automation
Allure reporting with screenshots & metadata
Custom Cypress commands
Parallel execution support
Clean folder structure
Prettier formatting + VSCode setup

## Project Overview
This framework automates the Swag Labs application using Cypress + Cucumber in TypeScript.
It includes login, product selection, cart validation, and checkout flows.

The architecture is modular and easy to extend, with clear separation between:

-page objects
-step definitions
-test data
-configuration

Allure reporting provides full visibility into test execution, including screenshots and logs.
The project is CI‑ready and follows best practices for maintainability and scalability.


## 🚀 Install the project

Install project dependencies with: npm install

## 💻 Pre-requisites

1. Node JS 24+
2. VsCode should be installed
3. Git and Git bash should be installed
4. Github account should be created
5. Cypress version 15.8.1

🥒 Cucumber Setup

-Add cypress/config.js
-Add support for feature files to your Cypress configuration
-Add cosmiconfig in package.json

📊 Reports Setup

-npm install --save-dev mochawesome then should be installed in "package.json"
-npm install --save-dev mocha then should be installed in "package.json"
-npm install --save-dev mocha-allure-reporter allure-commandline then should be installed in "package.json"

🧪 Allure Report

-npm i -D @shelex/cypress-allure-plugin
-npm run cypress:execution-allure
-npm run allure:report
-allure open

▶️ Run All Tests

-npm run ui-regression-headless-allure-electron or
-npm run daily-headless-chrome

🧩 Run a Single Test

-npx cypress open
-Then select the test you want to run.

📦 Add Additional Dependencies
Install any new dependency using:
npm install <package-name> --save-dev

CYPRESS-SWAGLABS/
CYPRESS-SWAGLABS/
│
├── 📂 .vscode/
│   └── ⚙️ settings.json
│
├── 📂 cypress/
│   ├── 📂 e2e/                     # Feature files (BDD)
│   │   ├── 📝 A_Product_Discovery.feature
│   │   ├── 📝 Add_to_Cart.feature
│   │   ├── 📝 B_Product_Discovery_B.feature
│   │   ├── 📝 Cart_Mutations.feature
│   │   ├── 📝 Checkout.feature
│   │   ├── 📝 Login.feature
│   │   ├── 📝 Negative_Login.feature
│   │   └── 📝 User_Registration.feature
│   │
│   ├── 📂 fixtures/                # Test data
│   │   └── 📄 loginData.json
│   │
│   ├── 📂 reports/
│   │   └── 📂 html/
│   │       └── 📄 index.html
│   │
│   ├── 📂 support/
│   │   ├── 📂 page_objects/        # Page Object Model classes
│   │   │   ├── 📄 A_Product_Discovery_PO.ts
│   │   │   ├── 📄 Add_To_Cart_PO.ts
│   │   │   ├── 📄 B_Product_Discovery_PO.ts
│   │   │   ├── 📄 Base_PO.ts
│   │   │   ├── 📄 Checkout_PO.ts
│   │   │   └── 📄 Login_PO.ts
│   │   │
│   │   ├── 📂 step_definitions/    # Cucumber step definitions
│   │   │   ├── 📄 A_Product_Discovery_Steps.ts
│   │   │   ├── 📄 Add_To_Cart_Steps.ts
│   │   │   ├── 📄 B_Product_Discovery_Steps.ts
│   │   │   ├── 📄 Base_Steps.ts
│   │   │   ├── 📄 Checkout_Steps.ts
│   │   │   ├── 📄 Login_Steps.ts
│   │   │   └── 📄 Login_Negative_Steps.ts
│   │   │
│   │   ├── 📂 utils/
│   │   │   └── 📄 commands.js      # Custom Cypress commands
│   │   │
│   │   ├── 📄 e2e.ts               # Global test config
│   │   └── 📄 index.ts             # Support entry point
│   │
│   └── 📂 videos/                  # Cypress video recordings
│
├── 📄 .gitignore
├── 📄 .prettierrc
├── 📄 cucumber-html-reports.js
├── 📄 cypress.config.js
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
└── 📄 tsconfig.json

🧭 How to Navigate This Project
🔹 1. Start with the Feature Files (cypress/e2e/)
This is where the BDD scenarios live.
Each .feature file describes user behavior in plain English.

Example:

Login.feature
Add_to_Cart.feature

🔹 2. Step Definitions (cypress/support/step_definitions/)
Each Gherkin step maps to a TypeScript function.

This is where:

test logic lives
page objects are called
assertions are made

🔹 3. Page Objects (cypress/support/page_objects/)
This is the core of your automation architecture.

Each page object:

encapsulates selectors
exposes reusable methods
keeps tests clean and readable

Example:

Login_PO.ts
Checkout_PO.ts

🔹 4. Test Data (cypress/fixtures/)
Reusable JSON data for:

login credentials

product data
user profiles

🔹 5. Commands (cypress/support/utils/commands.js)
Custom Cypress commands that:

reduce repetition
simplify complex flows
improve readability

🔹 6. Reports (cypress/reports/)
Allure HTML reports are generated here.

🔹 7. Configuration Files
cypress.config.js → Cypress settings

tsconfig.json → TypeScript settings
.prettierrc → formatting rules