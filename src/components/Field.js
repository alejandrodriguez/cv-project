import React from "react";

class Field extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const formattedName =
            this.props.uniqueName[0].toUpperCase() +
            this.props.uniqueName.substr(1);

        return this.props.editable ? (
            <div>
                <label htmlFor={this.props.uniqueName}>{formattedName}: </label>
                <input
                    onChange={e => this.props.handleChange(e)}
                    type="text"
                    value={this.props.value}
                    name={this.props.uniqueName}
                    id={this.props.uniqueName}
                />
            </div>
        ) : (
            <div>
                <p>{formattedName + ": " + this.props.value}</p>
            </div>
        );
    }
}

export default Field;
