/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: manage Category
*/

app.controller("manageCtrl", function ($scope, $rootScope, $location, $window) {
  $scope.videos = [
    {
      vidLocation: "automatic_alerts", // Video ID
      name: "Automatic Alerts ", // Video Name
      shortDesc: "Staying aware of site performance issues to maximize system uptime ", // Video Description
      longDesc: "Improve site performance and maximize energy output using the alerts mechanism<ul><li>Notify the right people instantly via email about key performance issues, letting them respond rapidly to events </li><li>See predefined alerts and add custom alerts with the powerful Alert Rules Generator</li><li>Use the Alert Log and Alert Reports to regularly analyze performance over time or across sites</li></ul>", // Video Description
      clas: "active", // IMPORTANT! DO NOT TOUCH!
    },
    {
      vidLocation: "mismatch_reports", // Video ID
      name: "Mismatch Reports ", // Video Name
      shortDesc: "Allowing higher lifetime production by analyzing module mismatch ", // Video Description
      longDesc: "Maximize system revenue by using in-depth diagnostics <ul><li>Analyze module performance to identify mismatch losses and Improve overall site performance </li><li>Stay on top of problematic external conditions such as shading or underperforming modules to increase energy output and ROI  </li><li>Prevent energy loss by early detection of mismatch issues </li></ul>", // Video Description
    },
    {
      vidLocation: "--insert-file-name", // Video ID
      name: "Account Level Reports", // Video Title
      shortDesc: "Allowing comparison and performance analysis of multiple sites in your account",
      longDesc: "Streamline data analysis of all sites in your account <ul><li>Single-click generation of reports analyzing multiple sites within your account </li><li>Generate performance summary reports at daily, monthly or custom range levels</li></ul>", // Video Description
    },
    {
      vidLocation: "-insert-file-name", // Video ID
      name: "Setting Access Levels", // Video Title
      shortDesc: "Managing control of your users’ monitoring access",
      longDesc: "Maintain full control over what information your users can see:<ul><li>Provide local installers access to monitor site performance, edit site layout, generate reports and perform remote servicing </li><li>Access for third parties is also possible e.g. monitoring service providers, on-field service sub-contractors, etc.</li><li>Grant user roles such as Full Access, Dashboard & Layout, Dashboard Only </li></ul>", // Video Description
    },
  ];
  /*
  * Do Not Touch From This Point
  * Unless you are 100% sure you know what you are doing.
  */
    $scope.category = "manage";
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

    $scope.catName="manage your lead generation";

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
      // console.log('DEBUG: manage Loaded');
       $('#manage').addClass('active');
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
