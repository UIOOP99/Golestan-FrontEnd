import { Table, Popconfirm, Button } from 'antd';

export default function itemsList({ items, onDelete }) {
  const columns = [
    {
      title: 'شماره شناسایی',
      dataIndex: 'userId',
      key: 'userId',
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
      title: 'نام کاربری',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'ایمیل',
      dataIndex: 'email',
      key: 'email',
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