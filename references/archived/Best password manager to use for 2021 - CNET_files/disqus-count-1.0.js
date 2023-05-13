var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* global disqus_shortname: true */
define([
    'jquery',
    'version!fly/managers/debug',
    'version!fly/components/base'
], function(
    $,
    debug
) {
    debug = debug.init('disqusCount');

    /**
     * Load Disqus comment counts onto the page.
     *
     * @class $.fly.disqusCount
     * @extends $.fly.base
     * @constructor
     */
    $.widget('fly.disqusCount', $.fly.base, {
        options: {
            disqusIdentifier: null,
            disqusUrl: null,
            shortname: null
        },

        // Script DOM ID constant for Disqus
        disqusScriptId: 'dsq-count-scr',

        /**
         * Initialize Disqus counts
         *
         * @private
         * @method _create
         */
        _create: function() {
            this._setup();
            this.updateData(this.$element, this.options.disqusIdentifier, this.options.disqusUrl);
            this.refreshCounts();
        },

        /**
         * Adds required DOM fields to element for Disqus comment counts.
         *
         * @param $element
         * @param id
         * @param url
         */
        updateData: function($element, id, url) {
            debug.log("Loading Disqus counts", id, url);
            $element.addClass('disqus-comment-count');
            $element.attr('data-disqus-identifier', id);
            $element.attr('data-disqus-url', url);
        },

        /**
         * Reset comment counts on the page.
         */
        refreshCounts: function() {
            if (window.DISQUSWIDGETS) {
                window.DISQUSWIDGETS.getCount({reset: true});
            } else {
                // Global var needed for count.js
                disqus_shortname = this.options.shortname;

                require(['//' + this.options.shortname + '.disqus.com/count.js'], function() {
                    debug.log('Loaded disqus count.js');
                });
            }
        }
    });
});

}
/*
     FILE ARCHIVED ON 12:53:53 Jul 07, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:05:56 May 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 230.043
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.054
  cdx.remote: 0.052
  esindex: 0.009
  LoadShardBlock: 138.772 (3)
  PetaboxLoader3.datanode: 195.071 (5)
  load_resource: 371.705 (2)
  PetaboxLoader3.resolve: 288.009 (2)
*/