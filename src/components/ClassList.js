import React,{ Component } from 'react';
import ClassTable from './ClassTable';

class ClassList extends Component{

    constructor(props){
        super(props);
        this.state={
            testlist : []
        }
    }

    componentDidMount(){
        // this.setState({
        //     testlist : JSON.parse(ClassTest)
        // });
       
    }
    
    render(){
        // const classlist=;
        return(
            <>
            <div>{this.state.testlist}</div>
            <ClassTable />
            </>
        );
    }
}

export default ClassList;