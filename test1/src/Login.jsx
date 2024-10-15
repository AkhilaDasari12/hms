/**function Login(){
    return(
        <div>
            <h2>This is Login Page</h2>
        </div>
    )
}
export default Login;**/



//import './App.css'
function Login(){
  return(
    <div>
   <center><h2>Login Page</h2></center>
        <br/>
        Enter UserName:<input type="text"/><br/>
        Enter password:<input type="password"/><br/>
        <br/>

     <button type="button" className="btn btn-primary">submit</button><br />
    </div>
  )
}
export default Login;