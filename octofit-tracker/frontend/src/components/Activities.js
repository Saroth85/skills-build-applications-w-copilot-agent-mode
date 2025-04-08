import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Activities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/activities')
            .then(response => response.json())
            .then(data => setActivities(data));
    }, []);

    return (
        <Card className="mt-4">
            <Card.Header as="h2">Activities</Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map(activity => (
                            <tr key={activity.id}>
                                <td>{activity.id}</td>
                                <td>{activity.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Activities;
