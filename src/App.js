import React from 'react';
import { Route } from 'react-router-dom';

import CustomScroll from './components/CustomScroll';
import HeadRoom from './components/headRoom';
import A from './components/browserBackBtn/A';
import B from './components/browserBackBtn/B';

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={CustomScroll} />
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
      <Route path="/headRoom" component={HeadRoom} />
    </div>
  );
}

export default App;
