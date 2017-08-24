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
    };
});
