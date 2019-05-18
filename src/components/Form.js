import React  from 'react';
import Options from './Options';


const Form =()=>{


    return(
          <div>
              <form action="/upload" method="post"   encType="multipart/form-data">
               <label>Song Upload</label>
               <input type="file" name="song_file"/>
               <input type="text"  name="file_name" value="Artist's name "/>
               <label>Artwork Upload</label>
               <input type="file" name="artwork_file"/>
               <Options/>
               <input type="submit" value="Upload"></input>
              </form>
          </div>
    )

      

}


export default Form