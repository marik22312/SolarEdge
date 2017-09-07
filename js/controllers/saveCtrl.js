/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: save Category
*/

app.controller("saveCtrl", function ($scope, $rootScope, $location, $window) {
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
    $scope.category = "save";
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
        $('.nullSelector').stop().delay(3000).fadeIn();
        // console.log('DEBUG: Video ended');
    };
    var hideTooltips = function ($event, mainPlayer) {
    // play it again
        $('.nullSelector').stop().fadeOut();
        // console.log('DEBUG: Video ended');
    };
    //var delayTooltips = $('.nullSelector').delay(3000).fadeIn();

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

    $scope.catName="save your lead generation";

    $scope.init = function(video) {
        // Set selected video
        $scope.selectedVideo = video;

        /**
         * Set events on video player
         * @see https://www.w3.org/2010/05/video/mediaevents.html for possible events
         */
        var $viewPlayer = $("#videoPlayer");
        $viewPlayer
            // On Play
            .on('play', function(event) {
                console.debug('Video started playing');
                hideTooltips();
            })

            // On Pause
            .on('pause', function(event) {
                console.debug('Video paused');
                showTooltips();
            })

            // On Ended
            .on('ended', function(event) {
                console.debug('Video ended');
                showTooltips();

                // var nextVideoIndex = $scope.videos.indexOf($scope.selectedVideo) + 1;
                // var videosAmount = $scope.videos.length;
                //
                // // Still watching videos in playlist
                // /** @bug: Manually selecting a video (clicking on a video from the list) doesn't affect [[$scope.selectedVideo]], thus next video that played is the first */
                // if (nextVideoIndex < videosAmount) {
                //     console.debug('Moving to next video in this list...');
                //     var nextVideo = $scope.videos[ nextVideoIndex ];
                //
                //     console.debug(nextVideoIndex, nextVideo);
                //     $scope.selectedVideo = nextVideo;
                //     $(this).attr('src', './videos/'+$scope.category+'/'+nextVideo.vidLocation+'.mp4');
                // }
                //
                // // Time to move on to the next category
                // /** @todo: validate there is a next category, or stop here at last controller (manage) */
                // else {
                //     console.debug('List ended, moving to next category...');
                //     $scope.$apply(function() {
                //         $location.path("/increase");
                //     });
                // }
            });




      var vid = document.getElementById('videoPlayer');
      /*vid.onended = delayTooltips;
      vid.onpause = showTooltips;
      vid.onplay = hideTooltips;*/
      // console.log('DEBUG: Active Added');
      // console.log('DEBUG: save Loaded');
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
