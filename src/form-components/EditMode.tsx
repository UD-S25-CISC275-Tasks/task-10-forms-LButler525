import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editable, setEditable] = useState<boolean>(false);

    function updateEditable(event: React.ChangeEvent<HTMLInputElement>) {
        setEditable(event.target.checked);
    }

    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    const [student, setStudent] = useState<string>("Your Name");

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="edit"
                checked={editable}
                onChange={updateEditable}
            />
            {editable ?
                <div>
                    <Form.Check
                        type="checkbox"
                        name="student"
                        id="student"
                        label="student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                        disabled={!editable}
                    />
                    <Form.Group controlId="student">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control
                            value={student}
                            onChange={updateStudent}
                            disabled={!editable}
                        />
                    </Form.Group>
                </div>
            :   ""}
            {student} {isStudent ? "is a student" : "is not a student"}
        </div>
    );
}
