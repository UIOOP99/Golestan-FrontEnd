import React,{ Component } from 'react';
import ClassTable from './ClassTable';
import axios from 'axios';
class ClassList extends Component{

    constructor(props){
        super(props);
        this.state={
            class_list_arr : []
        }
    }

    componentDidMount(){

        axios.get('').then(
            response=>{

                this.setState({
                    class_list_arr : response.data
                });

            }
        ).catch(
            err=>{
                console.log(err,"An Error Occured in data fetching (ClassList.js) <3")
            }
        );
       
    }
    
    render(){
        
        return(

            <ClassTable classListData={this.state.class_list_arr} />
        );
    }
}

export default ClassList;