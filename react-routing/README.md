### react routing
> using this we will find our page.
> we have to keep the router always below the component.
> if the wrong url is provided the react-router-dom will give us default error page.
> we can create our own error page, for this react-router-dom provide us useRouter() hook,it return a error object.
> we don't use `<a>` tag because it will refresh the whole page,rather we use `<link>` tag to make our application `SPA`.
> hum link me hi key="" dalte hai , `<link to="/xys"+rest.id key={id}>`
> we have to type of routing `client-side-routing` and `server-side-routing`.
> client side routing means we don't want to load page from server , we already have a page and just want to render it.
> react-router-dom keep track of link so, in this way it is different from <a>.
> our header and footer remain same only `<Outlet/>` changes every time.
> `loading`---->`render`----->`<Outlet/>` --->`Api calls`----->`render`.
> for dynamic routing we use `useParams`, it is also used inside the components only.
>`<Outlet\>` component is used inside the parent to render it's child keeping the parent things as it is.
> to render any page as it is , add its path to router and the component .

> ### cmd
> `npm i react-router-dom`
> `import {createBrowserRouter, routerProvider} from "react-router-dom"`
> `import {useRouter} from "react-router-dom"`
> `import {link} from "react-router-dom"`
> `import {Outlet} from "react-router-dom"`
> `import {useParams} from "react-router-dom"`
>  `import {useRouterError} from "react-router-dom"`
>
>
> ## example App.js -----> about.js

> ### App.js
> > ```
  > import {createBrowserRouter} from "react-router-dom";
    const appRouter=createBrowserRouter({
        path:"/xyz",
        element:<About/>
        error element: <error/>
        children:[{ path:"xyz",
                    element:<About/>
                    error element: <error/>},
                   {}
                 ]
    },{routing},{routing});
  > ```
  > ```
     const params=useParams();
    
    or,

     const {id} =useParams();


  >```


  > ```
     <Header/>
     <Outlet/>
     <Footer/>


  > ```

  > ### how to stop printing of parent element in outlet