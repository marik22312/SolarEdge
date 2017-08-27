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
    $scope.$on('youtube.player.ended', function ($event, mainPlayer) {
      // play it again
      $('.nullSelector').fadeIn()
      console.log('DEBUG: Video ended');
    });
    $scope.$on('youtube.player.playing', function ($event, mainPlayer) {
      // play it again
      $('.nullSelector').fadeOut();
      console.log('DEBUG: Video Playing!');
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
        videoID: "atyvdC15HFA", //Youtube Video ID
        name: "Moby - Everloving", // Video Name
        desc: "Description Goes Here", // Video Description
        clas: "active",
      },
      {
        videoID: "13EifDb4GYs",// Youtube Video ID
        name: "Moby - Porcelain", // Video Title
        desc: "Moby - Porcelain", // Video Description
      },
      {
        videoID: "6A2V9Bu80J4",// Youtube Video ID
        name: "Moby - Flower", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "5wrwcEZ3Btw",// Youtube Video ID
        name: "Moby - in this world", // Video Title
        desc: "Description Goes Here", // Video Description
      },
      {
        videoID: "z3YMxM1_S48",// Youtube Video ID
        name: "Moby - Natural Blues", // Video Title
        desc: "Description Goes Here", // Video Description
      }
    ];
    $scope.init = function(video){
      $scope.selectedVideo = video;
      console.log('DEBUG: Active Added');
      console.log('DEBUG: Improve Loaded');
      $('#improve').addClass('active');
      };
});

// function(){$('.single-video').first().addClass('active');}
