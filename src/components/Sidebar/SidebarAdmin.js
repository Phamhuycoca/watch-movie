import { Layout, Menu, theme } from 'antd';
const { Sider } = Layout;
const items = new Array(100).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));
function SidebarAdmin() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Sider
            width={250}
            style={{
                background: colorBgContainer,
            }}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                items={items}
            />
        </Sider>
    );
}

export default SidebarAdmin;
