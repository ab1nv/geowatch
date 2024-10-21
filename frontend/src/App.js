import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        axios
            .get("http://localhost:8000/example").then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setMessage("Error fetching data");
            });
    }, []);

    return (
        <div className="app-container">
            <header>
                <h1>Welcome to GeoWatch</h1>
                <p className="message">{message}</p>
            </header>
        </div>
    );
}

export default App;
