/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: increase Category
*/

app.controller("increaseCtrl", function ($scope, $rootScope, $location, $window) {
  $scope.videos = [
    {
      vidLocation: "consumption_monitoring", // Video ID
      name: "Consumption Monitoring ", // Video Name
      shortDesc: "Optimizing solar usage to increase self-consumption ", // Video Description
      longDesc: "Optimize solar usage with consumption monitoring <ul><li>Easily track system production, site consumption, and self-consumption </li><li>Better understand customer consumption patterns to increase their self-consumption</li></ul>", // Video Description
      clas: "active", // IMPORTANT! DO NOT TOUCH!
    },
    {
      vidLocation: "automatic_srec", // Video ID
      name: "Automatic SREC Reporting ", // Video Name
      shortDesc: "Improving system owners’ SREC reporting experience", // Video Description
      longDesc: "Enable your customers to automatically report their energy production for SREC credits <ul><li>Simplified process for reporting energy production to the PTS</li><li>Automatic identification of relevant PTS based on site location</li><li>Report status and summary available directly from the dashboard </li></ul>", // Video Description
    },
    {
      vidLocation: "--insert video", // Video ID
      name: "Satellite-Based Performance Ratio", // Video Title
      shortDesc: "Analyzing system performance more reliably, at lower cost",
      longDesc: "Run performance ratio analysis based on satellite data<ul><li>Eliminates sensor purchasing, installation, maintenance, cleaning and replacement costs</li><li>Seamlessly integrated into the monitoring platform</li><li>Supports multiple tilts and orientations, no need to install multiple sensors on-site</li></ul>", // Video Description
    },
  ];
  /*
  * Do Not Touch From This Point
  * Unless you are 100% sure you know what you are doing.
  */
    $scope.category = "increase";
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

    $scope.catName="Improve your lead generation";

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
      // console.log('DEBUG: Improve Loaded');
       $('#increase').addClass('active');
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
