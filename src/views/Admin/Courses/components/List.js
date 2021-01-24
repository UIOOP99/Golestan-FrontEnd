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
      title: 'تعداد واحد',
      dataIndex: 'units',
      key: 'units',
    },
    {
      title: 'شماره ترم',
      dataIndex: 'semesterId',
      key: 'semesterId',
    },
    {
      title: 'شماره استاد',
      dataIndex: 'professorId',
      key: 'professorId',
    },
    {
      title: 'تعداد دانشجویان',
      dataIndex: 'studentsIds',
      key: 'studentsIds',
      render: (text, record) => (record.studentsIds || []).length,
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