import React from "react";

class Field extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const formattedName =
            this.props.name[0].toUpperCase() + this.props.name.substr(1);

        return (
            <div>
                this.props.editable ?
                <label htmlFor={this.props.name}>{formattedName}: </label>
                <input
                    type="text"
                    value={this.props.value}
                    name={this.props.name}
                    id={this.props.name}
                />{" "}
                :<p>{formattedName + ": " + this.props.value}</p>
            </div>
        );
    }
}

export default Field;
