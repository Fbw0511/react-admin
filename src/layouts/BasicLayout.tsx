import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Layout, Menu, theme } from 'antd'
import { BulbOutlined, BulbFilled, BugOutlined } from "@ant-design/icons";
import { useAppStore } from '@/stores/appStore'

const { Sider, Header, Content }  = Layout

export default function BasicLayout() {
  const navigate = useNavigate()
  const dark = useAppStore((s)=>s.dark)
  const toggleDark = useAppStore((s)=>s.toggleDark)
  const { token } = theme.useToken()
  const [ collapsed, setCollapsed ] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh'}}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ height: 32, margin: 16, color: '#fff', fontWeight: 700, textAlign: 'center', lineHeight: '32px' }}>
          React Admin
        </div>
        <Menu 
          theme="dark"
          mode="inline"
          onClick={(e)=>navigate(e.key)}
          items={[{ key: '/dashboard', icon: <BugOutlined />, label: '仪表盘' }]}
        />
      </Sider>
      <Layout>
        <Header style={{ background: token.colorBgContainer, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingInline: 16 }}>
          <Button type="text" icon={dark ? <BulbFilled /> : <BulbOutlined />} onClick={toggleDark} />
        </Header>
        <Content style={{ margin: 16 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}