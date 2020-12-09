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

  const filterOption = (inputValue, option) => {
    return (
      String(option.studentNumber).includes(inputValue)
      || option.firstName.includes(inputValue)
      || option.lastName.includes(inputValue)
    );
  };

  const handleChange = targetKeys => {
    setSelectedStudents(targetKeys);
    onChange && onChange(targetKeys);
  };

  return (
    <Transfer
      titles={['کل', 'اخذ کرده']}
      rowKey={record => record.studentNumber}
      dataSource={students}
      filterOption={filterOption}
      targetKeys={selectedStudents}
      onChange={handleChange}
      render={({ key, firstName, lastName }) => (<span>{firstName} {lastName} - {key}</span>)}
      locale={locale}
      showSearch
      listStyle={{
        width: '100%',
        height: 300,
      }}
    />
  );
}
