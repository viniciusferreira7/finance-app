# Finance App

## **Main Features:**

- [x] Secure authentication for user registration and login.
- [x] Financial transaction tracking (income and expenses) with attributes like amount, category, description, and date.
- [x] Automatic calculation of the current balance and categorization for detailed analysis.
- [x] Visual charts for tracking expenses and income.
- [x] Management of custom categories (create, edit, and delete).

### Technical Requirements:

- [x] Fast performance for calculations and chart rendering.
- [x] Scalability to handle a large number of users and data.
- [x] Intuitive and responsive interface, compatible with browsers and mobile devices.
- [x] Must include E2E testing.
- [x] Advanced security (HTTPS, JWT authentication, attack prevention).
- [x] Support for 23 color themes with light and dark modes:
  **[
  'Slate',
  'Gray',
  'Zinc',
  'Neutral',
  'Stone',
  'Red',
  'Orange',
  'Amber',
  'Yellow',
  'Lime',
  'Green',
  'Emerald',
  'Teal',
  'Cyan',
  'Sky',
  'Blue',
  'Indigo',
  'Violet',
  'Purple',
  'Fuchsia',
  'Pink',
  'Rose',
]**

## 💻 Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of **Node.js**.

## 🚀 Getting Started

### 1. Clone the repository:

Open the terminal and use the following command to clone the project to your computer:

```bash
git clone https://github.com/viniciusferreira7/finance-app
```

### 2. Access the project directory:

```bash
cd <PROJECT_DIRECTORY_NAME>
```

### 3. Install PNPM (if not already installed):1

- If you don’t have PNPM installed, add it globally using npm:
bash:

```bash
npm install -g pnpm
```

### 4. Install the back-end:
- It is recommended to clone the project in the same folder:
```bash
git clone https://github.com/viniciusferreira7/finance-api
```

- Follow all the steps to run the API in readme from **[finance-api](https://github.com/viniciusferreira7/finance-api/blob/main/README.md)**.

### 5. Start the API:
- **⚠️ Attention:** finance-app and the API must be at the same directory level.

```bash
  pnpm start:api
```

### 6 Install project dependencies:

```bash
  pnpm install
```

### Start the project:

```bash
  pnpm dev
```

## Packages and Versions
### Dependencies:

- @formkit/auto-animate: ^0.8.2
- @hookform/resolvers: ^3.3.4
- @radix-ui/react-alert-dialog: ^1.0.5
- @radix-ui/react-checkbox: ^1.0.4
- @radix-ui/react-dialog: ^1.0.5
- @radix-ui/react-dropdown-menu: ^2.0.6
- @radix-ui/react-icons: ^1.3.0
- @radix-ui/react-label: ^2.0.2
- @radix-ui/react-popover: ^1.0.7
- @radix-ui/react-select: ^2.0.0
- @radix-ui/react-separator: ^1.0.3
- @radix-ui/react-slot: ^1.0.2
- @radix-ui/react-toast: ^1.1.5
- @radix-ui/react-tooltip: ^1.0.7
- @tanstack/query-core: ^5.49.1
- @tanstack/react-query: ^5.49.2
- @tanstack/react-query-devtools: ^5.49.2
- axios: ^1.6.8
- class-variance-authority: ^0.7.0
- clsx: ^2.1.0
- cmdk: ^1.0.0
- dayjs: ^1.11.11
- jotai: ^2.8.1
- jotai-utils: ^0.0.0
- lucide-react: ^0.390.0
- next: 14.2.1
- next-auth: ^4.24.7
- next-themes: ^0.3.0
- nuqs: ^1.19.3
- react: ^18
- react-day-picker: ^8.10.1
- react-dom: ^18
- react-hook-form: ^7.51.3
- react-number-format: ^5.4.0
- recharts: ^2.12.7
- sonner: ^1.4.41
- tailwind-merge: ^2.2.2
- tailwindcss-animate: ^1.0.7
- vaul: ^0.9.1
- wonka: ^6.3.4
- zod: ^3.22.4

 ### Development Dependencies:
- @faker-js/faker: ^8.4.1
- @playwright/test: ^1.46.0
- @rocketseat/eslint-config: ^2.2.2
- @testing-library/jest-dom: ^6.4.8
- @testing-library/react: ^16.0.0
- @testing-library/user-event: ^14.5.2
- @types/node: ^20
- @types/react: ^18
- @types/react-dom: ^18
- @vitejs/plugin-react: ^4.3.1
- eslint: ^8
- eslint-config-next: 14.2.1
- eslint-plugin-simple-import-sort: ^12.1.0
- happy-dom: ^14.12.3
- postcss: ^8
- prettier-plugin-tailwindcss: ^0.5.14
- tailwind-scrollbar: ^3.1.0
- tailwindcss: ^3.4.1
- typescript: ^5
- vite-tsconfig-paths: ^4.3.2
- vitest: ^2.0.5