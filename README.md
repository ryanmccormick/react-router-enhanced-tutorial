# React Router v6.26.0 Enhanced Tutorial

The [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial) for version 6+ is pretty comprehensive.
This repo is a result of me playing around with project structure and file naming to support scaling to a larger application
and includes updates such as:

+ Convert tutorial to typescript.
+ Move the router into the main app file, as opposed to the `main.tsx` file as designed in the tutorial.
+ Separate file for managing the app router `src/app/app.router.tsx`
+ Domain-specific routes. For example, look at `src/app/pages/page.routes.tsx` and how it is designed to combine routes from
different page hierarchies. In this case, I am only pulling in routes from `src/app/pages/Contact/contact.routes.tsx`, but routes
from other pages within the `pages` hierarchy can be easily combined within.
+ Move actions and loaders into their own files within a page's folder structure.


## Future State

As I have time, I am looking to add some additional examples, such as:

+ Authentication and authorization. Add a router flow that supports login/logout actions along with 
routes that are scoped to roles and/or all users.
+ Example for how to extend the router to be used within a library to provide configuration with 
auth functionality "baked in", maybe set the library provided router as BrowserAuthRouter or something like that



