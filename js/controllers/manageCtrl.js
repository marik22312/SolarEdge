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
      $('body').animate({
          scrollTop: 0
      }, 800);
  };
   $scope.catName="effectively manage your fleet";
    $scope.videos = [
      {
        videoID: "NGorjBVag0I", //Youtube Video ID
        name: "Leonard Cohen - Dance Me to the End of Love", //Video Title
        desc: "Description Goes Here",  // Video Description
        clas: "active",
      },
      {
        videoID: "6EA-MIYY1bg", //Youtube Video ID
        name: "Hooverphonic - Mad About You", //Video Title
        desc: "Moby - Porcelain", // Video Description
      },
      {
        videoID: "M_kTSBqQkME", //Youtube Video ID
        name: "Kovacs - My Love", //Video Title
        desc: "Description Goes Here",  // Video Description
      },
      {
        videoID: "JTTC_fD598A", //Youtube Video ID
        name: "Leonard Cohen - First We Take Manhattan", //Video Title
        desc: "Description Goes Here",  // Video Description
      },
      {
        videoID: "NW7oNpzBSGc", //Youtube Video ID
        name: "Leonard Cohen - In My Secret Life", //Video Title
        desc: "Description Goes Here",  // Video Description
      },
      {
        videoID: "v0nmHymgM7Y", //Youtube Video ID
        name: "Leonard Cohen - You Want It Darker ", //Video Title
        desc: "Description Goes Here",  // Video Description
      },
      {
        videoID: "QYEC4TZsy-Y", //Youtube Video ID
        name: "Lou Reed - Perfect Day", //Video Title
        desc: "Description Goes Here",  // Video Description
      },
      {
        videoID: "hMr3KtYUCcI", //Youtube Video ID
        name: "PINK FLOYD HAVE A CIGAR", //Video Title
        desc: "Description Goes Here",  // Video Description
      },
      {
        videoID: "YrLk4vdY28Q", //Youtube Video ID
        name: "Leonard Cohen - Hallelujah", //Video Title
        desc: "Description Goes Here",  // Video Description
      },
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
