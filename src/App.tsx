import "./App.css";

function App() {
  /////////////////   type    //////////////////////
  let anything: any;
  let name: string;
  let age: number | string; //type can be number or string
  let isOld: boolean;
  let hobbies: string[];
  //tuple
  //  it can only have two element one need to be number and another is a string
  let role: [number, string];

  //object type
  //   let person:object  // this is not the optimal way to declare object
  //   so do this
  //   name should start with capital letter
  type Person = {
    name: string;
    age?: number;
  };
  let person: Person;

  //   array of person object
  let lotsOfPerson: Person[];

  //function  notice that not equal= its colon after printName
  let printName: (name: string) => void;

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
