import React from "react";
import Section from "./components/Section";

function App() {
    return (
        <div className="App">
            <h1>CV Project</h1>
            <Section fields={["name", "email", "phone number"]} />
            <Section
                fields={[
                    "school name",
                    "title of study",
                    "studied from",
                    "until"
                ]}
            />
            <Section
                fields={[
                    "company name",
                    "position title",
                    "main tasks",
                    "worked from",
                    "until"
                ]}
            />
        </div>
    );
}

export default App;
