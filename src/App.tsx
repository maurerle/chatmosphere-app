import * as React from 'react'
import { Header } from './components/Header/Header'
import styled from 'styled-components'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Enter } from "./pages/Enter/Enter"
import { Session } from "./pages/Session/Session"
import ScreenShare from './pages/ScreenShare/ScreenShare'

const AppContainer = styled.div`
  text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  cursor: default;
`


function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/enter/:id" element={<Enter />} />
          /* TODO: redirect to "/enter" if this the first time the user in this conference */
          <Route path="/session/:id" element={<Session />} />
          <Route path="/screenshare/:id/:displayName/:linkPrimary" element={<ScreenShare />} />
          <Route path="/" element={<><Header>Chatmosphere</Header><Home /></>} />
        </Routes>
      </Router>
    </AppContainer>
  )
}

export default App
