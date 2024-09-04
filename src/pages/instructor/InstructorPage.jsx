import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const InstructorPage = () => {
    const [instructor, setInstructor] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const fetchInstructor = async () => {
            try {
                const response = await axios.get(`/api/instructors/${id}`);
                setInstructor(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching instructor:', error);
                setLoading(false);
            }
        };

        fetchInstructor();
    }, [id]);

    const handleLogout = async () => {
        try {
            await axios.post('/api/instructors/logout');
            history.push('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {instructor ? (
                <div>
                    <h1>{instructor.name}</h1>
                    <p>Email: {instructor.email}</p>
                    <p>Role: {instructor.role}</p>
                    <h3>Courses:</h3>
                    <ul>
                        {instructor.courses.map(course => (
                            <li key={course._id}>{course.title}</li>
                        ))}
                    </ul>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Instructor not found</p>
            )}
        </div>
    );
};

export default InstructorPage;
