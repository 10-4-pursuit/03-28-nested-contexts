
## Objective
Learn how to use nested contexts in a React application. This exercise will involve creating two different contexts and showing how they can be nested and accessed in various components.

## Setup

1. **Create an 'Exercises' Directory** (If not already done):
   - Create a directory for exercises on your local machine using `mkdir Exercises`.

2. **Fork and Clone the Repository**:
   - Fork the repository `03-28-nested-contexts`.
   - Clone the forked repository to your `Exercises` directory.

3. **Initial Setup**:
   - Navigate to the `03-28-nested-contexts` directory.
   - Run `npm install` to install any necessary dependencies.

## Exercise Instructions

1. **Create Two Contexts**:
   - In the `src` directory, create two files: `ThemeContext.js` and `LanguageContext.js`.
   - `ThemeContext` should have a state for theme (like 'light' or 'dark').
   - `LanguageContext` should manage the current language (like 'English' or 'Spanish').

2. **Create Context Providers**:
   - Implement `ThemeProvider` and `LanguageProvider` in their respective files.
   - These providers should manage the state and provide functions to update it.

3. **Build Consumer Components**:
   - Create components like `ThemeSwitcher` and `LanguageSelector` that consume these contexts.
   - Implement functionality in these components to update the context values.

4. **Implement Nested Contexts in App**:
   - In `App.js`, import both providers and wrap your app components within them.
   - Ensure that one context is nested within the other (e.g., `ThemeContext` inside `LanguageContext`).

## Expected Outcome

- The application should allow users to switch themes and languages independently.
- Changes in context values should be reflected across all components that consume these contexts.

## Testing

- Test the functionality by changing the theme and language from the respective components.
- Ensure that the context values are updated correctly and the changes are reflected in the UI.

## Submission

- Commit the changes to your forked repository.
- Create a pull request with a detailed explanation of your implementation.
