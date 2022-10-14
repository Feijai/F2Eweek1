import React from 'react';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

const PageCss = styled.div`
  margin-top:104px;
  @media (max-width:996px) {
    margin-top:51px;
  }
`

const App: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <PageCss>
        <Routes>
          {/* <Route path="/" element={< Home />} />
          <Route path="/picvalue" element={<PicValue />} />
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