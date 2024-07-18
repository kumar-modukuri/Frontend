import React,{ useState,useEffect } from "react";
import axios from 'axios';

const EmployeeForm = ({employeeToUpdate,addEmp,updEmployee}) => {
    const [eid,setEid] = useState("");
    const [ename,setEname] = useState("");
    const [role,setRole] = useState("");
    const [error,setError] = useState("");

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

    // Adding New Employee and sending new employee to the Home with the help of addEmp

    const handleAdd = async (e) => {
        e.preventDefault();
        const employee = {eid,ename,role};

        if(employee.eid === "" || employee.ename === "" || employee.role === "")
        {
            setError("Enter All Fields");
        }
        else
        {
            if(employee.eid > 0)
            {
                const response = await axios.post("http://localhost:8080/api/employees", {
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
                    setError("");
                }
                else if(response.data === "EXISTED")
                {
                    setError("ID Already Exists");
                }
                else
                {
                    console.log("Backend Error");
                }
            }
            else
            {
                setError("Invalid ID");
            }
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const employee = {eid,ename,role};

        if(employee.eid === "" || employee.ename === "" || employee.role === "")
        {
            setError("Enter All Fields");
        }
        else
        {
            if(employee.eid > 0)
            {
                try 
                {
                    const response = await axios.put(`http://localhost:8080/api/employees/${employee.eid}`, {
                        eid: eid,
                        ename: ename,
                        role: role
                    });
    
                    if(response.data === "UPDATED") 
                    {
                        updEmployee(employee);
                    }
                    else if(response.data === "NOT FOUND")
                    {
                        setError("ID Not Found");
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
                setError("Invalid ID");
            }
        }
    }

    return ( 
        <form className="create">
            <h3>Employee Form</h3>

            <label>Enter ID : </label>
                <input 
                    type="number" 
                    onChange={(e) => setEid(e.target.value)}
                    placeholder="Type Here..."
                    value={eid}
                />
            

            <label>Name : </label>
                <input 
                    type="text" 
                    onChange={(e) => setEname(e.target.value)}
                    placeholder="Type Here..."
                    value={ename}
                />
            

            <label>Role : </label>
                <input 
                    type="text" 
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Type Here..."
                    value={role}
                />
            

            <div className="btns">
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleUpdate}>Update</button>
            </div>
            <div className="error">
                <p>{error}</p>
            </div>
        </form>
     );
}

export default EmployeeForm;