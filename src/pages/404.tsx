import { Result, Button } from 'antd';
import { Fragment } from 'react';
import { useRouter } from 'next/router';    

const NotFound = () => {
    const router = useRouter();
    return <Fragment>
         <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={() => router.push('/')}>Back Home</Button>}
        />
    </Fragment>
};

export default NotFound;