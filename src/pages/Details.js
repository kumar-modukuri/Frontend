import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [employee,setEmployee] = useState([]);

    // Backend API Endpoint

    const URL = "https://rajkumar-backend-api.onrender.com";

    useEffect(() => {
        const fetchEmployee = async () => {
            try 
            {
                const response = await axios.get(`${URL}/api/employees/${id}`);
                if(response.data.length === 0)
                {
                    console.log("Backend Error");
                } 
                else 
                {
                    setEmployee(response.data);
                }
            } 
            catch (error) 
            {
                console.log("Error Fetching Employee By Id");
            }
        };
        fetchEmployee();
    },[id]);

    return (
        <div>
            <h2>Details Page</h2>
            <p>Employee ID   : {employee.eid}</p>
            <p>Employee Name : {employee.ename}</p>
            <p>Employee Role : {employee.role}</p>
        </div>
    );
}

export default Details;