import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteByidemp, listEmployees } from '../services/EmpService'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState([])
    useEffect(() => {
        listEmployees().then(response => {
            setEmployee(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log("Error occured");
        })
    }, [])

    const deleteemp=(id)=>{
        deleteByidemp(id).then((response)=> {
          console.log(response);
          if (response.status == 200) {
            alert("removed");
            window.location.reload();
          } 
          else{
            alert("not removed")
          }
        })
        .catch((err) => {
          console.log(err);
        });
       }

    return (
        <div>
            <div className="mx-auto m-5" style={{ width: '80%' }}>
                <div className="container text-center">
                    <h1>Employee Details</h1>
                    <div className="container m-2 text-center">
                        <Link to="/register" className="btn btn-outline-primary">New Register</Link>                    </div>
                </div>

                <table className="table table-dark table-bordered border-white shadow-lg p-3 mb-5 bg-body rounded">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Dob</th>
                            <th>Salary</th>
                            <th>Department</th>
                            <th>Address</th>
                            <th>Role</th>
                            <th>Joindate</th>
                            <th>Yearlybonus</th>
                            <th>Reportingmanager</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((emp,index)=> (
                            <tr className="table" key={emp.id}>
                                <td>{index +1}</td>
                                <td>{emp.name}</td>
                                <td>{emp.dob}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.department}</td>
                                <td>{emp.address}</td>
                                <td>{emp.role}</td>
                                <td>{emp.joindate}</td>
                                <td>{emp.yearlybonus}</td>
                                <td>{emp.reportingmanager}</td>
                                <td><MdDelete size={24} style={{ color: 'blue', cursor: 'pointer' }} onClick={() => deleteemp(emp.id)} /></td>
                                <td><FaEdit size={24} style={{ color: 'blue', cursor: 'pointer' }} onClick={()=>navigate(`/updateemp/${emp.id}`)} /></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Home
