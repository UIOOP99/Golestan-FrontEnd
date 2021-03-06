import { Table, Popconfirm, Button } from 'antd';

export default function SemestersList({ items, onDelete }) {
  const columns = [
    {
      title: 'شماره',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'عملیات',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="آیا مطمئن هستید؟"
          okText="بله"
          cancelText="انصراف"
          onConfirm={() => onDelete(record)}
        >
          <Button danger size="small">حذف</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={items}
      rowKey="id"
      bordered
    />
  );
}