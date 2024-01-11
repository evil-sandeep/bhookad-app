import React from "react";
import { Outlet, Link  } from "react-router-dom";
class About extends React.Component {
    constructor(props) {
        super(props)
        console.log('parent constructor')
        this.state = {
            profile: {
                show: false
            }
        }
    }

    handleToggleProfile = () => {
        this.setState((prevState) => ({
            profile: {
                show: !prevState.profile.show
            }
        }))
    }

    render() {
        return (
            <div>
                <h1><b>About Us Page</b></h1>
                <h4> hello i am sandeep kumar sahoo</h4>
                <Link to='/about/profile'>
                    <button onClick={this.handleToggleProfile}>'Go to Profile</button>
                </Link>
                <Outlet />
            </div>
        )
    }
}

export default About;