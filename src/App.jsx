import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  const users=[{
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied ',
      color:'royalblue'
    },
    {
      img:'https://images.unsplash.com/photo-1615561177861-76ac4aeeed8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Undeserved',
      color:'orange'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661627522817-99a84c5c77e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:' ',
      tag:'Underbackend',
      color:'pink'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:' ',
      tag:'Underback',
      color:'skyblue'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661641829400-3d9c157f97b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:' ',
      tag:'Average',
      color:'black'
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661591371928-abfb75ac0450?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'',
      tag:'Backend',
      color:'purple'
    }
  ]
    
    
  
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App