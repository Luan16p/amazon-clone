import Header from './components/Header';
import HomeBrowser from './components/HomeBrowser';

import './style/global.css';
import './style/responsive.css'

import { BrowserRouter } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <Header/>
      <HomeBrowser/>
      
    </BrowserRouter>
  );
}

