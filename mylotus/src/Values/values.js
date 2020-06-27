import React from 'react'
import './values.css'
import { Link } from "react-router-dom";
import image from '../images/LotusTitle.png';
import img1 from '../images/stream.png'
import img2 from '../images/phone.png';
import img3 from '../images/listen.png';
import img4 from '../images/collaborative.png';
import img5 from '../images/playlists.png';
// import img6 from '../images/rahad.png';



const Values = () => {
    return(
        <div id="Values">
            <div className="background"></div>
            <nav className="navbar shadow-5">
      <div className="nav-logo-ctr">
       <Link to='/'> <img className="nav-logo" src={image} alt="This is the Lotus logo"></img></Link>
      </div>
      <ul className="navbar-ctr">
        <Link to="About"><li className="nav-itm grow"><a href="#"> About us </a></li></Link>
        <Link to="Features"><li className="nav-itm grow"><a href="#"> Features </a></li></Link>
        <Link to="Contact"><li className="nav-itm grow"><a href="#"> Contact </a></li></Link>
        <li className="nav-btn grow br4 "><a href="https://mailchi.mp/587a0b5c40b7/lotus"> Sign up </a></li>

      </ul>
    </nav>
    <div className="v-container">
        <div className="v-title-ctn one">
        <h1 className="v-title"> Features</h1>
        <p className="v-title-text"> It's not just another app. It's an <i> experience</i> </p>
        </div>

        <div className="v-board-ctn">
        <h1 className="vb-title"> Enjoy cross platform sharing, peer-to-peer discovery, collaborative playlist, and more.  </h1>
        </div>
    </div>


    <div className="v-flex-ctn space">
             <div className="v-content-ctn val-ma one">
                 <div className="va-icon grow">
                     <img className="v-cp hide" src={img1}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Cross-Platform music sharing
                     </h1>
                     <p className="v-info-text">
                     Share music with friends with the click of a button, even between streaming services    </p>
                   
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>







         <div className="v-flex-ctn space">
             <div className="v-content-ctn-rv val-ma">
                 <div className="v-icon grow">
                 <img className="v-cp img-2 hide" src={img2}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Peer-to-peer Music Discovery
                     </h1>
                     <p className="v-info-text">
                     See what your friends are listening to and stay up to date on the hottest songs    </p>
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>



         <div className="v-flex-ctn space">
             <div className="v-content-ctn val-ma one">
                 <div className="va-icon grow">
                     <img className="v-cp hide" src={img3}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Listen Together
                     </h1>
                     <p className="v-info-text">
                     Stream music simultaneously in groups to stay connected during a workout or to let everyone be on aux.  </p>
                   
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>





         <div className="v-flex-ctn space">
             <div className="v-content-ctn-rv val-ma one">
                 <div className="va-icon grow">
                     <img className="v-cp hide" src={img4}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Collaborative Playlists
                     </h1>
                     <p className="v-info-text">
                     Create collaborative playlists with all of your friends. </p>               
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>



         <div className="v-flex-ctn space">
             <div className="v-content-ctn val-ma one">
                 <div className="va-icon grow">
                     <img className="v-cp hide" src={img5}></img>
                 </div>
                 <div className="v-info">
                     <h1 className="v-info-head">
                     Show the world your interests
                     </h1>
                     <p className="v-info-text">
                     Show off your music taste with a profile of all your favorite songs, artists, and playlists. </p>                   
                     <div className="v-info-btn">
                         <a href="#"></a>
                     </div>
                 </div>
              
             </div>

         </div>


         <div className="v-reach-ctn va-reach">
            <h2 className="v-reach-head">
                Do you like what you saw? 
            </h2>
            <p> Click the button below to stay updated!</p>
           <div className="v-updated-btn">
           <a className="v-btn" href="https://mailchi.mp/587a0b5c40b7/lotus">
               Stay updated
               </a>
            </div> 
        </div>




        </div>
    )
}

export default Values;