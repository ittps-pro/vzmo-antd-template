// HeaderContainer

// Logo

// TopNav

// CallbackButton

import { Layout, Button } from 'antd';

// import { useTheme } from 'antd-style';
import './header.css';
let theme = {
  header: {
    backgroundColor: '#fff',
    textColor: '#333',
  },
};

export const HeaderConfig = { src: '/public/logo.png' };

function HeaderLogo() {
  return (
    <div className="logo">
      <img src="/public/logo.png" />
    </div>
  );
}

function HeaderNav() {
  return <nav className="nav">Nav</nav>;
}

export function HeaderComponent() {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav />

      <div className="navigation">Navigation</div>
      <div className={'callback'}>Callback</div>

      <Button>Call</Button>
    </header>
  );
}
