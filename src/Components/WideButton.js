import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class WideButton extends Component{
    render(){
        return(  
            <Link to={this.props.route} onClick={()=>{this.props.hideMenu()}} key={this.props.keyA} className='border-b-white border-b-4  font-bold text-lg text-white divide-y-8 bg-nmsu-crimson w-full h-fit p-8'>
                {this.props.message}
            </Link>
        )
    }
}