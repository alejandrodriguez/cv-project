import React, { useState } from "react";
import Field from "./Field";

const Section = props => {
    const [editable, setEditable] = useState(true);
    const [fieldValues, setFieldValues] = useState({});

    function handleChange(e) {
        const newFieldValues = Object.assign({}, fieldValues);
        newFieldValues[e.target.id] = e.target.value;
        setFieldValues(newFieldValues);
    }

    return (
        <div className="Section">
            {props.fields.map((element, index) => {
                return (
                    <Field
                        handleChange={e => handleChange(e)}
                        uniqueName={element}
                        value={fieldValues[element] ? fieldValues[element] : ""}
                        editable={editable}
                        key={index}
                    />
                );
            })}
            <button onClick={() => setEditable(!editable)}>
                {editable ? "Save" : "Edit"}
            </button>
        </div>
    );
};

export default Section;
