import React,{ Component } from 'react';
import { Table, Tag, Space } from 'antd';
import ClassTest from '../../fakeDatas/ClassTest.json';
import { Link } from "react-router-dom";
class ClassTable extends Component{

    render(){
        const { Column, ColumnGroup } = Table;
        let class_id=319923;
        return(


            <Table dataSource={ClassTest}>
            {/* <ColumnGroup title="اطلاعات درس" /> */}
              <Column title="کد درس" dataIndex="id" key="id"  render={id => (
                  <>
                    {id}
                  </>
                )}/>
              <Column title="نام درس" dataIndex="name" key="name" />
              <Column title="شعبه" dataIndex="section" key="section" />
              <Column title="ظرفیت" dataIndex="population" key="population" />
              <Column
                title="زمان کلاس"
                dataIndex="dates"
                key="dates"
                render={dates => (
                  <>
                    {dates.map(date => (
                      <Tag color="blue" key={date}>
                        {date.day} ({date.end_hour}-{date.start_hour})
                      </Tag>
                    ))}
                  </>
                )}
              />
            <Column 
              key="action"
              dataIndex="id"
              render={(id) => (
                <Space size="middle">
                  <Link to={`/master/studentList/${id}`} >لیست دانشجویان</Link>
                </Space>
              )}
            />
          </Table>

          
        );
    }
}

export default ClassTable;