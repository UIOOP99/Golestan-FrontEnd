import React,{ Component } from 'react';
import { Table, Tag, Space } from 'antd';
import { Link } from "react-router-dom";
import { $Axios } from '../../shared/services/api';

class ClassTable extends Component{

  constructor(props){
    super(props);
    this.state={
      JWT_token : '',
      classList_data_array : []
    }
  }

  componentDidMount(){
    
    const url = "/professor/get_courses";
     
    $Axios.get(url,
      {
        headers : {'Authorization': localStorage.getItem('authToken')}
      })
    .then(response => {
      
      this.setState(
        {
          classList_data_array : response.data
        });

      console.log(response.data);

    })
    .catch(err=>{
      console.log(err);
    });

  }

    render(){
        const { Column, ColumnGroup } = Table;
        
        return(


            <Table dataSource={this.state.classList_data_array}>
            {/* <ColumnGroup title="اطلاعات درس" /> */}
              <Column title="کد درس" dataIndex="id" key="id"  render={id => (
                  <>
                    {id}
                  </>
                )}/>
              <Column title="نام درس" dataIndex="name" key="name" />
              <Column title="واحد" dataIndex="units" key="units" />
              <Column title="ظرفیت" dataIndex="population"  />
              <Column
                title="زمان کلاس"
                dataIndex="dates"
                key="dates"
                render={dates => (
                  <>
                    {dates.map(date => (
                      <Tag color="blue" key={date}>
                        {date.day} ({date.start}-{date.end})
                      </Tag>
                    ))}
                  </>
                )}
              />
            <Column 
              key="action"
              dataIndex="id"
              render={(id,record) => (
                <Space size="middle">
                  <Link to={`/master/studentList?course_id=${id}` } >لیست دانشجویان</Link>
                </Space>
              )}
            />
          </Table>

          
        );
    }
}

export default ClassTable;