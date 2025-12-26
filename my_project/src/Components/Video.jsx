
export default function Video(){
    return(
        <div id="video" style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center", width:"95%", marginTop:"20px"}}>
            <div>
                <h1 style={{fontSize:"50px"}}>"Life is like an ice-cream cone, you have to lick it one day at a time".</h1>
            </div>
         <div>
        <video
          className="vplay"
          autoPlay
          muted        // ⭐ REQUIRED
          loop
          playsInline
          controls
          width="700"
        >
                <source src="video.mp4" type="" />
            </video>
       </div>

       </div>
    )
}