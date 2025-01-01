import { Button, Menu } from 'antd';
import { useState } from 'react';
import { Loading } from '~/components/Loading';
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
function Login() {
    const [loading, setLoading] = useState(false);
    const showLoader = () => {
        setLoading(true);
    };
    return (
        <>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                mode="horizontal"
                items={items}
            />
            <Button onClick={showLoader}>Show</Button>
            <Loading state={loading} />
            <p>test</p>
        </>
    );
}

export default Login;
