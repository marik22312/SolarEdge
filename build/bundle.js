!function(e){var t={};function i(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/build",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i(1),i(2),i(3),i(4),i(5),i(6),i(7);$(document).ready(function(){$.fn.RegisterTabBar=function(e){var t=$(this);return t.prop("tagName")&&"ul"==t.prop("tagName").toLowerCase()&&null!=e&&(t.attr("data-style-id",e),$("<style type='text/css'></style>").attr("id",e).appendTo($("body")),t.find("li").on("click",function(){var e=$(this),i=t.find(".active").removeClass("active").index(),o=e.addClass("active").index();!function e(t,i,o){var s=t.attr("data-style-id");null!=s&&(t.width()<=0?setTimeout(function(){e(t,i,o)},100):$("style#"+s).text("ul[data-style-id='"+s+"']:before { left: "+(i.position().left+15)+"px; right: "+(t.width()-i.position().left-i.outerWidth()+50)+"px; -webkit-transition: left "+(o?".45s":".8s")+", right "+(o?".9s":".3s")+"; transition: left "+(o?".45s":".8s")+", right "+(o?".9s":".3s")+"; } "))}(t,e,o<i)})),t},$(".slider").RegisterTabBar("slider1").find("li:first-child").ready()}),$(".category").click(function(){$(this).parent().find(".category").css("border-bottom","none"),$(this).css("border-bottom","none")})},function(e,t){angular.module("solarEdge",["ngRoute","youtube-embed","ngSanitize"]).config(function(e){e.when("/",{templateUrl:"player.html",controller:"improveCtrl"}).when("/improve",{templateUrl:"player.html",controller:"improveCtrl"}).when("/increase",{templateUrl:"player.html",controller:"increaseCtrl"}).when("/speed",{templateUrl:"player.html",controller:"speedCtrl"}).when("/save",{templateUrl:"player.html",controller:"saveCtrl"}).when("/manage",{templateUrl:"player.html",controller:"manageCtrl"}).otherwise({redirectTo:"/"})})},function(e,t){app.controller("improveCtrl",function(e,t,i){e.playerVars={loop:1,controls:0,autoplay:1,disablekb:1,iv_load_policy:3,rel:0};e.$on("youtube.player.ended",function(e,t){$(".nullSelector").fadeIn(),t.playVideo()}),e.$on("youtube.player.paused",function(e,t){$(".nullSelector").fadeIn()}),e.$on("youtube.player.playing",function(e,t){$(".nullSelector").fadeOut()}),e.hideNull=function(){$(".nullSelector").fadeOut(),$(".single-video").on("click",function(){$(".single-video").removeClass("active"),$(this).addClass("active")}),$("body").animate({scrollTop:0},800)},e.catName="Improve your lead generation",e.videos=[{videoID:"TWms_cJrp40",name:"Kiosk View ",desc:"Showcase real-time PV site performance on a public display e.g. building lobby<ul><li>Increase your brand exposure by displaying your logo in public</li><li>Help your customers promote their commitment to renewable energy and support solar education </li></ul>",shortDesc:"Showcasing real-time PV site performance on a public display ",clas:"active"},{videoID:"lH3msleTYeA",name:"Public Site Display",shortDesc:"Gaining free exposure by making your sites publicly viewed",desc:"Gain free exposure by making your sites publicly viewed<ul><li>Easily share your sites using a public web address – no need to login to the monitoring platform </li><li>Gain high visibility for your company logo to enhance lead generation</li><li>Display the site's power and energy production, and environmental benefits</li></ul>"},{videoID:"Zm9R0svl9Zs",name:"Social Media Branding",shortDesc:"Enjoying wide brand exposure each time your customers share their site production",desc:"Enjoying wide brand exposure each time your customers share their site production<ul><li>Site production is easily shared across social media directly from the monitoring app</li><li>Customer’s friends and family are exposed to your company logo, generating more referrals </li></ul>"},{videoID:"gKCOHMjmx1g",name:"Adding Logo to Site Image",shortDesc:"Driving your lead generation through personalizing site images",desc:"Generate more referrals by adding your company business card to customer sites<ul><li>Grow brand exposure every time a system owner shares system performance across their social networks</li><li>Easily update the site image with your logo and phone number, from the monitoring platform</li></ul>"}],e.init=function(t){e.selectedVideo=t,$("#improve").addClass("active"),setTimeout(function(){$(".video-desc").each(function(){var e=$(this).html();if(e.length>showChar){var t=e.substr(0,showChar),i=(e.substr(showChar,e.length-showChar),t+'<span class="moreellipses">'+ellipsestext+"&nbsp;</span>");$(this).html(i)}}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(moretext)):($(this).addClass("less"),$(this).html(lesstext)),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})},10)}})},function(e,t){app.controller("increaseCtrl",function(e){e.playerVars={controls:0,autoplay:1,disablekb:1,iv_load_policy:3,rel:0};e.$on("youtube.player.ended",function(e,t){$(".nullSelector").fadeIn(),t.playVideo()}),e.$on("youtube.player.paused",function(e,t){$(".nullSelector").fadeIn()}),e.$on("youtube.player.playing",function(e,t){$(".nullSelector").fadeOut()}),e.hideNull=function(){$(".nullSelector").fadeOut(),$(".single-video").on("click",function(){$(".single-video").removeClass("active"),$(this).addClass("active")}),$("body").animate({scrollTop:0},800)},e.catName="Increase value for your customers",e.videos=[{videoID:"83wPJm2XMHU",name:"Consumption Monitoring",shortDesc:"Optimizing solar usage to increase self-consumption ",desc:"Optimizing solar usage to increase self-consumption <ul><li>Easily track system production, site consumption, and self-consumption </li><li>Better understand customer consumption patterns to increase their self-consumption</li></ul>"},{videoID:"rVVjlCKamhA",name:"Automatic SREC Reporting",shortDesc:"Improving system owner's SREC reporting experience",desc:"Enable your customers to automatically report their energy production for SREC credits<ul><li>Simplified process for reporting energy production to the PTS</li><li>Automatic identification of relevant PTS based on site location</li><li>Report status and summary available directly from the dashboard </li></ul>"},{videoID:"Ztj8CarzR9U",name:"Satellite-Based Performance Ratio",shortDesc:"Analyzing system performance more reliably, at lower cost",desc:"Run performance ratio analysis based on satellite data<ul><li>Eliminates sensor purchasing, installation, maintenance, cleaning and replacement costs</li><li>Seamlessly integrated into the monitoring platform</li><li>Supports multiple tilts and orientations, no need to install multiple sensors on-site</li></ul>"}],e.init=function(t){$(".single-video").first().addClass("active"),e.selectedVideo=t,$("#increase").addClass("active"),setTimeout(function(){$(".video-desc").each(function(){var e=$(this).html();if(e.length>showChar){var t=e.substr(0,showChar),i=(e.substr(showChar,e.length-showChar),t+'<span class="moreellipses">'+ellipsestext+"&nbsp;</span>");$(this).html(i)}}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(moretext)):($(this).addClass("less"),$(this).html(lesstext)),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})},10)}})},function(e,t){app.controller("manageCtrl",function(e){e.playerVars={controls:0,autoplay:1,disablekb:1,iv_load_policy:3,rel:0};e.$on("youtube.player.ended",function(e,t){$(".nullSelector").fadeIn(),t.playVideo()}),e.$on("youtube.player.paused",function(e,t){$(".nullSelector").fadeIn()}),e.$on("youtube.player.playing",function(e,t){$(".nullSelector").fadeOut()}),e.hideNull=function(){$(".nullSelector").fadeOut(),$(".single-video").on("click",function(){$(".single-video").removeClass("active"),$(this).addClass("active")}),$("body").animate({scrollTop:0},800)},e.catName="effectively manage your fleet",e.videos=[{videoID:"sRelFFW79Uo",name:"Automatic Alerts ",shortDesc:"Staying aware of site performance issues to maximize system uptime ",desc:"Improve site performance and maximize energy output using the alerts mechanism <ul><li>Notify the right people instantly via email about key performance issues, letting them respond rapidly to events </li><li>See predefined alerts and add custom alerts with the powerful Alert Rules Generator</li><li>Use the Alert Log and Alert Reports to regularly analyze performance over time or across sites</li></ul>"},{videoID:"XRjUtY13yIE",name:"Mismatch Reports",shortDesc:"Allowing higher lifetime production by analyzing module mismatch",desc:"Maximize system revenue by using in-depth diagnostics <ul><li>Analyze module performance to identify mismatch losses and Improve overall site performance </li><li>Stay on top of problematic external conditions such as shading or underperforming modules to increase energy output and ROI  </li><li>Prevent energy loss by early detection of mismatch issues </li></ul>"},{videoID:"tpVyN5B-r0o",name:"Account Level Reports",shortDesc:"Allowing comparison and performance analysis of multiple sites in your account",desc:"Streamline data analysis of all sites in your account <ul><li> Generate reports analyzing performance of multiple sites in your account in just a few clicks</li><li>Compare performance of multiple sites at daily, monthly or custom date-range levels</li></ul>"},{videoID:"XfjDCjXH1zY",name:"Setting Access Levels",shortDesc:"Controlling the level of data access according to user type.",desc:"Maintain full control over what information your users can see:<ul><li>Provide technicians and service staff access to monitor site performance, edit site layout, generate reports and perform remote servicing</li><li>Grant third-parties such as financiers, O&M providers and on-field service sub-contractors different permission levels to review site performance data</li><li> User roles include Full Access, Dashboard & Layout, and Dashboard Only</li></ul>"}],e.init=function(t){$(".single-video").first().addClass("active"),e.selectedVideo=t,$("#manage").addClass("active"),setTimeout(function(){$(".video-desc").each(function(){var e=$(this).html();if(e.length>showChar){var t=e.substr(0,showChar),i=(e.substr(showChar,e.length-showChar),t+'<span class="moreellipses">'+ellipsestext+"&nbsp;</span>");$(this).html(i)}}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(moretext)):($(this).addClass("less"),$(this).html(lesstext)),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})},10)}})},function(e,t){app.controller("saveCtrl",function(e){e.playerVars={controls:0,autoplay:1,disablekb:1,iv_load_policy:3,rel:0};e.$on("youtube.player.ended",function(e,t){$(".nullSelector").fadeIn(),t.playVideo()}),e.$on("youtube.player.paused",function(e,t){$(".nullSelector").fadeIn()}),e.$on("youtube.player.playing",function(e,t){$(".nullSelector").fadeOut(),console.log("DEBUG: Video Playing!")}),e.hideNull=function(){$(".nullSelector").fadeOut(),$(".single-video").on("click",function(){$(".single-video").removeClass("active"),$(this).addClass("active")}),$("body").animate({scrollTop:0},800)},e.catName="Save commissioning time and truck rolls",e.videos=[{videoID:"RdAob9RxamQ",name:"Module-Level Analysis ",shortDesc:"Using module-level performance analysis to know before you go",desc:"Enable faster and cost-effective site maintenance with module-level analysis<ul><li>Remotely identify and troubleshoot issues at the module, string and system level</li><li>Quickly pinpoint underperforming modules to their physical location, prior to sending a technician onsite</li><li>Use advanced diagnostics to verify module faults such as PID or a failed bypass diode, in just a few clicks </li></ul>",clas:"active"},{videoID:"FzDs9-B5iNs",name:"Remote Monitoring",shortDesc:"Using remote monitoring capabilities to save time and money",desc:"Use the remote monitoring capabilities to improve service times ands reduce service cost<ul><li>Conveniently perform multiple service tasks from the comfort of your office instead of onsite</li><li>Reduce expensive truck rolls and save labor costs</li><li>Remote capabilities include turning system on after PTO, viewing production status, and pairing power optimizers </li></ul>"},{videoID:"UrRlB1bZugw",name:"Remote LCD View ",shortDesc:"Viewing the inverter LCD screen in real-time remotely from your office",desc:"View inverter LCD screen in real-time remotely from your office <ul><li>Helps your support staff provide fast, off-site system troubleshooting </li><li>Eliminates the need for costly and unnecessary truck rolls </li></ul>"},{videoID:"KCyYSoHMhjw",name:"Remote Pairing",shortDesc:"Pairing power optimizers remotely, from the comfort of your office",desc:"Avoid unnecessary site visits by remotely pairing power optimizers <ul><li>Easily continue pairing process from the office, if shading or darkness prevents onsite pairing completion </li><li>Improve service flexibility and save costs</li></ul>"},{videoID:"h5e1H-EELGg",name:"Remote System Turn-On ",shortDesc:"Saving commissioning time by turning on systems remotely after PTO is given",desc:"Save hundreds of dollars per installation by remotely turning on your customers’ systems <ul><li>Once system is installed, place in Standby mode until PTO is given</li><li>Avoid returning to customer site just to turn the system on</li><li>Prevent unnecessary truck rolls, freeing up service crews for other jobs</li></ul>"},{videoID:"cK7FPB1S2D4",name:"Commissioning Report",shortDesc:"Shortening commissioning times using an automated installation checklist",desc:"Shorten commissioning times by using an automated checklist to identify installation issues <ul><li>Especially useful for large commercial systems, due to the large number of components installed</li><li>Export as a PDF or Excel file and submit to inspectors approving the PV system</li></ul>"}],e.init=function(t){$(".single-video").first().addClass("active"),e.selectedVideo=t,console.log("DEBUG: Active Added"),console.log("DEBUG: Save Loaded"),$("#save").addClass("active"),setTimeout(function(){$(".video-desc").each(function(){var e=$(this).html();if(e.length>showChar){var t=e.substr(0,showChar),i=(e.substr(showChar,e.length-showChar),t+'<span class="moreellipses">'+ellipsestext+"&nbsp;</span>");$(this).html(i)}}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(moretext)):($(this).addClass("less"),$(this).html(lesstext)),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})},10)}})},function(e,t){app.controller("speedCtrl",function(e){e.playerVars={controls:0,autoplay:1,disablekb:1,iv_load_policy:3,rel:0};e.$on("youtube.player.ended",function(e,t){$(".nullSelector").fadeIn(),t.playVideo()}),e.$on("youtube.player.paused",function(e,t){$(".nullSelector").fadeIn()}),e.$on("youtube.player.playing",function(e,t){$(".nullSelector").fadeOut(),console.log("DEBUG: Video Playing!")}),e.hideNull=function(){$(".nullSelector").fadeOut(),$(".single-video").on("click",function(){$(".single-video").removeClass("active"),$(this).addClass("active")}),$("body").animate({scrollTop:0},800)},e.catName="Speed up your installation",e.videos=[{videoID:"surbejL_Mgg",name:"AutoCAD File Import",shortDesc:"Importing AutoCAD design files to instantly create physical layouts",desc:"Import AutoCAD design files to instantly create site layouts<ul><li>Faster, easier and more accurate than manual site mapping</li><li>Especially valuable for large commercial deployments</li><li>Modify the layout as needed in the physical layout editor</li></ul>",clas:"active"}],e.init=function(t){$(".single-video").first().addClass("active"),e.selectedVideo=t,console.log("DEBUG: Active Added"),console.log("DEBUG: Speed Loaded"),$("#speed").addClass("active"),setTimeout(function(){$(".video-desc").each(function(){var e=$(this).html();if(e.length>showChar){var t=e.substr(0,showChar),i=(e.substr(showChar,e.length-showChar),t+'<span class="moreellipses">'+ellipsestext+"&nbsp;</span>");$(this).html(i)}}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(moretext)):($(this).addClass("less"),$(this).html(lesstext)),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})},10)}})},function(e,t){}]);