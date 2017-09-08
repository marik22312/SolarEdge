/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: Improve Category
*/

app.controller("improveCtrl", function ($scope, $rootScope, $location) {
    $scope.playerVars = {
        controls: 0,
        autoplay: 1,
        disablekb: 1,
        iv_load_policy: 3,
    };
    var showTooltips = function ($event, mainPlayer) {
    // play it again
        $('.nullSelector').fadeIn()
        // console.log('DEBUG: Video ended');
    };
    $scope.$on('youtube.player.ended', showTooltips);
    $scope.$on('youtube.player.paused', showTooltips);
    $scope.$on('youtube.player.playing', function ($event, mainPlayer) {
      // play it again
      $('.nullSelector').fadeOut();
      // console.log('DEBUG: Video Playing!');
      // window.scrollTop();
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

    $scope.catName="Improve your lead generation";
    $scope.videos = [
      {
        videoID: "TWms_cJrp40", //Youtube Video ID
        name: "Kiosk View ", //Video Title
        desc: "Showcase real-time PV site performance on a public display e.g. building lobby<ul><li>Increase your brand exposure by displaying your logo in public</li><li>Help your customers promote their commitment to renewable energy and support solar education </li></ul>", // Video Description
        shortDesc: "Showcasing real-time PV site performance on a public display ",
        clas: "active",
      },
      {
        videoID: "lH3msleTYeA",// Youtube Video ID
        name: "Public Site Display", // Video Title
        shortDesc: "Gaining free exposure by making your sites publicly viewed",
        desc: "Gain free exposure by making your sites publicly viewed<ul><li>Easily share your sites using a public web address – no need to login to the monitoring platform </li><li>Gain high visibility for your company logo to enhance lead generation</li><li>Display the site's power and energy production, and environmental benefits</li></ul>", // Video Description
      },
      {
        videoID: "--insert_video_ID",// Youtube Video ID
        name: "Social Media Branding", // Video Title
        shortDesc: "Enjoying wide brand exposure each time your customers share their site production",
        desc: "Enjoying wide brand exposure each time your customers share their site production<ul><li>Site production is easily shared across social media directly from the monitoring app</li><li>Customer’s friends and family are exposed to your company logo, generating more referrals </li></ul>", // Video Description
      },
      // BLANKS, JUST REMOVE THE DOUBLE SLASH TO USE


      // {
      //   videoID: "5wrwcEZ3Btw",// Youtube Video ID
      //   name: "Moby - in this world", // Video Title
      //   shortDesc: "",
      //   desc: "", // Video Description
      // },
      // {
      //   videoID: "z3YMxM1_S48",// Youtube Video ID
      //   name: "Moby - Natural Blues", // Video Title
      //   shortDesc: "",
      //   desc: "", // Video Description
      // },
    ];
    $scope.init = function(video){
      $scope.selectedVideo = video;
      // console.log('DEBUG: Active Added');
      // console.log('DEBUG: Improve Loaded');
       $('#improve').addClass('active');
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
