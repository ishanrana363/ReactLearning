import React from 'react'
import CondictionalRendering from './components/condictional-rendering/CondictionalRendering';
import ListRender from './components/list/ListRender';

const App = () => {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://images.unsplash.com/photo-1737069222398-febfd663da1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    imageSize: 90,
  };
  return (
    <div>
      {/* <h1>Name : {user?.name}</h1>
      <img src= {user?.imageUrl}  alt="" style={{"width":user.imageSize}} /> */}
      {/* <CondictionalRendering></CondictionalRendering> */}
      <ListRender></ListRender>
    </div>

  )
}

export default App
