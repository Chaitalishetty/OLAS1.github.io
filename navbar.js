navbar=()=>{
    document.querySelector("#navbar").innerHTML=` <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="features.html">Features</a></li>
        <li><a href="gallery.html">Gallery</a></li>
    </ul>
</nav>`;

}
    
function closeNav() {
    const mediaQuery=window.matchMedia("(max-width:870px)");
    if (mediaQuery.matches){
      document.querySelector("ul").style.display = "none";
      // document.querySelector(".dashboard_container").style.marginLeft= "0";
      // document.querySelector(".dashboard_container").style.width = "100vw";
    }
  }