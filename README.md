# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Refactor importantce

Use Global context to avoid props drilling;

### Searchbar
When building Search bar, be mindful of the condition when user types in empty string;
Also, can use a different way which is not controled input

### Gallery
Use useState to control the search term value 
To undate the images after each earch, queryKey is the important factor to be counted in
Set a condition when no images found after the search term
When using api, take care of the condition that couldn't find any urls in the api.

