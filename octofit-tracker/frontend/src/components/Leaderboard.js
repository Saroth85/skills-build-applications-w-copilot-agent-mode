import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch('https://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/leaderboard')
            .then(response => response.json())
            .then(data => setLeaderboard(data));
    }, []);

    return (
        <Card className="mt-4">
            <Card.Header as="h2">Leaderboard</Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map(entry => (
                            <tr key={entry.id}>
                                <td>{entry.rank}</td>
                                <td>{entry.name}</td>
                                <td>{entry.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Leaderboard;
