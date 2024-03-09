// MENU ANCHOR BG START 
function HomeLiBg(){
    document.getElementById("homeActive").classList.add("my-activeLink");
    document.getElementById("aboutActive").classList.remove("my-activeLink");
    document.getElementById("servicesActive").classList.remove("my-activeLink");
    document.getElementById("projectsActive").classList.remove("my-activeLink");
    document.getElementById("pricingActive").classList.remove("my-activeLink");
    document.getElementById("blogActive").classList.remove("my-activeLink");
    document.getElementById("contactActive").classList.remove("my-activeLink");
  }

  function AboutLiBg(){
    document.getElementById("aboutActive").classList.add("my-activeLink");
    document.getElementById("homeActive").classList.remove("my-activeLink");
    document.getElementById("servicesActive").classList.remove("my-activeLink");
    document.getElementById("projectsActive").classList.remove("my-activeLink");
    document.getElementById("pricingActive").classList.remove("my-activeLink");
    document.getElementById("blogActive").classList.remove("my-activeLink");
    document.getElementById("contactActive").classList.remove("my-activeLink");
  }
  
  function ServicesLiBg(){
    document.getElementById("servicesActive").classList.add("my-activeLink");
    document.getElementById("aboutActive").classList.remove("my-activeLink");
    document.getElementById("homeActive").classList.remove("my-activeLink");
    document.getElementById("projectsActive").classList.remove("my-activeLink");
    document.getElementById("pricingActive").classList.remove("my-activeLink");
    document.getElementById("blogActive").classList.remove("my-activeLink");
    document.getElementById("contactActive").classList.remove("my-activeLink");
  }
  
  function ProjectsLiBg(){
    document.getElementById("projectsActive").classList.add("my-activeLink");
    document.getElementById("servicesActive").classList.remove("my-activeLink");
    document.getElementById("aboutActive").classList.remove("my-activeLink");
    document.getElementById("homeActive").classList.remove("my-activeLink");
    document.getElementById("pricingActive").classList.remove("my-activeLink");
    document.getElementById("blogActive").classList.remove("my-activeLink");
    document.getElementById("contactActive").classList.remove("my-activeLink");
  }
  
  function PricingLiBg(){
    document.getElementById("pricingActive").classList.add("my-activeLink");
    document.getElementById("projectsActive").classList.remove("my-activeLink");
    document.getElementById("servicesActive").classList.remove("my-activeLink");
    document.getElementById("aboutActive").classList.remove("my-activeLink");
    document.getElementById("homeActive").classList.remove("my-activeLink");
    document.getElementById("blogActive").classList.remove("my-activeLink");
    document.getElementById("contactActive").classList.remove("my-activeLink");
  }
  
  function BlogLiBg(){
    document.getElementById("blogActive").classList.add("my-activeLink");
    document.getElementById("pricingActive").classList.remove("my-activeLink");
    document.getElementById("projectsActive").classList.remove("my-activeLink");
    document.getElementById("servicesActive").classList.remove("my-activeLink");
    document.getElementById("aboutActive").classList.remove("my-activeLink");
    document.getElementById("homeActive").classList.remove("my-activeLink");
    document.getElementById("contactActive").classList.remove("my-activeLink");
  }
  
  function ContactLiBg(){
    document.getElementById("contactActive").classList.add("my-activeLink");
    document.getElementById("blogActive").classList.remove("my-activeLink");
    document.getElementById("pricingActive").classList.remove("my-activeLink");
    document.getElementById("projectsActive").classList.remove("my-activeLink");
    document.getElementById("servicesActive").classList.remove("my-activeLink");
    document.getElementById("aboutActive").classList.remove("my-activeLink");
    document.getElementById("homeActive").classList.remove("my-activeLink");
  }
// MENU ANCHOR BG END

// COUNTER JS CODE
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

// AOS ANIMATION
AOS.init();

