import React from 'react'
import DirectoryList from '../components/Directorylist'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='main'>
        <Sidebar/>
        <div className='konten'>
          <DirectoryList/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard