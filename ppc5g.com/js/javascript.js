const openModalBtns = document.querySelectorAll(".openModalBtn");
const modalContainer = document.getElementById("modalContainer");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const whyus = document.getElementById("whyus").innerHTML;
const audit = document.getElementById("audit").innerHTML;
const checlistnow = document.getElementById("checlistnow").innerHTML;
const pagemistake = document.getElementById("pagemistake").innerHTML;
const withexpert = document.getElementById("withexpert").innerHTML;
const consultation = document.getElementById("consultation").innerHTML;
const privacyctn = document.getElementById("privacyctn").innerHTML;
const whyclients = document.getElementById("whyclients").innerHTML;
const exclusiveppc = document.getElementById("exclusiveppc").innerHTML;
const typeads = document.getElementById("typeads").innerHTML;
const webwhyus = document.getElementById("webwhyus").innerHTML;
// const webpacakge = document.getElementById("webpacakge").innerHTML;
const webpagelistname = document.getElementById("webpagelistname").innerHTML;
const webdesigncategory = document.getElementById("webdesigncategory").innerHTML;
const clickwebsite = document.getElementById("clickwebsite").innerHTML;
const ppcdiscussion = document.getElementById("ppcdiscussion").innerHTML;
const packagelist = document.getElementById("packagelist").innerHTML;


// const locTitle = document.getElementsByClassName("tab-content");

openModalBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const modalTarget = button.getAttribute("data-modal-target");
    if (modalTarget === "modal1") {
      modalTitle.innerText = "";
      modalContent.innerHTML = whyus;
    } else if (modalTarget === "modal2") {
       modalTitle.innerText = "";
      modalContent.innerHTML = audit;
    } else if (modalTarget === "modal3") {
       modalTitle.innerHTML = "";
      modalContent.innerHTML = checlistnow;
    } else if (modalTarget === "modal4") {
      modalTitle.innerText = "";
      modalContent.innerHTML = pagemistake;
    } else if (modalTarget === "modal5") {
      modalTitle.innerText = "";
      modalContent.innerHTML = withexpert;
    }else if (modalTarget === "modal6") {
      modalTitle.innerText = "";
      modalContent.innerHTML = consultation;
    }else if (modalTarget === "modal7") {
      modalTitle.innerText = "";
      modalContent.innerHTML = privacyctn;
    }else if (modalTarget === "modal8") {
      modalTitle.innerText = "";
      modalContent.innerHTML = whyclients;
    }else if (modalTarget === "modal9") {
      modalTitle.innerText = "";
      modalContent.innerHTML = exclusiveppc;
    }else if (modalTarget === "modal10") {
      modalTitle.innerText = "";
      modalContent.innerHTML = typeads;
    }else if (modalTarget === "modal11") {
      modalTitle.innerText = "";
      modalContent.innerHTML = webwhyus;
    }else if (modalTarget === "modal12") {
      modalTitle.innerText = "";
      modalContent.innerHTML = webpacakge;
    }else if (modalTarget === "modal13") {
      modalTitle.innerText = "";
      modalContent.innerHTML = webpagelistname;
    }else if (modalTarget === "modal14") {
      modalTitle.innerText = "";
      modalContent.innerHTML = webdesigncategory;
    }else if (modalTarget === "modal15") {
      modalTitle.innerText = "";
      modalContent.innerHTML = clickwebsite;
    }else if (modalTarget === "modal16") {
      modalTitle.innerText = "";
      modalContent.innerHTML = ppcdiscussion;
    }else if (modalTarget === "modal17") {
      modalTitle.innerText = "";
      modalContent.innerHTML = packagelist;
    }
    modalContainer.style.display = "block";

    document.documentElement.style.overflow = "hidden";
    if(window.innerWidth <= 600){
      document.getElementById("modal").style.animation = "slideIn .5s ease-out";

    }else{
      document.getElementById("modal").style.animation = "slideleft .5s ease-in";
    }
    document.body.style.overflow = "hidden"; // Hide body overflow
  });
});

closeModalBtn.addEventListener("click", () => {
   if(window.innerWidth <= 600){
    document.getElementById("modal").style.animation = "slideOut .5s ease-out";
  }else{
    document.getElementById("modal").style.animation = "slideleftOut .5s ease-out";
  }
  setTimeout(function () {
    modalContainer.style.display = "none";
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto"; // Reset body overflow to default
    document.getElementById("modal").style.animation = "none";
  }, 500);
});
