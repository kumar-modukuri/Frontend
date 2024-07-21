import axios from 'axios';
import React, { useEffect, useState } from "react";

const EmployeeForm = ({employeeToUpdate,addEmp,updEmployee}) => {
    const [eid,setEid] = useState("");
    const [ename,setEname] = useState("");
    const [role,setRole] = useState("");
    const [error,setError] = useState("");

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

    // To Clear the Error Message after 1 Second

    const errorClear = () => setTimeout(() => setError(""), 1000);

    // Adding New Employee and sending new employee to the Home with the help of addEmp

    const handleAdd = async (e) => {
        e.preventDefault();
        const employee = {eid,ename,role};

        if(employee.eid === "" || employee.ename === "" || employee.role === "")
        {
            setError("Enter All Fields");
            errorClear();
        }
        else
        {
            if(employee.eid > 0 && employee.eid < 1000)
            {
                const response = await axios.post(URL+"/api/employees", {
                    eid: eid,
                    ename: ename,
                    role: role
                });

                if(response.data === "ADDED")
                {
                    addEmp(employee); // For automatically adds data without refreshing
                    setEid("");
                    setEname("");
                    setRole("");
                    setError(employee.ename+" Added");
                    errorClear();
                }
                else if(response.data === "EXISTED")
                {
                    setError("ID Already Exists");
                    errorClear();
                }
                else
                {
                    console.log("Backend Error");
                }
            }
            else
            {
                setError("0 < ID < 1000");
                errorClear();
            }
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const employee = {eid,ename,role};

        if(employee.eid === "" || employee.ename === "" || employee.role === "")
        {
            setError("Enter All Fields");
            errorClear();
        }
        else
        {
            if(employee.eid > 0 && employee.eid < 1000)
            {
                try 
                {
                    const response = await axios.put(`${URL}/api/employees/${employee.eid}`, {
                        eid: eid,
                        ename: ename,
                        role: role
                    });
    
                    if(response.data === "UPDATED") 
                    {
                        updEmployee(employee);
                        setEid("");
                        setEname("");
                        setRole("");
                        setError(employee.eid+" Updated");
                        errorClear();
                    }
                    else if(response.data === "NOT FOUND")
                    {
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
                        onChange={(e) => setEid(e.target.value.replace(/^0+(?=\d)/, ''))}
                        value={eid}
                    />
                    <input
                        type="text" 
                        name="text"
                        placeholder="Employee Name"
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
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </form>
            <div className="error">{error}</div>
        </div>
    );
}

export default EmployeeForm;