(function($){
jQuery.fn.timerTabPanel = function (opt) {
  var init = {
    tabPanel: this,      // tab panel wrapper selector
    startTab: 1,         // start tab number
    timeInterval: 3000,  // time interval (ms)
    tabElm: "li",        // tab selector: jquery-ui default
    panelElm: "div",     // panel selector: jquery-ui default
  };
  var d = $.extend({}, init, opt);
  var n = (d.startTab > 0 && $(d.tabPanel).find(d.tabElm).length >= d.startTab) ? d.startTab - 1 : 0;
  var startTimerTabPanel = function () {
    $(d.tabPanel).tabs();
    // tab panel timer settings
    var tabTimer = setInterval(tabChange, d.timeInterval);
    $(d.tabPanel).on("mouseover", function () { clearInterval(tabTimer); });
    $(d.tabPanel).on("mouseleave", function () { tabTimer = setInterval(tabChange, d.timeInterval); });
    // tab panel click action settings
    $(d.tabPanel).find(d.tabElm).on("click", function () { n = $(this).index(); });
    $(d.tabPanel).find(d.tabElm).eq(n).find("a").trigger("click");
  };
  // tab panel auto change function
  var tabChange = function () {
    var tabsElm = $(d.tabPanel).find(d.tabElm);
    var tabs = tabsElm.length;
    n = n % tabs;
    tabsElm.eq(n).find("a").trigger("click");
    n++;
  };
  // Start Timer Tab Panel
  startTimerTabPanel();
};
})(jQuery);