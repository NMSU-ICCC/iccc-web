import React, {} from 'react';
import UploadFile from './UploadFile';
import AdminIntro from './AdminIntro';
import AdminResources from './AdminResources';

export default function Admin(){
    return(
        <div class="flex items-center justify-center flex-col bg-purple">
            <AdminIntro/>
            <UploadFile/>
            <AdminResources/>
        </div>
    )
    
}