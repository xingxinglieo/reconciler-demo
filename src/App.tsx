import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Router from './router';

const Index: React.FC = (): React.ReactElement => {
  const App = (
    <div>
      <Router />
      <Footer />
    </div>
  );

  return <BrowserRouter>{App}</BrowserRouter>;
};

export default Index;
