import React, { useEffect } from 'react'
import UseGlobalStates from '../../hooks/UseGlobalStates'

const Dashboard = () => {
  const {setTitle} = UseGlobalStates() 

useEffect(()=>{
    setTitle(()=>"Dashboard")
},[])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard