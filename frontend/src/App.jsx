import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Second from './components/SecondBar/Second'
import Menu from './components/Sidebar/Sidebar'
// import ReportsSidebar from './components/Sidebar/Sidebar'
// import Stats from './components/Stats/Stats'

const App = () => {
  return (
    <div>
      <Navbar />
      <Second />
      <Menu />
    </div>
  )
}

export default App
