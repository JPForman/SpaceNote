import React from 'react';


export default function TopTracks({selectedUser}){


  return(
  <div>
      <p>Fav Track 1: {selectedUser.topSong}</p>
      <p>Fav Track 2: {selectedUser.secondSong}</p>
      <p>Fav Track 3: {selectedUser.thirdSong}</p>
  </div>
  )
}