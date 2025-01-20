import React from 'react';

import { Layout, theme } from 'antd';
import { HeaderAdmin } from '~/components/Header/Header-Admin';
import SidebarAdmin from '~/components/Sidebar/SidebarAdmin';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './../styles/Admin.module.scss';
const { Content } = Layout;
const cx = classNames.bind(styles);
const Admin = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <HeaderAdmin />
            <Layout>
                <SidebarAdmin />
                <div className={cx('main')}>
                    <Layout
                        style={{
                            padding: '24px 24px',
                        }}
                    >
                        <Content
                            style={{
                                padding: 10,
                                margin: 0,
                                minHeight: 280,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <Outlet />
                        </Content>
                    </Layout>
                </div>
            </Layout>
        </Layout>
    );
};
export default Admin;
