import { Table, Popconfirm, Button } from 'antd';

export default function CoursesList({ items, onDelete }) {
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
      title: 'ترم',
      dataIndex: 'semester',
      key: 'semester',
    },
    {
      title: 'استاد',
      dataIndex: 'professor',
      key: 'professor',
    },
    {
      // TODO: Should render length
      title: 'تعداد دانشجویان',
      dataIndex: 'students',
      key: 'students',
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