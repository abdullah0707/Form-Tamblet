import React from 'react';
import {withRouter} from "react-router-dom";

// Props of View Data
const ViewUser = function (props) {
    return <div>
            Page: {props.location.pathname}<br />
            Id: {props.match.params.id}

            <div>
                Name: {props.user.name}
            </div><br />
            <div>
                Email: {props.user.email}
            </div><br />
            <div>
                phone: {props.user.phone}
            </div><br />
            <div>
                username: {props.user.username}
            </div><br />
            <div>
                website: {props.user.website}
            </div>
        </div>;
}

export default withRouter(ViewUser);