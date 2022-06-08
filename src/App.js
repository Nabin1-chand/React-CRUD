import {BrowserRouter, Routes,Route} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';
import User from "./component/users/User";
function App(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path ="/home" element ={<Home/>}/>
                <Route path ="/about" element ={<About/>}/>
                <Route path ="/contact" element ={<Contact/>}/>
                <Route path ="/users/add" element ={<AddUser/>}/>
                <Route path ="/users/edit/:id" element ={<EditUser/>}/>
               <Route path ="/users/:id"  element ={<User/>}/>

            </Routes>
        </BrowserRouter>
            
        </>
    )
}
export default App;