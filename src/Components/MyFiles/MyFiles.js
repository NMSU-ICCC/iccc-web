import React, {} from 'react';
import Cover from './Cover';
import Files from './Files';

export default function MyFiles(){ 
    return(
        <div  class="flex flex-col items-center justify-around mt-20">    
            <Cover/>        
            
            <Files/>
        </div>   
    )
    
}