
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

import { GenereProvider, useGenre } from './context/useGenre';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';
 
export function App() {
  return (
    <GenereProvider> 
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar /> 

          <div className="container">
            <Header />
            <Content />
        </div>
      </div>
    </GenereProvider>
  )
}