import React, { Component } from 'react';
import { Button } from 'antd';
import EditScoreModal from './EditScoreModal';
class EditScore extends Component{

    render(){
        
        return (
            <EditScoreModal  student_id={this.props.student_id} />
        );
    }
}
export default EditScore;