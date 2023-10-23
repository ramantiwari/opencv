// function companymore() {
//   var element = document.getElementById("showlist");
//   element.classList.add("morelist");
// }

// function landingmore() {
//   var element = document.getElementById("landingpage");
//   element.classList.add("listhgt");
// }

  
  function ppcmore() {
    var x = document.getElementById("ppcmore");
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById("ppcshow").innerHTML="Show Less";
      var element = document.getElementById("ppcshow");
      element.classList.add("ppcdown");
    } else {
      x.style.display = "none";
      document.getElementById("ppcshow").innerHTML="Show More";
      var element = document.getElementById("ppcshow");
      element.classList.remove("ppcdown");
sw
    }
    
  }
  function landingmore() {
    var x = document.getElementById("landingpage");
    if (x.style.height  === "100px") {
      x.style.height = "auto";
      element.classList.add("listhgt");
      document.getElementById("listmorebtn").innerHTML="Show Less";
    } else {
      x.style.height = "100px";
      document.getElementById("listmorebtn").innerHTML="Show More";
    }
    
  }
function webone() {
    var x = document.getElementById("web1");
    if (x.style.display === "none") {
      x.style.display = "inline";
    document.getElementById("webone").innerHTML="Read Less";
    } else {
      x.style.display = "none";
    document.getElementById("webone").innerHTML="Read More";
    }
    
  }  

// $(".inputs").keyup(function () {
//     if (this.value.length == this.maxLength) {
//       $(this).next('.inputs').focus();
//     }
// });


$("#more").on('click',function(){
  $('.review_body').load('review1.html',function(){
    $("#reviewone").addClass("showreview");
    $(".review_overlay").addClass("reoverlay");
    $("body,html").addClass("scrollhide");
  });
	$("#closeone").click(function(){
		$("#reviewone").removeClass("showreview");
    $("body,html").removeClass("scrollhide");
    $(".review_overlay").removeClass("reoverlay");
	});
});
$("#menushow").click(function(){
	$("#menuopen").addClass("showmore");
  $(".menu_overlay").addClass("reoverlay");
  $("body,html").addClass("scrollhide");
	$("#menuclose").click(function(){
		$("#menuopen").removeClass("showmore");
    $("body,html").removeClass("scrollhide");
    $(".menu_overlay").removeClass("reoverlay");
	});
});

$(function () {
  $("#tabs").timerTabPanel({timeInterval:2000});
  });
   $( function() {
      $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
      $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  } );


  const header = document.querySelector(".menu");
    const toggleClass = "has-sticky";

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 120) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
    });
  
    // var swiper = new Swiper(".ppcservices", {
    //   loop:true,
    //   allowTouchMove:true,
    //   keyboard: {
    //     enabled: false,
    //   },
    //   slidesPerView: 1.1,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    //   },
    //   breakpoints: {
    //     0: {
    //         slidesPerView: 1.1,
    //         spaceBetween: 5,
    //     },
    //     480: {
    //         slidesPerView: 1.1,
    //         spaceBetween: 5,
    //     },
    //     787: {
    //         slidesPerView: 1,
    //     },
    //     991: {
    //         slidesPerView: 1,
    //     },
    //     1200: {
    //         slidesPerView: 1,
    //     }
       
    //   }
    // });
    
    // var swiper = new Swiper(".mySwiper", {
    //   loop:true,
    //   allowTouchMove:false,
    //   keyboard: {
    //     enabled: false,
    //   },
    //   slidesPerView: 1,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    //   },
    //   breakpoints: {
    //     0: {
    //         slidesPerView: 1.1,
    //         spaceBetween: 5,
    //     },
    //     480: {
    //         slidesPerView: 1.1,
    //         spaceBetween: 5,
    //     },
    //     787: {
    //         slidesPerView: 1,
    //     },
    //     991: {
    //         slidesPerView: 1,
    //     },
    //     1200: {
    //         slidesPerView: 1,
    //     }
    //   }
    // });    

//     $('#form1').on('keyup', '.inputs.one', function(event)
//   {
//     var key = event.keyCode || event.charCode;
//     var inputs = $('.inputs.one');
//     if(($(this).val().length === this.size) && key != 32) 
//     {
//       inputs.eq(inputs.index(this) + 1).focus();  
//     } 
//     if( key == 8 || key == 46 )
//     {
//       var indexNum = inputs.index(this);
//       if(indexNum != 0)
//       {
//       inputs.eq(inputs.index(this) - 1).val('').focus();
//       }
//     }
    
//   }); 


