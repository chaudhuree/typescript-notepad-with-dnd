> error: JSX element implicitly has type 'any'

```
 npm i -D @types/react @types/react-dom

```

and if not solve then do this:

Then make sure you have the following in your **tsconfig.json** :

```
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```
