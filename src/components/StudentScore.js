import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';
class StudentScore extends Component{
    
    render(){
        const { Column } = Table;
        const {edit_modes, title, dataIndex, key} = this.props;
        console.log(edit_modes);
        if(edit_modes){
            return (
                <input type="text" />
            );
        }
        else{
            return (
                <Column title={title} dataIndex={dataIndex} key={key} />
            );
        }
        
    }
}
export default StudentScore;