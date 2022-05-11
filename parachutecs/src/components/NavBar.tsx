import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

export const NavBar = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Home
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Blog
    </Menu.Item>
  </Menu>
);