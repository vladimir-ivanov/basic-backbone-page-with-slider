/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 $: false,
 window: false,
 Utils: false,
 */

app.SliderView = Backbone.View.extend({

    _slidingContainerClass: 'slidingContainer',

    initialize: function (options) {
        options = options || {};

        if (!options.triggerEl instanceof $) {
            throw new Error('triggerEl must be a jquery element');
        }

        this._initializeDomEls();

        options.triggerEl.bind('click', _.bind(this._animate, this));

        $("body").click(_.bind(function (event) {
            //TODO - improve on this condition - class might not be enough if multiple containers are displayed on the page
            if (!$(event.target).is('.' + this._slidingContainerClass)) {
                this._slidingContainer.slideUp();
            }

        }, this));

        this.render();
    },

    _initializeDomEls: function () {
        this._slidingContainer = $(this.make('div', {'class': this._slidingContainerClass}, 'Sliding Element'));
    },

    _animate: function (event) {
        event.stopPropagation();
        this._slidingContainer.slideToggle();
    },

    render: function () {
        $(this.el).append(this._slidingContainer);
    }
});