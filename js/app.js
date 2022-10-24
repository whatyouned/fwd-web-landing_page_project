
        let COUNTER=0;

        let NAVBAR=document.getElementById("navbar__list"); //ul tag

        //Building Section Method

        function BuildSection(){
            COUNTER+=1;
            const SECTION=`<section id="section${COUNTER}" data-nav="Section ${COUNTER}" class="s">
            <div class="landing__container"><h2>Section ${COUNTER}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit.</p>
            </div></section>`;
            document.querySelector("main").insertAdjacentHTML("beforeend",SECTION);    

        }

        //Building Navbar Lists According To Current Sections
        function BuildList(){
            //const COUNTER=0;
            NAVBAR.innerHTML="";
            document.querySelectorAll("section").forEach(
            (section)=>{//++COUNTER;
                const LIST=`<li><a  data-scetion="${section.getAttribute("id")}" class="l" >${section.dataset.nav}</a></li>`;
            NAVBAR.insertAdjacentHTML("beforeend",LIST );   }                                                              );  
        }

        //Calling Four Sections By Default & Preparing Menu

        BuildSection();
        BuildSection();
        BuildSection();
        BuildSection();
        BuildList();

        //************this part must be after the above to work

        //changing style of current section and certain list according to it
 
        document.addEventListener("scroll",
        
        ()=>{
           
        const LL=document.querySelectorAll(".l"); //get all Anchors by common class
        const SS=document.querySelectorAll(".s"); //get all sections by common class
    
        LL.forEach((link) => {link.classList.remove("activeList");  });
        SS.forEach((part) => { part.classList.remove("activeSectoin"); });
    
        //is section in view ??? 
        SS.forEach(
            
            (SECTION) => {

        const part = SECTION.getBoundingClientRect();
 
        if(   part.top >= 0 &&  part.bottom<(window.innerHeight)  ){

        // Active Select Current Section 
        SECTION.classList.add("activeSectoin");

        // Active Current Anchor
        const LL=document.querySelectorAll(".l"); //get all Anchors by common class "reapeated above"
        LL.forEach((link) => {
                    
        //if section "id" contain anchor "data-scetion" & this section takes class "activeSectoin"   
            const SECTION_ID=SECTION.getAttribute("id");
            const LINK_DATA=`${link.getAttribute("data-scetion")}`;

        //  console.log(  LINK_HREF.includes(SECTION_ID)  );

        if(  SECTION_ID.includes(LINK_DATA)   && SECTION.classList.contains("activeSectoin")   ){
            // console.log("hello");
            link.classList.add("activeList"); } });  }   })}

        );

        //if click on certain link of menu bar, scroll to its section
        
        NAVBAR.addEventListener("click", (eo) => {
            eo.preventDefault();
       
            const LINKS=document.querySelectorAll(".l");
                
            LINKS.forEach(   (link) => {
            
            link.addEventListener("click", (eo) => { 
                eo.preventDefault();
            // console.log("hello");
            // SECTION_ID=link.getAttribute("data-scetion");
            const SECTION=document.getElementById( link.getAttribute("data-scetion")  );
            // const SECTION=document.getElementById( `"${link.getAttribute("data-scetion")}"`   ); //false coe
            SECTION.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});

            })  } )  }) 

        // appearing to-top button after 800px 
        const SCROLLBUTTON=document.getElementById("scrollButton");
        window.addEventListener("scroll",(eo) => {
        eo.preventDefault();
        window.scrollY > 800 ? (SCROLLBUTTON.style.display = "block") : (SCROLLBUTTON.style.display = "none");
        });

        // Scrolling Into Top Of Page When Click On scrollTop Button
        function ScrollTop(){document.querySelector("html").scrollIntoView();}

        //scrolling smoothly by js
        window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'
        });





