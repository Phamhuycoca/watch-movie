import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
function PageHeader({ title }) {
    const lst = [
        {
            href: '',
            title: <HomeOutlined />,
        },
        {
            title: title,
        },
    ];
    return (
        <div className="mb-4 mt-2 ms-1">
            <Breadcrumb items={lst} />
        </div>
    );
}

PageHeader.prototype = {
    title: PropTypes.string,
    items: PropTypes.string,
};
export default PageHeader;
