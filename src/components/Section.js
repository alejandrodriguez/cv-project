import React from "react";
import Field from "./Field";

class Section extends React.Component {
    constructor(props) {
        super(props);
        let initState = {
            editable: true
        };
        this.props.fields.forEach(field => {
            initState[field] = "";
        });
        this.state = initState;
        this.toggleEditable = this.toggleEditable.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleEditable() {
        this.setState(prevState => ({
            editable: !prevState.editable
        }));
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <div>
                {this.props.fields.map((element, index) => {
                    return (
                        <Field
                            handleChange={this.handleChange}
                            uniqueName={element}
                            value={this.state[element]}
                            editable={this.state.editable}
                            key={index}
                        />
                    );
                })}
                <button onClick={this.toggleEditable}>
                    {this.state.editable ? "Save" : "Edit"}
                </button>
            </div>
        );
    }
}

export default Section;
