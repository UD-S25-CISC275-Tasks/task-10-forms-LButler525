import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<number>(0);

    function updateRequests(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(parseInt(event.target.value) || 0);
    }

    function updateAttempts() {
        setAttempts(attempts + requests);
    }

    function useAttempt() {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            attempts left: {attempts}
            <Form.Group controlId="answers">
                <Form.Label>Enter Answer: </Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={updateRequests}
                />
            </Form.Group>
            <Button onClick={updateAttempts}> gain</Button>
            <Button onClick={useAttempt} disabled={attempts <= 0}>
                use
            </Button>
        </div>
    );
}
