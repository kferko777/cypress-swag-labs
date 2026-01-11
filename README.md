🚀 **Cypress + Cucumber + Allure Automation Framework (Swag Labs)**
---
🏷️ **Project Title**
📄 **Short Description**
---
⭐ **Key Features**
📘 **Project Overview**
📥 **Install the Project**
💻 **Pre‑requisites**
🥒 **Cucumber Setup**
📊 **Reports Setup**
🧪 **Allure Report**
▶️ **Run All Tests**
🧩 **Run a Single Test**
📦 **Add Additional Dependencies**
🔄 **CI/CD Integration**
📁 **Folder Structure**
🧭 **How to Navigate This Project**
---

🏷️ Project Title
Cypress + Cucumber + Allure Automation Framework (Swag Labs)

📝 Short Description
A modular, scalable end‑to‑end automation framework built with **Cypress**, **Cucumber (BDD)**, **TypeScript**, and **Allure reporting**.  
Designed with clean architecture, reusable step definitions, page‑object patterns, and CI‑ready configuration for modern web testing.

⭐ Key Features
- 🥒 BDD with Gherkin scenarios  
- 🧩 Page Object Model (POM)  
- 🟦 TypeScript for type‑safe automation  
- 📊 Allure reporting with screenshots & metadata  
- 🛠️ Custom Cypress commands  
- ⚡ Parallel execution support  
- 📁 Clean folder structure  
- 🎨 Prettier formatting + VSCode setup  


📘 Project Overview
This framework automates the **Swag Labs** application using Cypress + Cucumber in TypeScript.  
It includes:

- 🔐 Login  
- 🔍 Product discovery  
- 🛒 Add to cart  
- 🔄 Cart mutation  
- 💳 Checkout  

The architecture is modular and easy to extend, with clear separation between:

- 📄 Page Objects  
- 🧪 Step Definitions  
- 📦 Test Data  
- ⚙️ Configuration  

Allure reporting provides full visibility into test execution, including screenshots and logs.  
The project is **CI‑ready** and follows best practices for maintainability and scalability.

📥 Install the Project
Run:
npm install

💻 Pre‑requisites
1. 🟩 Node JS 24+  
2. 🖥️ VSCode installed  
3. 🐙 Git and Git Bash installed  
4. ☁️ GitHub account  
5. 🧪 Cypress version 15.8.1  

🥒 Cucumber Setup
- Feature files stored in: `cypress/e2e/`  
- Step definitions stored in: `cypress/support/step_definitions/`  
- Hooks (e.g., `BeforeAll`) must be placed in step definition files (**NOT** in `e2e.ts`)  
- Add support for feature files in `cypress.config.js`  
- Add cosmiconfig in `package.json`  

📊 Reports Setup
Install reporting dependencies:
npm install --save-dev mochawesome
npm install --save-dev mocha
npm install --save-dev mocha-allure-reporter allure-commandline

🧪 Allure Report Commands
npm i -D @shelex/cypress-allure-plugin
npm run cypress:execution-allure
npm run allure:report
allure open

▶️ Run All Tests
npm run ui-regression-headless-allure-electron
npm run daily-headless-chrome

🧩 Run a Single Test
npx cypress open
Then select the test you want to run.

📦 Add Additional Dependencies
npm install <package-name> --save-dev

🔄 CI/CD Integration
This project integrates with CI/CD to:

- 🚀 Run Cypress tests automatically  
- 📊 Generate Allure reports  
- 📁 Upload artifacts on every commit  

📁 Folder Structure (Modern Developer Style)

CYPRESS-SWAG-LABS/
│
├── 📂 .vscode/
│   └── ⚙️ settings.json
│
├── 📂 cypress/
│   ├── 📂 e2e/                     🥒 Feature files (BDD)
│   │   ├── 📝 A_Product_Discovery_Search_Filter.feature
│   │   ├── 📝 Add_to_Cart.feature
│   │   ├── 📝 B_Product_Discovery_Browse_Category.feature
│   │   ├── 📝 Cart_Mutation.feature
│   │   ├── 📝 Checkout.feature
│   │   ├── 📝 Login.feature
│   │   ├── 📝 Negative Login.feature
│   │   └── 📝 User_Registration.not-applicable
│   │
│   ├── 📂 fixtures/                📦 Test data
│   │   └── 📄 loginData.json
│   │
│   ├── 📂 reports/
│   │   └── 📂 html/
│   │       └── 📄 index.html
│   │
│   ├── 📂 support/
│   │   ├── 📂 page_objects/        🧩 Page Object Model classes
│   │   │   ├── 📄 A_Product_Discovery_Search_Filter_PO.ts
│   │   │   ├── 📄 Add_To_Cart_PO.ts
│   │   │   ├── 📄 B_Product_Discovery_Browse_PO.ts
│   │   │   ├── 📄 Base_PO.ts
│   │   │   ├── 📄 Cart_Mutation_PO.ts
│   │   │   ├── 📄 Checkout_PO.ts
│   │   │   └── 📄 Login_PO.ts
│   │   │
│   │   ├── 📂 step_definitions/    🧪 Step definitions
│   │   │   ├── 📄 A_Product_Discovery_Search_Filter_Steps.ts
│   │   │   ├── 📄 Add_To_Cart_Steps.ts
│   │   │   ├── 📄 B_Product_Discovery_Browse_Steps.ts
│   │   │   ├── 📄 Base_Steps.ts
│   │   │   ├── 📄 Cart_Mutation_Steps.ts
│   │   │   ├── 📄 Checkout_Steps.ts
│   │   │   ├── 📄 Login_Steps.ts
│   │   │   └── 📄 Login_Negative_Steps.ts
│   │   │
│   │   ├── 📂 utils/
│   │   │   ├── 🧩 commands.js       Custom Cypress commands
│   │   │   ├── 🧩 domutils.ts
│   │   │   ├── 🧩 e2e.ts            Global test config
│   │   │   └── 🧩 index.ts          Support entry point
│   │
│   └── 📂 videos/                   🎥 Cypress video recordings
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

🔹 1. Feature Files (`cypress/e2e/`)
Where the BDD scenarios live.  
Each `.feature` file describes user behavior in plain English.

Examples:
- Login.feature  
- Add_to_Cart.feature  

🔹 2. Step Definitions (`cypress/support/step_definitions/`)
Each Gherkin step maps to a TypeScript function.  
This is where:
- test logic lives  
- page objects are called  
- assertions are made  

🔹 3. Page Objects (`cypress/support/page_objects/`)
The core of your automation architecture.  
Each page object:
- encapsulates selectors  
- exposes reusable methods  
- keeps tests clean and readable  

🔹 4. Test Data (`cypress/fixtures/`)
Reusable JSON data for:
- login credentials  
- product data  
- user profiles  

🔹 5. Commands (`cypress/support/utils/commands.js`)
Custom Cypress commands that:
- reduce repetition  
- simplify complex flows  
- improve readability  

🔹 6. Reports (`cypress/reports/`)
Allure HTML reports are generated here.

🔹 7. Configuration Files
- `cypress.config.js` → Cypress settings  
- `tsconfig.json` → TypeScript settings  
- `.prettierrc` → formatting rules