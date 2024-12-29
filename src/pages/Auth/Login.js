import { Button } from 'antd';
import { useState } from 'react';
import { Loading } from '~/components/Loading';

function Login() {
    const [loading, setLoading] = useState(false);
    const showLoader = () => {
        setLoading(true);
    };
    return (
        <>
            <Button onClick={showLoader}>Show</Button>
            <Loading state={loading} />
        </>
    );
}

export default Login;
