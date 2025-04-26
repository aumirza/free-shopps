# Free Shopps

Free Shopps is a **React + TypeScript + Vite** project designed to provide a modern and efficient development environment. It includes a minimal setup for React with hot module replacement (HMR), TypeScript support, and an extensible ESLint configuration.

---

## ✨ Features

- **React + TypeScript**: Build scalable and type-safe React applications.
- **Vite**: Lightning-fast development server and build tool.
- **Hot Module Replacement (HMR)**: Instant updates during development.
- **ESLint Integration**: Pre-configured linting rules for clean and consistent code.
- **Modular Directory Structure**: Organized for scalability and maintainability.

---

## 🌐 Project Structure

```bash
free-shopps/
├── .gitignore                 # Files and directories to ignore in Git
├── components.json             # Component metadata (if applicable)
├── eslint.config.js            # ESLint configuration
├── index.html                  # Main HTML file
├── package.json                # Project dependencies and scripts
├── pnpm-lock.yaml              # Lockfile for package versions
├── README.md                   # Project documentation
├── testdisk.log                # Log file (if applicable)
├── tsconfig.app.json           # TypeScript configuration for the app
├── tsconfig.json               # Base TypeScript configuration
├── tsconfig.node.json          # TypeScript configuration for Node.js
├── vite.config.ts              # Vite configuration
├── public/                     # Static assets
│   └── ...
├── src/                        # Source code
│   ├── App.tsx                  # Main application component
│   ├── index.css                # Global styles
│   ├── main.tsx                 # Application entry point
│   ├── providers.tsx            # Context providers
│   ├── vite-env.d.ts            # Vite environment types
│   ├── assets/                  # Static assets (images, icons, etc.)
│   │   ├── bg-vector.svg
│   │   ├── logo.png
│   ├── components/              # Reusable UI components
│   │   ├── AlertDeleteButton.tsx
│   │   ├── AppSidebar.tsx
│   │   ├── DataTable.tsx
│   │   ├── DataTablePagination.tsx
│   │   ├── Header.tsx
│   │   ├── NavMain.tsx
│   │   └── ...
│   ├── constants/               # Application constants
│   │   ├── index.ts
│   │   └── ...
│   ├── features/                # Feature-specific modules
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility libraries
│   ├── pages/                   # Application pages
│   ├── services/                # API services and integrations
│   ├── store/                   # State management
│   └── utils/                   # Utility functions
```

---

## 🔄 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [pnpm](https://pnpm.io/) (preferred package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/free-shopps.git
   cd free-shopps
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at **http://localhost:5173**.

### Build

To create a production build:

```bash
pnpm build
```

The build output will be in the `dist/` directory.

### Linting

Run ESLint to check for code quality issues:

```bash
pnpm lint
```

---

## 📚 Expanding the ESLint Configuration

This project uses a pre-configured ESLint setup. You can expand it by enabling type-aware lint rules or adding plugins for React-specific rules.

### Type-Aware Rules

```ts
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### React-Specific Plugins

```ts
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## 💍 License

This project is licensed under the **MIT License**.

---

## 📅 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
