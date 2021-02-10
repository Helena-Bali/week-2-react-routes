import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <div> <Link to="/dashboard/profile/6eb6fac0-c046-11e9-959d-f7e5e476ceb6">Go To Profile</Link> </div>
          <div> <Link to="/dashboard">Go To Root</Link> </div> 
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
