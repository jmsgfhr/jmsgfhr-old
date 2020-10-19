import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Routes from './routes/index';

function App() {
  return (
    < BrowserRouter>
        < Header />
        < Routes />
        < Footer />
    </BrowserRouter>
  );
}

export default App;
