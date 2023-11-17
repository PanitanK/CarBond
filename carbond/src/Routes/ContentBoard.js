import React from 'react';

import HomeMode from './HomeComp';
import ReqMode from './Req'
import ResearchMode from './Research'
import PartnerMode from './Partners'
import MarketMode from './Market'

function ContentBoard({ mode ,userData,plotDocuments}) {

  
  switch (mode) {
    case '/option1':
      return <HomeMode DataPackage={{userData , plotDocuments}} />;
    case '/option2':
      return <ReqMode DataPackage={{userData , plotDocuments}}/>;
    case '/option3':
      return <ResearchMode  DataPackage={{userData , plotDocuments}}/>;
    case '/option4':
      return <PartnerMode DataPackage={{userData , plotDocuments}}/>;
    case '/option5':
      return <MarketMode DataPackage={{userData , plotDocuments}}/>;


    default:
      return null; // Render null for unknown modes
  }
}

export default ContentBoard;
