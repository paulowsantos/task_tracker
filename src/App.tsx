import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import { TasksProvider } from './TasksContext';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </TasksProvider>
  );
};

export default App;
