import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

function HeaderPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Hàm kiểm tra khi cuộn trang
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true); // Nếu cuộn xuống 50px trở lên, làm header không trong suốt
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
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: isScrolled ? '#fff' : 'transparent', // Nếu cuộn, làm header không trong suốt
                transition: 'background-color 0.3s ease-in-out', // Thêm hiệu ứng chuyển động
            }}
        >
            <div className="demo-logo">a</div>
        </Header>
    );
}

export default HeaderPage;
