/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: Speed Category
*/

app.controller("speedCtrl", function ($scope) {
  $scope.playerVars = {
    controls: 0,
    autoplay: 1,
    disablekb: 1,
    iv_load_policy: 3,
};
    var showTooltips = function ($event, mainPlayer) {
    // play it again
        $('.nullSelector').fadeIn()
        console.log('DEBUG: Video ended');
    };
    $scope.$on('youtube.player.ended', showTooltips);
    $scope.$on('youtube.player.paused', showTooltips);
  $scope.$on('youtube.player.playing', function ($event, mainPlayer) {
    // play it again
    $('.nullSelector').fadeOut();
    console.log('DEBUG: Video Playing!');
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
  $scope.catName="Speed up your installation";
    $scope.videos = [
      {
        videoID: "VJDJs9dumZI", // Youtube Video ID
        name: "The Beatles - While My Guitar Gently Weeps", // Video Title
        desc: "Description Goes Here", // Video Description
        clas: "active",
      },
      {
        videoID: "Qyclqo_AV2M", // Youtube Video ID
        name: "The Beatles - We Can Work it Out", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "S-rB0pHI9fU", // Youtube Video ID
        name: "The Beatles - Penny Lane", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "U_O1QKQCsGs", // Youtube Video ID
        name: "The Beatles-Here comes the Sun", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "A_MjCqQoLLA", // Youtube Video ID
        name: "The Beatles - Hey Jude", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "RMdD8MwUQpw", // Youtube Video ID
        name: "The Beatles - Come Together ", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "guiNy0jSKkI", // Youtube Video ID
        name: "The Beatles - Sgt. Pepper's Lonely Hearts Club Band", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "Dw17-BEFb3Y", // Youtube Video ID
        name: "Moby - Lift me up", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "z1nxWwkZ2mQ", // Youtube Video ID
        name: "Moby - Go", // Video Title
        desc: "Description Goes Here", // Video Description
      },
    ];
    $scope.init = function(video){
      $('.single-video').first().addClass('active');
      $scope.selectedVideo = video;
      console.log('DEBUG: Active Added');
      console.log('DEBUG: Speed Loaded');
      $('#speed').addClass('active');
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
