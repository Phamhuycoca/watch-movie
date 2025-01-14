import React from 'react';

import { Breadcrumb, Layout, theme } from 'antd';
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
                            padding: '0 24px 24px',
                        }}
                    >
                        <Breadcrumb
                            items={[
                                {
                                    title: 'Home',
                                },
                                {
                                    title: 'List',
                                },
                                {
                                    title: 'App',
                                },
                            ]}
                            style={{
                                margin: '16px 0',
                            }}
                        />
                        <Content
                            style={{
                                padding: 24,
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
