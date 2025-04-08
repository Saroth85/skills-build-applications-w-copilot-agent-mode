import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <Card className="mt-4">
            <Card.Header as="h2">Users</Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Users;
