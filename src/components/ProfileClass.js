import React from "react"
import { GITHUB_URL } from "../config";

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: 'Dummy Name',
                Location: 'Dummy Location'
            }
        }
        this.abortController = new AbortController();
    }
    async componentDidMount() {
        try {
            const response = await fetch(GITHUB_URL)
            if (!response.ok) {
                throw new Error();
            }
            const data = await response.json();

            this.setState({
                userInfo: data
            })
        } catch (error) {
            console.log(error + 'Api data fetch error')
        }

        console.log('api call')
    }

    componentWillUnmount() {
        this.abortController.abort();
        console.log('api remove')
    }

    render() {
        return (
            <div className="flex justify-between items-center" key={this.state.userInfo?.id}>
                <div className="font-bold text-2xl ">
                    <h1 >Name :🕴️{this.state.userInfo?.name}</h1><br />
                    <h1>Bio : {this.state.userInfo?.bio}</h1><br />
                    <h1>User-Name :👤{this.state.userInfo?.login}</h1><br />
                    <h1>URL : {this.state.userInfo?.url}</h1><br />
                    <h1>Repos_url :📢{this.state.userInfo?.repos_url}</h1><br />
                    <h1>Public_repos :🔄️{this.state.userInfo?.public_repos}</h1><br />
                    <h1>Location :📌{this.state.userInfo?.location}</h1>




                </div>
                <img className=" mb-5  p-2" src={this.state.userInfo?.avatar_url
                } alt="Profile-img" />
            </div>)
    }
}

export default Profile 