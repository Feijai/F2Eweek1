import React from 'react';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Header from './components/Header'
import Home from './pages/Home'

const PageCss = styled.div`
  @media (max-width:996px) {
  }
`

const App: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <PageCss>
        <Routes>
          <Route path="/" element={< Home />} />
          {/*<Route path="/picvalue" element={<PicValue />} />
          <Route path="/export" element={<Export />} />
          <Route path="/artDetail" element={<ArtDetail />} />
          <Route path="/artistDetail" element={<ArtistDetail />} /> */}
        </Routes>
        {/* <Footer /> */}
      </PageCss>
    </>
  );
}

export default App