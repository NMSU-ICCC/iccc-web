import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class Button extends Component{
    render(){
        return(  
            <Link to={this.props.route} key={this.props.keyA} className='text-white text-lg hover:underline decoration-sky-500 font-bold h-full w-fit flex items-center'>
                {this.props.message}
            </Link>
        )
    }
}