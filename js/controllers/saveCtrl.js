/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: Save Category
*/

app.controller("saveCtrl", function ($scope) {
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
  $scope.catName="Save commissioning time and truck rolls";
    $scope.videos = [
      {
        videoID: "cJpB_AEZf6U", //Youtube Video ID
        name: "Bob Dylan - Knockin' On Heaven's Door", // Video Title
        desc: "Description Goes Here", // Video Description
        clas: "active",
      },
      {
        videoID: "L9EKqQWPjyo", //Youtube Video ID
        name: "Bob Dylan - Things Have Changed", // Video Title
        desc: "Moby - Porcelain", // Video Description
      },
      {
        videoID: "YwSZvHqf9qM", //Youtube Video ID
        name: "Bob Dylan - Tangled Up In Blue", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "Go2jbER0wk0", //Youtube Video ID
        name: "Bob Dylan - Lay Lady Lay", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "yZPh3hpxLKs", //Youtube Video ID
        name: "Bob Dylan - Don't Think Twice It's Alright", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "BzanOzyqgas", //Youtube Video ID
        name: "Bob Dylan - All Along the Watchtower", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "nBgkw06JhFA", //Youtube Video ID
        name: "Bob Dylan - I Shall Be Released", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "3l4nVByCL44", //Youtube Video ID
        name: "Blowin in The Wind - Bob Dylan", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "T5al0HmR4to", //Youtube Video ID
        name: "A Hard Rain's A-Gonna Fall", // Video Title
        desc: "Description Goes Here", // Video Description
      },
    ];
    $scope.init = function(video){
      $('.single-video').first().addClass('active');
      $scope.selectedVideo = video;
      console.log('DEBUG: Active Added');
      console.log('DEBUG: Save Loaded');
      $('#save').addClass('active');
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
