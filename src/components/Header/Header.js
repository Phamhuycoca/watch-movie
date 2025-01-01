import React, { useState, useEffect } from 'react';
import { Button, Col, Dropdown, Image, Layout, Menu, Row, theme } from 'antd';
import breadcrumb_bg from './../../assets/breadcrumb_bg.jpg';
import logo from './../../assets/logo.png';
import { useStyleRegister } from '@ant-design/cssinjs';
import { genMenuHeader } from './genMenuHeader.style';
import classNames from 'classnames/bind';
import {
    DownOutlined,
    GlobalOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import styles from '~/styles/Header.module.scss';
import { ModalSearch } from './Modal-Search';

const { Header } = Layout;
const cx = classNames.bind(styles);
const items = [
    {
        label: 'Home',
        key: '1',
        children: [
            { label: 'Home one', key: '1.1' },
            { label: 'Home two', key: '1.2' },
        ],
    },
    { label: 'Movie', key: '2' },
    { label: 'TV Show', key: '3' },
    { label: 'Pricing', key: '4' },
    { label: 'Blog', key: '5' },
    { label: 'Contacts', key: '6' },
];

function HeaderPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    // Sử dụng token từ theme
    const prefixCls = 'custom-menu';
    const infoStyle = { ...theme.useToken(), ...{ path: [prefixCls] } };
    const wrapSSR = useStyleRegister(infoStyle, () => [
        genMenuHeader(prefixCls, infoStyle.token),
    ]);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const dropdowns = [
        {
            key: 'EN',
            label: 'EN',
        },
        {
            key: 'AU',
            label: 'AU',
        },
        {
            key: 'AR',
            label: 'AR',
        },
        {
            key: 'TU',
            label: 'TU',
        },
    ];

    return wrapSSR(
        <>
            <div className={classNames(prefixCls, infoStyle.hashId)}>
                <Header
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 100,
                        height: '90px',
                        width: '100vw',
                        maxWidth: '100vw',
                        padding: '10px 20px',
                        backgroundColor: isScrolled ? '#171d22' : 'transparent',
                        color: '#fff',
                        boxShadow: isScrolled
                            ? '0 4px 10px rgba(0, 0, 0, 0.1)'
                            : 'none',
                        transition: 'all 0.3s ease-in-out',
                    }}
                >
                    <Row justify={'space-between'}>
                        <Col span={5}>
                            <Row justify={'center'}>
                                <Image src={logo} preview={false} height={40} />
                            </Row>
                        </Col>
                        <Col span={12}>
                            <div className={cx('wrapper-menu-custom')}>
                                <Menu
                                    // defaultSelectedKeys={['1']}
                                    // defaultOpenKeys={['1']}
                                    className={cx('menu-custom')}
                                    mode="horizontal"
                                    items={items}
                                />
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        width: '50px',
                                        cursor: 'pointer',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <SearchOutlined
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 'bolder',
                                        }}
                                    />
                                </div>
                                <div style={{ width: '100px', height: '100%' }}>
                                    <GlobalOutlined
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 'bolder',
                                            color: '#e0d505',
                                        }}
                                    />
                                    <Dropdown
                                        menu={{
                                            dropdowns,
                                        }}
                                        trigger={['click']}
                                    >
                                        <a
                                            style={{
                                                marginLeft: '5px',
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            {dropdowns[0].label}
                                            <DownOutlined />
                                        </a>
                                    </Dropdown>
                                </div>
                                <div>
                                    <Button shape="round" size={'large'}>
                                        SIGN IN
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <div
                    style={{
                        display: 'flex',
                        alignContent: 'start',
                        alignItems: 'start',
                        height: '700px',
                        backgroundImage: `url(${breadcrumb_bg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '100vw',
                        maxWidth: '100vw',
                    }}
                />
            </div>
            <ModalSearch
                IsOpen={open}
                OnClose={() => {
                    setOpen(false);
                }}
            />
        </>,
    );
}

export default HeaderPage;
