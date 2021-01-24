import { Table, Popconfirm, Button } from 'antd';

export default function StudentsList({ items, onDelete }) {
  const columns = [
    {
      title: 'شماره دانشجویی',
      dataIndex: 'studentNumber',
      key: 'studentNumber',
    },
    {
      title: 'نام',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'lastName',
      key: 'lastName',
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
      rowKey="studentNumber"
      bordered
    />
  );
}