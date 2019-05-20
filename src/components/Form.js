import React  from 'react';
import Options from './Options';


const Form =()=>{


    return(
          <div className="ui form">
              <form action="/upload" method="post"   encType="multipart/form-data">
                    <div className="fields">
                        <div className="field">
                            <label>File Upload</label>
                            <input type="file" name="song_file"/>
                        </div>
                    <div className="field">
                            <label>Artist Name</label>
                            <input  style={{marginTop:"1px"}} type="text" name="Artist"></input>
                    </div>
                    
                    <div className="field">
                            <label>Genre</label>
                            <Options/>
                    
                    </div>

                    <div className="field">
                            <label>Album's Artwork</label>
                            <input type="file" name="artwork_file"/>
                    </div>

                    <div className="field">
                        <input type="submit"  style={{marginTop:"26px"}}  value="Upload!" className="ui blue button"/>
                    </div>


                    </div>

              </form>
          </div>
    )

      

}


export default Form

/*  

  <label>Song Upload</label>
               <input type="file" name="song_file"/>
               <input type="text"  name="Artist" />
               <label>Artwork Upload</label>
               <input type="file" name="artwork_file"/>
               <Options/>
               <input type="submit" className="ui blue button " value="Upload"></input>

*/