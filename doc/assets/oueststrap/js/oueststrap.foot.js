//
// Ouest-France Bootstrap
// Framework Javascript OuestStrap
// Footer
//
"use strict";
;(function(undefined){

    var interOf = setInterval(function(){
        if( undefined === window.of ) return; // plugin du framework, pas de header pas plugin.
        clearTimeout(interOf);

        var $ = window.of.$; // dans le sanctuaire, on utilise le jQuery du framework.

        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Plugins jQuery
        (function(jQuery) {
            /*!
             * @fileOverview TouchSwipe - jQuery Plugin
             * @version 1.6.18
             *
             * @author Matt Bryson http://www.github.com/mattbryson
             * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
             * @see http://labs.rampinteractive.co.uk/touchSwipe/
             * @see http://plugins.jquery.com/project/touchSwipe
             * @license
             * Copyright (c) 2010-2015 Matt Bryson
             * Dual licensed under the MIT or GPL Version 2 licenses.
             *
             */
            
            /*
             *
             * Changelog
             * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
             * $version: 1.0.0
             * $version: 1.0.1 - removed multibyte comments
             *
             * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
             * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
             *					- changed handler signatures so one handler can be used for multiple events
             * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
             * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
             *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
             * $version: 1.2.1 	- removed console log!
             *
             * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
             *
             * $Date: 2011-28-04 (Thurs, 28 April 2011) $
             * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
             *
             * $Date: 2011-27-09 (Tues, 27 September 2011) $
             * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
             *
             * $Date: 2012-14-05 (Mon, 14 May 2012) $
             * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
             *
             * $Date: 2012-05-06 (Tues, 05 June 2012) $
             * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
             *
             * $Date: 2012-05-06 (Tues, 05 June 2012) $
             * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
             *
             * $Date: 2012-06-06 (Wed, 06 June 2012) $
             * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
             *
             * $Date: 2012-05-06 (Fri, 05 June 2012) $
             * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
             *
             * $Date: 2012-29-07 (Sun, 29 July 2012) $
             * $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
             * 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
             *
             * $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
             * $version: 1.3.3	- Code tidy prep for minefied version
             *
             * $Date: 2012-04-10 (wed, 4 Oct 2012) $
             * $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
             *
             * $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
             * $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is .noSwipe
             *
             * $Date: 2012-22-10 (Mon, 22 Oct 2012) $
             * $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
             *					- Fixed bug with IE and eventPreventDefault()
             * $Date: 2013-01-12 (Fri, 12 Jan 2013) $
             * $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
             *					- made the demo site all static local HTML pages so they can be run locally by a developer
             *					- added jsDoc comments and added documentation for the plugin
             *					- code tidy
             *					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
             * $Date: 2013-03-23 (Sat, 23 Mar 2013) $
             * $version: 1.6.1	- Added support for ie8 touch events
             * $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
             *                   - Deprecated the 'click' handler in favour of tap.
             *                   - added cancelThreshold property
             *                   - added option method to update init options at runtime
             * $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
             *
             * $Date: 2013-04-04 (Thurs, 04 April 2013) $
             * $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
             *
             * $Date: 2013-08-24 (Sat, 24 Aug 2013) $
             * $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
             *
             * $Date: 2014-06-04 (Wed, 04 June 2014) $
             * $version 1.6.6 	- Merge of pull requests.
             *    				- IE10 touch support
             *    				- Only prevent default event handling on valid swipe
             *    				- Separate license/changelog comment
             *    				- Detect if the swipe is valid at the end of the touch event.
             *    				- Pass fingerdata to event handlers.
             *    				- Add 'hold' gesture
             *    				- Be more tolerant about the tap distance
             *    				- Typos and minor fixes
             *
             * $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
             * $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
             *
             * $Date: 2015-2-2 (Mon, 2 Feb 2015) $
             * $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
             *					- Fixed issue with swipe and pinch not triggering at the same time
             *
             * $Date: 2015-9-6 (Tues, 9 June 2015) $
             * $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
             *					- Added scrolling demo
             *					- Added version property to plugin
             *
             * $Date: 2015-1-10 (Wed, 1 October 2015) $
             * $version 1.6.10    - Added PR from beatspace to fix tap events
             * $version 1.6.11    - Added PRs from indri-indri ( Doc tidyup), kkirsche ( Bower tidy up ), UziTech (preventDefaultEvents fixes )
             *					 - Allowed setting multiple options via .swipe("options", options_hash) and more simply .swipe(options_hash) or exisitng instances
             * $version 1.6.12    - Fixed bug with multi finger releases above 2 not triggering events
             *
             * $Date: 2015-12-18 (Fri, 18 December 2015) $
             * $version 1.6.13    - Added PRs
             *                    - Fixed #267 allowPageScroll not working correctly
             * $version 1.6.14    - Fixed #220 / #248 doubletap not firing with swipes, #223 commonJS compatible
             * $version 1.6.15    - More bug fixes
             *
             * $Date: 2016-04-29 (Fri, 29 April 2016) $
             * $version 1.6.16    - Swipes with 0 distance now allow default events to trigger.  So tapping any form elements or A tags will allow default interaction, but swiping will trigger a swipe.
                                    Removed the a, input, select etc from the excluded Children list as the 0 distance tap solves that issue.
            * $Date: 2016-05-19  (Fri, 29 April 2016) $
            * $version 1.6.17     - Fixed context issue when calling instance methods via $("selector").swipe("method");
            * $version 1.6.18     - now honors fallbackToMouseEvents=false for MS Pointer events when a Mouse is used.
            
             */
            
            /**
             * See (http://jquery.com/).
             * @name $
             * @class
             * See the jQuery Library  (http://jquery.com/) for full details.  This just
             * documents the function and classes that are added to jQuery by this plug-in.
             */
            
            /**
             * See (http://jquery.com/)
             * @name fn
             * @class
             * See the jQuery Library  (http://jquery.com/) for full details.  This just
             * documents the function and classes that are added to jQuery by this plug-in.
             * @memberOf $
             */
            
            
            (function(factory) {
              if (typeof define === 'function' && define.amd && define.amd.jQuery) {
                // AMD. Register as anonymous module.
                define(['jquery'], factory);
              } else if (typeof module !== 'undefined' && module.exports) {
                // CommonJS Module
                factory(require("jquery"));
              } else {
                // Browser globals.
                factory(jQuery);
              }
            }(function($) {
              "use strict";
            
              //Constants
              var VERSION = "1.6.18",
                LEFT = "left",
                RIGHT = "right",
                UP = "up",
                DOWN = "down",
                IN = "in",
                OUT = "out",
            
                NONE = "none",
                AUTO = "auto",
            
                SWIPE = "swipe",
                PINCH = "pinch",
                TAP = "tap",
                DOUBLE_TAP = "doubletap",
                LONG_TAP = "longtap",
                HOLD = "hold",
            
                HORIZONTAL = "horizontal",
                VERTICAL = "vertical",
            
                ALL_FINGERS = "all",
            
                DOUBLE_TAP_THRESHOLD = 10,
            
                PHASE_START = "start",
                PHASE_MOVE = "move",
                PHASE_END = "end",
                PHASE_CANCEL = "cancel",
            
                SUPPORTS_TOUCH = 'ontouchstart' in window,
            
                SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,
            
                SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
            
                PLUGIN_NS = 'TouchSwipe';
            
            
            
              /**
              * The default configuration, and available options to configure touch swipe with.
              * You can set the default values by updating any of the properties prior to instantiation.
              * @name $.fn.swipe.defaults
              * @namespace
              * @property {int} [fingers=1] The number of fingers to detect in a swipe. Any swipes that do not meet this requirement will NOT trigger swipe handlers.
              * @property {int} [threshold=75] The number of pixels that the user must move their finger by before it is considered a swipe.
              * @property {int} [cancelThreshold=null] The number of pixels that the user must move their finger back from the original swipe direction to cancel the gesture.
              * @property {int} [pinchThreshold=20] The number of pixels that the user must pinch their finger by before it is considered a pinch.
              * @property {int} [maxTimeThreshold=null] Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
              * @property {int} [fingerReleaseThreshold=250] Time in milliseconds between releasing multiple fingers.  If 2 fingers are down, and are released one after the other, if they are within this threshold, it counts as a simultaneous release.
              * @property {int} [longTapThreshold=500] Time in milliseconds between tap and release for a long tap
              * @property {int} [doubleTapThreshold=200] Time in milliseconds between 2 taps to count as a double tap
              * @property {function} [swipe=null] A handler to catch all swipes. See {@link $.fn.swipe#event:swipe}
              * @property {function} [swipeLeft=null] A handler that is triggered for "left" swipes. See {@link $.fn.swipe#event:swipeLeft}
              * @property {function} [swipeRight=null] A handler that is triggered for "right" swipes. See {@link $.fn.swipe#event:swipeRight}
              * @property {function} [swipeUp=null] A handler that is triggered for "up" swipes. See {@link $.fn.swipe#event:swipeUp}
              * @property {function} [swipeDown=null] A handler that is triggered for "down" swipes. See {@link $.fn.swipe#event:swipeDown}
              * @property {function} [swipeStatus=null] A handler triggered for every phase of the swipe. See {@link $.fn.swipe#event:swipeStatus}
              * @property {function} [pinchIn=null] A handler triggered for pinch in events. See {@link $.fn.swipe#event:pinchIn}
              * @property {function} [pinchOut=null] A handler triggered for pinch out events. See {@link $.fn.swipe#event:pinchOut}
              * @property {function} [pinchStatus=null] A handler triggered for every phase of a pinch. See {@link $.fn.swipe#event:pinchStatus}
              * @property {function} [tap=null] A handler triggered when a user just taps on the item, rather than swipes it. If they do not move, tap is triggered, if they do move, it is not.
              * @property {function} [doubleTap=null] A handler triggered when a user double taps on the item. The delay between taps can be set with the doubleTapThreshold property. See {@link $.fn.swipe.defaults#doubleTapThreshold}
              * @property {function} [longTap=null] A handler triggered when a user long taps on the item. The delay between start and end can be set with the longTapThreshold property. See {@link $.fn.swipe.defaults#longTapThreshold}
              * @property (function) [hold=null] A handler triggered when a user reaches longTapThreshold on the item. See {@link $.fn.swipe.defaults#longTapThreshold}
              * @property {boolean} [triggerOnTouchEnd=true] If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
              * @property {boolean} [triggerOnTouchLeave=false] If true, then when the user leaves the swipe object, the swipe will end and trigger appropriate handlers.
              * @property {string|undefined} [allowPageScroll='auto'] How the browser handles page scrolls when the user is swiping on a touchSwipe object. See {@link $.fn.swipe.pageScroll}.  <br/><br/>
              									<code>"auto"</code> : all undefined swipes will cause the page to scroll in that direction. <br/>
              									<code>"none"</code> : the page will not scroll when user swipes. <br/>
              									<code>"horizontal"</code> : will force page to scroll on horizontal swipes. <br/>
              									<code>"vertical"</code> : will force page to scroll on vertical swipes. <br/>
              * @property {boolean} [fallbackToMouseEvents=true] If true mouse events are used when run on a non touch device, false will stop swipes being triggered by mouse events on non tocuh devices.
              * @property {string} [excludedElements=".noSwipe"] A jquery selector that specifies child elements that do NOT trigger swipes. By default this excludes elements with the class .noSwipe .
              * @property {boolean} [preventDefaultEvents=true] by default default events are cancelled, so the page doesn't move.  You can dissable this so both native events fire as well as your handlers.
            
              */
              var defaults = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null, //Deprecated since 1.6.2
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: true,
                triggerOnTouchLeave: false,
                allowPageScroll: "auto",
                fallbackToMouseEvents: true,
                excludedElements: ".noSwipe",
                preventDefaultEvents: true
              };
            
            
            
              /**
               * Applies TouchSwipe behaviour to one or more jQuery objects.
               * The TouchSwipe plugin can be instantiated via this method, or methods within
               * TouchSwipe can be executed via this method as per jQuery plugin architecture.
               * An existing plugin can have its options changed simply by re calling .swipe(options)
               * @see TouchSwipe
               * @class
               * @param {Mixed} method If the current DOMNode is a TouchSwipe object, and <code>method</code> is a TouchSwipe method, then
               * the <code>method</code> is executed, and any following arguments are passed to the TouchSwipe method.
               * If <code>method</code> is an object, then the TouchSwipe class is instantiated on the current DOMNode, passing the
               * configuration properties defined in the object. See TouchSwipe
               *
               */
              $.fn.swipe = function(method) {
                var $this = $(this),
                  plugin = $this.data(PLUGIN_NS);
            
                //Check if we are already instantiated and trying to execute a method
                if (plugin && typeof method === 'string') {
                  if (plugin[method]) {
                    return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
                  } else {
                    $.error('Method ' + method + ' does not exist on jQuery.swipe');
                  }
                }
            
                //Else update existing plugin with new options hash
                else if (plugin && typeof method === 'object') {
                  plugin['option'].apply(plugin, arguments);
                }
            
                //Else not instantiated and trying to pass init object (or nothing)
                else if (!plugin && (typeof method === 'object' || !method)) {
                  return init.apply(this, arguments);
                }
            
                return $this;
              };
            
              /**
               * The version of the plugin
               * @readonly
               */
              $.fn.swipe.version = VERSION;
            
            
            
              //Expose our defaults so a user could override the plugin defaults
              $.fn.swipe.defaults = defaults;
            
              /**
               * The phases that a touch event goes through.  The <code>phase</code> is passed to the event handlers.
               * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
               * @namespace
               * @readonly
               * @property {string} PHASE_START Constant indicating the start phase of the touch event. Value is <code>"start"</code>.
               * @property {string} PHASE_MOVE Constant indicating the move phase of the touch event. Value is <code>"move"</code>.
               * @property {string} PHASE_END Constant indicating the end phase of the touch event. Value is <code>"end"</code>.
               * @property {string} PHASE_CANCEL Constant indicating the cancel phase of the touch event. Value is <code>"cancel"</code>.
               */
              $.fn.swipe.phases = {
                PHASE_START: PHASE_START,
                PHASE_MOVE: PHASE_MOVE,
                PHASE_END: PHASE_END,
                PHASE_CANCEL: PHASE_CANCEL
              };
            
              /**
               * The direction constants that are passed to the event handlers.
               * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
               * @namespace
               * @readonly
               * @property {string} LEFT Constant indicating the left direction. Value is <code>"left"</code>.
               * @property {string} RIGHT Constant indicating the right direction. Value is <code>"right"</code>.
               * @property {string} UP Constant indicating the up direction. Value is <code>"up"</code>.
               * @property {string} DOWN Constant indicating the down direction. Value is <code>"cancel"</code>.
               * @property {string} IN Constant indicating the in direction. Value is <code>"in"</code>.
               * @property {string} OUT Constant indicating the out direction. Value is <code>"out"</code>.
               */
              $.fn.swipe.directions = {
                LEFT: LEFT,
                RIGHT: RIGHT,
                UP: UP,
                DOWN: DOWN,
                IN: IN,
                OUT: OUT
              };
            
              /**
               * The page scroll constants that can be used to set the value of <code>allowPageScroll</code> option
               * These properties are read only
               * @namespace
               * @readonly
               * @see $.fn.swipe.defaults#allowPageScroll
               * @property {string} NONE Constant indicating no page scrolling is allowed. Value is <code>"none"</code>.
               * @property {string} HORIZONTAL Constant indicating horizontal page scrolling is allowed. Value is <code>"horizontal"</code>.
               * @property {string} VERTICAL Constant indicating vertical page scrolling is allowed. Value is <code>"vertical"</code>.
               * @property {string} AUTO Constant indicating either horizontal or vertical will be allowed, depending on the swipe handlers registered. Value is <code>"auto"</code>.
               */
              $.fn.swipe.pageScroll = {
                NONE: NONE,
                HORIZONTAL: HORIZONTAL,
                VERTICAL: VERTICAL,
                AUTO: AUTO
              };
            
              /**
               * Constants representing the number of fingers used in a swipe.  These are used to set both the value of <code>fingers</code> in the
               * options object, as well as the value of the <code>fingers</code> event property.
               * These properties are read only, attempting to change them will not alter the values passed to the event handlers.
               * @namespace
               * @readonly
               * @see $.fn.swipe.defaults#fingers
               * @property {string} ONE Constant indicating 1 finger is to be detected / was detected. Value is <code>1</code>.
               * @property {string} TWO Constant indicating 2 fingers are to be detected / were detected. Value is <code>2</code>.
               * @property {string} THREE Constant indicating 3 finger are to be detected / were detected. Value is <code>3</code>.
               * @property {string} FOUR Constant indicating 4 finger are to be detected / were detected. Not all devices support this. Value is <code>4</code>.
               * @property {string} FIVE Constant indicating 5 finger are to be detected / were detected. Not all devices support this. Value is <code>5</code>.
               * @property {string} ALL Constant indicating any combination of finger are to be detected.  Value is <code>"all"</code>.
               */
              $.fn.swipe.fingers = {
                ONE: 1,
                TWO: 2,
                THREE: 3,
                FOUR: 4,
                FIVE: 5,
                ALL: ALL_FINGERS
              };
            
              /**
               * Initialise the plugin for each DOM element matched
               * This creates a new instance of the main TouchSwipe class for each DOM element, and then
               * saves a reference to that instance in the elements data property.
               * @internal
               */
              function init(options) {
                //Prep and extend the options
                if (options && (options.allowPageScroll === undefined && (options.swipe !== undefined || options.swipeStatus !== undefined))) {
                  options.allowPageScroll = NONE;
                }
            
                //Check for deprecated options
                //Ensure that any old click handlers are assigned to the new tap, unless we have a tap
                if (options.click !== undefined && options.tap === undefined) {
                  options.tap = options.click;
                }
            
                if (!options) {
                  options = {};
                }
            
                //pass empty object so we dont modify the defaults
                options = $.extend({}, $.fn.swipe.defaults, options);
            
                //For each element instantiate the plugin
                return this.each(function() {
                  var $this = $(this);
            
                  //Check we havent already initialised the plugin
                  var plugin = $this.data(PLUGIN_NS);
            
                  if (!plugin) {
                    plugin = new TouchSwipe(this, options);
                    $this.data(PLUGIN_NS, plugin);
                  }
                });
              }
            
              /**
               * Main TouchSwipe Plugin Class.
               * Do not use this to construct your TouchSwipe object, use the jQuery plugin method $.fn.swipe(); {@link $.fn.swipe}
               * @private
               * @name TouchSwipe
               * @param {DOMNode} element The HTML DOM object to apply to plugin to
               * @param {Object} options The options to configure the plugin with.  @link {$.fn.swipe.defaults}
               * @see $.fh.swipe.defaults
               * @see $.fh.swipe
               * @class
               */
              function TouchSwipe(element, options) {
            
                //take a local/instacne level copy of the options - should make it this.options really...
                var options = $.extend({}, options);
            
                var useTouchEvents = (SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents),
                  START_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerDown' : 'pointerdown') : 'touchstart') : 'mousedown',
                  MOVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerMove' : 'pointermove') : 'touchmove') : 'mousemove',
                  END_EV = useTouchEvents ? (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerUp' : 'pointerup') : 'touchend') : 'mouseup',
                  LEAVE_EV = useTouchEvents ? (SUPPORTS_POINTER ? 'mouseleave' : null) : 'mouseleave', //we manually detect leave on touch devices, so null event here
                  CANCEL_EV = (SUPPORTS_POINTER ? (SUPPORTS_POINTER_IE10 ? 'MSPointerCancel' : 'pointercancel') : 'touchcancel');
            
            
            
                //touch properties
                var distance = 0,
                  direction = null,
                  currentDirection = null,
                  duration = 0,
                  startTouchesDistance = 0,
                  endTouchesDistance = 0,
                  pinchZoom = 1,
                  pinchDistance = 0,
                  pinchDirection = 0,
                  maximumsMap = null;
            
            
            
                //jQuery wrapped element for this instance
                var $element = $(element);
            
                //Current phase of th touch cycle
                var phase = "start";
            
                // the current number of fingers being used.
                var fingerCount = 0;
            
                //track mouse points / delta
                var fingerData = {};
            
                //track times
                var startTime = 0,
                  endTime = 0,
                  previousTouchEndTime = 0,
                  fingerCountAtRelease = 0,
                  doubleTapStartTime = 0;
            
                //Timeouts
                var singleTapTimeout = null,
                  holdTimeout = null;
            
                // Add gestures to all swipable areas if supported
                try {
                  $element.bind(START_EV, touchStart);
                  $element.bind(CANCEL_EV, touchCancel);
                } catch (e) {
                  $.error('events not supported ' + START_EV + ',' + CANCEL_EV + ' on jQuery.swipe');
                }
            
                //
                //Public methods
                //
            
                /**
                 * re-enables the swipe plugin with the previous configuration
                 * @function
                 * @name $.fn.swipe#enable
                 * @return {DOMNode} The Dom element that was registered with TouchSwipe
                 * @example $("#element").swipe("enable");
                 */
                this.enable = function() {
                  //Incase we are already enabled, clean up...
                  this.disable();
                  $element.bind(START_EV, touchStart);
                  $element.bind(CANCEL_EV, touchCancel);
                  return $element;
                };
            
                /**
                 * disables the swipe plugin
                 * @function
                 * @name $.fn.swipe#disable
                 * @return {DOMNode} The Dom element that is now registered with TouchSwipe
                 * @example $("#element").swipe("disable");
                 */
                this.disable = function() {
                  removeListeners();
                  return $element;
                };
            
                /**
                 * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
                 * @function
                 * @name $.fn.swipe#destroy
                 * @example $("#element").swipe("destroy");
                 */
                this.destroy = function() {
                  removeListeners();
                  $element.data(PLUGIN_NS, null);
                  $element = null;
                };
            
            
                /**
                 * Allows run time updating of the swipe configuration options.
                 * @function
                 * @name $.fn.swipe#option
                 * @param {String} property The option property to get or set, or a has of multiple options to set
                 * @param {Object} [value] The value to set the property to
                 * @return {Object} If only a property name is passed, then that property value is returned. If nothing is passed the current options hash is returned.
                 * @example $("#element").swipe("option", "threshold"); // return the threshold
                 * @example $("#element").swipe("option", "threshold", 100); // set the threshold after init
                 * @example $("#element").swipe("option", {threshold:100, fingers:3} ); // set multiple properties after init
                 * @example $("#element").swipe({threshold:100, fingers:3} ); // set multiple properties after init - the "option" method is optional!
                 * @example $("#element").swipe("option"); // Return the current options hash
                 * @see $.fn.swipe.defaults
                 *
                 */
                this.option = function(property, value) {
            
                  if (typeof property === 'object') {
                    options = $.extend(options, property);
                  } else if (options[property] !== undefined) {
                    if (value === undefined) {
                      return options[property];
                    } else {
                      options[property] = value;
                    }
                  } else if (!property) {
                    return options;
                  } else {
                    $.error('Option ' + property + ' does not exist on jQuery.swipe.options');
                  }
            
                  return null;
                }
            
            
            
                //
                // Private methods
                //
            
                //
                // EVENTS
                //
                /**
                 * Event handler for a touch start event.
                 * Stops the default click event from triggering and stores where we touched
                 * @inner
                 * @param {object} jqEvent The normalised jQuery event object.
                 */
                function touchStart(jqEvent) {
            
                  //If we already in a touch event (a finger already in use) then ignore subsequent ones..
                  if (getTouchInProgress()) {
                    return;
                  }
            
                  //Check if this element matches any in the excluded elements selectors,  or its parent is excluded, if so, DON'T swipe
                  if ($(jqEvent.target).closest(options.excludedElements, $element).length > 0) {
                    return;
                  }
            
                  //As we use Jquery bind for events, we need to target the original event object
                  //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
                  var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            
            
                  //If we have a pointer event, whoes type is 'mouse' and we have said NO mouse events, then dont do anything.
                  if(event.pointerType && event.pointerType=="mouse" && options.fallbackToMouseEvents==false) {
                    return;
                  };
            
                  var ret,
                    touches = event.touches,
                    evt = touches ? touches[0] : event;
            
                  phase = PHASE_START;
            
                  //If we support touches, get the finger count
                  if (touches) {
                    // get the total number of fingers touching the screen
                    fingerCount = touches.length;
                  }
                  //Else this is the desktop, so stop the browser from dragging content
                  else if (options.preventDefaultEvents !== false) {
                    jqEvent.preventDefault(); //call this on jq event so we are cross browser
                  }
            
                  //clear vars..
                  distance = 0;
                  direction = null;
                  currentDirection=null;
                  pinchDirection = null;
                  duration = 0;
                  startTouchesDistance = 0;
                  endTouchesDistance = 0;
                  pinchZoom = 1;
                  pinchDistance = 0;
                  maximumsMap = createMaximumsData();
                  cancelMultiFingerRelease();
            
                  //Create the default finger data
                  createFingerData(0, evt);
            
                  // check the number of fingers is what we are looking for, or we are capturing pinches
                  if (!touches || (fingerCount === options.fingers || options.fingers === ALL_FINGERS) || hasPinches()) {
                    // get the coordinates of the touch
                    startTime = getTimeStamp();
            
                    if (fingerCount == 2) {
                      //Keep track of the initial pinch distance, so we can calculate the diff later
                      //Store second finger data as start
                      createFingerData(1, touches[1]);
                      startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
                    }
            
                    if (options.swipeStatus || options.pinchStatus) {
                      ret = triggerHandler(event, phase);
                    }
                  } else {
                    //A touch with more or less than the fingers we are looking for, so cancel
                    ret = false;
                  }
            
                  //If we have a return value from the users handler, then return and cancel
                  if (ret === false) {
                    phase = PHASE_CANCEL;
                    triggerHandler(event, phase);
                    return ret;
                  } else {
                    if (options.hold) {
                      holdTimeout = setTimeout($.proxy(function() {
                        //Trigger the event
                        $element.trigger('hold', [event.target]);
                        //Fire the callback
                        if (options.hold) {
                          ret = options.hold.call($element, event, event.target);
                        }
                      }, this), options.longTapThreshold);
                    }
            
                    setTouchInProgress(true);
                  }
            
                  return null;
                };
            
            
            
                /**
                 * Event handler for a touch move event.
                 * If we change fingers during move, then cancel the event
                 * @inner
                 * @param {object} jqEvent The normalised jQuery event object.
                 */
                function touchMove(jqEvent) {
            
                  //As we use Jquery bind for events, we need to target the original event object
                  //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
                  var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            
                  //If we are ending, cancelling, or within the threshold of 2 fingers being released, don't track anything..
                  if (phase === PHASE_END || phase === PHASE_CANCEL || inMultiFingerRelease())
                    return;
            
                  var ret,
                    touches = event.touches,
                    evt = touches ? touches[0] : event;
            
            
                  //Update the  finger data
                  var currentFinger = updateFingerData(evt);
                  endTime = getTimeStamp();
            
                  if (touches) {
                    fingerCount = touches.length;
                  }
            
                  if (options.hold) {
                    clearTimeout(holdTimeout);
                  }
            
                  phase = PHASE_MOVE;
            
                  //If we have 2 fingers get Touches distance as well
                  if (fingerCount == 2) {
            
                    //Keep track of the initial pinch distance, so we can calculate the diff later
                    //We do this here as well as the start event, in case they start with 1 finger, and the press 2 fingers
                    if (startTouchesDistance == 0) {
                      //Create second finger if this is the first time...
                      createFingerData(1, touches[1]);
            
                      startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start);
                    } else {
                      //Else just update the second finger
                      updateFingerData(touches[1]);
            
                      endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end);
                      pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end);
                    }
            
                    pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance);
                    pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance);
                  }
            
                  if ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !touches || hasPinches()) {
            
                    //The overall direction of the swipe. From start to now.
                    direction = calculateDirection(currentFinger.start, currentFinger.end);
            
                    //The immediate direction of the swipe, direction between the last movement and this one.
                    currentDirection = calculateDirection(currentFinger.last, currentFinger.end);
            
                    //Check if we need to prevent default event (page scroll / pinch zoom) or not
                    validateDefaultEvent(jqEvent, currentDirection);
            
                    //Distance and duration are all off the main finger
                    distance = calculateDistance(currentFinger.start, currentFinger.end);
                    duration = calculateDuration();
            
                    //Cache the maximum distance we made in this direction
                    setMaxDistance(direction, distance);
            
                    //Trigger status handler
                    ret = triggerHandler(event, phase);
            
            
                    //If we trigger end events when threshold are met, or trigger events when touch leaves element
                    if (!options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
            
                      var inBounds = true;
            
                      //If checking if we leave the element, run the bounds check (we can use touchleave as its not supported on webkit)
                      if (options.triggerOnTouchLeave) {
                        var bounds = getbounds(this);
                        inBounds = isInBounds(currentFinger.end, bounds);
                      }
            
                      //Trigger end handles as we swipe if thresholds met or if we have left the element if the user has asked to check these..
                      if (!options.triggerOnTouchEnd && inBounds) {
                        phase = getNextPhase(PHASE_MOVE);
                      }
                      //We end if out of bounds here, so set current phase to END, and check if its modified
                      else if (options.triggerOnTouchLeave && !inBounds) {
                        phase = getNextPhase(PHASE_END);
                      }
            
                      if (phase == PHASE_CANCEL || phase == PHASE_END) {
                        triggerHandler(event, phase);
                      }
                    }
                  } else {
                    phase = PHASE_CANCEL;
                    triggerHandler(event, phase);
                  }
            
                  if (ret === false) {
                    phase = PHASE_CANCEL;
                    triggerHandler(event, phase);
                  }
                }
            
            
            
            
                /**
                 * Event handler for a touch end event.
                 * Calculate the direction and trigger events
                 * @inner
                 * @param {object} jqEvent The normalised jQuery event object.
                 */
                function touchEnd(jqEvent) {
                  //As we use Jquery bind for events, we need to target the original event object
                  //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
                  var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
                    touches = event.touches;
            
                  //If we are still in a touch with the device wait a fraction and see if the other finger comes up
                  //if it does within the threshold, then we treat it as a multi release, not a single release and end the touch / swipe
                  if (touches) {
                    if (touches.length && !inMultiFingerRelease()) {
                      startMultiFingerRelease(event);
                      return true;
                    } else if (touches.length && inMultiFingerRelease()) {
                      return true;
                    }
                  }
            
                  //If a previous finger has been released, check how long ago, if within the threshold, then assume it was a multifinger release.
                  //This is used to allow 2 fingers to release fractionally after each other, whilst maintaining the event as containing 2 fingers, not 1
                  if (inMultiFingerRelease()) {
                    fingerCount = fingerCountAtRelease;
                  }
            
                  //Set end of swipe
                  endTime = getTimeStamp();
            
                  //Get duration incase move was never fired
                  duration = calculateDuration();
            
                  //If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
                  if (didSwipeBackToCancel() || !validateSwipeDistance()) {
                    phase = PHASE_CANCEL;
                    triggerHandler(event, phase);
                  } else if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd === false && phase === PHASE_MOVE)) {
                    //call this on jq event so we are cross browser
                    if (options.preventDefaultEvents !== false) {
                      jqEvent.preventDefault();
                    }
                    phase = PHASE_END;
                    triggerHandler(event, phase);
                  }
                  //Special cases - A tap should always fire on touch end regardless,
                  //So here we manually trigger the tap end handler by itself
                  //We dont run trigger handler as it will re-trigger events that may have fired already
                  else if (!options.triggerOnTouchEnd && hasTap()) {
                    //Trigger the pinch events...
                    phase = PHASE_END;
                    triggerHandlerForGesture(event, phase, TAP);
                  } else if (phase === PHASE_MOVE) {
                    phase = PHASE_CANCEL;
                    triggerHandler(event, phase);
                  }
            
                  setTouchInProgress(false);
            
                  return null;
                }
            
            
            
                /**
                 * Event handler for a touch cancel event.
                 * Clears current vars
                 * @inner
                 */
                function touchCancel() {
                  // reset the variables back to default values
                  fingerCount = 0;
                  endTime = 0;
                  startTime = 0;
                  startTouchesDistance = 0;
                  endTouchesDistance = 0;
                  pinchZoom = 1;
            
                  //If we were in progress of tracking a possible multi touch end, then re set it.
                  cancelMultiFingerRelease();
            
                  setTouchInProgress(false);
                }
            
            
                /**
                 * Event handler for a touch leave event.
                 * This is only triggered on desktops, in touch we work this out manually
                 * as the touchleave event is not supported in webkit
                 * @inner
                 */
                function touchLeave(jqEvent) {
                  //If these events are being programmatically triggered, we don't have an original event object, so use the Jq one.
                  var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            
                  //If we have the trigger on leave property set....
                  if (options.triggerOnTouchLeave) {
                    phase = getNextPhase(PHASE_END);
                    triggerHandler(event, phase);
                  }
                }
            
                /**
                 * Removes all listeners that were associated with the plugin
                 * @inner
                 */
                function removeListeners() {
                  $element.unbind(START_EV, touchStart);
                  $element.unbind(CANCEL_EV, touchCancel);
                  $element.unbind(MOVE_EV, touchMove);
                  $element.unbind(END_EV, touchEnd);
            
                  //we only have leave events on desktop, we manually calculate leave on touch as its not supported in webkit
                  if (LEAVE_EV) {
                    $element.unbind(LEAVE_EV, touchLeave);
                  }
            
                  setTouchInProgress(false);
                }
            
            
                /**
                 * Checks if the time and distance thresholds have been met, and if so then the appropriate handlers are fired.
                 */
                function getNextPhase(currentPhase) {
            
                  var nextPhase = currentPhase;
            
                  // Ensure we have valid swipe (under time and over distance  and check if we are out of bound...)
                  var validTime = validateSwipeTime();
                  var validDistance = validateSwipeDistance();
                  var didCancel = didSwipeBackToCancel();
            
                  //If we have exceeded our time, then cancel
                  if (!validTime || didCancel) {
                    nextPhase = PHASE_CANCEL;
                  }
                  //Else if we are moving, and have reached distance then end
                  else if (validDistance && currentPhase == PHASE_MOVE && (!options.triggerOnTouchEnd || options.triggerOnTouchLeave)) {
                    nextPhase = PHASE_END;
                  }
                  //Else if we have ended by leaving and didn't reach distance, then cancel
                  else if (!validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave) {
                    nextPhase = PHASE_CANCEL;
                  }
            
                  return nextPhase;
                }
            
            
                /**
                 * Trigger the relevant event handler
                 * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
                 * @param {object} event the original event object
                 * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
                 * @inner
                 */
                function triggerHandler(event, phase) {
            
            
            
                  var ret,
                    touches = event.touches;
            
                  // SWIPE GESTURES
                  if (didSwipe() || hasSwipes()) {
                      ret = triggerHandlerForGesture(event, phase, SWIPE);
                  }
            
                  // PINCH GESTURES (if the above didn't cancel)
                  if ((didPinch() || hasPinches()) && ret !== false) {
                      ret = triggerHandlerForGesture(event, phase, PINCH);
                  }
            
                  // CLICK / TAP (if the above didn't cancel)
                  if (didDoubleTap() && ret !== false) {
                    //Trigger the tap events...
                    ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP);
                  }
            
                  // CLICK / TAP (if the above didn't cancel)
                  else if (didLongTap() && ret !== false) {
                    //Trigger the tap events...
                    ret = triggerHandlerForGesture(event, phase, LONG_TAP);
                  }
            
                  // CLICK / TAP (if the above didn't cancel)
                  else if (didTap() && ret !== false) {
                    //Trigger the tap event..
                    ret = triggerHandlerForGesture(event, phase, TAP);
                  }
            
            
            
                  // If we are cancelling the gesture, then manually trigger the reset handler
                  if (phase === PHASE_CANCEL) {
            
                    touchCancel(event);
                  }
            
            
            
            
                  // If we are ending the gesture, then manually trigger the reset handler IF all fingers are off
                  if (phase === PHASE_END) {
                    //If we support touch, then check that all fingers are off before we cancel
                    if (touches) {
                      if (!touches.length) {
                        touchCancel(event);
                      }
                    } else {
                      touchCancel(event);
                    }
                  }
            
                  return ret;
                }
            
            
            
                /**
                 * Trigger the relevant event handler
                 * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
                 * @param {object} event the original event object
                 * @param {string} phase the phase of the swipe (start, end cancel etc) {@link $.fn.swipe.phases}
                 * @param {string} gesture the gesture to trigger a handler for : PINCH or SWIPE {@link $.fn.swipe.gestures}
                 * @return Boolean False, to indicate that the event should stop propagation, or void.
                 * @inner
                 */
                function triggerHandlerForGesture(event, phase, gesture) {
            
                  var ret;
            
                  //SWIPES....
                  if (gesture == SWIPE) {
                    //Trigger status every time..
                    $element.trigger('swipeStatus', [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]);
            
                    if (options.swipeStatus) {
                      ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection);
                      //If the status cancels, then dont run the subsequent event handlers..
                      if (ret === false) return false;
                    }
            
                    if (phase == PHASE_END && validateSwipe()) {
            
                      //Cancel any taps that were in progress...
                      clearTimeout(singleTapTimeout);
                      clearTimeout(holdTimeout);
            
                      $element.trigger('swipe', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
            
                      if (options.swipe) {
                        ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                        //If the status cancels, then dont run the subsequent event handlers..
                        if (ret === false) return false;
                      }
            
                      //trigger direction specific event handlers
                      switch (direction) {
                        case LEFT:
                          $element.trigger('swipeLeft', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
            
                          if (options.swipeLeft) {
                            ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                          }
                          break;
            
                        case RIGHT:
                          $element.trigger('swipeRight', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
            
                          if (options.swipeRight) {
                            ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                          }
                          break;
            
                        case UP:
                          $element.trigger('swipeUp', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
            
                          if (options.swipeUp) {
                            ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                          }
                          break;
            
                        case DOWN:
                          $element.trigger('swipeDown', [direction, distance, duration, fingerCount, fingerData, currentDirection]);
            
                          if (options.swipeDown) {
                            ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection);
                          }
                          break;
                      }
                    }
                  }
            
            
                  //PINCHES....
                  if (gesture == PINCH) {
                    $element.trigger('pinchStatus', [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
            
                    if (options.pinchStatus) {
                      ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
                      //If the status cancels, then dont run the subsequent event handlers..
                      if (ret === false) return false;
                    }
            
                    if (phase == PHASE_END && validatePinch()) {
            
                      switch (pinchDirection) {
                        case IN:
                          $element.trigger('pinchIn', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
            
                          if (options.pinchIn) {
                            ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
                          }
                          break;
            
                        case OUT:
                          $element.trigger('pinchOut', [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]);
            
                          if (options.pinchOut) {
                            ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData);
                          }
                          break;
                      }
                    }
                  }
            
                  if (gesture == TAP) {
                    if (phase === PHASE_CANCEL || phase === PHASE_END) {
            
                      clearTimeout(singleTapTimeout);
                      clearTimeout(holdTimeout);
            
                      //If we are also looking for doubelTaps, wait incase this is one...
                      if (hasDoubleTap() && !inDoubleTap()) {
                        doubleTapStartTime = getTimeStamp();
            
                        //Now wait for the double tap timeout, and trigger this single tap
                        //if its not cancelled by a double tap
                        singleTapTimeout = setTimeout($.proxy(function() {
                          doubleTapStartTime = null;
                          $element.trigger('tap', [event.target]);
            
                          if (options.tap) {
                            ret = options.tap.call($element, event, event.target);
                          }
                        }, this), options.doubleTapThreshold);
            
                      } else {
                        doubleTapStartTime = null;
                        $element.trigger('tap', [event.target]);
                        if (options.tap) {
                          ret = options.tap.call($element, event, event.target);
                        }
                      }
                    }
                  } else if (gesture == DOUBLE_TAP) {
                    if (phase === PHASE_CANCEL || phase === PHASE_END) {
                      clearTimeout(singleTapTimeout);
                      clearTimeout(holdTimeout);
                      doubleTapStartTime = null;
                      $element.trigger('doubletap', [event.target]);
            
                      if (options.doubleTap) {
                        ret = options.doubleTap.call($element, event, event.target);
                      }
                    }
                  } else if (gesture == LONG_TAP) {
                    if (phase === PHASE_CANCEL || phase === PHASE_END) {
                      clearTimeout(singleTapTimeout);
                      doubleTapStartTime = null;
            
                      $element.trigger('longtap', [event.target]);
                      if (options.longTap) {
                        ret = options.longTap.call($element, event, event.target);
                      }
                    }
                  }
            
                  return ret;
                }
            
            
                //
                // GESTURE VALIDATION
                //
            
                /**
                 * Checks the user has swipe far enough
                 * @return Boolean if <code>threshold</code> has been set, return true if the threshold was met, else false.
                 * If no threshold was set, then we return true.
                 * @inner
                 */
                function validateSwipeDistance() {
                  var valid = true;
                  //If we made it past the min swipe distance..
                  if (options.threshold !== null) {
                    valid = distance >= options.threshold;
                  }
            
                  return valid;
                }
            
                /**
                 * Checks the user has swiped back to cancel.
                 * @return Boolean if <code>cancelThreshold</code> has been set, return true if the cancelThreshold was met, else false.
                 * If no cancelThreshold was set, then we return true.
                 * @inner
                 */
                function didSwipeBackToCancel() {
                  var cancelled = false;
                  if (options.cancelThreshold !== null && direction !== null) {
                    cancelled = (getMaxDistance(direction) - distance) >= options.cancelThreshold;
                  }
            
                  return cancelled;
                }
            
                /**
                 * Checks the user has pinched far enough
                 * @return Boolean if <code>pinchThreshold</code> has been set, return true if the threshold was met, else false.
                 * If no threshold was set, then we return true.
                 * @inner
                 */
                function validatePinchDistance() {
                  if (options.pinchThreshold !== null) {
                    return pinchDistance >= options.pinchThreshold;
                  }
                  return true;
                }
            
                /**
                 * Checks that the time taken to swipe meets the minimum / maximum requirements
                 * @return Boolean
                 * @inner
                 */
                function validateSwipeTime() {
                  var result;
                  //If no time set, then return true
                  if (options.maxTimeThreshold) {
                    if (duration >= options.maxTimeThreshold) {
                      result = false;
                    } else {
                      result = true;
                    }
                  } else {
                    result = true;
                  }
            
                  return result;
                }
            
            
                /**
                 * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
                 * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
                 * @param {object} jqEvent The normalised jQuery representation of the event object.
                 * @param {string} direction The direction of the event. See {@link $.fn.swipe.directions}
                 * @see $.fn.swipe.directions
                 * @inner
                 */
                function validateDefaultEvent(jqEvent, direction) {
            
                  //If the option is set, allways allow the event to bubble up (let user handle weirdness)
                  if (options.preventDefaultEvents === false) {
                    return;
                  }
            
                  if (options.allowPageScroll === NONE) {
                    jqEvent.preventDefault();
                  } else {
                    var auto = options.allowPageScroll === AUTO;
            
                    switch (direction) {
                      case LEFT:
                        if ((options.swipeLeft && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
                          jqEvent.preventDefault();
                        }
                        break;
            
                      case RIGHT:
                        if ((options.swipeRight && auto) || (!auto && options.allowPageScroll != HORIZONTAL)) {
                          jqEvent.preventDefault();
                        }
                        break;
            
                      case UP:
                        if ((options.swipeUp && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
                          jqEvent.preventDefault();
                        }
                        break;
            
                      case DOWN:
                        if ((options.swipeDown && auto) || (!auto && options.allowPageScroll != VERTICAL)) {
                          jqEvent.preventDefault();
                        }
                        break;
            
                      case NONE:
            
                        break;
                    }
                  }
                }
            
            
                // PINCHES
                /**
                 * Returns true of the current pinch meets the thresholds
                 * @return Boolean
                 * @inner
                 */
                function validatePinch() {
                  var hasCorrectFingerCount = validateFingers();
                  var hasEndPoint = validateEndPoint();
                  var hasCorrectDistance = validatePinchDistance();
                  return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
            
                }
            
                /**
                 * Returns true if any Pinch events have been registered
                 * @return Boolean
                 * @inner
                 */
                function hasPinches() {
                  //Enure we dont return 0 or null for false values
                  return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
                }
            
                /**
                 * Returns true if we are detecting pinches, and have one
                 * @return Boolean
                 * @inner
                 */
                function didPinch() {
                  //Enure we dont return 0 or null for false values
                  return !!(validatePinch() && hasPinches());
                }
            
            
            
            
                // SWIPES
                /**
                 * Returns true if the current swipe meets the thresholds
                 * @return Boolean
                 * @inner
                 */
                function validateSwipe() {
                  //Check validity of swipe
                  var hasValidTime = validateSwipeTime();
                  var hasValidDistance = validateSwipeDistance();
                  var hasCorrectFingerCount = validateFingers();
                  var hasEndPoint = validateEndPoint();
                  var didCancel = didSwipeBackToCancel();
            
                  // if the user swiped more than the minimum length, perform the appropriate action
                  // hasValidDistance is null when no distance is set
                  var valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
            
                  return valid;
                }
            
                /**
                 * Returns true if any Swipe events have been registered
                 * @return Boolean
                 * @inner
                 */
                function hasSwipes() {
                  //Enure we dont return 0 or null for false values
                  return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
                }
            
            
                /**
                 * Returns true if we are detecting swipes and have one
                 * @return Boolean
                 * @inner
                 */
                function didSwipe() {
                  //Enure we dont return 0 or null for false values
                  return !!(validateSwipe() && hasSwipes());
                }
            
                /**
                 * Returns true if we have matched the number of fingers we are looking for
                 * @return Boolean
                 * @inner
                 */
                function validateFingers() {
                  //The number of fingers we want were matched, or on desktop we ignore
                  return ((fingerCount === options.fingers || options.fingers === ALL_FINGERS) || !SUPPORTS_TOUCH);
                }
            
                /**
                 * Returns true if we have an end point for the swipe
                 * @return Boolean
                 * @inner
                 */
                function validateEndPoint() {
                  //We have an end value for the finger
                  return fingerData[0].end.x !== 0;
                }
            
                // TAP / CLICK
                /**
                 * Returns true if a click / tap events have been registered
                 * @return Boolean
                 * @inner
                 */
                function hasTap() {
                  //Enure we dont return 0 or null for false values
                  return !!(options.tap);
                }
            
                /**
                 * Returns true if a double tap events have been registered
                 * @return Boolean
                 * @inner
                 */
                function hasDoubleTap() {
                  //Enure we dont return 0 or null for false values
                  return !!(options.doubleTap);
                }
            
                /**
                 * Returns true if any long tap events have been registered
                 * @return Boolean
                 * @inner
                 */
                function hasLongTap() {
                  //Enure we dont return 0 or null for false values
                  return !!(options.longTap);
                }
            
                /**
                 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
                 * @return Boolean
                 * @inner
                 */
                function validateDoubleTap() {
                  if (doubleTapStartTime == null) {
                    return false;
                  }
                  var now = getTimeStamp();
                  return (hasDoubleTap() && ((now - doubleTapStartTime) <= options.doubleTapThreshold));
                }
            
                /**
                 * Returns true if we could be in the process of a double tap (one tap has occurred, we are listening for double taps, and the threshold hasn't past.
                 * @return Boolean
                 * @inner
                 */
                function inDoubleTap() {
                  return validateDoubleTap();
                }
            
            
                /**
                 * Returns true if we have a valid tap
                 * @return Boolean
                 * @inner
                 */
                function validateTap() {
                  return ((fingerCount === 1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold));
                }
            
                /**
                 * Returns true if we have a valid long tap
                 * @return Boolean
                 * @inner
                 */
                function validateLongTap() {
                  //slight threshold on moving finger
                  return ((duration > options.longTapThreshold) && (distance < DOUBLE_TAP_THRESHOLD));
                }
            
                /**
                 * Returns true if we are detecting taps and have one
                 * @return Boolean
                 * @inner
                 */
                function didTap() {
                  //Enure we dont return 0 or null for false values
                  return !!(validateTap() && hasTap());
                }
            
            
                /**
                 * Returns true if we are detecting double taps and have one
                 * @return Boolean
                 * @inner
                 */
                function didDoubleTap() {
                  //Enure we dont return 0 or null for false values
                  return !!(validateDoubleTap() && hasDoubleTap());
                }
            
                /**
                 * Returns true if we are detecting long taps and have one
                 * @return Boolean
                 * @inner
                 */
                function didLongTap() {
                  //Enure we dont return 0 or null for false values
                  return !!(validateLongTap() && hasLongTap());
                }
            
            
            
            
                // MULTI FINGER TOUCH
                /**
                 * Starts tracking the time between 2 finger releases, and keeps track of how many fingers we initially had up
                 * @inner
                 */
                function startMultiFingerRelease(event) {
                  previousTouchEndTime = getTimeStamp();
                  fingerCountAtRelease = event.touches.length + 1;
                }
            
                /**
                 * Cancels the tracking of time between 2 finger releases, and resets counters
                 * @inner
                 */
                function cancelMultiFingerRelease() {
                  previousTouchEndTime = 0;
                  fingerCountAtRelease = 0;
                }
            
                /**
                 * Checks if we are in the threshold between 2 fingers being released
                 * @return Boolean
                 * @inner
                 */
                function inMultiFingerRelease() {
            
                  var withinThreshold = false;
            
                  if (previousTouchEndTime) {
                    var diff = getTimeStamp() - previousTouchEndTime
                    if (diff <= options.fingerReleaseThreshold) {
                      withinThreshold = true;
                    }
                  }
            
                  return withinThreshold;
                }
            
            
                /**
                 * gets a data flag to indicate that a touch is in progress
                 * @return Boolean
                 * @inner
                 */
                function getTouchInProgress() {
                  //strict equality to ensure only true and false are returned
                  return !!($element.data(PLUGIN_NS + '_intouch') === true);
                }
            
                /**
                 * Sets a data flag to indicate that a touch is in progress
                 * @param {boolean} val The value to set the property to
                 * @inner
                 */
                function setTouchInProgress(val) {
            
                  //If destroy is called in an event handler, we have no el, and we have already cleaned up, so return.
                  if(!$element) { return; }
            
                  //Add or remove event listeners depending on touch status
                  if (val === true) {
                    $element.bind(MOVE_EV, touchMove);
                    $element.bind(END_EV, touchEnd);
            
                    //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
                    if (LEAVE_EV) {
                      $element.bind(LEAVE_EV, touchLeave);
                    }
                  } else {
            
                    $element.unbind(MOVE_EV, touchMove, false);
                    $element.unbind(END_EV, touchEnd, false);
            
                    //we only have leave events on desktop, we manually calcuate leave on touch as its not supported in webkit
                    if (LEAVE_EV) {
                      $element.unbind(LEAVE_EV, touchLeave, false);
                    }
                  }
            
            
                  //strict equality to ensure only true and false can update the value
                  $element.data(PLUGIN_NS + '_intouch', val === true);
                }
            
            
                /**
                 * Creates the finger data for the touch/finger in the event object.
                 * @param {int} id The id to store the finger data under (usually the order the fingers were pressed)
                 * @param {object} evt The event object containing finger data
                 * @return finger data object
                 * @inner
                 */
                function createFingerData(id, evt) {
                  var f = {
                    start: {
                      x: 0,
                      y: 0
                    },
                    last: {
                      x: 0,
                      y: 0
                    },
                    end: {
                      x: 0,
                      y: 0
                    }
                  };
                  f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX;
                  f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY;
                  fingerData[id] = f;
                  return f;
                }
            
                /**
                 * Updates the finger data for a particular event object
                 * @param {object} evt The event object containing the touch/finger data to upadte
                 * @return a finger data object.
                 * @inner
                 */
                function updateFingerData(evt) {
                  var id = evt.identifier !== undefined ? evt.identifier : 0;
                  var f = getFingerData(id);
            
                  if (f === null) {
                    f = createFingerData(id, evt);
                  }
            
                  f.last.x = f.end.x;
                  f.last.y = f.end.y;
            
                  f.end.x = evt.pageX || evt.clientX;
                  f.end.y = evt.pageY || evt.clientY;
            
                  return f;
                }
            
                /**
                 * Returns a finger data object by its event ID.
                 * Each touch event has an identifier property, which is used
                 * to track repeat touches
                 * @param {int} id The unique id of the finger in the sequence of touch events.
                 * @return a finger data object.
                 * @inner
                 */
                function getFingerData(id) {
                  return fingerData[id] || null;
                }
            
            
                /**
                 * Sets the maximum distance swiped in the given direction.
                 * If the new value is lower than the current value, the max value is not changed.
                 * @param {string}  direction The direction of the swipe
                 * @param {int}  distance The distance of the swipe
                 * @inner
                 */
                function setMaxDistance(direction, distance) {
                  if(direction==NONE) return;
                  distance = Math.max(distance, getMaxDistance(direction));
                  maximumsMap[direction].distance = distance;
                }
            
                /**
                 * gets the maximum distance swiped in the given direction.
                 * @param {string}  direction The direction of the swipe
                 * @return int  The distance of the swipe
                 * @inner
                 */
                function getMaxDistance(direction) {
                  if (maximumsMap[direction]) return maximumsMap[direction].distance;
                  return undefined;
                }
            
                /**
                 * Creats a map of directions to maximum swiped values.
                 * @return Object A dictionary of maximum values, indexed by direction.
                 * @inner
                 */
                function createMaximumsData() {
                  var maxData = {};
                  maxData[LEFT] = createMaximumVO(LEFT);
                  maxData[RIGHT] = createMaximumVO(RIGHT);
                  maxData[UP] = createMaximumVO(UP);
                  maxData[DOWN] = createMaximumVO(DOWN);
            
                  return maxData;
                }
            
                /**
                 * Creates a map maximum swiped values for a given swipe direction
                 * @param {string} The direction that these values will be associated with
                 * @return Object Maximum values
                 * @inner
                 */
                function createMaximumVO(dir) {
                  return {
                    direction: dir,
                    distance: 0
                  }
                }
            
            
                //
                // MATHS / UTILS
                //
            
                /**
                 * Calculate the duration of the swipe
                 * @return int
                 * @inner
                 */
                function calculateDuration() {
                  return endTime - startTime;
                }
            
                /**
                 * Calculate the distance between 2 touches (pinch)
                 * @param {point} startPoint A point object containing x and y co-ordinates
                 * @param {point} endPoint A point object containing x and y co-ordinates
                 * @return int;
                 * @inner
                 */
                function calculateTouchesDistance(startPoint, endPoint) {
                  var diffX = Math.abs(startPoint.x - endPoint.x);
                  var diffY = Math.abs(startPoint.y - endPoint.y);
            
                  return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
                }
            
                /**
                 * Calculate the zoom factor between the start and end distances
                 * @param {int} startDistance Distance (between 2 fingers) the user started pinching at
                 * @param {int} endDistance Distance (between 2 fingers) the user ended pinching at
                 * @return float The zoom value from 0 to 1.
                 * @inner
                 */
                function calculatePinchZoom(startDistance, endDistance) {
                  var percent = (endDistance / startDistance) * 1;
                  return percent.toFixed(2);
                }
            
            
                /**
                 * Returns the pinch direction, either IN or OUT for the given points
                 * @return string Either {@link $.fn.swipe.directions.IN} or {@link $.fn.swipe.directions.OUT}
                 * @see $.fn.swipe.directions
                 * @inner
                 */
                function calculatePinchDirection() {
                  if (pinchZoom < 1) {
                    return OUT;
                  } else {
                    return IN;
                  }
                }
            
            
                /**
                 * Calculate the length / distance of the swipe
                 * @param {point} startPoint A point object containing x and y co-ordinates
                 * @param {point} endPoint A point object containing x and y co-ordinates
                 * @return int
                 * @inner
                 */
                function calculateDistance(startPoint, endPoint) {
                  return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
                }
            
                /**
                 * Calculate the angle of the swipe
                 * @param {point} startPoint A point object containing x and y co-ordinates
                 * @param {point} endPoint A point object containing x and y co-ordinates
                 * @return int
                 * @inner
                 */
                function calculateAngle(startPoint, endPoint) {
                  var x = startPoint.x - endPoint.x;
                  var y = endPoint.y - startPoint.y;
                  var r = Math.atan2(y, x); //radians
                  var angle = Math.round(r * 180 / Math.PI); //degrees
            
                  //ensure value is positive
                  if (angle < 0) {
                    angle = 360 - Math.abs(angle);
                  }
            
                  return angle;
                }
            
                /**
                 * Calculate the direction of the swipe
                 * This will also call calculateAngle to get the latest angle of swipe
                 * @param {point} startPoint A point object containing x and y co-ordinates
                 * @param {point} endPoint A point object containing x and y co-ordinates
                 * @return string Either {@link $.fn.swipe.directions.LEFT} / {@link $.fn.swipe.directions.RIGHT} / {@link $.fn.swipe.directions.DOWN} / {@link $.fn.swipe.directions.UP}
                 * @see $.fn.swipe.directions
                 * @inner
                 */
                function calculateDirection(startPoint, endPoint) {
            
                  if( comparePoints(startPoint, endPoint) ) {
                    return NONE;
                  }
            
                  var angle = calculateAngle(startPoint, endPoint);
            
                  if ((angle <= 45) && (angle >= 0)) {
                    return LEFT;
                  } else if ((angle <= 360) && (angle >= 315)) {
                    return LEFT;
                  } else if ((angle >= 135) && (angle <= 225)) {
                    return RIGHT;
                  } else if ((angle > 45) && (angle < 135)) {
                    return DOWN;
                  } else {
                    return UP;
                  }
                }
            
            
                /**
                 * Returns a MS time stamp of the current time
                 * @return int
                 * @inner
                 */
                function getTimeStamp() {
                  var now = new Date();
                  return now.getTime();
                }
            
            
            
                /**
                 * Returns a bounds object with left, right, top and bottom properties for the element specified.
                 * @param {DomNode} The DOM node to get the bounds for.
                 */
                function getbounds(el) {
                  el = $(el);
                  var offset = el.offset();
            
                  var bounds = {
                    left: offset.left,
                    right: offset.left + el.outerWidth(),
                    top: offset.top,
                    bottom: offset.top + el.outerHeight()
                  }
            
                  return bounds;
                }
            
            
                /**
                 * Checks if the point object is in the bounds object.
                 * @param {object} point A point object.
                 * @param {int} point.x The x value of the point.
                 * @param {int} point.y The x value of the point.
                 * @param {object} bounds The bounds object to test
                 * @param {int} bounds.left The leftmost value
                 * @param {int} bounds.right The righttmost value
                 * @param {int} bounds.top The topmost value
                 * @param {int} bounds.bottom The bottommost value
                 */
                function isInBounds(point, bounds) {
                  return (point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom);
                };
            
                /**
                 * Checks if the two points are equal
                 * @param {object} point A point object.
                 * @param {object} point B point object.
                 * @return true of the points match
                 */
                function comparePoints(pointA, pointB) {
                  return (pointA.x == pointB.x && pointA.y == pointB.y);
                }
            
            
              }
            
            
            
            
              /**
               * A catch all handler that is triggered for all swipe directions.
               * @name $.fn.swipe#swipe
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user swiped
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {object} fingerData The coordinates of fingers in event
               * @param {string} currentDirection The current direction the user is swiping.
               */
            
            
            
            
              /**
               * A handler that is triggered for "left" swipes.
               * @name $.fn.swipe#swipeLeft
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user swiped
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {object} fingerData The coordinates of fingers in event
               * @param {string} currentDirection The current direction the user is swiping.
               */
            
              /**
               * A handler that is triggered for "right" swipes.
               * @name $.fn.swipe#swipeRight
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user swiped
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {object} fingerData The coordinates of fingers in event
               * @param {string} currentDirection The current direction the user is swiping.
               */
            
              /**
               * A handler that is triggered for "up" swipes.
               * @name $.fn.swipe#swipeUp
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user swiped
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {object} fingerData The coordinates of fingers in event
               * @param {string} currentDirection The current direction the user is swiping.
               */
            
              /**
               * A handler that is triggered for "down" swipes.
               * @name $.fn.swipe#swipeDown
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {int} direction The direction the user swiped in. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user swiped
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {object} fingerData The coordinates of fingers in event
               * @param {string} currentDirection The current direction the user is swiping.
               */
            
              /**
               * A handler triggered for every phase of the swipe. This handler is constantly fired for the duration of the pinch.
               * This is triggered regardless of swipe thresholds.
               * @name $.fn.swipe#swipeStatus
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {string} phase The phase of the swipe event. See {@link $.fn.swipe.phases}
               * @param {string} direction The direction the user swiped in. This is null if the user has yet to move. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user swiped. This is 0 if the user has yet to move.
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {object} fingerData The coordinates of fingers in event
               * @param {string} currentDirection The current direction the user is swiping.
               */
            
              /**
               * A handler triggered for pinch in events.
               * @name $.fn.swipe#pinchIn
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user pinched
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
               * @param {object} fingerData The coordinates of fingers in event
               */
            
              /**
               * A handler triggered for pinch out events.
               * @name $.fn.swipe#pinchOut
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user pinched
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
               * @param {object} fingerData The coordinates of fingers in event
               */
            
              /**
               * A handler triggered for all pinch events. This handler is constantly fired for the duration of the pinch. This is triggered regardless of thresholds.
               * @name $.fn.swipe#pinchStatus
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {int} direction The direction the user pinched in. See {@link $.fn.swipe.directions}
               * @param {int} distance The distance the user pinched
               * @param {int} duration The duration of the swipe in milliseconds
               * @param {int} fingerCount The number of fingers used. See {@link $.fn.swipe.fingers}
               * @param {int} zoom The zoom/scale level the user pinched too, 0-1.
               * @param {object} fingerData The coordinates of fingers in event
               */
            
              /**
               * A click handler triggered when a user simply clicks, rather than swipes on an element.
               * This is deprecated since version 1.6.2, any assignment to click will be assigned to the tap handler.
               * You cannot use <code>on</code> to bind to this event as the default jQ <code>click</code> event will be triggered.
               * Use the <code>tap</code> event instead.
               * @name $.fn.swipe#click
               * @event
               * @deprecated since version 1.6.2, please use {@link $.fn.swipe#tap} instead
               * @default null
               * @param {EventObject} event The original event object
               * @param {DomObject} target The element clicked on.
               */
            
              /**
               * A click / tap handler triggered when a user simply clicks or taps, rather than swipes on an element.
               * @name $.fn.swipe#tap
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {DomObject} target The element clicked on.
               */
            
              /**
               * A double tap handler triggered when a user double clicks or taps on an element.
               * You can set the time delay for a double tap with the {@link $.fn.swipe.defaults#doubleTapThreshold} property.
               * Note: If you set both <code>doubleTap</code> and <code>tap</code> handlers, the <code>tap</code> event will be delayed by the <code>doubleTapThreshold</code>
               * as the script needs to check if its a double tap.
               * @name $.fn.swipe#doubleTap
               * @see  $.fn.swipe.defaults#doubleTapThreshold
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {DomObject} target The element clicked on.
               */
            
              /**
               * A long tap handler triggered once a tap has been release if the tap was longer than the longTapThreshold.
               * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
               * @name $.fn.swipe#longTap
               * @see  $.fn.swipe.defaults#longTapThreshold
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {DomObject} target The element clicked on.
               */
            
              /**
               * A hold tap handler triggered as soon as the longTapThreshold is reached
               * You can set the time delay for a long tap with the {@link $.fn.swipe.defaults#longTapThreshold} property.
               * @name $.fn.swipe#hold
               * @see  $.fn.swipe.defaults#longTapThreshold
               * @event
               * @default null
               * @param {EventObject} event The original event object
               * @param {DomObject} target The element clicked on.
               */
            
            }));
            
            /**
            *  Ajax Autocomplete for jQuery, version %version%
            *  (c) 2015 Tomas Kirda
            *
            *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
            *  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
            */
            
            /*jslint  browser: true, white: true, single: true, this: true, multivar: true */
            /*global define, window, document, jQuery, exports, require */
            
            // Expose plugin as an AMD module if AMD loader is present:
            (function (factory) {
                "use strict";
                if (typeof define === 'function' && define.amd) {
                    // AMD. Register as an anonymous module.
                    define(['jquery'], factory);
                } else if (typeof exports === 'object' && typeof require === 'function') {
                    // Browserify
                    factory(require('jquery'));
                } else {
                    // Browser globals
                    factory(jQuery);
                }
            }(function ($) {
                'use strict';
            
                var
                    utils = (function () {
                        return {
                            escapeRegExChars: function (value) {
                                return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
                            },
                            createNode: function (containerClass) {
                                var div = document.createElement('div');
                                div.className = containerClass;
                                div.style.position = 'absolute';
                                div.style.display = 'none';
                                return div;
                            }
                        };
                    }()),
            
                    keys = {
                        ESC: 27,
                        TAB: 9,
                        RETURN: 13,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40
                    };
            
                function Autocomplete(el, options) {
                    var noop = $.noop,
                        that = this,
                        defaults = {
                            ajaxSettings: {},
                            autoSelectFirst: false,
                            appendTo: document.body,
                            serviceUrl: null,
                            lookup: null,
                            onSelect: null,
                            width: 'auto',
                            minChars: 1,
                            maxHeight: 300,
                            deferRequestBy: 0,
                            params: {},
                            formatResult: Autocomplete.formatResult,
                            delimiter: null,
                            zIndex: 9999,
                            type: 'GET',
                            noCache: false,
                            onSearchStart: noop,
                            onSearchComplete: noop,
                            onSearchError: noop,
                            preserveInput: false,
                            containerClass: 'autocomplete-suggestions',
                            tabDisabled: false,
                            dataType: 'text',
                            currentRequest: null,
                            triggerSelectOnValidInput: true,
                            preventBadQueries: true,
                            lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
                                return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
                            },
                            paramName: 'query',
                            transformResult: function (response) {
                                return typeof response === 'string' ? $.parseJSON(response) : response;
                            },
                            showNoSuggestionNotice: false,
                            noSuggestionNotice: 'No results',
                            orientation: 'bottom',
                            forceFixPosition: false
                        };
            
                    // Shared variables:
                    that.element = el;
                    that.el = $(el);
                    that.suggestions = [];
                    that.badQueries = [];
                    that.selectedIndex = -1;
                    that.currentValue = that.element.value;
                    that.intervalId = 0;
                    that.cachedResponse = {};
                    that.onChangeInterval = null;
                    that.onChange = null;
                    that.isLocal = false;
                    that.suggestionsContainer = null;
                    that.noSuggestionsContainer = null;
                    that.options = $.extend({}, defaults, options);
                    that.classes = {
                        selected: 'autocomplete-selected',
                        suggestion: 'autocomplete-suggestion'
                    };
                    that.hint = null;
                    that.hintValue = '';
                    that.selection = null;
            
                    // Initialize and set options:
                    that.initialize();
                    that.setOptions(options);
                }
            
                Autocomplete.utils = utils;
            
                $.Autocomplete = Autocomplete;
            
                Autocomplete.formatResult = function (suggestion, currentValue) {
                    // Do not replace anything if there current value is empty
                    if (!currentValue) {
                        return suggestion.value;
                    }
                    
                    var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';
            
                    return suggestion.value
                        .replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>')
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/&lt;(\/?strong)&gt;/g, '<$1>');
                };
            
                Autocomplete.prototype = {
            
                    killerFn: null,
            
                    initialize: function () {
                        var that = this,
                            suggestionSelector = '.' + that.classes.suggestion,
                            selected = that.classes.selected,
                            options = that.options,
                            container;
            
                        // Remove autocomplete attribute to prevent native suggestions:
                        that.element.setAttribute('autocomplete', 'off');
            
                        that.killerFn = function (e) {
                            if (!$(e.target).closest('.' + that.options.containerClass).length) {
                                that.killSuggestions();
                                that.disableKillerFn();
                            }
                        };
            
                        // html() deals with many types: htmlString or Element or Array or jQuery
                        that.noSuggestionsContainer = $('<div class="autocomplete-no-suggestion"></div>')
                                                      .html(this.options.noSuggestionNotice).get(0);
            
                        that.suggestionsContainer = Autocomplete.utils.createNode(options.containerClass);
            
                        container = $(that.suggestionsContainer);
            
                        container.appendTo(options.appendTo);
            
                        // Only set width if it was provided:
                        if (options.width !== 'auto') {
                            container.css('width', options.width);
                        }
            
                        // Listen for mouse over event on suggestions list:
                        container.on('mouseover.autocomplete', suggestionSelector, function () {
                            that.activate($(this).data('index'));
                        });
            
                        // Deselect active element when mouse leaves suggestions container:
                        container.on('mouseout.autocomplete', function () {
                            that.selectedIndex = -1;
                            container.children('.' + selected).removeClass(selected);
                        });
            
                        // Listen for click event on suggestions list:
                        container.on('click.autocomplete', suggestionSelector, function () {
                            that.select($(this).data('index'));
                            return false;
                        });
            
                        that.fixPositionCapture = function () {
                            if (that.visible) {
                                that.fixPosition();
                            }
                        };
            
                        $(window).on('resize.autocomplete', that.fixPositionCapture);
            
                        that.el.on('keydown.autocomplete', function (e) { that.onKeyPress(e); });
                        that.el.on('keyup.autocomplete', function (e) { that.onKeyUp(e); });
                        that.el.on('blur.autocomplete', function () { that.onBlur(); });
                        that.el.on('focus.autocomplete', function () { that.onFocus(); });
                        that.el.on('change.autocomplete', function (e) { that.onKeyUp(e); });
                        that.el.on('input.autocomplete', function (e) { that.onKeyUp(e); });
                    },
            
                    onFocus: function () {
                        var that = this;
            
                        that.fixPosition();
            
                        if (that.el.val().length >= that.options.minChars) {
                            that.onValueChange();
                        }
                    },
            
                    onBlur: function () {
                        this.enableKillerFn();
                    },
                    
                    abortAjax: function () {
                        var that = this;
                        if (that.currentRequest) {
                            that.currentRequest.abort();
                            that.currentRequest = null;
                        }
                    },
            
                    setOptions: function (suppliedOptions) {
                        var that = this,
                            options = that.options;
            
                        $.extend(options, suppliedOptions);
            
                        that.isLocal = $.isArray(options.lookup);
            
                        if (that.isLocal) {
                            options.lookup = that.verifySuggestionsFormat(options.lookup);
                        }
            
                        options.orientation = that.validateOrientation(options.orientation, 'bottom');
            
                        // Adjust height, width and z-index:
                        $(that.suggestionsContainer).css({
                            'max-height': options.maxHeight + 'px',
                            'width': options.width + 'px',
                            'z-index': options.zIndex
                        });
                    },
            
            
                    clearCache: function () {
                        this.cachedResponse = {};
                        this.badQueries = [];
                    },
            
                    clear: function () {
                        this.clearCache();
                        this.currentValue = '';
                        this.suggestions = [];
                    },
            
                    disable: function () {
                        var that = this;
                        that.disabled = true;
                        clearInterval(that.onChangeInterval);
                        that.abortAjax();
                    },
            
                    enable: function () {
                        this.disabled = false;
                    },
            
                    fixPosition: function () {
                        // Use only when container has already its content
            
                        var that = this,
                            $container = $(that.suggestionsContainer),
                            containerParent = $container.parent().get(0);
                        // Fix position automatically when appended to body.
                        // In other cases force parameter must be given.
                        if (containerParent !== document.body && !that.options.forceFixPosition) {
                            return;
                        }
            
                        // Choose orientation
                        var orientation = that.options.orientation,
                            containerHeight = $container.outerHeight(),
                            height = that.el.outerHeight(),
                            offset = that.el.offset(),
                            styles = { 'top': offset.top, 'left': offset.left };
            
                        if (orientation === 'auto') {
                            var viewPortHeight = $(window).height(),
                                scrollTop = $(window).scrollTop(),
                                topOverflow = -scrollTop + offset.top - containerHeight,
                                bottomOverflow = scrollTop + viewPortHeight - (offset.top + height + containerHeight);
            
                            orientation = (Math.max(topOverflow, bottomOverflow) === topOverflow) ? 'top' : 'bottom';
                        }
            
                        if (orientation === 'top') {
                            styles.top += -containerHeight;
                        } else {
                            styles.top += height;
                        }
            
                        // If container is not positioned to body,
                        // correct its position using offset parent offset
                        if(containerParent !== document.body) {
                            var opacity = $container.css('opacity'),
                                parentOffsetDiff;
            
                                if (!that.visible){
                                    $container.css('opacity', 0).show();
                                }
            
                            parentOffsetDiff = $container.offsetParent().offset();
                            styles.top -= parentOffsetDiff.top;
                            styles.left -= parentOffsetDiff.left;
            
                            if (!that.visible){
                                $container.css('opacity', opacity).hide();
                            }
                        }
            
                        if (that.options.width === 'auto') {
                            styles.width = that.el.outerWidth() + 'px';
                        }
            
                        $container.css(styles);
                    },
            
                    enableKillerFn: function () {
                        var that = this;
                        $(document).on('click.autocomplete', that.killerFn);
                    },
            
                    disableKillerFn: function () {
                        var that = this;
                        $(document).off('click.autocomplete', that.killerFn);
                    },
            
                    killSuggestions: function () {
                        var that = this;
                        that.stopKillSuggestions();
                        that.intervalId = window.setInterval(function () {
                            if (that.visible) {
                                // No need to restore value when 
                                // preserveInput === true, 
                                // because we did not change it
                                if (!that.options.preserveInput) {
                                    that.el.val(that.currentValue);
                                }
            
                                that.hide();
                            }
                            
                            that.stopKillSuggestions();
                        }, 50);
                    },
            
                    stopKillSuggestions: function () {
                        window.clearInterval(this.intervalId);
                    },
            
                    isCursorAtEnd: function () {
                        var that = this,
                            valLength = that.el.val().length,
                            selectionStart = that.element.selectionStart,
                            range;
            
                        if (typeof selectionStart === 'number') {
                            return selectionStart === valLength;
                        }
                        if (document.selection) {
                            range = document.selection.createRange();
                            range.moveStart('character', -valLength);
                            return valLength === range.text.length;
                        }
                        return true;
                    },
            
                    onKeyPress: function (e) {
                        var that = this;
            
                        // If suggestions are hidden and user presses arrow down, display suggestions:
                        if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
                            that.suggest();
                            return;
                        }
            
                        if (that.disabled || !that.visible) {
                            return;
                        }
            
                        switch (e.which) {
                            case keys.ESC:
                                that.el.val(that.currentValue);
                                that.hide();
                                break;
                            case keys.RIGHT:
                                if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
                                    that.selectHint();
                                    break;
                                }
                                return;
                            case keys.TAB:
                                if (that.hint && that.options.onHint) {
                                    that.selectHint();
                                    return;
                                }
                                if (that.selectedIndex === -1) {
                                    that.hide();
                                    return;
                                }
                                that.select(that.selectedIndex);
                                if (that.options.tabDisabled === false) {
                                    return;
                                }
                                break;
                            case keys.RETURN:
                                if (that.selectedIndex === -1) {
                                    that.hide();
                                    return;
                                }
                                that.select(that.selectedIndex);
                                break;
                            case keys.UP:
                                that.moveUp();
                                break;
                            case keys.DOWN:
                                that.moveDown();
                                break;
                            default:
                                return;
                        }
            
                        // Cancel event if function did not return:
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    },
            
                    onKeyUp: function (e) {
                        var that = this;
            
                        if (that.disabled) {
                            return;
                        }
            
                        switch (e.which) {
                            case keys.UP:
                            case keys.DOWN:
                                return;
                        }
            
                        clearInterval(that.onChangeInterval);
            
                        if (that.currentValue !== that.el.val()) {
                            that.findBestHint();
                            if (that.options.deferRequestBy > 0) {
                                // Defer lookup in case when value changes very quickly:
                                that.onChangeInterval = setInterval(function () {
                                    that.onValueChange();
                                }, that.options.deferRequestBy);
                            } else {
                                that.onValueChange();
                            }
                        }
                    },
            
                    onValueChange: function () {
                        var that = this,
                            options = that.options,
                            value = that.el.val(),
                            query = that.getQuery(value);
            
                        if (that.selection && that.currentValue !== query) {
                            that.selection = null;
                            (options.onInvalidateSelection || $.noop).call(that.element);
                        }
            
                        clearInterval(that.onChangeInterval);
                        that.currentValue = value;
                        that.selectedIndex = -1;
            
                        // Check existing suggestion for the match before proceeding:
                        if (options.triggerSelectOnValidInput && that.isExactMatch(query)) {
                            that.select(0);
                            return;
                        }
            
                        if (query.length < options.minChars) {
                            that.hide();
                        } else {
                            that.getSuggestions(query);
                        }
                    },
            
                    isExactMatch: function (query) {
                        var suggestions = this.suggestions;
            
                        return (suggestions.length === 1 && suggestions[0].value.toLowerCase() === query.toLowerCase());
                    },
            
                    getQuery: function (value) {
                        var delimiter = this.options.delimiter,
                            parts;
            
                        if (!delimiter) {
                            return value;
                        }
                        parts = value.split(delimiter);
                        return $.trim(parts[parts.length - 1]);
                    },
            
                    getSuggestionsLocal: function (query) {
                        var that = this,
                            options = that.options,
                            queryLowerCase = query.toLowerCase(),
                            filter = options.lookupFilter,
                            limit = parseInt(options.lookupLimit, 10),
                            data;
            
                        data = {
                            suggestions: $.grep(options.lookup, function (suggestion) {
                                return filter(suggestion, query, queryLowerCase);
                            })
                        };
            
                        if (limit && data.suggestions.length > limit) {
                            data.suggestions = data.suggestions.slice(0, limit);
                        }
            
                        return data;
                    },
            
                    getSuggestions: function (q) {
                        var response,
                            that = this,
                            options = that.options,
                            serviceUrl = options.serviceUrl,
                            params,
                            cacheKey,
                            ajaxSettings;
            
                        options.params[options.paramName] = q;
                        params = options.ignoreParams ? null : options.params;
            
                        if (options.onSearchStart.call(that.element, options.params) === false) {
                            return;
                        }
            
                        if ($.isFunction(options.lookup)){
                            options.lookup(q, function (data) {
                                that.suggestions = data.suggestions;
                                that.suggest();
                                options.onSearchComplete.call(that.element, q, data.suggestions);
                            });
                            return;
                        }
            
                        if (that.isLocal) {
                            response = that.getSuggestionsLocal(q);
                        } else {
                            if ($.isFunction(serviceUrl)) {
                                serviceUrl = serviceUrl.call(that.element, q);
                            }
                            cacheKey = serviceUrl + '?' + $.param(params || {});
                            response = that.cachedResponse[cacheKey];
                        }
            
                        if (response && $.isArray(response.suggestions)) {
                            that.suggestions = response.suggestions;
                            that.suggest();
                            options.onSearchComplete.call(that.element, q, response.suggestions);
                        } else if (!that.isBadQuery(q)) {
                            that.abortAjax();
            
                            ajaxSettings = {
                                url: serviceUrl,
                                data: params,
                                type: options.type,
                                dataType: options.dataType
                            };
            
                            $.extend(ajaxSettings, options.ajaxSettings);
            
                            that.currentRequest = $.ajax(ajaxSettings).done(function (data) {
                                var result;
                                that.currentRequest = null;
                                result = options.transformResult(data, q);
                                that.processResponse(result, q, cacheKey);
                                options.onSearchComplete.call(that.element, q, result.suggestions);
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                options.onSearchError.call(that.element, q, jqXHR, textStatus, errorThrown);
                            });
                        } else {
                            options.onSearchComplete.call(that.element, q, []);
                        }
                    },
            
                    isBadQuery: function (q) {
                        if (!this.options.preventBadQueries){
                            return false;
                        }
            
                        var badQueries = this.badQueries,
                            i = badQueries.length;
            
                        while (i--) {
                            if (q.indexOf(badQueries[i]) === 0) {
                                return true;
                            }
                        }
            
                        return false;
                    },
            
                    hide: function () {
                        var that = this,
                            container = $(that.suggestionsContainer);
            
                        if ($.isFunction(that.options.onHide) && that.visible) {
                            that.options.onHide.call(that.element, container);
                        }
            
                        that.visible = false;
                        that.selectedIndex = -1;
                        clearInterval(that.onChangeInterval);
                        $(that.suggestionsContainer).hide();
                        that.signalHint(null);
                    },
            
                    suggest: function () {
                        if (!this.suggestions.length) {
                            if (this.options.showNoSuggestionNotice) {
                                this.noSuggestions();
                            } else {
                                this.hide();
                            }
                            return;
                        }
            
                        var that = this,
                            options = that.options,
                            groupBy = options.groupBy,
                            formatResult = options.formatResult,
                            value = that.getQuery(that.currentValue),
                            className = that.classes.suggestion,
                            classSelected = that.classes.selected,
                            container = $(that.suggestionsContainer),
                            noSuggestionsContainer = $(that.noSuggestionsContainer),
                            beforeRender = options.beforeRender,
                            html = '',
                            category,
                            formatGroup = function (suggestion, index) {
                                    var currentCategory = suggestion.data[groupBy];
            
                                    if (category === currentCategory){
                                        return '';
                                    }
            
                                    category = currentCategory;
            
                                    return '<div class="autocomplete-group"><strong>' + category + '</strong></div>';
                                };
            
                        if (options.triggerSelectOnValidInput && that.isExactMatch(value)) {
                            that.select(0);
                            return;
                        }
            
                        // Build suggestions inner HTML:
                        $.each(that.suggestions, function (i, suggestion) {
                            if (groupBy){
                                html += formatGroup(suggestion, value, i);
                            }
            
                            html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value, i) + '</div>';
                        });
            
                        this.adjustContainerWidth();
            
                        noSuggestionsContainer.detach();
                        container.html(html);
            
                        if ($.isFunction(beforeRender)) {
                            beforeRender.call(that.element, container, that.suggestions);
                        }
            
                        that.fixPosition();
                        container.show();
            
                        // Select first value by default:
                        if (options.autoSelectFirst) {
                            that.selectedIndex = 0;
                            container.scrollTop(0);
                            container.children('.' + className).first().addClass(classSelected);
                        }
            
                        that.visible = true;
                        that.findBestHint();
                    },
            
                    noSuggestions: function() {
                         var that = this,
                             container = $(that.suggestionsContainer),
                             noSuggestionsContainer = $(that.noSuggestionsContainer);
            
                        this.adjustContainerWidth();
            
                        // Some explicit steps. Be careful here as it easy to get
                        // noSuggestionsContainer removed from DOM if not detached properly.
                        noSuggestionsContainer.detach();
                        container.empty(); // clean suggestions if any
                        container.append(noSuggestionsContainer);
            
                        that.fixPosition();
            
                        container.show();
                        that.visible = true;
                    },
            
                    adjustContainerWidth: function() {
                        var that = this,
                            options = that.options,
                            width,
                            container = $(that.suggestionsContainer);
            
                        // If width is auto, adjust width before displaying suggestions,
                        // because if instance was created before input had width, it will be zero.
                        // Also it adjusts if input width has changed.
                        if (options.width === 'auto') {
                            width = that.el.outerWidth();
                            container.css('width', width > 0 ? width : 300);
                        }
                    },
            
                    findBestHint: function () {
                        var that = this,
                            value = that.el.val().toLowerCase(),
                            bestMatch = null;
            
                        if (!value) {
                            return;
                        }
            
                        $.each(that.suggestions, function (i, suggestion) {
                            var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
                            if (foundMatch) {
                                bestMatch = suggestion;
                            }
                            return !foundMatch;
                        });
            
                        that.signalHint(bestMatch);
                    },
            
                    signalHint: function (suggestion) {
                        var hintValue = '',
                            that = this;
                        if (suggestion) {
                            hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
                        }
                        if (that.hintValue !== hintValue) {
                            that.hintValue = hintValue;
                            that.hint = suggestion;
                            (this.options.onHint || $.noop)(hintValue);
                        }
                    },
            
                    verifySuggestionsFormat: function (suggestions) {
                        // If suggestions is string array, convert them to supported format:
                        if (suggestions.length && typeof suggestions[0] === 'string') {
                            return $.map(suggestions, function (value) {
                                return { value: value, data: null };
                            });
                        }
            
                        return suggestions;
                    },
            
                    validateOrientation: function(orientation, fallback) {
                        orientation = $.trim(orientation || '').toLowerCase();
            
                        if($.inArray(orientation, ['auto', 'bottom', 'top']) === -1){
                            orientation = fallback;
                        }
            
                        return orientation;
                    },
            
                    processResponse: function (result, originalQuery, cacheKey) {
                        var that = this,
                            options = that.options;
            
                        result.suggestions = that.verifySuggestionsFormat(result.suggestions);
            
                        // Cache results if cache is not disabled:
                        if (!options.noCache) {
                            that.cachedResponse[cacheKey] = result;
                            if (options.preventBadQueries && !result.suggestions.length) {
                                that.badQueries.push(originalQuery);
                            }
                        }
            
                        // Return if originalQuery is not matching current query:
                        if (originalQuery !== that.getQuery(that.currentValue)) {
                            return;
                        }
            
                        that.suggestions = result.suggestions;
                        that.suggest();
                    },
            
                    activate: function (index) {
                        var that = this,
                            activeItem,
                            selected = that.classes.selected,
                            container = $(that.suggestionsContainer),
                            children = container.find('.' + that.classes.suggestion);
            
                        container.find('.' + selected).removeClass(selected);
            
                        that.selectedIndex = index;
            
                        if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
                            activeItem = children.get(that.selectedIndex);
                            $(activeItem).addClass(selected);
                            return activeItem;
                        }
            
                        return null;
                    },
            
                    selectHint: function () {
                        var that = this,
                            i = $.inArray(that.hint, that.suggestions);
            
                        that.select(i);
                    },
            
                    select: function (i) {
                        var that = this;
                        that.hide();
                        that.onSelect(i);
                    },
            
                    moveUp: function () {
                        var that = this;
            
                        if (that.selectedIndex === -1) {
                            return;
                        }
            
                        if (that.selectedIndex === 0) {
                            $(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
                            that.selectedIndex = -1;
                            that.el.val(that.currentValue);
                            that.findBestHint();
                            return;
                        }
            
                        that.adjustScroll(that.selectedIndex - 1);
                    },
            
                    moveDown: function () {
                        var that = this;
            
                        if (that.selectedIndex === (that.suggestions.length - 1)) {
                            return;
                        }
            
                        that.adjustScroll(that.selectedIndex + 1);
                    },
            
                    adjustScroll: function (index) {
                        var that = this,
                            activeItem = that.activate(index);
            
                        if (!activeItem) {
                            return;
                        }
            
                        var offsetTop,
                            upperBound,
                            lowerBound,
                            heightDelta = $(activeItem).outerHeight();
            
                        offsetTop = activeItem.offsetTop;
                        upperBound = $(that.suggestionsContainer).scrollTop();
                        lowerBound = upperBound + that.options.maxHeight - heightDelta;
            
                        if (offsetTop < upperBound) {
                            $(that.suggestionsContainer).scrollTop(offsetTop);
                        } else if (offsetTop > lowerBound) {
                            $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
                        }
            
                        if (!that.options.preserveInput) {
                            that.el.val(that.getValue(that.suggestions[index].value));
                        }
                        that.signalHint(null);
                    },
            
                    onSelect: function (index) {
                        var that = this,
                            onSelectCallback = that.options.onSelect,
                            suggestion = that.suggestions[index];
            
                        that.currentValue = that.getValue(suggestion.value);
            
                        if (that.currentValue !== that.el.val() && !that.options.preserveInput) {
                            that.el.val(that.currentValue);
                        }
            
                        that.signalHint(null);
                        that.suggestions = [];
                        that.selection = suggestion;
            
                        if ($.isFunction(onSelectCallback)) {
                            onSelectCallback.call(that.element, suggestion);
                        }
                    },
            
                    getValue: function (value) {
                        var that = this,
                            delimiter = that.options.delimiter,
                            currentValue,
                            parts;
            
                        if (!delimiter) {
                            return value;
                        }
            
                        currentValue = that.currentValue;
                        parts = currentValue.split(delimiter);
            
                        if (parts.length === 1) {
                            return value;
                        }
            
                        return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
                    },
            
                    dispose: function () {
                        var that = this;
                        that.el.off('.autocomplete').removeData('autocomplete');
                        that.disableKillerFn();
                        $(window).off('resize.autocomplete', that.fixPositionCapture);
                        $(that.suggestionsContainer).remove();
                    }
                };
            
                // Create chainable jQuery plugin:
                $.fn.autocomplete = $.fn.devbridgeAutocomplete = function (options, args) {
                    var dataKey = 'autocomplete';
                    // If function invoked without argument return
                    // instance of the first matched element:
                    if (!arguments.length) {
                        return this.first().data(dataKey);
                    }
            
                    return this.each(function () {
                        var inputElement = $(this),
                            instance = inputElement.data(dataKey);
            
                        if (typeof options === 'string') {
                            if (instance && typeof instance[options] === 'function') {
                                instance[options](args);
                            }
                        } else {
                            // If instance already exists, destroy it:
                            if (instance && instance.dispose) {
                                instance.dispose();
                            }
                            instance = new Autocomplete(this, options);
                            inputElement.data(dataKey, instance);
                        }
                    });
                };
            }));
            
            /**
             * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
             * Licensed under MIT
             * @author Ariel Flesler
             * @version 2.1.3
             */
            ;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
            
        })($);

        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composants
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofac
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
        
            // Au live
            of.head.$doc.onScan( '[data-'+cn+']', function(){
                var $input = $(this),
                    d = $.extend({}, {
                        'url': null,
                        'ignoreParams': null,
                        'type': 'POST',
                        'selectAction': null,
                        'groupBy': null,
                        'appendTo': null,
                        'maxHeight': 300,
                        'extendsParams': {}
                    }, $input.data(cn), true)
                ;
        
                $input.autocomplete({
                    ignoreParams: d.ignoreParams,
                    groupBy: d.groupBy,
                    minChars: d.minChars,
                    maxHeight: d.maxHeight,
                    appendTo: d.appendTo || $('body'),
                    transformResult: function(response) {
                        return {
                            suggestions: $.map(JSON.parse(response).localisations, of.head.accore.resultMap)
                        };
                    },
                    serviceUrl: function(q){
                        return d.url + q;
                    },
                    onSelect: function (suggestion) {
                        if(typeof window[d.selectAction] == 'function') {
                            window[d.selectAction].call(this, suggestion);
                        } else {
                            of.head.accore.selectAction(suggestion);
                        }
                    }
                });
        
                $($input.prop('form')).submit(function(){
                    of.head.accore.submitAction($input);
                });
        
            });
        
        })('ofac');
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofscrollclass
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
        
            // Au chargement
            of.head.$doc.onScan('[data-'+cn+']', function(){
        
                $(this).addClass( (function() {
                    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                    // Windows Phone must come first because its UA also contains "Android"
                    if (/windows phone/i.test(userAgent)) {
                        return "windows-phone";
                    }
        
                    if (/android/i.test(userAgent)) {
                        return "android";
                    }
        
                    // iOS detection from: http://stackoverflow.com/a/9039885/177710
                    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                        return "ios";
                    }
        
                    return "";
                })() ).addClass( (function() {
                    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                        return "touch";
                    }
        
                    return "not-touch";
                })() );
            });
        
        })('ofos');
        
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant oftoggleclass
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
            function _doToggle(event, that) {
                var that = that || this,
                    opt = $(that).data(cn)
                ;
        
                (Array.isArray(opt) ? opt : [opt]).forEach(function(_data){
                    var d = $.extend({}, {
                            'sel': that,
                            'parent': null,
                            'klass': '',
                            'delais': 0,
                            'force': null
                        }, _data, true);
        
        
                    if(event.type) {
                        if('mouseover' == event.type || 'focusin' == event.type) {
                            d.force = _data.force != undefined ? _data.force : (_data.inverted ? 0 : 1);
                        } else if('mouseout' == event.type || 'focusout' == event.type) {
                            d.force = _data.force != undefined  ? _data.force : (_data.inverted ? 1 : 0);
                        }
                    }
        
                    (d.parent ? $(that).parents(d.parent) : $(d.sel)).toggleClass(d.klass, d.force === null ? null : !!d.force);
                });
            }
        
            // Au live
            of.head.$doc
                .on('click.'+cn, '[data-'+cn+']:not(.of-on-over, .of-on-focus, .of-on-scan)',
                    _doToggle
                )
                .on('mouseover.'+cn+' '+
                    'mouseout.'+cn, '.of-on-over:not(.of-delay)[data-'+cn+']',
                    _doToggle
                )
                .on('focusin.'+cn+' '+
                    'focusout.'+cn, '.of-on-focus[data-'+cn+']',
                    function(e){
                        if($(this).val() == '') _doToggle(e, this);
                    }
                )
                .onScan('.of-on-scan[data-'+cn+']', _doToggle)
            ;
            of.head.$doc
                .onScan('.of-on-focus[data-'+cn+']',
                    function(e){
                        if($(this).val() != '') _doToggle(e, this);
                    })
            ;
        
            var timeoutTT = null;
            var timeoutTTc = null;
            var _stillhover = false;
            var _stillhoverc = false;
            var _oneOpened = false;
        
            of.head.$doc.onScan('.of-on-over.of-delay[data-'+cn+']', function(){
                var that = this;
                $(this).on('mouseover.'+cn, function(event){
        
                    if(_stillhoverc == that) {
        
                        if (timeoutTTc) {
                            clearTimeout(timeoutTTc);
                            timeoutTTc = false;
                        }
                        return;
                    }
        
                    _stillhover = that;
        
                    if(timeoutTT) clearTimeout(timeoutTT);
                    timeoutTT = setTimeout(function(){
        
                        if(_stillhover != that || _stillhover == false) return;
        
                        _stillhover = false;
                        _doToggle({'type': 'mouseover'}, that);
        
                        _oneOpened = true;
        
                    }, _oneOpened == true ? 25 : 400);
                })
                .on('mouseout.'+cn, function(){
        
                    _stillhover = false;
                    if(_oneOpened == false) return;
        
                    _stillhoverc = that;
        
                    timeoutTTc = setTimeout(function(){
        
                        _stillhoverc = false;
                        _doToggle({'type': 'mouseout'}, that);
        
                        _oneOpened = false;
        
                    }, 25);
        
                });
        
            });
        
        })('oftoggleclass');
        
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofonglet
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
            // Au live
            of.head.$doc.on('click.'+cn, '[data-'+cn+']', function(){
                var $e = $(this),
                    d = $.extend({}, {
                        'cont': null,
                        'klass': cn+'-on',
                        'ong': null,
                        'closer': false
                    }, $e.data(cn), true),
                    $liens = $(d.cont+"[data-"+cn+"]"),
                    $onglets = $(d.cont).not("[data-"+cn+"]"),
                    already_on = $onglets.filter(d.ong).hasClass(d.klass)
                ;
        
        
                // Enleve le 'on' à tous les onglets
                $liens.removeClass(d.klass);
                $onglets.removeClass(d.klass)
                // Met le 'on' à l'onglet courant (sauf si c'est un click closer et qu'il était 'on')
                    .filter(d.ong) // Onglet
                        .add($e) // Lien
                            .toggleClass(d.klass, d.closer && already_on ? false : null);
        
            });
        
        })('ofonglet');
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofsticky-inside
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
            // Au chargement
            of.head.$doc.onScan('[data-'+cn+']', function(){
                var $e = $(this),
                    opt = $e.data(cn),
                    klass = opt.klass || cn,
                    noTablette = opt.noTablette || true,
                    klass_end = opt.klass || cn + '-end',
                    delta = opt.delta || 0,
                    deltaSel = opt.deltaSel || null,
                    viewPortDelta = opt.viewPortDelta || 0,
                    $cont = opt.cont && $('opt.cont') || $e.parent(),
                    $children = $cont.children(),
                    $prev = $($children[$children.index($e)-1 || 0]),
                    doc = document.documentElement,
                    old_position = 0,
                    old_top = 0,
                    deltaSelH = 0;
        
                if(noTablette && ($('body').hasClass('ios') || $('body').hasClass('android')) && $('body').hasClass('touch')) return;
        
                if(deltaSel && $(deltaSel).length) {
                    var $deltaSel = $(deltaSel);
                }
        
                function _doScroll(evt){
                    // Si la zone dispo du viewport est moins haute que l'élement sticky on fait rien
                    if((doc.clientHeight || 0) - viewPortDelta <= $e.height()) {
                       if($e.hasClass(klass)) {
                            $e.removeClass(klass + ' ' + klass_end);
                            $e.css('top', old_top);
                        }
        
                        return;
                    }
                    if($deltaSel) {
                        deltaSelH = 0;
                        $deltaSel.each(function() {
                            deltaSelH += $deltaSel.height();
                        });
                    }
        
                    var
                        viewport_top = (window.pageYOffset || doc.scrollTop) + delta + deltaSelH,
                        viewport_bottom = (window.pageYOffset || doc.scrollTop) + (doc.clientHeight || 0) - delta,
                        el_top = $e.offset().top,
                        el_bottom = $e.offset().top + $e.height(),
                        cont_bottom = $cont.offset().top + $cont.height(),
                        prev_bottom = $prev && $prev.length ? $prev.offset().top + $prev.outerHeight() : 0,
                        eHasClass = $e.hasClass(klass),
                        eHasClassEnd = $e.hasClass(klass_end)
                    ;
                    // Si on a un élément (pub) qui change la tialle
                    if(old_position && prev_bottom > old_position) {
                        old_position = prev_bottom;
                    }
        
                    // Si on n'est pas fixé ET Si le bas de l'écran rencontre le bas de l'élement
                    if(!eHasClass && viewport_top > el_top && el_bottom < cont_bottom) {
                        old_position = $e.offset().top;
                        old_top = $e.css('top');
        
                        $e.css('width', $e.width());
                        $e.css('top', delta + deltaSelH);
        
                        $e.addClass(klass);
                        el_bottom = $e.offset().top + $e.height();
                        eHasClass = true;
                    }
                    // Sinon si le bas du conteneur est atteint
                    if(eHasClass && !eHasClassEnd && el_bottom >= cont_bottom) {
                        $e.addClass(klass_end);
                        $e.css('top', 'auto');
        
                        eHasClassEnd = true;
                    }
                    // Sinon si le bas du conteneur est atteint en remontant
                    if(eHasClass && eHasClassEnd && viewport_top < $e.offset().top) {
                        $e.removeClass(klass_end);
        
                        $e.css('top', delta + deltaSelH);
                        eHasClassEnd = false;
                    }
                    // Sinon si le HAUT du conteneur est atteint en remontant
                    if(eHasClass && !eHasClassEnd && viewport_top <= old_position ) {
                        $e.removeClass(klass);
                        eHasClass = false;
        
                        $e.css('top', old_top);
                    }
                }
        
                $('body').on('touchmove', _doScroll);
                $(window)
                    .scroll(_doScroll)
                    .scroll();
            });
        
        })('ofsticky-inside');
        
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofwidth
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
        
            // Au chargement
            of.head.$doc.onScan('[data-'+cn+']', function(){
                var $e = $(this),
                    that = this,
                    width = 0,
                    opt = $.extend(true, {}, {
                        'mobileOnly': true,
                        'offset': 0
                    }, $e.data(cn) || {});
        
                if(opt.mobileOnly && document.documentElement.clientWidth >= 768) return;
        
                $e.data('observer', new IntersectionObserver(function(changes){
        
                    $.each(changes, function(i, _change) {
                        var _intersectionRect = _change.intersectionRect;
                        if (_intersectionRect.height * _intersectionRect.width > 0) {
                            $e.data('observer').unobserve(that);
        
                            width = 0;
                            $e.find(opt.sel).each(function(){
                                width = width + $(this).outerWidth(true);
                            });
                            $e.width(Math.floor(width) + 1);
                        }
                    });
        
                }, {
                    rootMargin: opt.offset+'px',
                    root: null
                }));
        
                $e.data('observer').observe(this);
            });
        
        })('ofwidth');
        
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofvwidth
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
        
            // Au chargement
            $(function(){
                var _doWidth = function(){
                    $('[data-'+cn+']').each(function(){
        
                        var $e = $(this),
                            width = 0,
                            opt = $.extend(true, {}, {
                                'mobileOnly': true,
                                'touchOnly': false
                            }, $e.data(cn) || {});
        
                        $e.css("width", (
                            (opt.mobileOnly && !opt.touchOnly && document.documentElement.clientWidth >= 768)
                        ||
                            (opt.touchOnly && !(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch))
                        ) ?
                            ""
                        :
                            document.documentElement.clientWidth);
                    });
                };
        
                // Au chargement
                _doWidth();
                $(window).resize(_doWidth).resize();
            });
        
        })('ofvwidth');
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofscrollclass
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
            // Au chargement
            of.head.$doc.onScan('[data-'+cn+']', function(){
                var that = this,
                    opt = $(this).data(cn),
                    doc = document.documentElement;
        
                if(!Array.isArray(opt)) { opt = [opt]; }
        
                opt.forEach(function(el, i, tab){
                    var $el, d = $.extend({}, {
                            "sel": that,
                            "y": 100,
                            "removeonly": false,
                            "inverted": false,
                            "scrollEl": null,
                            "scrollElBottom": null,
                            "klass": "noscroll",
                            "delta": 0,
                            "what": null
                        }, el, true),
                        $el = $(d.sel),
                        $what = $(d.what || window);
        
                    $what
                        .scroll(function(evt){
        
                            var top = $what.scrollTop(),
                                eHasClass = $el.hasClass(d.klass);
        
                            if( d.scrollEl && $(d.scrollEl).length && $(d.scrollEl).is(':hidden') ) {
                                return;
                            }
        
                            if ((eHasClass && !d.inverted || !eHasClass && d.inverted) && d.scrollEl && $(d.scrollEl).length) {
                                d.y = $(d.scrollEl).offset().top;
                            }
                            if ((eHasClass && !d.inverted || !eHasClass && d.inverted) && d.scrollElBottom && $(d.scrollElBottom).length) {
                                d.y = $(d.scrollElBottom).offset().top + $(d.scrollElBottom).outerHeight();
                            }
                            if(d.deltaSel) {
                                d.delta = 0;
                                d.deltaSel.forEach(function(el){
                                    d.delta += $(el).outerHeight();
                                });
                            }
                            if(d.deltaSelInverted) {
                                d.delta = - d.delta;
                            }
        
                            if(d.inverted){
                                top = top < ( parseFloat( d.y ) + parseFloat( d.delta ) );
                            } else {
                                top = top > ( parseFloat( d.y ) + parseFloat( d.delta ) );
                            }
        
                            if(eHasClass && top) {
                                $el.removeClass(d.klass);
                            } else if(!eHasClass && !top && !d.removeonly) {
                                $el.addClass(d.klass);
                            }
                        })
                        .scroll();
                });
            });
        
        })('ofscrollclass');
        
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofscrollto
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
            // Au chargement
            of.head.$doc.on('click.'+cn, '[data-'+cn+']', function(){
                var $e=$(this),
                    d=$.extend(true, {}, {
                        'duration': 0
                    }, $e.data(cn) || {}),
                    h = 0;
        
                if(d.delta && d.delta.val) {
                    h -= parseFloat( d.delta.val );
                }
                else if(d.delta && d.delta.sel) {
                    $(d.delta.sel).each(function(){
                        h -= $(this).height();
                    });
                }
        
                var scrollto_opt = $.extend(true, {}, {axis:'y', offset:h}, d.scrollto_opt);
        
                setTimeout(function() {
                    $(d.to).length && $(d.what||window).scrollTo($(d.to),d.duration, scrollto_opt);
                }, d.timeout ? d.timeout : 0);
            });
        
        })('ofscrollto');
        
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant ofswipe
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
            // Au chargement
            of.head.$doc.onScan('[data-'+cn+']', function(){
                var $e = $(this),
                    d = $.extend(true, {}, {
                        rambo: 0,
                        sel: null,
                        inactif: 'inactif',
                        swipeActif: true,
                        swipeprev: cn+'prev',
                        swipenext: cn+'next',
                        mobileOnly: false,
                        navSel: null,
                        masque: null,
                        speed: 500,
                        swipe: {
                            threshold: 50,
                            allowPageScroll: "vertical",
                            triggerOnTouchEnd: true
                        }
                    }, $e.data(cn) || {}),
                    $sel = $(d.sel, $e),
                    $navEls = $(d.navSel),
                    sel_width = [],
                    current_sel = d.start_at || 0,
                    maxSel = $sel.length,
                    _init = function(){
                        sel_width = [];
                        var masqueWidth = 0,
                            iWidth = 0,
                            tmpWid = 0,
                            totWid = 0
                        ;
        
                        if(d.masque) {
                            maxSel = 0;
                            masqueWidth = $(d.masque).outerWidth(true);
                        }
                        $sel.each(function(){
                            var thisWidth = $(this).outerWidth(true);
        
                            if(!d.masque) {
                                sel_width[iWidth] = totWid;
        
                                totWid += thisWidth;
                                iWidth++;
        
                            } else if(tmpWid + thisWidth >= masqueWidth) {
                                sel_width[iWidth] = totWid;
        
                                totWid += tmpWid;
                                tmpWid = 0;
                                iWidth++;
                            }
                            tmpWid += thisWidth;
        
                        });
        
                        if(d.masque) {
                            sel_width[iWidth] = totWid;
                            maxSel = iWidth + 1;
                        }
                    }
                ;
        
                if(d.mobileOnly && !$('body').hasClass('mobile')) return;
        
                _init();
        
                // Bouton suivant
                $('[data-'+d.swipenext+']').click(function(){
                    _nextSwipe();
                });
                // Bouton précédent
                $('[data-'+d.swipeprev+']').click(function(){
                    _previousSwipe();
                });
        
                // Rediementionnement de la fenetre, possiblement redimensionnement d élements
                $(window).bind("resize", function(){
                    setTimeout(function(){
                        _init();
                        _SwipeStatus(null, "cancel", null, null);
                        _swipe(sel_width[current_sel], d.speed);
                    }, 250);
                });
        
                $navEls.click(function(){
                    current_sel = $navEls.index($(this));
                    _swipe(sel_width[current_sel], d.speed);
                });
        
                function _previousSwipe() {
                    if(current_sel > 0) {
                        current_sel--;
                    } else if(d.rambo == 2) {
                        current_sel = maxSel -1;
                    }
                    _swipe(sel_width[current_sel], d.speed);
                }
        
                function _nextSwipe() {
                    if(current_sel < (maxSel -1)) {
                        current_sel++;
                    } else if(d.rambo) {
                        current_sel = 0;
                    }
                    _swipe(sel_width[current_sel], d.speed);
                }
        
                function _swipe(distance, duration) {
                    $e.css("transition-duration", (duration / 1000).toFixed(1) + "s");
        
                    //inverse the number we set in the css
                    var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
                    $e.css("transform", "translate(" + value + "px,0)");
        
                    $sel.removeClass('active');
                    $($sel[current_sel]).addClass('active').trigger(cn);
        
                    $navEls.removeClass('active');
                    $($navEls[current_sel]).addClass('active');
        
                    // classes inactif
                    $('[data-'+d.swipenext+'],[data-'+d.swipeprev+']').removeClass(d.inactif);
                    if(current_sel <= 0 && d.rambo != 2) {
                        $('[data-'+d.swipeprev+']').addClass(d.inactif);
                    } else if(current_sel >= (maxSel -1) && !d.rambo) {
                        $('[data-'+d.swipenext+']').addClass(d.inactif);
                    }
        
                    of.head.doAction(cn+'Swipe', current_sel);
                }
        
                function _SwipeStatus(event, phase, direction, distance) {
                    //If we are moving before swipe, and we are going L or R in X mode, or U or D in Y mode then drag.
                    if (phase === "move" && (direction === "left" || direction === "right" || direction === "up" || direction === "down")) {
                        var duration = 0;
                        if('left' === direction) {
                            _swipe((sel_width[current_sel]) + distance, duration);
                        } else if ('right' === direction) {
                            _swipe((sel_width[current_sel]) - distance, duration);
                        } else if (d.swipeToClose != null) { // up or down
                            $(d.swipeToClose).trigger('click.oftoggleclass');
                        }
                    } else if (phase === "cancel") {
                        _swipe(sel_width[current_sel], d.speed);
                    } else if (phase === "end") {
                        if (direction === "right") {
                            _previousSwipe();
                        } else if (direction === "left") {
                            _nextSwipe();
                        }
                    }
                }
        
                if(d.swipeActif){
                    $sel.swipe({
                        triggerOnTouchEnd: d.swipe.triggerOnTouchEnd,
                        allowPageScroll: d.swipe.allowPageScroll,
                        threshold: d.swipe.threshold,
                        swipeStatus: _SwipeStatus
                    });
                }
        
            });
        
        })('ofswipe');
        
        
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        // Composant oflazyload
        //
        // -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
        ;(function(cn){
            of.head.$doc.onScan( '[data-'+cn+']', function(){
                if(!('bind' in Function.prototype)) return;
        
                var FALLBACK_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeNpi/P//PwMlgHHUgFEDgAAgwAD+lBrvy+NcxAAAAABJRU5ErkJggg==';
        
        
                var $e = $(this),
                    that = this,
                    opt = $.extend( {offset: 0}, $e.data(cn) || {} );
        
                // if($e.is("img")) {
                //     $e.attr('src', FALLBACK_IMAGE);
                // }
        
                $e.data('observer', new IntersectionObserver(function(changes){
        
                    $.each(changes, function(i, _change) {
                        var _intersectionRect = _change.intersectionRect;
                        if (_intersectionRect.height * _intersectionRect.width > 0) {
                            that.addEventListener('load', function() {
                                $e.data('observer').unobserve(that);
                            });
                            that.addEventListener('error', function() {
                                that.src = FALLBACK_IMAGE;
                                $e.data('observer').unobserve(that);
                                $e.removeAttr('data-'+cn).removeData(cn);
                            });
        
                            if(opt.srcset) {
                                var res = opt.srcset.split(','),
                                    size = [];
        
                                if(!res.length) return;
        
                                for (var i = 0; i < res.length; i++) {
                                    size = res[i].trim().split(' ');
                                    if (parseInt(size[1].substring(0, size[1].length - 1)) >= $e.width())
                                        break;
                                }
                                opt.src = size[0];
                            }
        
                            if ($e.is("img")) {
                                that.src = opt.src;
                            } else {
                                $e.css("background-image", "url('" + opt.src + "')");
                            }
                            $e.removeAttr('data-'+cn).removeData(cn).addClass('loaded');
                        }
                    });
        
                }, {
                    rootMargin: opt.offset+'px',
                    root: null
                }));
        
                $e.data('observer').observe(this);
        
        
            }); // EO of.head.onScan
        })('oflazyload');

        of.head.asyncLoadOf();
    }, 25);

})();
