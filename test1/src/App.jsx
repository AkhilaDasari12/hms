/**function App(){
  return(
    <div>
      <h2>Welcome to Functional component</h2>
    </div>
  )
}
export default App;**/

/**function App(){
  return(
    <div>
      <h2>Welcome to Functional component</h2>
      <Test/>
    </div>
  )
}
function Test(){
  return(
    <div>
      <h2>This is Test functional compoenent</h2>
    </div>
  )
}
export default App;**/


/**import { Component } from "react";
class App extends Component{
  render(){
    return(
      <div>
        <h2>This is Class component</h2>
      </div>
    )
  }

}
export default App;**/

/**import { Component } from "react";
class App extends Component{
  render(){
    return(
      <div>
        <h2>This is Class component</h2>
        <Test/>
      </div>
    )
  }
}
class Test extends Component{
  render(){
    return(
      <div>
        <h2>This is Test class component</h2>
      </div>
    )
  }
}
export default App;**/

/**import './App.css'
function App(){
  return(
    <div>
      <h2>This is an example of jsx</h2>
    </div>
  )
}
export default App;**/


/**import './App.css'
function App(){
  return(
    <div>
     <button type="button" className="btn btn-primary">Primary</button>
     <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
    </div>
  )
}
export default App;**/
/*function About(){
    return(
        <div>
            <h2>This is About functional component</h2>
        </div>
    )
}
export default About;*/


/**import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import Login from './Login';
import About from './About';
import Signup from './Signup';

function Header(){
  return(
    <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  )
}
function App(){
  return(
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;**/

function App(){
  return(
  <div>
    <img src={"IMAGE.jpg"} height={200} width={200}/>
    <br/><br /> <br />
    <img src={"src/assets/IMAGE.jpg"} height={200} width={200}/>

  </div>
  )
}
export default App;