const inputFields = document.querySelectorAll('.inputs');

        inputFields.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                const value = e.target.value;
                if (value.length > 0) {
                    if (index < inputFields.length - 1) {
                        inputFields[index + 1].focus();
                    }
                }
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && index > 0) {
                    // Only move to the previous field if the current field is empty
                    if (input.value === '') {
                        inputFields[index - 1].focus();
                    }
                } else if (e.key === 'Tab' && index < inputFields.length - 1) {
                    inputFields[index + 1].focus();
                    e.preventDefault(); // Prevent the default tab behavior
                }
            });
        });





  $(".menudropdown").click(function(){
    $(".submenu.open1").slideDown("slow");
    $(".submenu.open2").hide();
    $(".menu.childmenu ul li a.menudropdown").addClass("activebox");
  });
  $(".menudropdown2").click(function(){
    $(".submenu.open2").slideDown("slow");
    $(".submenu.open1").hide();
  });
  $(".menu ul li ul a").click(function(){
    $(".submenu").hide();
    $(".menu.childmenu ul li a.menudropdown").removeClass("activebox");
  });
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".submenu").length
                === 0) {
        $(".submenu").hide();
        $(".menu.childmenu ul li a.menudropdown").removeClass("activebox");
    }
  });
  $(".slidedownmenu").click(function(){
    $(".slidemenu").slideToggle(function() {
      $(".slidedownmenu").toggleClass("arrowch");
});
});
$(document).mouseup(function (e) {
  if ($(e.target).closest("#menuopen").length === 0) {
      $(".menuslide").removeClass("showmore");
      $(".menu_overlay").removeClass("reoverlay");
      $("body,html").removeClass("scrollhide");

  }
});

  $(document).ready(function(){
    $(".showbtn").click(function(){
      $(".showmore_text").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
    $("#delhimore").click(function(){
      $("#delhishow").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
    $("#gurugrammore").click(function(){
      $("#gurugramshow").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
    $("#mumbaimore").click(function(){
      $("#mumbaishow").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
    $("#bangaloremore").click(function(){
      $("#bangaloreshow").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
    $("#chennaimore").click(function(){
      $("#chennaishow").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
    $("#kolkatamore").click(function(){
      $("#kolkatashow").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
    $("#hyderabadmore").click(function(){
      $("#hyderabadshow").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
    $("#ppcless").click(function(){
      $(".ppcmore").slideToggle();
      $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
    });
  });

  
    $("#more").click(function(){
      $("#reviewone").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closeone").click(function(){
        $("#reviewone").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });
    $("#more2").click(function(){
      $("#reviewtwo").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closetwo").click(function(){
        $("#reviewtwo").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });    
    $("#getquote1").click(function(){
      $("#reviewthree").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closethree").click(function(){
        $("#reviewthree").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });
    $("#getquote2").click(function(){
      $("#reviewfour").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closefour").click(function(){
        $("#reviewfour").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });
    $("#getquote3").click(function(){
      $("#reviewfive").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closefive").click(function(){
        $("#reviewfive").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });
    $("#more4").click(function(){
      $("#reviewsix").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closesix").click(function(){
        $("#reviewsix").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });
    $("#moremore").click(function(){
      $("#revieweight").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closeeight").click(function(){
        $("#revieweight").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });
    $("#more10").click(function(){
      $("#reviewten").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closeten").click(function(){
        $("#reviewten").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });
    $("#getrequestquote").click(function(){
      $("#reviewseven").addClass("showreview");
      $(".review_overlay").addClass("reoverlay");
      $("body,html").addClass("scrollhide");
      $("#closeseven").click(function(){
        $("#reviewseven").removeClass("showreview");
        $("body,html").removeClass("scrollhide");
        $(".review_overlay").removeClass("reoverlay");
      });
    });
    
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
    myFunction()
    findVisibleSectionAndScroll();
    
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function findVisibleSectionAndScroll() {
      // Get the menu items and display sections
      var menuItems = document.querySelectorAll("#nav-serialscrolling li a[data-serialscrolling]");
      var displaySections = document.querySelectorAll("[data-serialscrolling-target]");
    
      // Find the currently visible menu item
      for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];
        var section = displaySections[i];
    
        // Check if the section is in the viewport
        var rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          // This menu item is in view, you can now access its data-serialscrolling attribute
          var dataSerialScrolling = menuItem.getAttribute("data-serialscrolling");
          console.log("Currently visible section: " + dataSerialScrolling);
    
          // Scroll the menu container to bring the menu item into view
          var menuContainer = document.getElementById("nav-serialscrolling");
          var menuItemLeft = menuItem.getBoundingClientRect().left;
          var containerScrollLeft = menuContainer.scrollLeft;
          var menuItemOffsetLeft = menuItemLeft + containerScrollLeft;
          menuContainer.scrollTo({
            left: menuItemOffsetLeft - menuContainer.clientWidth / 2, // Scroll to center the menu item
            behavior: "smooth", // Use smooth scrolling
          });
        }
      }
    }

$('[data-serialscrolling]').serialscrolling({
  // selector
  targetSelector: '[data-serialscrolling-target]',
  getTarget: function($element){
    const target = $element.attr('data-serialscrolling');
    return $('[data-serialscrolling-target="'+ target +'"]');
  },
  getTrigger: function($page, $stack){
    const target = $page.attr('data-serialscrolling-target');
    return $stack.filter('[data-serialscrolling="'+ target +'"]');
  },
  // duration of the animation in ms
  duration: 200,
  // easing function
  easing: 'easeInOutExpo',
  // top offset in px
  offsetTop: -130,
  // callback
  callback: false
});

// $('.inputs').keyup(function(e) {
//   if (e.which == 8 || e.which == 46) {
//       $(this).prev('input').focus();
//   }
//   else {
//       $(this).next('input').focus();
//   }
// })
