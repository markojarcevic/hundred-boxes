import React from 'react';
import GlobalStyle from './AppStyle';
import Board from 'containers/Board/Board';

function App(props) {
  return (
    <React.Fragment>
      <Board />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
