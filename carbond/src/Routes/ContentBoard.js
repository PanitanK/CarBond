import React from 'react';

import HomeMode from './HomeMode';
import ReqMode from './Req'
import ResearchMode from './Research'
import PartnerMode from './Partners'
import MarketMode from './Market'

function ContentBoard({ mode ,userData}) {
  switch (mode) {
    case '/option1':
      return <HomeMode userData={userData}/>;
    case '/option2':
      return <ReqMode userData={userData}/>;
    case '/option3':
      return <ResearchMode userData={userData}/>;
    case '/option4':
      return <PartnerMode userData={userData}/>;
    case '/option5':
      return <MarketMode userData={userData}/>;


    default:
      return null; // Render null for unknown modes
  }
}

export default ContentBoard;
