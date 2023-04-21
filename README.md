# The Mill Adventure 
## Front-end Assessment 

Create a simple product list/view web app using the latest Angular version as the front-end framework and a GraphQL API to display the app. 
​
The layout and look and feel of the app are completely up to you. You are free 
to use any design or template that you find online or come up with your own. In any case, please show off your CSS skills using modern features like CSS variables, CSS grid and/or flexbox, etc
​
You must use a headless CMS like TakeShape or GraphCMS, as it will allow you to create/manage models and populate example data easily. TakeShape provide similar examples, like creating a blog: https://app.takeshape.io/add-to-takeshape?repo=https://github.com/takeshape/patterns/tree/main/shape-blog 
​
## What we're looking for
In order to complete this test, you will prove that you're able to:
- Use a headless CMS to create models/shapes
- Use Angular components/pages/routes to display that data
- Use GraphQL API to discover/filter/use the example data added
- Use SCSS to make the pages presentable
- Use simple RxJS observables for displaying a countdown
- Use basic TypeScript to describe the data types
​
## 2x Required models
​
### Category
- slug (slugified category name)
- name
- products (relationship list of products)
​
### Product
- slug (slugified product name)
- name
- image
- description
- price
​
## 3x Required pages
​
### Homepage
- List of categories and the count of products within each
- Categories will link to the list of products contained
​
### Category View / Product List
- A list of example products with random data
- Each product will link to an individual product view for more info
​
### Individual Product view
- Information about the product
- Countdown (using RxJS) to midnight to let the user know if they order it today, it will be delivered tomorrow
- Grid of 3x other products from same category (you can query products using the slug from URL). Show the image, name and link to that product page.
 
## Required technologies: 
- Angular 11/12 (latest) 
- TypeScript 
- RxJS 
- Apollo GraphQL 
- SCSS 
 
## Delivery: 
- GitHub, GitLab, Bitbucket, StackBlitz, or a zip file of the Git repository 
