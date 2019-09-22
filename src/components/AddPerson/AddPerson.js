import React, { Component } from "react";
import "./AddPerson.css";

class AddPerson extends Component {
    state = {
        name: "",

    };

    nameChangedHandler = event => {
        this.setState({ name: event.target.value });
    };

    ageChangedHandler = event => {
        this.setState({ age: event.target.value });
    };

    render() {
        return (
            <div className="AddPerson">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangedHandler}
                    value={this.state.name}
                />
                <button
                    onClick={() =>
                        this.props.personAdded(this.state.name)
                    }
                >
                    Add Me
        </button>
            </div>
        );
    }
}

export default AddPerson;
