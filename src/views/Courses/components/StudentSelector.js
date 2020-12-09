import React from 'react';
import { Transfer } from 'antd';

const locale = {
  itemUnit: "دانشجو",
  itemsUnit: "دانشجو",
  notFoundContent: "لیست خالی است",
  searchPlaceholder: "سرچ کنید"
}

export default function StudentSelector({ studentsList = [], value = [], onChange }) {
  const [students] = React.useState(studentsList);
  const [selectedStudents, setSelectedStudents] = React.useState(value);

  const filterOption = (inputValue, option) => inputValue.includes(option.studentNumber);

  const handleChange = targetKeys => {
    setSelectedStudents(targetKeys);
    onChange && onChange(targetKeys);
  };

  return (
    <Transfer
      rowKey={record => record.studentNumber}
      dataSource={students}
      filterOption={filterOption}
      targetKeys={selectedStudents}
      onChange={handleChange}
      render={({ key, firstName, lastName }) => `${key} (${firstName} ${lastName})`}
      locale={locale}
      showSearch
    />
  );
}
