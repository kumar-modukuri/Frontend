import {useEffect,useState} from 'react';
import EmployeeForm from '../components/EmployeeForm';
import axios from 'axios';

const Home = () => {
    const [employees,setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updEmp, setUpdEmp] = useState(null);

    // GET ALL

    useEffect(() => {
        const fetchEmployees = async () => {
            try 
            {
                const response = await axios.get('http://localhost:8080/api/employees');
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
            }
        };
        fetchEmployees();
    }, [updEmp]);

    // ADD

    const addEmployee = (newEmp) => {
        setEmployees([...employees, newEmp]);
    }

    // DELETE

    const handleDelete = async (employee) => 
    {
        try
        {
            const response = await axios.delete(`http://localhost:8080/api/employees/${employee.eid}`);
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
            const response = await axios.get(`http://localhost:8080/api/employees/${employee.eid}`);
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
        setUpdEmp(updatedEmployee);
    }

    return (
        <div className="home">
            <div className="employees">
                {loading ? (<p>Loading...</p>) : (
                    employees && employees.map((employee) => (
                        <div className="employee-details" key={employee.eid}>
                            <div className='empContent'>
                                <h4>Employee-ID : {employee.eid}</h4>
                                <p><strong>Name : </strong>{employee.ename}</p>
                                <p><strong>Role : </strong>{employee.role}</p>
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
            <div className='details'>
                <EmployeeForm
                    employeeToUpdate={updEmp} // Sending updEmp to Employee Form for filling data into the Form
                    addEmp={addEmployee} // Receiving new Employee and assigning it to the setEmployees with the help of addEmployee Function
                    updEmployee={updateEmployee} // Receiving updated Employee and assigning it to the setUpdEmp  with the help of updateEmployee Function
                />
            </div>
        </div>
    );
};

export default Home;