import './css/stylesheet.scss';

var loader;
$(document).ready(function() {
  var showChar = 115;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "Show more";
  var lesstext = "Show less";
  $.fn.RegisterTabBar = function(id) {
    var $ele = $(this);
    if ($ele.prop("tagName") && $ele.prop("tagName").toLowerCase() == "ul" && id != undefined) {
      $ele.attr("data-style-id", id);
      $("<style type='text/css'></style>").attr("id", id).appendTo($("body"));
      $ele.find("li").on("click", function() {
        var $li = $(this),
          CurrentIndex = $ele.find(".active").removeClass("active").index(),
          ClickedIndex = $li.addClass("active").index();

        function SetStyle($ele, $li, IsToLeft) {
          var ID = $ele.attr("data-style-id");
          if (ID == undefined)
            return;
          if ($ele.width() <= 0) {
            setTimeout(function() {
              SetStyle($ele, $li, IsToLeft);
            }, 100);
            return;
          }

          $("style#" + ID).text("ul[data-style-id='" + ID + "']:before { " + "left: " +( $li.position().left) + "px; " + "right: " + ($ele.width() - $li.position().left - $li.outerWidth()+ 30) + "px; " + "-webkit-transition: left " + (IsToLeft
            ? ".45s"
            : ".8s") + ", right " + (IsToLeft
            ? ".9s"
            : ".3s") + "; " + "transition: left " + (IsToLeft
            ? ".45s"
            : ".8s") + ", right " + (IsToLeft
            ? ".9s"
            : ".3s") + "; " +
          //"margin-left: 13.333%" /* slider position fix */+
          "} ");
        }
        SetStyle($ele, $li, ClickedIndex < CurrentIndex);
      });
    }
    return $ele;
  }
  $(".slider").RegisterTabBar("slider1").find("li:first-child").ready();

//   loader = setTimeout(showPage, 1000);
//   function showPage() {
//     $('.single-video').on('click', function() {
//       $('.single-video').removeClass('active');
//       $(this).addClass('active');
//       console.log('Added Class Active');
//     });
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("mainCont").style.display = "block";
//     console.log('DEBUG: showPage() Initiated!');
// };

}); //end of document.ready
$('.category').click(function() {
  $(this).parent().find('.category').css('border-bottom', 'none');
  $(this).css('border-bottom', 'none');
});

/* READMORE */
