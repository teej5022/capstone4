import React, { Component } from "react";
import Persons from "../containers/Persons";

class Fellowship extends Component {
    render() {
        return (
            <div className="Fellowship">
                <p>Create your own Fellowship</p>
                <Persons />
            </div>
        );
    }
}

export default Fellowship;