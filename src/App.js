/*function Myname() {
   
  ---- Jsx with ES6
  const colors = ["red", "blue", "green"];
  return (
    
    <div>
      <ul>
        {colors.map((color) => {
          return <li> {color}</li>;
        })}
      </ul>
    </div>
  );

  ---- Conditions 
  const firstname = prompt("enter your first name : ");
  

  return (
    <div>
      <h1>Hello {firstname ? firstname : "annonyous"}</h1>
      <p>it looks like {firstname ? "have " : "don't  have "}a name</p>
      {!firstname && (
        <form>
          <p> Type your name here </p>
          <input type="text" />
        </form>
      )}
    </div>
  );
  return (
    <>
      <div>hello</div>
    </>
  );
}
export default Myname;
*/
import React from "react";
const App = () => {
  return (
    <React.Fragment style={{ color: "red", backGround: "red" }}>
      <h2>Hello from my first component !!</h2>
    </React.Fragment>
  );
};
export default App;
