/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: Improve Category
*/

// TODO: added support for bullets

app.controller("improveCtrl", function ($scope, $rootScope, $location, $window) {
  $scope.videos = [
    {
      vidLocation: "kiosk_feature", // Video ID
      name: "Kiosk View", // Video Name
      shortDesc: "Showcasing real-time PV site performance on a public display ", // Video Description
      longDesc: "Showcase real-time PV site performance on a public display e.g. building lobby<ul><li>Increase your brand exposure by displaying your logo in public </li><li>Help your customers promote their commitment to renewable energy and support solar education </li></ul>", // Video Description
      clas: "active", // IMPORTANT! DO NOT TOUCH!
    },
    {
      vidLocation: "public_sites", // Video ID
      name: "Public Site Display", // Video Name
      shortDesc: "Gaining free exposure by making your sites publicly viewed", // Video Description
      longDesc: "Gain free exposure by making your sites publicly viewed <ul><li>Easily share your sites using a public web address – no need to login to the monitoring platform </li><li>Gain high visibility for your company logo to enhance lead generation</li><li>Display the site's power and energy production, and environmental benefits</li></ul>", // Video Description
    },
    {
      vidLocation: "social_media", // Video ID
      name: "Social Media Branding", // Video Name
      shortDesc: "Enjoying wide brand exposure each time your customers share their site production", // Video Description
      longDesc: "Enjoy wide brand exposure each time your customers share their site production <ul><li>Site production is easily shared across social media directly from the monitoring app</li><li>Customer’s friends and family are exposed to your company logo, generating more referrals </li></ul>", // Video Description
    },
    {
      vidLocation: "-insertVideoName", // Video ID
      name: "Adding Logo to Site Image", // Video Title
      shortDesc: "Driving your lead generation through personalizing site images",
      longDesc: "Generate more referrals by adding your company business card to customer sites<ul><li>Display your logo and phone number in your customers’ monitoring dashboard</li><li>Get brand exposure every time a system owner shares system performance in social media</li></ul>", // Video Description
    },
  ];
  /*
  * Do Not Touch From This Point
  * Unless you are 100% sure you know what you are doing.
  */
    $scope.category = "improve";
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
       $('#improve').addClass('active');
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
