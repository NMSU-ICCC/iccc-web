import React, {Component} from 'react';

export class Separator extends Component{
    render(){
        return(
            <div class="w-11/12 bg-slate-500 flex flex-col justify-center items-center p-10 my-5">
                <p class="text-white font-bold text-3xl py-3">
                    {this.props.title}
                </p>
                <p class="font-semibold text-xl text-white">
                    {this.props.description}
                </p>
            </div>
        )
    }
}