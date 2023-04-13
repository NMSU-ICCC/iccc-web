import React, {} from 'react';
import UploadFile from './UploadFile';
import AdminIntro from './AdminIntro';

export default function Admin(){
    return(
        <div class="flex items-center justify-center flex-col bg-purple">
            <AdminIntro/>
            <UploadFile/>
        </div>
    )
    
}