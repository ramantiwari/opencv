
  $('#grouploop-1').grouploop({
    velocity: 0.7,
    forward: true,
    pauseOnHover: true,
    childNode: ".item",
    childWrapper: ".item-wrap"
    });
    $('#grouploop-2').grouploop({
    velocity: 0.4,
    forward: false,
    pauseOnHover: true,
    childNode: ".item",
    childWrapper: ".item-wrap"
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
    
    
$('.pagesnumber input[name="numberpages"]:radio').change(function () {
        var radio_value = ($('.pagesnumber input:radio[name="numberpages"]:checked').val());
        if (radio_value == 'yes') {
            $('.pagesselect').slideDown("slow");
        }
        else if (radio_value == 'no') {
            $('.pagesselect').slideUp("slow");
        }
    });
    $('.requirements input[name="requirementsradio"]:radio').change(function () {
      var radio_value = ($('.requirements input:radio[name="requirementsradio"]:checked').val());
      if (radio_value == 'yes') {
          $('.requiment').slideDown("slow");
      }
      else if (radio_value == 'no') {
          $('.requiment').slideUp("slow");
      }
  });
  $('.checklist input[name="checklistradio"]:radio').change(function () {
    var radio_value = ($('.checklist input:radio[name="checklistradio"]:checked').val());
    if (radio_value == 'yes') {
        $('.checklistshow').slideDown("slow");
    }
    else if (radio_value == 'no') {
        $('.checklistshow').slideUp("slow");
    }
});    