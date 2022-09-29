import "./App.css";

function App() {
  /////////////////   type    //////////////////////
  let anything: any;
  //   better way if do not know the type
  let unKnown: unknown;
  let name: string;
  let age: number | string; //type can be number or string
  let isOld: boolean;
  let hobbies: string[];
  //tuple
  //   it can only have two element one need to be number and another is a string
  let role: [number, string];

  //todo:object type
  //   let person:object  // this is not the optimal way to declare object
  //   so do this
  //   name should start with capital letter
  type Person = {
    name: string;
    age?: number;
  };
  let person: Person;

  //focus:   array of person object
  let lotsOfPerson: Person[];

  //focus:  function  notice that not equal= its colon after printName
  let printName: (name: string) => void;
  //never type return nothing and void return undefined
  // let printName: (name: string) => never;
  //focus: another way to declare function
  function add(x: number, y: number): number {
    return x + y;
  }

  /////////////////   use case    //////////////////////
  name = "chaudhuree";
  age = 27;
  isOld = false;
  hobbies = ["gardening", "playing video games", "bike riding"];
  role = [3, "admin"];
  // role = [3, "admin",4];  //will throw an error
  // person object
  person = {
    name: "sOhan",
    age: 27,
  };

  //array of person object type

  lotsOfPerson = [
    { name: "habib" },
    { name: "dipoto", age: 29 },
    { name: "rakib", age: 28 },
  ];
  return (
    <div className="App">
      <p>{age}</p>
    </div>
  );
}

export default App;
