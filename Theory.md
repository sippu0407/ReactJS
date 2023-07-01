# packages

it is like module ,we use package manager to manage it like npm,yarn.




# how to use npm to your code

`npm init`  it will intialize npm to your folder. and ask for basic question. it will create **pkg-json** file.


# bundler 

the process of importing file and merging them into a single file.
`create-react-app` uses webpack as a bundler.


# why we are using npm

to build full fledged app only react library is not sufficient,we need other packages also.

# how to install other in our app using npm

`npm install` pkg-name or `npm i` pkg-name

`npm install -D` pkg name will install it locally not globally , it can also be done using `--save-dev`. for global installation use 

`-g`.


# installing bundler

`npm i -D parcel`  this will create **pkg-lock.json** , locks the version of all dependency , you should not put **pkg-lock.json** in `.gitignore` file because it will create problem when you deploy your app.

# parcel

> ### create mini server for us so, now we can do `localhost:port`. for this run `npx parcel index.html`, parcel will create a build file and a server and run the application at your local machine.
> ### parcel allow us to auto-run script. `npx parcel index.html` it is also called **HMR** hot module replacement .
> ### parcel create `.parcel-cache` and `dist` folder after build.
> ### to ask parcel to build for production we need to type `npx parcel build index.html`. it will create file and keep them into dist folder.
> ### parcel also does caching.
> ### parcel minified everything for us.
> ### parcel is compaitable with older version of browser.
> ### we should put .parcel-cache in our .gitignore.
> ### parcel does image optimization.
> ### parcel does code cleaning like removing console.log().
> ### the biggest reason to choose parcel as a bundler is that **it is a zero-config bundler**.


# cdn

content delivery network aim to deliver fast and securely.

> ## DISADV:: 
> ### 1. slower as compared to local storage.
> ### 2. we need to keep on updating link as newer version.


# "react" import

> `import React from "react"`

# "react-dom" import

> `import ReactDom from "react-dom/client"`

>browser does not know import till we mark our script type as module i.e> `<script type="module" src="./App.js-or any path"></script>`



# transitive dependency
> example > parcel uses different packages to achieve what it does.

# babel
> it does pollyfill for us. that is convert the code to the older code.

# JSX

It is a html like syntax but not html inside JS. JSX uses `React.createElement()` behind the scene.JSX element can only have 1-parent.
> ### `const Heading=<h1> hi jsx </hi>` babel covert this to `const Heading=React.createElememt('h1',{},"hi jsx")`.
> ### in JSX we can write any piece of JS_Expression_code using `{js-expression goes here}`.
> ### {var-name}
> ### {js-expression}
> ### {function()}
> ### {react element}
> ### <ComponentName />
> ### <ComponentName></ComponentName>
> ### {js-comment}

# create-react-app
`npx create-react-app my-app`

# react components

> ### everything is component in react.
> ### react components are of 2-types. `class component` & `functional component`.
> ### functional component is normal JS function. 

>
> const ComponentName=()=>{

    return (
           <> 
             <h1> some JSX </h1>
            </>
             );   
};



> `()` in return used to wrap up jsx code.
> <></> it is call react fragment.


# basics about react

```
 const assign=( <h1> some JSX </h1>); 
    const Comp=()=>{
        return(
            <>{assign}</>
        );
    }
```
> ### here assign will be replaced by jsx inside it


# how to render functional component

`root.render(<ComponentName/>)`

# Faker

>
> 



