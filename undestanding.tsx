/*
The routing system starts from app folder and there are some reserved file names 
that mean some things like : 

1- page.tsx ===> is to define the starting point of each route . 
2- layout.tsx ===> is to define the file that wraps the page.tsx file so a container or a wrapper.
3- not-found.tsx ==> is to define "not found" fallback page .
4- error.tsx ===> is to define "Error" fallback page .
5- loading.tsx ===> is to define "Loading" fallback page .



ROUTING : 

1- Any folder we put in the app folder eventfully would become a route 
    like to say : 
        📂app:
            📂test:
                page.tsx (this file and the export default component in it is important to have the route)
    Now the route would be like => 🔗https://www.yourDomain.com/test         
    
2- If we want to have a nested route we can do it by creating a folder inside the folder 
    like to say :
        📂app:
            📂test:
                📂nested:
                    page.tsx (this file and the export default component in it is important to have the route)
    Now the route would be like => 🔗https://www.yourDomain.com/test/nested
    
3- If we want to have a dynamic route we can do it by creating a folder with the name between []
    like to say :
        📂app:
            📂test:
                📂[id]:
                    page.tsx (this file and the export default component in it is important to have the route)
    Now the route would be like => 🔗https://www.yourDomain.com/test/1
    or 🔗https://www.yourDomain.com/test/anyStringValue    

4- If we want to have a catch all route we can do it by creating a folder with the name between [[...]]
    like to say :
        📂app:
            📂test:
                📂[[...id]]:
                    page.tsx (this file and the export default component in it is important to have the route)
    Now the route would be like => 🔗https://www.yourDomain.com/test/1






POINTS : 

1- All the components would get rendered on the server side if and only we say not to . 

2- For image once loading we should use imported Image with a .src that is a static string or imported
    like to say :
    import myImage from "path/to/image"
    <Image src={myImage.src} alt="my image" />
    
3- For fonts we can use next/font/google or next/font/local to import fonts and use them in the project
    like to say :
    import { Geist, Geist_Mono } from "next/font/google";
    const geistSans = Geist({
      variable: "--font-geist-sans",
      subsets: ["latin"],
    });
    const geistMono = Geist_Mono({
      variable: "--font-geist-mono",
      subsets: ["latin"],
    });
    and then use them in the layout.tsx file like to say :
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
    </body>
    and then use the css variable in the globals.css file like to say :
    body {
      font-family: var(--font-geist-sans);
    }

4- For css we can use module.css or globals.css or any css framework like tailwindcss , bootstrap ,...etc

5- For Client side rendering we can use "use client" directive at the top of the file
    like to say :
    "use client"
    import { useState } from "react";
    export default function Counter() {
      const [count, setCount] = useState(0);
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    }
    and then this component would be rendered on the client side only .

6- For SSR (Server Side Rendering) , the next.js does it by default for all the components
    unless we use "use client" directive at the top of the file .


7- We should have this in mind that we should go for using 'use client' as less as possible
    or to use them just in the parts that are needed for example making separate small components
    for those which need client side rendering.

8- For writing paths it's recommended to always use completed paths instead of relative paths even if 
    we are in a sub-route . 


9- Since inheritance for reserved files are supported in next.js so we can create a loading.tsx
    file in a parent directory and it will be applied to all child routes automatically it also 
    applies to all these kinda files.






COMPONENTS: 

1- <Link>
    example :
    import Link from "next/link";
    <Link href={"/awsome"}>Go to Awsome Page</Link>

2- <Image>
    example :
    import Image from "next/image";
    import myImage from "path/to/image"
    <Image src={myImage} alt="my image" width={500} height={500} />
    You can use the "fill" prop instead of setting a "width" and "height"
    whenever you have an image where you don't know the
    dimensions in advance.
    also we have something as priority which can be used to load important images first.



FUNCTIONS or VARIABLES or HOOKS: 

1- metadata : is a reserved variable to define the metadata of the page like title , description ,...etc
    like to say :
    export const metadata: Metadata = {
       title: "Create Next App",
       description: "Generated by create next app",
    };

2- params : is a reserved variable to get the params from the url in dynamic routes
    like to say :
    export default function Page({ params }: { params: { id: string } }) {
       return <div>Dynamic Route with id: {params.id}</div>;
    }  
    the id here is the name of the folder that we created with [] in the app folder     

3- usePathname() : is to get the current pathname of the url
    like to say :
    const pathname = usePathname();
    and in here we can use this to determine that what navLink is active or not.
    like this :
    import Link from 'next/link';
    import { usePathname } from 'next/navigation';
    import classes from './nav-link.module.css';

    export default function NavLink({ href, children }) {
        const path = usePathname();

        return (
          <Link
            href={href}
            className={path.startsWith(href) ? classes.active : undefined}
          >
            {children}
          </Link>
        );
      }

4- notFound() : is to define and stop the component from running and then it gets into the 404 page file . 
    that goes by the name of not-found.tsx white this function gets imported from "next/navigation"
    and looks for the closest not-found.tsx file in the directory structure to render the 404 page.


*/
