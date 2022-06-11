import React from "react";

const Field = props => {
    const formattedName =
        props.uniqueName[0].toUpperCase() + props.uniqueName.substr(1);

    return props.editable ? (
        <div>
            <label htmlFor={props.uniqueName}>{formattedName}: </label>
            <input
                onChange={e => props.handleChange(e)}
                type="text"
                value={props.value}
                name={props.uniqueName}
                id={props.uniqueName}
            />
        </div>
    ) : (
        <div>
            <p>{formattedName + ": " + (props.value || "N/A")}</p>
        </div>
    );
};

export default Field;
