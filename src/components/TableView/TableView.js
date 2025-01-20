import { Table } from 'antd';

const TableView = ({
    loading,
    page = 1,
    page_size = 10,
    total = 0,
    sort = {},
    filters = {},
    dataSource = [],
    columns = [],
    onPageChange,
    onSortChange,
    onFilterChange,
    ...restProps
}) => {
    // Xử lý sự kiện phân trang, lọc và sắp xếp
    const handleTableChange = (pagination, filters, sorter) => {
        if (onPageChange) {
            onPageChange(pagination.current, pagination.pageSize);
        }

        if (onSortChange && sorter.field) {
            onSortChange(sorter.field, sorter.order);
        }

        if (onFilterChange) {
            onFilterChange(filters);
        }
    };

    return (
        <Table
            loading={loading}
            columns={columns}
            dataSource={dataSource}
            pagination={{
                current: page,
                pageSize: page_size,
                defaultCurrent: page,
                total: total || dataSource.length,
                showSizeChanger: true,
                showTotal: (total) => `Tổng ${total} bản ghi`,
            }}
            onChange={handleTableChange}
            {...restProps}
        />
    );
};

export default TableView;
