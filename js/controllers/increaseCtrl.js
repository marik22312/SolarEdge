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
};
  $scope.$on('youtube.player.ended', function ($event, mainPlayer) {
    // play it again
    $('.nullSelector').fadeIn();
    console.log('DEBUG: Video ended');
  });
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
      if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            window.scrollTo(200,100) // first value for left offset, second value for top offset
}else{
            $('html,body').animate({
                scrollTop: 100,
                scrollLeft: 200
            }, 800, function(){
                $('html,body').clearQueue();
            });
}
  };
    $scope.catName="Increase value for your customers";
    $scope.videos = [
      {
        videoID: "ub747pprmJ8", //Youtube Video ID
        name: "Fatboyslim - Right here, right now", //Video Name
        desc: "Description Goes Here", //Video Description
        clas: "active",
      },
      {
        videoID: "so9DBHCo64Q", //Youtube Video ID
        name: "Fatboyslim - Push the tempo", //Video Name
        desc: "Moby - Porcelain", //Video Description
      },
      {
        videoID: "SBClImpnfAg", //Youtube Video ID
        name: "Fatboyslim - Rockafeller Skank", //Video Name
        desc: "Description Goes Here", //Video Description
      },
      {
        videoID: "Ex1qzIggZnA", //Youtube Video ID
        name: "Fatboyslim - Praise You", //Video Name
        desc: "Description Goes Here", //Video Description
      },
      {
        videoID: "wCDIYvFmgW8", //Youtube Video ID
        name: "Fatboy Slim - Weapon Of Choice", //Video Name
        desc: "Description Goes Here", //Video Description
      },
      {
        videoID: "u5ZUshzhMtc", //Youtube Video ID
        name: "Fatboy Slim - Don't Let The Man Get You Down", //Video Name
        desc: "Description Goes Here", //Video Description
      },
      {
        videoID: "wBoRkg5-Ieg", //Youtube Video ID
        name: "Fatboy Slim - Eat sleep rave repeat", //Video Name
        desc: "Description Goes Here", //Video Description
      },
      {
        videoID: "zKEWdRPRf3I", //Youtube Video ID
        name: "Fatboy Slim - Sunset", //Video Name
        desc: "Description Goes Here", //Video Description
      }
    ];
    $scope.init = function(video){
      $('.single-video').first().addClass('active');
      $scope.selectedVideo = video;
      console.log('DEBUG: Active Added');
      console.log('DEBUG: Increase Loaded');
      $('#increase').addClass('active');
    };
});
