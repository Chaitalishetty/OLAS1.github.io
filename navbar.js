navbar=()=>{
    document.querySelector("#navbar").innerHTML=` <nav>
    <span class="navbar-toggle" id="nav_ham">
    <i class="fa fa-bars" style="color:white" font-size:"30px"></i>
    </span>
    <ul class="main_nav" id="nav_list">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="features.html">Features</a></li>
        <li><a href="gallery.html">Gallery</a></li>
    </ul>
</nav>`;
let mainNav = document.getElementById('nav_list');
let navBarToggle = document.getElementById('nav_ham');
navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('open');});
}
    
