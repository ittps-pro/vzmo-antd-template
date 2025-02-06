// HeaderContainer

// Logo

// TopNav

// CallbackButton

import { Layout, Button, Menu } from 'antd';
import { PhoneOutlined } from "@ant-design/icons"
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

export function HeaderComponent() {


  let menu = [
    { key: "1", label: "Главная" },
    { key: "2", label: "Продукты"},
    { key: "3", label: "О нас" },
    { key: "4", label: "Контакты" },
  ]

  return (
    <header className="header">
      <HeaderLogo />
      <Menu
      className='menu'
      selectable
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menu}
/>
      <Button type='primary' size='large' icon={<PhoneOutlined />}></Button>
    </header>
  );
}
