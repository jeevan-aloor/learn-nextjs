
# Next js
![image](https://user-images.githubusercontent.com/68199110/235839628-827d925b-5a82-4ccf-aa52-73d28d4e727a.png)

##  What is Next js

Next.js is a popular open-source framework for building server-side rendered (SSR) and statically generated React applications. It was created by Vercel (formerly known as Zeit) and released in 2016.

## Why we have to use Next js

Next.js provides a set of tools and features that simplify the development process of React applications, including automatic code splitting, server-side rendering, static site generation, and client-side rendering.

## Benefits for using Next js

- One of the main benefits of using Next.js is that it provides a seamless developer experience for building fast, SEO-friendly, and scalable web applications. It also includes a wide range of plugins and integrations with other popular tools and services, such as TypeScript, GraphQL, and AWS.

- Next.js is a powerful framework that allows developers to build complex web applications with ease, while also providing excellent performance and SEO benefits.

- Next.js improves user experience and it works very fatser than React 

- Able to build Router very easily 

- Next js Helps in Authentication,Authorization .

## How to create Next.js app

- To create Next.js app using some command 

### npx create-next-app@latest
 or
### yarn create next-app
 or
### pnpm create next-app

- After the installation is complete:

Run  
### npm run dev 
or  
### yarn dev 
or  
### pnpm dev 

to start the development server on 

## How Next.js works

- When we run npm run dev it move to pages folder inside pages folder  it will looks for _app.js file in that file the App component will takes others component as props here App component is a higher order component because it takes other component has a props and inside App component other component wil be declared and we are able to see in UI This how Next js Render 



## Routing 
- if we create about.js file inside pages folder  it automatically creates about route --> /about
- if we create profile.js file inside pages folder  it automatically creates profile route --> /profile
- if we create blog folder inside pages folder than we create firstblog page inside blog folder it creates router like this --> /blog/firstblog
- if we create blog folder inside pages folder than we create secondblog page inside blog folder it creates router like this --> /blog/secondblog


### Single product page Routes create
- Example i want all products page first soo in side product folder we have to create one index.js whenever we hit /product it render index.js file and we able to see all products in ui. 
- after we want only single product page soo here we have to use [productid].js file it represent whenver if anything is present in after /product/1 like this it will render [productid].js file and able to see single products.
- then extract that id using useRouter from 'next/router' it will provide id of the perticular products.
- 
 ### Using Link component
 - whenever using Link first we have to import Link from  'next/link 
 - Then declare the Link component where we want and Link component takes href as a parameter we have to provide routes here like this 
  <Link href="/blog">Blog</Link>
  
  ### Navigate
  
  - using useRouter able to achive navigate like 
  - const router=useRouter()
  - router.push('/blog')
  - it will directly navigate to blog page when we click any button.





