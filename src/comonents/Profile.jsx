import React from 'react';
import TopTracks from './TopTracks';
import '../scss/_profile.scss'


export default function Profile({selectedUser}){
console.log('profile selectedUser', selectedUser);


  return(
  <div className='profile'>
    <h1>{selectedUser.firstName} {selectedUser.lastName}</h1>
    <h3>{selectedUser.bio}</h3>
    <TopTracks selectedUser={selectedUser}/>
  </div>
  )
}