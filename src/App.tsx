import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import { TasksProvider } from './TasksContext';
import { PopupProvider } from './PopupContext';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <PopupProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </TasksProvider>
    </PopupProvider>
  );
};

export default App;
