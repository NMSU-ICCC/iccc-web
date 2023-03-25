import React, {Component} from 'react';

export class Officer extends Component{
    render(){
        return(  
            <li key={this.props.name}>
                <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={this.props.image} alt="" />
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{this.props.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{this.props.position}</p>
                </div>
                </div>
            </li>
        )
    }
}