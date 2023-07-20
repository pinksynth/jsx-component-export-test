import { useState } from "react"

const Profile = (username) => {
  useState(false)

  return (
    <div>
      <img src="avatar.png" className="profile" />
      <h3>{username}</h3>
    </div>
  )
}

export default Profile
