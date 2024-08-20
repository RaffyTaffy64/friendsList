import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [friends, setFriends] = useState([])
  const [picture, setPicture] = useState("")
  const [name, setName] = useState("")

  const getSavedFriends = async () => {
    const res = await axios.get(`/api/friends`)
    setFriends(res.data)
  }

  useEffect(() => {
    getSavedFriends()
  }, [])

  const addFriend = () => {
   const newFriends = [...friends]
   newFriends.push({ picture: picture, name: name })
   setFriends(newFriends)
   setPicture("")
   setName("")
  }

  const friendInfo = friends.map(() => {
    return (
    <div key={`${friends.name}`}>
      <img width="100px" src={friends.picture} alt={friends.name}/>
      <span>{friends.name}</span>
    </div>
    )
  })

  return (
  
  <div>
    <label htmlFor="picture" value="picture" onChange={(e) => setPicture(e.target.value)}>Picture</label>
    <input id="picture"/>

    <label htmlFor="name" value="name" onChange={(e) => setName(e.target.value)}>Name</label>
    <input id="name"/>

    
    <button type="button" onClick={addFriend}>Add Friend</button>
  </div>
  )
}
