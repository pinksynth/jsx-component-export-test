import React from "react"

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="profile-outer">
        <img src="avatar.png" className="profile" />
        <h3>{this.props.username}</h3>
      </div>
    )
  }
}

export default Profile
