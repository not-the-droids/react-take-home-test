import React from 'react'
import logo from './logo.svg'
import Center from './components/Center'

function App() {
  return (
    <div className="App" style={appContainerStyle}>
      <main style={mainContainerStyle}>
        <Center>
          <p>Main Content</p>
        </Center>
      </main>
      <aside style={sidebarContainerStyle}>
        <Center>
          <p>Sidebar</p>
        </Center>
      </aside>
    </div>
  );
}

const appContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '[main] auto [sidebar] 250px',
  gridTemplateRows: 'auto',
  maxWidth: '900px',
  margin: 'auto',
}

const mainContainerStyle = {
  backgroundColor: 'lightgrey',
}

const sidebarContainerStyle = {
  backgroundColor: 'grey',
}

export default App;
