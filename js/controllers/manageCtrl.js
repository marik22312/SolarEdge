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
    disablekb: 1
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
  });
  $scope.hideNull = function(){
    $('.nullSelector').fadeOut()
    $('.single-video').on('click', function() {
      $('.single-video').removeClass('active');
      $(this).addClass('active');});
  };
   $scope.catName="effectively manage your fleet";
    $scope.videos = [
      {
        videoID: "NGorjBVag0I", //Youtube Video ID
        name: "Leonard Cohen - Dance Me to the End of Love", //Video Title
        desc: "Description Goes Here",  // Video Description
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
      console.log('DEBUG: Active Added');
      console.log('DEBUG: Manage Loaded');
    };
});
