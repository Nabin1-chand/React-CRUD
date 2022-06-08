import React from "react";
import {useState} from "react";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';
const AddUser = () => {
     const navigate = useNavigate();
 const [user, setUser] = useState({
     name:"",
     username:"",
     email:"",
     phone: "",
     website:"",

 });
 const {name, username, email, phone, website}= user;
 const onInputChange = e =>{
    //  console.log(e.target.value);
    setUser({...user,[e.target.name]: e.target.value})
 };
 const onSubmit= async(e)=>{
     e.preventDefault();
     await axios.post("http://localhost:4000/users", user);
     navigate("/home");


 }

  return (
      <>
      <div className="container m-5">
          <div className="w-75 mx-auto shadow p-5 ">
             <div className="text-center mb-4">
                 <h2>Add User</h2>
                 <form onSubmit={e=> onSubmit(e)}>
                        <div class="form-group ">
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your Name"
                            name ="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                        </div>
                        <div class="form-group ">
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your user name"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                        </div>
                        <div class="form-group ">
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                        </div>
                        <div class="form-group ">
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your phone number"
                            name ="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}

                        />
                        </div>
                        <div class="form-group ">
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your website name"
                            name ="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                            
                        />
                        </div>

                        <button type="submit" class="btn btn-primary ">
                        Submit
                        </button>
                    </form>
          </div>
      </div>
      </div>
    
    </>
  );
};

export default AddUser;
