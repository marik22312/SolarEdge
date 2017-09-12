/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: Improve Category
*/

app.controller("manageCtrl", function ($scope) {
  $scope.playerVars = {
    controls: 0,
    autoplay: 1,
    disablekb: 1,
    iv_load_policy: 3,
    rel: 0,
};
var showTooltipsPlay = function ($event, mainPlayer) {
// play it again
    $('.nullSelector').fadeIn();
    mainPlayer.playVideo();
    // console.log('DEBUG: Video ended');
};
var showTooltips = function ($event, mainPlayer) {
// play it again
    $('.nullSelector').fadeIn();
    // console.log('DEBUG: Video ended');
};
$scope.$on('youtube.player.ended', showTooltipsPlay);
    $scope.$on('youtube.player.paused', showTooltips);
  $scope.$on('youtube.player.playing', function ($event, mainPlayer) {
    // play it again
    $('.nullSelector').fadeOut();
    // console.log('DEBUG: Video Playing!');
  });
  $scope.hideNull = function(){
    $('.nullSelector').fadeOut()
    $('.single-video').on('click', function() {
      $('.single-video').removeClass('active');
      $(this).addClass('active');});
      //Scroll to top when choosing a video
      $('body').animate({
          scrollTop: 0
      }, 800);
  };
   $scope.catName="effectively manage your fleet";
    $scope.videos = [
        {
          videoID: "sRelFFW79Uo",// Youtube Video ID
          name: "Automatic Alerts ", // Video Title
          shortDesc: "Staying aware of site performance issues to maximize system uptime ",
          desc: "Improve site performance and maximize energy output using the alerts mechanism <ul><li>Notify the right people instantly via email about key performance issues, letting them respond rapidly to events </li><li>See predefined alerts and add custom alerts with the powerful Alert Rules Generator</li><li>Use the Alert Log and Alert Reports to regularly analyze performance over time or across sites</li></ul>", // Video Description
        },
        {
          videoID: "XRjUtY13yIE",// Youtube Video ID
          name: "Mismatch Reports", // Video Title
          shortDesc: "Allowing higher lifetime production by analyzing module mismatch",
          desc: "Maximize system revenue by using in-depth diagnostics <ul><li>Analyze module performance to identify mismatch losses and Improve overall site performance </li><li>Stay on top of problematic external conditions such as shading or underperforming modules to increase energy output and ROI  </li><li>Prevent energy loss by early detection of mismatch issues </li></ul>", // Video Description
        },
        {
          videoID: "tpVyN5B-r0o",// Youtube Video ID
          name: "Account Level Reports", // Video Title
          shortDesc: "Allowing comparison and performance analysis of multiple sites in your account",
          desc: "Streamline data analysis of all sites in your account <ul><li> Generate reports analyzing performance of multiple sites in your account in just a few clicks</li><li>Compare performance of multiple sites at daily, monthly or custom date-range levels</li></ul>", // Video Description
        },
        {
          videoID: "XfjDCjXH1zY",// Youtube Video ID
          name: "Setting Access Levels", // Video Title
          shortDesc: "Controlling the level of data access according to user type.",
          desc: "Maintain full control over what information your users can see:<ul><li>Provide technicians and service staff access to monitor site performance, edit site layout, generate reports and perform remote servicing</li><li>Grant third-parties such as financiers, O&M providers and on-field service sub-contractors different permission levels to review site performance data</li><li> User roles include Full Access, Dashboard & Layout, and Dashboard Only</li></ul>", // Video Description
        },
        // {
        //   videoID: "",// Youtube Video ID
        //   name: "", // Video Title
        //   shortDesc: "",
        //   desc: "", // Video Description
        // },
        // {
        //   videoID: "",// Youtube Video ID
        //   name: "", // Video Title
        //   shortDesc: "",
        //   desc: "", // Video Description
        // },
        // {
        //   videoID: "",// Youtube Video ID
        //   name: "", // Video Title
        //   shortDesc: "",
        //   desc: "", // Video Description
        // },
        // {
        //   videoID: "",// Youtube Video ID
        //   name: "", // Video Title
        //   shortDesc: "",
        //   desc: "", // Video Description
        // },
    ];
    $scope.init = function(video){
      $('.single-video').first().addClass('active');
      $scope.selectedVideo = video;
      // console.log('DEBUG: Active Added');
      // console.log('DEBUG: Manage Loaded');
      $('#manage').addClass('active');

      setTimeout(function() {
      // Configure/customize these variables.

      $('.video-desc').each(function() {
          var content = $(this).html();

          if(content.length > showChar) {

              var c = content.substr(0, showChar);
              var h = content.substr(showChar, content.length - showChar);

              var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span>'//'<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

              $(this).html(html);
          }

      });

      $(".morelink").click(function(){
          if($(this).hasClass("less")) {
              $(this).removeClass("less");
              $(this).html(moretext);
          } else {
              $(this).addClass("less");
              $(this).html(lesstext);
          }
          $(this).parent().prev().toggle();
          $(this).prev().toggle();
          return false;
      });

 }, 10);
    };
});
