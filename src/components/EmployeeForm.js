import axios from 'axios';
import React, { useEffect, useState } from "react";

const EmployeeForm = ({employeeToUpdate,addEmp,updEmployee}) => {
    const [eid,setEid] = useState("");
    const [ename,setEname] = useState("");
    const [role,setRole] = useState("");
    const [error,setError] = useState("");
    const [color,setColor] = useState("");

    // Backend API Endpoint

    const URL = "https://rajkumar-backend-api.onrender.com";

    // Enters the data of the employeeToUpdate into the Form after clicking Edit Button

    useEffect(() => {
        if(employeeToUpdate) 
        {
            setEid(employeeToUpdate.eid);
            setEname(employeeToUpdate.ename);
            setRole(employeeToUpdate.role);
        } 
        else
        {
            setEid("");
            setEname("");
            setRole("");
        }
    },[employeeToUpdate]); // It will work for every employee

    // To Clear the Error Message after 2 Seconds

    const errorClear = () => setTimeout(() => setError(""), 2000);

    // Check if the ID is Integer or not

    const handleChange = (e) => {
        const value = parseInt(e.target.value.replace(/^0+(?=\d)/, ''),10);
        setEid(isNaN(value) ? '' : value);
    };

    // Adding New Employee and Updating Existing Employee

    const handleClick = async (e,str) => {
        e.preventDefault();
        const employee = {eid,ename,role};

        if(employee.eid === "" || employee.ename === "" || employee.role === "")
        {
            setColor("red");
            setError("Enter All Fields");
            errorClear();
        }
        else
        {
            if(employee.eid > 0 && employee.eid < 1000)
            {
                let response = "";
                try
                {
                    if(str === "ADD")
                    {
                        response = await axios.post(URL+"/api/employees", {
                            eid: eid,
                            ename: ename,
                            role: role
                        });
                    }
                    if(str === "UPDATE")
                    {
                        response = await axios.put(`${URL}/api/employees/${employee.eid}`, {
                            eid: eid,
                            ename: ename,
                            role: role
                        });
                    }
                    if(response.data === "ADDED")
                    {
                        addEmp(employee);
                        setEid("");
                        setEname("");
                        setRole("");
                        setColor("green");
                        setError(employee.ename+" Added");
                        errorClear();
                    }
                    else if(response.data === "UPDATED") 
                    {
                        updEmployee(employee);
                        setEid("");
                        setEname("");
                        setRole("");
                        setColor("green");
                        setError(employee.eid+" Updated");
                        errorClear();
                    }
                    else if(response.data === "EXISTED")
                    {
                        setColor("red");
                        setError("ID Already Exists");
                        errorClear();
                    }
                    else if(response.data === "NOT FOUND")
                    {
                        setColor("red");
                        setError("ID Not Found");
                        errorClear();
                    }
                    else
                    {
                        console.log("Backend Error");
                    }
                }
                catch(error)
                {
                    console.log("Frontend : ",error.message);
                }
            }
            else
            {
                setColor("red");
                setError("0 < ID < 1000");
                errorClear();
            }
        }
    }

    return (
        <div className='errSeparate'>
            <form className="create">
                <div>
                    <h3 className='title'>Employee Form</h3>
                </div>
                <div className='divder'></div>
                <div>
                    <input
                        type="number"
                        name="text" 
                        placeholder="Enter ID"
                        onChange={handleChange}
                        value={eid}
                    />
                    <input
                        type="text" 
                        name="text"
                        placeholder="Enter Name"
                        onChange={(e) => setEname(e.target.value)}
                        value={ename}  
                    />
                    <input
                        type="text" 
                        name="text"
                        placeholder="Enter Role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    />
                </div>
                <div className="btns">
                    <button onClick={(e) => handleClick(e,"ADD")}>Add</button>
                    <button onClick={(e) => handleClick(e,"UPDATE")}>Update</button>
                </div>
            </form>
            <div className="error" style={{color}}>{error}</div>
        </div>
    );
}

export default EmployeeForm;