/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: Increase Category
*/

app.controller("increaseCtrl", function ($scope) {
  $scope.playerVars = {
    controls: 0,
    autoplay: 1,
    disablekb: 1,
    iv_load_policy: 3,
    rel: 0,
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
  });
  $scope.hideNull = function(){
    $('.nullSelector').fadeOut()
    $('.single-video').on('click', function() {
      $('.single-video').removeClass('active');
      $(this).addClass('active');});
      //Scroll to top when choosing a video
      $("body").animate({
          scrollTop: 0
      }, 800);
  };
    $scope.catName="Increase value for your customers";
    $scope.videos = [
      {
        videoID: "83wPJm2XMHU",// Youtube Video ID
        name: "Consumption Monitoring", // Video Title
        shortDesc: "Optimizing solar usage to increase self-consumption ",
        desc: "Optimizing solar usage to increase self-consumption <ul><li>Easily track system production, site consumption, and self-consumption </li><li>Better understand customer consumption patterns to increase their self-consumption</li></ul>", // Video Description
      },
      {
        videoID: "rVVjlCKamhA",// Youtube Video ID
        name: "Automatic SREC Reporting", // Video Title
        shortDesc: "Improving system owner's SREC reporting experience",
        desc: "Enable your customers to automatically report their energy production for SREC credits<ul><li>Simplified process for reporting energy production to the PTS</li><li>Automatic identification of relevant PTS based on site location</li><li>Report status and summary available directly from the dashboard </li></ul>", // Video Description
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
    ];
    $scope.init = function(video){
      $('.single-video').first().addClass('active');
      $scope.selectedVideo = video;
      // console.log('DEBUG: Active Added');
      // console.log('DEBUG: Increase Loaded');
      $('#increase').addClass('active');

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
