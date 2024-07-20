import {useEffect,useState} from 'react';
import EmployeeForm from '../components/EmployeeForm';
import axios from 'axios';

const Home = () => {
    const [employees,setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updEmp, setUpdEmp] = useState(null);
    const [temp,setTemp] = useState(null);

    // Backend API Endpoint

    const URL = "https://rajkumar-backend-api.onrender.com";

    // GET ALL

    useEffect(() => {
        const fetchEmployees = async () => {
            try 
            {
                const response = await axios.get(URL+"/api/employees");
                if(response.data.length === 0)
                {
                    console.log("Database is Empty or Error");
                }
                setEmployees(response.data);
            } 
            catch(error) 
            {
                console.log("Error Fetching Employees");
            }
            finally
            {
                setLoading(false);
                setUpdEmp(null);
            }
        };
        fetchEmployees();
    }, [temp]);

    // ADD

    const addEmployee = (newEmp) => {
        const updatedEmployees = [...employees, newEmp];
        const sortedEmployees = updatedEmployees.sort((a, b) => a.eid - b.eid);
        setEmployees(sortedEmployees);
    }

    // DELETE

    const handleDelete = async (employee) => 
    {
        try
        {
            const response = await axios.delete(`${URL}/api/employees/${employee.eid}`);
            if(response.data === "DELETED")
            {
                setEmployees(employees.filter(emp => emp.eid !== employee.eid));
            }
            else
            {
                console.log("Backend Error");
            }
        } 
        catch(error) 
        {
            console.log("Error Deleting Employee");
        }
    }

    // GET BY ID (Getting Employee By Id into updEmp,then sending it to the EmployeeForm)

    const handleEdit = async (employee) => 
    {
        try 
        {
            const response = await axios.get(`${URL}/api/employees/${employee.eid}`);
            if(response.data.length === 0)
            {
                console.log("Backend Error");
            }
            else
            {
                setUpdEmp(response.data);
            }
        }
        catch(error) 
        {
            console.log("Error Fetching Employee By Id");
        }
    };

    const updateEmployee = async (updatedEmployee) => {
        setTemp(updatedEmployee);
    }

    return (
        <div className="home">
            <div className='empForm'>
                <EmployeeForm
                    employeeToUpdate={updEmp}
                    addEmp={addEmployee}
                    updEmployee={updateEmployee}
                />
            </div>
            <div className='empDiv'>
                <div className="employees">
                    {loading ? (<p>Loading...</p>) : (
                        employees && employees.map((employee) => (
                            <div className="employee-details" key={employee.eid}>
                                <div className='empContent'>
                                    <div id='empID'>
                                        <h4 className='huge'>{employee.eid}</h4>
                                    </div>
                                    <div id='empData'>
                                        <p><strong>Name : </strong>{employee.ename}</p>
                                        <p><strong>Role : </strong>{employee.role}</p>
                                    </div>
                                </div>
                                <div className='upd'>
                                    <span className="editClr" onClick={() => handleEdit(employee)}>Edit</span>
                                    <span> | </span>
                                    <span className="delClr" onClick={() => handleDelete(employee)}>Delete</span>   
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;