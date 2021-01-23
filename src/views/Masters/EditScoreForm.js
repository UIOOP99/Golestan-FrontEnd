import React,{ Component } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';

class EditScoreForm extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <form>
                <Input placeholder="نمره" />
            </form>
        );
    }
} 
export default EditScoreForm;