import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Workouts() {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/workouts')
            .then(response => response.json())
            .then(data => setWorkouts(data));
    }, []);

    return (
        <Card className="mt-4">
            <Card.Header as="h2">Workouts</Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workouts.map(workout => (
                            <tr key={workout.id}>
                                <td>{workout.id}</td>
                                <td>{workout.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Workouts;
