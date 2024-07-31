# PetBook App

This project is a React application named PetBook, which allows users to view profiles from a directory. The main functionality includes selecting a profile to view details and returning to the directory.

## Component Overview

The App component is a functional React component that manages the state of the currently selected username and handles navigation between the directory and profile views.

### Key Features

- State Management: The component uses the useState hook to manage the currently selected username.
- Conditional Rendering: The application conditionally renders either the Profile component or the Directory component based on the selected username.
- Navigation Handling: Includes functionality to return to the directory from a profile view.
