import React, { useState } from 'react';
import { Button, Row } from 'antd';
import { PageHeader } from '~/components/Page';
import { ModuleName } from './Const';
import TableView from '~/components/TableView/TableView';

// Cấu hình cột bảng với sắp xếp và bộ lọc
const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        sorter: true,
        filters: [
            { text: 'Nguyễn Văn A', value: 'Nguyễn Văn A' },
            { text: 'Trần Thị B', value: 'Trần Thị B' },
        ],
    },
    {
        title: 'Tuổi',
        dataIndex: 'age',
        sorter: true,
        filters: [
            { text: 'Dưới 30', value: 'young' },
            { text: 'Trên 30', value: 'old' },
        ],
    },
];

// Danh sách tên mẫu
const names = [
    'Nguyễn Văn A',
    'Trần Thị B',
    'Lê Thị C',
    'Phạm Văn D',
    'Đặng Thị E',
    'Bùi Văn F',
    'Võ Thị G',
    'Đỗ Văn H',
    'Hoàng Thị I',
    'Ngô Văn J',
];

// Tạo dữ liệu mẫu
const generateData = () => {
    const data = [];
    for (let i = 1; i <= 100; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAge = Math.floor(Math.random() * (60 - 18 + 1)) + 18; // Tuổi từ 18 đến 60

        data.push({
            key: i.toString(),
            name: randomName,
            age: randomAge,
        });
    }
    return data;
};

const ListCategory = () => {
    const allData = generateData();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [filteredData, setFilteredData] = useState(allData);

    // Xử lý thay đổi trang
    const handlePageChange = (currentPage, newPageSize) => {
        setPage(currentPage);
        setPageSize(newPageSize);
    };

    // Hàm xử lý lọc dữ liệu
    const handleFilterChange = (filters) => {
        let filtered = allData;

        if (filters.name) {
            filtered = filtered.filter((item) =>
                filters.name.includes(item.name),
            );
        }

        if (filters.age) {
            filtered = filtered.filter((item) =>
                filters.age.includes('young')
                    ? item.age < 30
                    : filters.age.includes('old')
                    ? item.age >= 30
                    : true,
            );
        }

        setFilteredData(filtered);
        setPage(1);
    };

    return (
        <>
            <PageHeader title={ModuleName} items={columns} />
            <Row justify="end" className="mb-2">
                <Button
                    type="primary"
                    onClick={() => alert('Thêm mới được nhấn')}
                >
                    Thêm mới
                </Button>
            </Row>
            <TableView
                loading={false}
                page={page}
                page_size={pageSize}
                total={filteredData.length}
                dataSource={filteredData.slice(
                    (page - 1) * pageSize,
                    page * pageSize,
                )}
                columns={columns}
                onPageChange={handlePageChange}
                onFilterChange={handleFilterChange}
            />
        </>
    );
};

export default ListCategory;
