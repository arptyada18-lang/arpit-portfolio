"use strict";
document.getElementById("copyLink").addEventListener("click",async()=>{
 const link="https://arptyada18-lang.github.io/arpit-portfolio/";
 const status=document.getElementById("copyStatus");
 try{await navigator.clipboard.writeText(link);status.textContent="Portfolio link copied.";}
 catch(error){status.textContent="Copy this link: "+link;}
});
