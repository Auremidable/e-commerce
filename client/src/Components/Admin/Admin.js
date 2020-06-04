import React, { Component } from "react";
import { HydraAdmin } from '@api-platform/admin';


class Admin extends Component {
    render() {
        return (
            <div>
                <HydraAdmin entrypoint="https://127.0.0.1:8000/api" />
            </div>
        )
    }
}

export default Admin;