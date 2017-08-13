jQuery('img.svg').each(function(){
          var $img = jQuery(this);
          var imgID = $img.attr('id');
          var imgClass = $img.attr('class');
          var imgURL = $img.attr('src');

          jQuery.get(imgURL, function(data) {
              // Get the SVG tag, ignore the rest
              var $svg = jQuery(data).find('svg');

              // Add replaced image's ID to the new SVG
              if(typeof imgID !== 'undefined') {
                  $svg = $svg.attr('id', imgID);
              }
              // Add replaced image's classes to the new SVG
              if(typeof imgClass !== 'undefined') {
                  $svg = $svg.attr('class', imgClass+' replaced-svg');
              }

              // Remove any invalid XML tags as per http://validator.w3.org
              $svg = $svg.removeAttr('xmlns:a');

              // Replace image with new SVG
              $img.replaceWith($svg);

          }, 'xml');

      });
      $.fn.RegisterTabBar = function (id) {
          var $ele = $(this);
          if ($ele.prop("tagName") && $ele.prop("tagName").toLowerCase() == "ul" && id != undefined) {
              $ele.attr("data-style-id", id);
              $("<style type='text/css'></style>").attr("id", id).appendTo($("body"));
              $ele.find("li").on("click", function () {
                  var $li = $(this),
                      CurrentIndex = $ele.find(".active").removeClass("active").index(),
                      ClickedIndex = $li.addClass("active").index();

                  function SetStyle($ele, $li, IsToLeft) {
                      var ID = $ele.attr("data-style-id");
                      if (ID == undefined) return;
                      if ($ele.width() <= 0) {
                          setTimeout(function () { SetStyle($ele, $li, IsToLeft); }, 100);
                          return;
                      }

                      $("style#" + ID).text(
                          "ul[data-style-id='" + ID + "']:before { " +
                              "left: " + $li.position().left + "px; " +
                              "right: " + ($ele.width() - $li.position().left - $li.outerWidth()) + "px; " +
                              "-webkit-transition: left " + (IsToLeft ? ".45s" : ".8s") + ", right " + (IsToLeft ? ".9s" : ".3s") + "; " +
                              "transition: left " + (IsToLeft ? ".45s" : ".8s") + ", right " + (IsToLeft ? ".9s" : ".3s") + "; " +
                          "} "
                      );
                  }
                  SetStyle($ele, $li, ClickedIndex < CurrentIndex);
              });
          }
          return $ele;
      }
      $(".slider").RegisterTabBar("slider1").find("li:first-child").click();
