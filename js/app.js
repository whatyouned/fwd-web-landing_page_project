let COUNTER=0;
let NAVBAR=document.getElementById("navbar__list"); //ul tag
//Building Section Method
function BuildSection(){
    COUNTER+=1;
    const SECTION=`<section id="section${COUNTER}" data-nav="Section ${COUNTER}" class="s">
    <div class="landing__container"><h2>Section ${COUNTER}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div></section>`;
    document.querySelector("main").insertAdjacentHTML("beforeend",SECTION);    

}

//Building Navbar Lists According To Current Sections
function BuildList(){
    NAVBAR.innerHTML="";
    document.querySelectorAll("section").forEach(
    (section)=>{const LIST=`<li><a id="${COUNTER}" class="l" href="#${section.id}">${section.dataset.nav}</a></li>`;
    NAVBAR.insertAdjacentHTML("beforeend",LIST );   }                                                              );  
}
//Calling Four Sections By Default & Preparing Menu
BuildSection();
BuildSection();
BuildSection();
BuildSection();
BuildList();














//************this part must be after the above to work

































// class duringPageScroll{}
// const NAV=document.getElementById("nav");  //nav tag
// NAV.addEventListener("click",() => { });










//changing style of current section and certain list according to it
document.onscroll = ()=>{
    /*The Next six Lines Must Be Here to arraw function see */
    const SECTION =document.querySelectorAll(".s"); //get all sections by common class
    const LINK =document.querySelectorAll(".l"); //get all lists by common class
    const LL=document.querySelectorAll(".l"); //Get All Anchors
    const SS=document.querySelectorAll(".s"); //Get All Sections
    LL.forEach((link) => {link.classList.remove("activeList");  });
    SS.forEach((part) => { part.classList.remove("activeSectoin"); });
    // SS.forEach((part) => { part.classList.remove("current"); });
    

    // console.log("hello"); 

    // console.log(SECTION);
    //is section in view ???
    SECTION.forEach(
        
        (SECTION) => {
            
            // console.log("hello"); 
        //   console.log(SECTION.id);
        
     
        const part = SECTION.getBoundingClientRect();
        if( part.top >= 0 ){
        
        // SECTION.classList.add("current");
        
            // console.log("hello"); 
            // console.log(SECTION.id);
          
          
            // Put Anchor Active & Select Current Anchor
             SECTION.classList.add("activeSectoin");
            // Put Section Active & Select Current Section 
            LL.forEach((link) => {
                
        //console.log("hello"); 
        //if section id contain anchor href & this section takes class "activeSectoin"   
        // link.getAttribute("href").contains(`"${SECTION.id}"`) && SECTION.classList.contains("current")    
         if( link.id.contains(SECTION.id)  && SECTION.classList.contains("activeSectoin")   ){
             
            link.classList.add("activeList");} 
        
        
        
        
        
        });
            //console.log("hello"); 
           //link.getAttribute("href").contains(`"${SECTION.id}"`)
            //`"${SECTION.id}"`
          //SECTION.id.contains(`nav a[href="#${link.id}"]`)         
        
        
        
        
                               }
        
        
})}

//************







// appearing to-top button after 800px 
const SCROLLBUTTON=document.getElementById("scrollButton");
window.addEventListener("scroll",(params) => {
window.scrollY > 800 ? (SCROLLBUTTON.style.display = "block") : (SCROLLBUTTON.style.display = "none");
});

// Scrolling Into Top Of Page When Click On scrollTop Button
 function ScrollTop(){document.querySelector("html").scrollIntoView();}

