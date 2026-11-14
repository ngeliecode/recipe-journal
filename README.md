# Recipe Journal

🌐 [Visit Live Page](https://recipe-journal-tau.vercel.app/)

A personal digital cookbook where you can document and
organize your recipes.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ngeliecode/recipe-journal.git
```

2. Navigate to the project directory:

```bash
cd recipe-journal
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## API Handle

`recipe-journal-angelie`

## Grade Aim

VG

## Custom Hooks

The application uses custom hooks to separate API fetches and local storage logic from the UI logic.

### API fetches

| Hook | Description |
|---|---|
| `useRecipes` | Fetches all recipes |
| `useRecipe` | Fetches a single recipe by ID |
| `useAddRecipe` | Creates a new recipe |
| `useUpdateRecipe` | Updates a recipe |
| `useDeleteRecipe` | Deletes a recipe |


The API hooks keep the components cleaner by separating the API logic from the UI and keeping all API requests in one place.

### Local Storage

| Hook | Description |
|---|---|
| `useLocalStorage` | Saves the selectd filter in the browser's local storage |

This ensures that the selected recipe filter remains active even after reloading the page.


