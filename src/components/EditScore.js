import React, { Component } from 'react';
import { Button } from 'antd';
class EditScore extends Component{

    constructor(props){
        super(props);
        this.state={
            edit_mode: true,
            btn_text : "ویرایش"
        }
    }

    editBtnHandler=()=>{
        if(this.state.edit_mode){
            this.setState({
                btn_text : "ثبت",
                edit_mode : false
            });
        }else{
            this.setState({
                btn_text : "ویرایش",
                edit_mode : true
            });
        }
        
    }

    render(){
        return (
            <Button type="primary" size="small" onClick={this.editBtnHandler}>
             {this.state.btn_text}
            </Button>
        );
    }
}
export default EditScore;