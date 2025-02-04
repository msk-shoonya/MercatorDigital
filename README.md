Playwright Test Automation - SauceDemo

Overview

This project automates the login and product selection process on SauceDemo using Playwright with the Page Object Model (POM).

Features

Logs into the SauceDemo website using predefined credentials.

Identifies the highest-priced item (without using the "Sort By" option).

Adds the highest-priced item to the cart.

Validates that the item has been added to the cart successfully.

Prerequisites

Ensure you have the following installed:

Node.js (LTS version recommended)

npm (comes with Node.js)

Playwright

Installation

Clone this repository: 
git clone https://github.com/msk-shoonya/MercatorDigital.git


Install dependencies:
npm install @playwright/test

Project Structure:
playwright-saucedemo/
│-- pages/
│   │-- LoginPage.js          # Page Object Model for login
│   │-- InventoryPage.js      # Page Object Model for inventory
│
│-- tests/
│   │-- saucedemo.spec.js     # Main test script
│
│-- package.json             # Project dependencies
│-- README.md                # Project documentation

Usage

1 . Run tests using Playwright:
   npx playwright test

2. To view test results:
   npx playwright show-report

Test Flow

Navigate to https://www.saucedemo.com/

Log in using:

Username: standard_user

Password: secret_sauce

Identify the product with the highest price (without using the sort feature).

Add the identified product to the cart.

Validate that the cart contains the selected item.

Author Details:

 Name : Shoonya Kumari

Email : shoonya707@gmail.com

GitHub Profile : https://github.com/msk-shoonya
