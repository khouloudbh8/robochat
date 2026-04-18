import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import ChatBox from './components/ChatBox.jsx'
import './styles/App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-layout">
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main-content">
        <ChatBox onMenuClick={() => setSidebarOpen(true)} />
      </main>
    </div>
  )
}

export default App