This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

![Deployment: ](https://github.com/kortik425/dashboard-test/actions/workflows/deploy.yml/badge.svg?event=push)

It is a web application built with Next.js (using the App Directory way), React, TypeScript, and Tailwind CSS and deployed in Vercel through a simple CI/CD Github workflow.

It fetches and displays data from the JSONPlaceholder API, specifically the /users and /posts endpoints, showcasing proficiency in frontend development, state management, and UI/UX design.

This is an updated version of [dashboard project](https://github.com/kortik425/dashboard), created to improve on the structure, design and functionality. While the dashboard project provide with the bare minimum necessities of the task proposed, this project addresses enhancements like intercept routes to further showcase my ability to improve on a given project.

## Getting Started

Install and run the project

```bash
npm i
npm run dev 
```

Open [http://localhost:3300](http://localhost:3300) with your browser to see the result. (It was changed from port 3000 as I was using it for something else)   
Or test it out here https://dashboard-test-ejvo6exbz-gian-carlo-bandrils-projects.vercel.app/


## File structure

From the `src` folder the structure of the project has the default `app` folder, and the following folders:
 - `components` folder  
 - `context` folder, 
 - `api` folder,
 - `interfaces` folder,
 - `utils` folder
 
The components are placed in three different locations based on their scope:   
For very specific components with low reusability a component folder is placed inside the page folder to be used within its immediate context.  
Complex but reusable components are placed inside the `/components` folder  
Blocks of UI components such as text input are placed in the `UI` folder within the components folder

Here is a visual rapresentation of the structure

```
src/
│
├─ api/                         # All the api calls
│
├── app/                       # Default app folder for Next.js pages and layouts
│
├── components/                # Folder for reusable and UI components
│   ├── UI/                    # Basic UI elements (e.g., TextInput, Button) for broad reuse
│   └── [ComponentName]/       # Reusable complex components with multiple parts and logic
│
├── context/                   # Folder for Context API files to manage app-wide state
│
├── utils/                     # Custom functions and custom hooks folder
│      ├─ hooks/
│     
├── interfaces/                # TypeScript interfaces for type consistency across components

```

Types and interfaces are generally kept in their own folders and are put into the interfaces folders if reused over multiple components.

## State Management
The project state is managed through the use of Context API. We have 3 context that handle:
- The data management
- The Modals
- The searchbar

Since we are using NextJS we have leveraged the use of React Server Components (RSC) for the data handling since NextJS cache the data after the requests I can reuse the same api call to get a cached version of the API call and pass it down through props to the client components

With a growing project the use of Tanstack React Query could be a good idea to handle the api calls in the client side components.

## CI/CD
This Repository runs 2 workflows using Github Actions:
1. Deployment of the code to Vercel
2. Running tests for PR pointed to main

## Parallel and Intercept routes
This project make use of Parallel and intercept routes for when visualising the `Post` and the `User` This means that when the modal open the app navigate to the actual route on top of where the route actually was. This allow the url to be sharable and it is showed when opening a user and trying to reload the page.

## What to improve
Although it has been improved from the first iteration, responsiveness can be further improved.  
Depending on the complexity of the project moving to Redux could be a good idea to centralize the client state and   handle API calls and caching in the same place through RTK Query.  
Test coverage can be improved


