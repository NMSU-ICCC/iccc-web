import React, {Component} from 'react';

export class Officer extends Component{
    render(){
        return(  
                <div class=" flex flex-row fit bg-white shadow-xl h-fit p-5 rounded-lg">
                    <div class="w-1/3 h-full p-5 flex justify-center items-center" >
                        <img class="h-20 rounded-full" src={this.props.image}/>
                    </div>

                    <div class="w-2/3 flex flex-col justify-center items-center">
                        <div class="w-full h-fit text-xl">
                            {this.props.name}
                        </div>
                        <div class="text-l font-bold w-full h-fit  pb-4">
                            {this.props.position}
                        </div>
                        <div class="h-full w-full pb-4">
                            {this.props.description}
                        </div>    
                        <div class="h-full w-full pb-2">
                            {this.props.email}
                        </div>                      
                    </div>
                </div>
        )
    }
}