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
    rel: 0,
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
        videoID: "surbejL_Mgg",// Youtube Video ID
        name: "AutoCAD File Import", // Video Title
        shortDesc: "Importing AutoCAD design files to instantly create physical layouts",
        desc: "Import AutoCAD design files to instantly create site layouts<ul><li>Faster, easier and more accurate than manual site mapping</li><li>Especially valuable for large commercial deployments</li><li>Modify the layout as needed in the physical layout editor</li></ul>", // Video Description
        clas: "active",
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
