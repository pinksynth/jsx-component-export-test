import React from "react"

const Profile = (username) => {
  return (
    <div>
      <img src="avatar.png" className="profile" />
      <h3>{username}</h3>
    </div>
  )
}

export default Profile
