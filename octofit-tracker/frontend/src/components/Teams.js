import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/teams')
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);

    return (
        <Card className="mt-4">
            <Card.Header as="h2">Teams</Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map(team => (
                            <tr key={team.id}>
                                <td>{team.id}</td>
                                <td>{team.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Teams;
