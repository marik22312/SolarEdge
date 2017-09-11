/**
* SolarEdge Video Selector
* Version: 1.0
* Developed By Marik Sh & Asaf Hadad
* Controler For: save Category
*/

app.controller("saveCtrl", function ($scope, $rootScope, $location, $window) {
  $scope.videos = [
    {
      vidLocation: "module_level", // Video ID
      name: "Module-Level Analysis ", // Video Name
      shortDesc: "Using module-level performance analysis to know before you go", // Video Description
      longDesc: "Enable faster and cost-effective site maintenance with module-level analysis<ul><li>Remotely identify and troubleshoot issues at the module, string and system level</li><li>Quickly pinpoint underperforming modules to their physical location, prior to sending a technician onsite</li><li>Use advanced diagnostics to verify module faults such as PID or a failed bypass diode, in just a few clicks </li></ul>", // Video Description
      clas: "active", // IMPORTANT! DO NOT TOUCH!
    },
    {
      vidLocation: "remote_monitoring", // Video ID
      name: "Remote Monitoring", // Video Name
      shortDesc: "Pairing power optimizers remotely from the comfort of your office", // Video Description
      longDesc: "Use the remote monitoring capabilities to improve service times ands reduce service cost <ul><li>Conveniently perform multiple service tasks from the comfort of your office instead of onsite</li><li>Reduce expensive truck rolls and save labor costs</li><li>emote capabilities include turning system on after PTO, viewing production status, and pairing power optimizers </li></ul>", // Video Description
    },
    {
      vidLocation: "remote_lcd", // Video ID
      name: "Remote LCD View ", // Video Name
      shortDesc: "Viewing the inverter LCD screen in real-time remotely from your office ", // Video Description
      longDesc: "View inverter LCD screen in real-time remotely from your office  <ul> <li>Helps your support staff provide fast, off-site system troubleshooting </li><li>Eliminates the need for costly and unnecessary truck rolls </li></ul>", // Video Description
    },
    {
      vidLocation: "remote_pairing", // Video ID
      name: "Remote Pairing", // Video Name
      shortDesc: "Remotely pair power optimizers from the comfort of your office ", // Video Description
      longDesc: "Avoid unnecessary site visits by remotely pairing power optimizers <ul><li>Easily continue pairing process from the office, if shading or darkness prevents onsite pairing completion </li><li>Improve service flexibility and save costs</li></ul>", // Video Description
    },
    {
      vidLocation: "remote_system", // Video ID
      name: "Remote System Turn-On ", // Video Name
      shortDesc: "Saving commissioning time by turning on systems remotely after PTO is given", // Video Description
      longDesc: "Save hundreds of dollars per installation by remotely turning on your customers’ systems <ul><li>Once system is installed, place in Standby mode until PTO is given</li><li>Avoid returning to customer site just to turn the system on</li><li>Prevent unnecessary truck rolls, freeing up service crews for other jobs</li></ul>", // Video Description
    },
    {
      vidLocation: "-insert-vid-file-name-", // Video ID
      name: "Commissioning Report", // Video Title
      shortDesc: "Shortening commissioning times using an automated installation checklist",
      longDesc: "Shorten commissioning times by using an automated checklist to identify installation issues <ul><li>Especially useful for large commercial systems, due to the large number of components installed</li><li>Export as a PDF or Excel file and submit to inspectors approving the PV system</li></ul>", // Video Description
    },
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
