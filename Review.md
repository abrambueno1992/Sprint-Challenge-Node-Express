# Review Questions

## What is Node.js?
It's a javascript engine that renders javascript.

## What is Express?
It's a web framework that is minimalist, and if you need extra features it's simple to add them.

## Mention two parts of Express that you learned about this week.
How to install express and configure the server to use the particular port and configure the routing. 

## What is Middleware?
It adds functionality to an application (functionality that doesn't come by default in the application), such as helmet, which was essentially for the functionality of the project.
## What is a Resource?
It's a database that will be used to fetch the data through the api, a resource is something that the program will use as data to perform an action (get, post, put, delete). The resource will be like the initial state in redux.
## What can the API return to help clients know if a request was successful?
Resolve codes, if the code is in the 200s, then the request was successful.
## How can we partition our application into sub-applications?
Create separate files for the routes, so that the routes for one purpose are separated from another. Basically, it's a form of organizing the application based on a specific criteria, such as organizing by functionality (having all routing, actions, and dbconfiguration in one folder, to provide complete functionality for that purpose) or based on a similar purpose (they are together based on routing, actions, etc).

## What is CORS and why do we need it?
Cross-origin resource sharing, which is disabled by default for security purposes. Is a work around, the package.json can be added a proxy, or to install cors for that application.
