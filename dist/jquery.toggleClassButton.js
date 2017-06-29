/*
 *  jQuery Toggle Class Button - v1.0.0
 *  
 *  https://github.com/bberg11/jquery-toggleClassButton
 *
 *  Made by Brian Berg
 *  Under MIT License
 */
;(function ($, window, document, undefined) {

    'use strict';

    var pluginName = 'toggleClassButton';

    function Plugin(element, options) {
        this.element = element;
        this._name = pluginName;
        this._defaults = $.fn[pluginName].defaults;

        this.options = $.extend({}, this._defaults, options);

        this.init();
    }

    $.extend(Plugin.prototype, {

        init: function () {
            this.buildCache();
            this.bindEvents();
        },

        destroy: function () {
            this.unbindEvents();
            this.$element.removeData();
        },

        buildCache: function () {
            this.$element = $(this.element);
        },

        bindEvents: function () {
            var plugin = this;

            plugin.$element.on(this.options.event + '.' + plugin._name, function () {
                plugin.toggleClassNameOnTarget.call(plugin);

            });
        },

        unbindEvents: function () {
            this.$element.off('.' + this._name);
        },

        toggleClassNameOnTarget: function () {
            var $target = $(this.options.target, this.options.context);

            $target.toggleClass(this.options.className);
        }

    });

    $.fn[pluginName] = function (options) {
        this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });

        return this;
    };

    $.fn[pluginName].defaults = {
        event: 'click',
        target: '',
        className: '',
        context: 'body'
    };

})(jQuery, window, document);
