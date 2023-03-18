import React, {Component} from 'react';

export class Officer extends Component{
    render(){
        return(  
                <div class="bg-white rounded-lg p-5 flex-col my-10 sm:flex sm:flex-row sm:my-0 sm:h-fit  sm:shadow-xl ">
                    <div class="hidden sm:w-1/3 sm:h-full sm:p-5 sm:flex sm:justify-center items-center" >
                        <img class="h-20 rounded-full" src={this.props.image}/>
                    </div>

                    <div class="w-full sm:w-2/3 sm:flex-col sm:justify-center sm:items-center">
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