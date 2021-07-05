// import Greet from "./1.components/1.functional/Greet";
// import {Named} from "./1.components/1.functional/Named"
// import Functional from "./1.components/1.functional/Functional"
// import Functional1 from "./1.components/1.functional/Functional1";
// import Welcome from "./1.components/2.class/Welcome";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import Welcome from "./3.props/Welcome";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import Person from "./4.state/Person";
import ClassClick from "./5.event-handling/ClassClick";
import EventBindFour from "./5.event-handling/EventBindFour";
import EventBindOne from "./5.event-handling/EventBindOne";
import EventBindThree from "./5.event-handling/EventBindThree";
import EventBindTwo from "./5.event-handling/EventBindTwo";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreetingFour from "./6.conditional-rendering/UserGreetingFour";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
// function Home(){
//   return <h1>This is home component</h1>
// }
const Home=()=> <h1>This is home component</h1>

const About=()=>{
  return <h1>This is about component</h1>
}

function App() {
  return (
    <div className="container">
      <UserGreetingFour/>
      {/* <UserGreetingThree/> */}
      {/* <UserGreetingTwo/> */}
      {/* <UserGreetingOne/> */}
      {/* <Parent/> */}
      {/* <EventBindFour/> <br/>
      <EventBindThree/> <br/>
      <EventBindTwo/> <br/>
      <EventBindOne/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Person/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <h1>This is using Functional Component</h1>
      <Greeting name="Harry" skill="Full Stack">This is Greeting</Greeting>
      <Greeting name="Ron" skill="C++ developer"/>
      <Greeting name="Hermoine" skill="Scrum master"/>
      <h1>This is using Class Component</h1>
      <Welcome name="Harry" skill="Full Stack">This is Welcome</Welcome>
      <Welcome name="Ron" skill="C++ developer"/>
      <Welcome name="Hermoine" skill="Scrum master"/> */}
      
      {/* <h1>Welcome to react!!!!</h1>
      <Hello/> */}
      {/* <Greet/>
      <Named/>
      <Functional/>
      <Functional1/> */}
      {/* <Welcome/>
      <Home/>
      <About/> */}
    </div>
  );
}

export default App;
