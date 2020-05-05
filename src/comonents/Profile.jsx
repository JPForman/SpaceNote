import React from 'react';


export default function Profile({selectedUser}){
console.log('profile selectedUser', selectedUser);


  return(
  <div>
    <h1>{selectedUser.firstName} {selectedUser.lastName}</h1>
  </div>
  )
}