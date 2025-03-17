import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-red"
                label="red"
                color="red"
                value="red"
                checked={color === "red"}
                style={{ backgroundColor: "red" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-blue"
                label="blue"
                value="blue"
                checked={color === "blue"}
                style={{ backgroundColor: "blue" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-green"
                label="green"
                value="green"
                checked={color === "green"}
                style={{ backgroundColor: "green" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-orange"
                label="orange"
                value="orange"
                checked={color === "orange"}
                style={{ backgroundColor: "orange" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-purple"
                label="purple"
                value="purple"
                checked={color === "purple"}
                style={{ backgroundColor: "purple" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-cyan"
                label="cyan"
                value="cyan"
                checked={color === "cyan"}
                style={{ backgroundColor: "cyan" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-magenta"
                label="magenta"
                value="magenta"
                checked={color === "magenta"}
                style={{ backgroundColor: "magenta" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-white"
                label="white"
                value="white"
                checked={color === "white"}
                style={{ backgroundColor: "white" }}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="response-black"
                label="black"
                value="black"
                checked={color === "black"}
                style={{ backgroundColor: "black" }}
            />
            <div>
                You have choosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
