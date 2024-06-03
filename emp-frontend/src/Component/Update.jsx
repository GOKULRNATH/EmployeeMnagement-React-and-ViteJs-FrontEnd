import React, { useEffect, useState } from 'react'
import { getempById, updateempById } from '../services/EmpService';
import {useParams,useNavigate } from 'react-router-dom';

function Update() {

    const navigate=useNavigate();
    const {id}=useParams();
    const [register,setRegister]=useState({
        name: '',
        dob: '',
        salary: '',
        department: '',
        address: '',
        role: '',
        joindate: '',
        yearlybonus: '',
        reportingmanager: ''
      });

    useEffect(()=>{
        getempById(id).then((response)=>{
            setRegister(response.data);
            console.log(response.data)
        })
    },[id])

    const changehandle =(a)=>{
        setRegister({...register,[a.target.name]: a.target.value})
    }

    const submitt=(e)=>{
        e.preventDefault()
        updateempById(id,register).then((responce)=>{
            console.log("DataEntered" ,responce);
            if (responce.status == 200) {
                alert("Register Sucessfully");
                navigate("/home")
              } else {
                alert("Register Failed");
              }
            }).catch(error=>{
              console.error('There was an error saving the employee!', error);
            })
    }
    return (
        <div className="mx-auto m-5" style={{ width: '50%' }}>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <form  onSubmit={submitt} className="p-4">
          <h1 className="text-center p-2">Employee Registration</h1>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                value={register.name}
                onChange={changehandle}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">DOB</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="dob"
                value={register.dob}
                onChange={changehandle}
                //placeholder='2000-01-01'
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Salary</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="salary"
                value={register.salary}
                onChange={changehandle}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Department</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="department"
                value={register.department}
                onChange={changehandle}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="address"
                value={register.address}
                onChange={changehandle}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Role/Title</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="role"
                value={register.role}
                onChange={changehandle}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Join Date</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="joindate"
                value={register.joindate}
                onChange={changehandle}
                //placeholder='2000-01-01'
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Yearly Bonus(%)</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="yearlybonus"
                value={register.yearlybonus}
                onChange={changehandle}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Reporting Manager</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="reportingmanager"
                value={register.reportingmanager}
                onChange={changehandle}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mb-3">update</button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Update
