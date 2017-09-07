/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: Improve Category
*/

app.controller("speedCtrl", function ($scope, $rootScope, $location) {
  $scope.videos = [
    {
      vidLocation: "1", // Video ID
      name: "Moby - Everloving", // Video Name
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget justo consequat, sodales velit a, ullamcorper diam. Proin suscipit ligula orci, in volutpat nisl lobortis a. Proin et mi pulvinar, scelerisque nunc sit amet, semper tellus. Aenean molestie mi vitae sodales malesuada. Sed sed justo vehicula, fringilla tellus quis, pulvinar orci. Fusce sed mollis dui. Mauris aliquam gravida posuere. Cras scelerisque nunc eget augue blandit, congue volutpat elit tempor. Proin sit amet risus ex.", // Video Description
      clas: "active", // IMPORTANT! DO NOT TOUCH!
    },
    {
      vidLocation: "2",//  Video ID
      name: "Moby - Porcelain", // Video Title
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget justo consequat, sodales velit a, ullamcorper diam. Proin suscipit ligula orci, in volutpat nisl lobortis a. Proin et mi pulvinar, scelerisque nunc sit amet, semper tellus. Aenean molestie mi vitae sodales malesuada. Sed sed justo vehicula, fringilla tellus quis, pulvinar orci. Fusce sed mollis dui. Mauris aliquam gravida posuere. Cras scelerisque nunc eget augue blandit, congue volutpat elit tempor. Proin sit amet risus ex.", // Video Description
    },
    {
      vidLocation: "3",//  Video ID
      name: "Moby - Flower", // Video Title
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget justo consequat, sodales velit a, ullamcorper diam. Proin suscipit ligula orci, in volutpat nisl lobortis a. Proin et mi pulvinar, scelerisque nunc sit amet, semper tellus. Aenean molestie mi vitae sodales malesuada. Sed sed justo vehicula, fringilla tellus quis, pulvinar orci. Fusce sed mollis dui. Mauris aliquam gravida posuere. Cras scelerisque nunc eget augue blandit, congue volutpat elit tempor. Proin sit amet risus ex.", // Video Description
    },
    {
      vidLocation: "4",//  Video ID
      name: "Moby - in this world", // Video Title
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget justo consequat, sodales velit a, ullamcorper diam. Proin suscipit ligula orci, in volutpat nisl lobortis a. Proin et mi pulvinar, scelerisque nunc sit amet, semper tellus. Aenean molestie mi vitae sodales malesuada. Sed sed justo vehicula, fringilla tellus quis, pulvinar orci. Fusce sed mollis dui. Mauris aliquam gravida posuere. Cras scelerisque nunc eget augue blandit, congue volutpat elit tempor. Proin sit amet risus ex.", // Video Description
    },
    {
      vidLocation: "5",//  Video ID
      name: "Moby - Natural Blues", // Video Title
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget justo consequat, sodales velit a, ullamcorper diam. Proin suscipit ligula orci, in volutpat nisl lobortis a. Proin et mi pulvinar, scelerisque nunc sit amet, semper tellus. Aenean molestie mi vitae sodales malesuada. Sed sed justo vehicula, fringilla tellus quis, pulvinar orci. Fusce sed mollis dui. Mauris aliquam gravida posuere. Cras scelerisque nunc eget augue blandit, congue volutpat elit tempor. Proin sit amet risus ex.", // Video Description
    }
  ];
  /*
  * Do Not Touch From This Point
  * Unless you are 100% sure you know what you are doing.
  */
    $scope.category = "speed";
    $scope.pauseOrPlay = function(){
      var vid = document.getElementById('videoPlayer');
        if (vid.ended || vid.paused == true) {
          vid.play();
        }
        else {
          vid.pause();
        }
    }
    var showTooltips = function ($event, mainPlayer) {
    // play it again
        $('.nullSelector').fadeIn();
        // console.log('DEBUG: Video ended');
    };
    var hideTooltips = function ($event, mainPlayer) {
    // play it again
        $('.nullSelector').fadeOut();
        // console.log('DEBUG: Video ended');
    };
    var delayTooltips = setTimeout(hideTooltips, 3000);

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
    $scope.init = function(video){
      var vid = document.getElementById('videoPlayer');
      vid.onended = delayTooltips;
      vid.onpause = showTooltips;
      vid.onplay = hideTooltips;
      $scope.selectedVideo = video;
      // console.log('DEBUG: Active Added');
      // console.log('DEBUG: Improve Loaded');
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
