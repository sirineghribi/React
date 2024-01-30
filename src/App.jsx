import "./App.css";

import Header from './components/Header'

function App() {
  let name = "Test";
  let person = {
    name: "Test",
    age: 30,
  };

  let b = true;

  const style1 = {
    color: 'red',
    backgroundColor:'blue'
  }

  let students = [
    { name: "s1", age: 10 },
    { name: "s2", age: 20 },
    { name: "s3", age: 30 },
  ];
  
  function test() {
    console.log("I m here")
  }

  function getPerson(person1) {
    return person1;
  }
  return (
    <>
      <Header name={name} age='30' />
      <h1>Hello , {name}</h1>
      <h2>Hello ,{getPerson("Test 2")}</h2>
      {b ? <p style={style1}>{person.name}</p> : <p className="age">{person.age}</p>}
      {b && <p>True</p>}
        {students.map((s,i) => {
          return (
              <ul key={i}>
              <li>{s.name}</li>
              <li>{s.age}</li>
              </ul>
          )
        })}
      <img /> 
      <button onClick={()=>test()} >Click Me</button>
    
    </>
  );
}

export default App;
