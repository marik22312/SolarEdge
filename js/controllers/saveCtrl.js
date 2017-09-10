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
    rel: 0,
};
    var showTooltips = function ($event, mainPlayer) {
    // play it again
        $('.nullSelector').fadeIn()
        console.log('DEBUG: Video ended');
    };
    $scope.$on('youtube.player.ended', showTooltips);
    $scope.$on('youtube.player.paused', showTooltips);
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
      $('body').animate({
          scrollTop: 0
      }, 800);
  };
  $scope.catName="Save commissioning time and truck rolls";
    $scope.videos = [
      {
        videoID: "RdAob9RxamQ",// Youtube Video ID
        name: "Module-Level Analysis ", // Video Title
        shortDesc: "Using module-level performance analysis to know before you go",
        desc: "Enable faster and cost-effective site maintenance with module-level analysis<ul><li>Remotely identify and troubleshoot issues at the module, string and system level</li><li>Quickly pinpoint underperforming modules to their physical location, prior to sending a technician onsite</li><li>Use advanced diagnostics to verify module faults such as PID or a failed bypass diode, in just a few clicks </li></ul>", // Video Description
        clas: "active",
      },
      {
        videoID: "FzDs9-B5iNs",// Youtube Video ID
        name: "Remote Monitoring", // Video Title
        shortDesc: "Using remote monitoring capabilities to save time and money",
        desc: "Use the remote monitoring capabilities to improve service times ands reduce service cost<ul><li>Conveniently perform multiple service tasks from the comfort of your office instead of onsite</li><li>Reduce expensive truck rolls and save labor costs</li><li>Remote capabilities include turning system on after PTO, viewing production status, and pairing power optimizers </li></ul>", // Video Description
      },
      {
        videoID: "UrRlB1bZugw",// Youtube Video ID
        name: "Remote LCD View ", // Video Title
        shortDesc: "Viewing the inverter LCD screen in real-time remotely from your office",
        desc: "View inverter LCD screen in real-time remotely from your office <ul><li>Helps your support staff provide fast, off-site system troubleshooting </li><li>Eliminates the need for costly and unnecessary truck rolls </li></ul>", // Video Description
      },
      {
        videoID: "KCyYSoHMhjw",// Youtube Video ID
        name: "Remote Pairing", // Video Title
        shortDesc: "Remotely pair power optimizers from the comfort of your office",
        desc: "Avoid unnecessary site visits by remotely pairing power optimizers <ul><li>Easily continue pairing process from the office, if shading or darkness prevents onsite pairing completion </li><li>Improve service flexibility and save costs</li></ul>", // Video Description
      },
      {
        videoID: "h5e1H-EELGg",// Youtube Video ID
        name: "Remote System Turn-On ", // Video Title
        shortDesc: "Saving commissioning time by turning on systems remotely after PTO is given",
        desc: "Save hundreds of dollars per installation by remotely turning on your customers’ systems <ul><li>Once system is installed, place in Standby mode until PTO is given</li><li>Avoid returning to customer site just to turn the system on</li><li>Prevent unnecessary truck rolls, freeing up service crews for other jobs</li></ul>", // Video Description
      },
      {
        videoID: "-------",// Youtube Video ID
        name: "Commissioning Report", // Video Title
        shortDesc: "Shortening commissioning times using an automated installation checklist",
        desc: "Shorten commissioning times by using an automated checklist to identify installation issues <ul><li>Especially useful for large commercial systems, due to the large number of components installed</li><li>Export as a PDF or Excel file and submit to inspectors approving the PV system</li></ul>", // Video Description
      },
      // {
      //   videoID: "",// Youtube Video ID
      //   name: "", // Video Title
      //   shortDesc: "",
      //   desc: "", // Video Description
      // },
      // {
      //   videoID: "",// Youtube Video ID
      //   name: "", // Video Title
      //   shortDesc: "",
      //   desc: "", // Video Description
      // },
      // {
      //   videoID: "",// Youtube Video ID
      //   name: "", // Video Title
      //   shortDesc: "",
      //   desc: "", // Video Description
      // },
    ];
    $scope.init = function(video){
      $('.single-video').first().addClass('active');
      $scope.selectedVideo = video;
      console.log('DEBUG: Active Added');
      console.log('DEBUG: Save Loaded');
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
