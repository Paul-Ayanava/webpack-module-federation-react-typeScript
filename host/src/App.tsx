import React, { Suspense } from 'react'
import './App.css'
const FederatedButton = React.lazy(() => import('RemoteApp/Button'))

function App() {
  return (
    <div className="App">
      <header className="App-header">This is the host application</header>
      <Suspense fallback={<div>Loading...</div>}>
        <FederatedButton />
      </Suspense>
    </div>
  )
}

export default App
