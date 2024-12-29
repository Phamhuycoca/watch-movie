import React, { useState, useEffect } from 'react';
import { Image, Layout, Menu } from 'antd';
import classNames from 'classnames/bind';
import breadcrumb_bg from './../../assets/breadcrumb_bg.jpg';
import logo from './../../assets/logo.png';
import styles from '~/styles/Header.module.scss';
const cx = classNames.bind(styles);
const { Header } = Layout;
const items = [
    {
        label: 'Navigation One',
        key: 'mail',
    },
    {
        label: 'Navigation Two',
        key: 'app',
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
];

function HeaderPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Hàm kiểm tra khi cuộn trang
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true); // Nếu cuộn xuống 100px, làm header không trong suốt
        } else {
            setIsScrolled(false); // Nếu cuộn lên trên, làm header trong suốt
        }
    };

    // Dùng useEffect để lắng nghe sự kiện cuộn
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    height: '90px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px 20px',
                    backgroundColor: isScrolled ? '#171d22' : 'transparent',
                    color: isScrolled ? '#fff' : '#fff',
                    boxShadow: isScrolled
                        ? '0 4px 10px rgba(0, 0, 0, 0.1)'
                        : 'none',
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: isScrolled ? '#fff' : '#fff',
                        width: '100%',
                        maxWidth: '1240px',
                    }}
                >
                    <Image src={logo} preview={false} />
                    <Menu
                        className={cx('custom-menu')}
                        prefixCls="custom-menu"
                        mode="horizontal"
                        style={{
                            flex: 2,
                            backgroundColor: 'transparent',
                            borderBottom: 'none',
                        }}
                        items={items}
                    />
                </div>
            </Header>

            {/* Vùng chứa ảnh nền */}
            <div
                style={{
                    height: '700px',
                    backgroundImage: `url(${breadcrumb_bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
            />

            {/* Nội dung bên dưới */}
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    venenatis euismod malesuada.
                </p>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum tortor quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante.
                </p>
                <p>...</p>
            </div>
        </>
    );
}

export default HeaderPage;
