import React from "react"

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
            const response = await fetch('https://api.github.com/users/evil-sandeep')
            if (!response.ok) {
                throw new Error();
            }
            const data = await response.json();

            this.setState({
                userInfo: data
            })
        } catch (error) {
console.log(error+'Api data fetch error')
        }

        console.log('api call')
    }

    componentWillUnmount() {
        this.abortController.abort();
        console.log('api remove')
    }

    render() {
        return (
            <div key={this.state.userInfo?.id}>
                <h1>Name:{this.state.userInfo?.name}</h1>
                <img src={this.state.userInfo?.avatar_url
                } alt="Profile-img" />
                <h1>bio:{this.state.userInfo?.bio}</h1>
                <h1>created_at:{this.state.userInfo?.created_at}</h1>
                <h1>events_url:{this.state.userInfo?.events_url}</h1>
                <h1>followers:{this.state.userInfo?.followers}</h1>
                <h1>following:{this.state.userInfo?.following}</h1>
                <h1>url:{this.state.userInfo?.url}</h1>
                <h1>repos_url:{this.state.userInfo?.repos_url}</h1>
                <h1>public_repos:{this.state.userInfo?.public_repos}</h1>
                <h1>html_url:{this.state.userInfo?.html_url}</h1>
                <h1>location:{this.state.userInfo?.location}</h1>
                <h1>login:{this.state.userInfo?.login}</h1>
                <h1>node_id:{this.state.userInfo?.node_id}</h1>
                <h1>organizations_url:{this.state.userInfo?.organizations_url}</h1>
                <h1>repos_url:{this.state.userInfo?.repos_url}</h1>
                <h1>type:{this.state.userInfo?.type}</h1>
                <h1>received_events_url:{this.state.userInfo?.received_events_url}</h1>
            </div>)
    }
}

export default Profile 