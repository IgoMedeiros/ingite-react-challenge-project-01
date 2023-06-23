# To-Do List Application

This is a simple to-do list application implemented using Vite, Vitest, React Testing Library, TypeScript, CSS Module, and HTML. The application has been thoroughly tested, and it has a test coverage of 100%.

## Technologies Used

- Vite: A build tool for modern web applications.
- Vitest: A test runner for Vite.
- React Testing Library: A testing utility for React applications.
- TypeScript: A statically-typed superset of JavaScript.
- CSS: Cascading Style Sheets for styling the application.
- HTML: Hypertext Markup Language for structuring the application.
- Unittest: A unit testing framework for testing individual units of code.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/IgoMedeiros/ingite-react-challenge-project-01.git
```

2. Navigate to the project directory:

```bash
cd ingite-react-challenge-project-01.git
```

3. Install the dependencies:

```bash
pnpm install
```

4. Run the development server:

```bash
pnpm dev
```

5. Access the application in your web browser at `http://localhost:5173`.

## Testing

The application has been thoroughly tested using React Testing Library and Unittest. The test coverage is 100%. To run the tests, use the following command:

```bash
pnpm test:coverage
```

## Project Structure

The project has the following directory structure:

```
to-do-list/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   ├── Checkbox
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Checkbox.module.css
│   │   │   ├── Checkbox.test.tsx
│   │   └── ...
│   ├── Task/
│   │   ├── Task.test.tsx
│   │   ├── Task.tsx
│   ├── AddNewTask/
│   │   ├── AddNewTask.test.tsx
│   │   ├── AddNewTask.tsx
│   │   ├── AddNewTask.module.css
│   └── ...
├── public/
│   ├── index.html
│   └── ...
├── package.json
├── vite.config.js
└── ...
```

- `src/components/`: Contains the React components used in the application.
- `src/AddNewTask/`: Contains the action and files for the component of add task in the list. This a DDD approach to organize the structure semantic.
- `public/`: Contains the static assets and the HTML template.
- `package.json`: Contains the project's dependencies and scripts.
- `vite.config.js`: Contains the Vite configuration.

## Usage

The to-do list application allows you to create, remove, and mark tasks as completed. You can simply enter a task in the input field and press Enter or click the "Create" button to add it to the list. Each task is displayed with a checkbox that you can click to mark it as completed. To remove a task, click the "Delete" button next to it.

## Conclusion

This to-do list application demonstrates the implementation of a simple task management system using modern web technologies such as Vite, Vitest, React Testing Library, TypeScript, CSS Module, and HTML. The application has been thoroughly tested to ensure its functionality, and it has achieved a test coverage of 100%. Feel free to explore the code and modify it to suit your needs. Happy task management!