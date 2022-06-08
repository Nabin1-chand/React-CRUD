

import axios from "axios";
import { Link } from 'react-router-dom'
import  React, {  useState, useEffect} from "react";

const Home = () => {
    const [users, setUser] = useState([]);
    useEffect(()=>{
     console.log("Whats up bro");
     loadUsers();
    },[]);

    const loadUsers = async ()=>{
        const  result =  await axios.get("http://localhost:4000/users");
        // console.log(result);
        setUser(result.data.reverse());
    };
    const deleteUser = async id =>{
        await axios.delete(`http://localhost:4000/users/${id}`);
        loadUsers();
    }
  return (
      <>
          <div>Home page</div>
          <table class="table border shadow-black">
  <thead class ="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index)=>(
            <tr>
            <th scope ="row">{index + 1} </th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
            <div class="row">
                    <div class="col-2">
                    <Link  class="btn btn-primary btn-block" to={`/users/${user.id}`}>View</Link>
                    </div>
                    <div class="col-2">
                    <Link class="btn btn-outline-primary btn-block" to ={`/users/edit/${user.id}`}>Edit</Link>
                    </div>
                    <div class="col-2">
                    <Link class="btn btn-danger btn-block" onClick ={() => deleteUser(user.id)} to ="">Delete</Link>
                    </div>
                </div>

            </td>
            </tr>
           
        ))
    }
  </tbody>
</table>
      </>
  

  )
}

export default Home