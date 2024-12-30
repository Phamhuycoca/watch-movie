import React, { useState, useEffect } from 'react';
import { Image, Layout, Menu, theme } from 'antd';
import breadcrumb_bg from './../../assets/breadcrumb_bg.jpg';
import logo from './../../assets/logo.png';
import { useStyleRegister } from '@ant-design/cssinjs';
import { genMenuHeader } from './genMenuHeader.style';
import classNames from 'classnames';
const { Header } = Layout;

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

    // Sử dụng token từ theme
    const prefixCls = 'custom-menu';
    const infoStyle = { ...theme.useToken(), ...{ path: [prefixCls] } };
    const wrapSSR = useStyleRegister(infoStyle, () => [
        genMenuHeader(prefixCls, infoStyle.token),
    ]);
    console.log(genMenuHeader(prefixCls, infoStyle.token));

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
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 20px',
                        backgroundColor: isScrolled ? '#171d22' : 'transparent',
                        color: '#fff',
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
                            color: '#fff',
                            width: '100%',
                            maxWidth: '1500px',
                        }}
                    >
                        <Image src={logo} preview={false} height={40} />
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['1']}
                            className={prefixCls}
                            mode="horizontal"
                            style={{
                                display: 'flex',
                                justifyContent: 'end',
                                maxWidth: '830px',
                                width: '100%',
                                backgroundColor: 'transparent',
                                borderBottom: 'none',
                            }}
                            items={items}
                        />
                    </div>
                </Header>
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
                <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                        venenatis euismod malesuada.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante.
                    </p>
                    <p>...</p>
                </div>
            </div>
        </>,
    );
}

export default HeaderPage;
