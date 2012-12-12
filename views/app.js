/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 $: false,
 window: false,
 Utils: false,
 */

app.AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    _el: $('#main'),
    _collection: {},

    initialize: function (options) {
        options = options || {};
        if (!options.collection instanceof Backbone.Collection) {
            throw new Error('Collection must be an instance of Backbone Collection');
        }

        this._initializeDomEls();

        this._collection = options.collection;
        // could use sync event or callback on fetch - in that case we need to bring the fetch method invocation in here  e.g.
        // this._collection.fetch({success: _.bind(this.render, this)});
        this._collection.on('sync', this.render, this);
    },

    _initializeDomEls: function () {
        //alternative way to add elements dynamically to the page
        var infoEl = $(this.make('span', {'class': 'info'}, 'i'));

        this._imagesListEl = $(this.make('ul', {id: 'images'}));

        this._titleEl = $('header h1');
        this._titleEl.append(infoEl);
        this._slidingContainer = new app.SliderView({triggerEl: infoEl});
    },

    render: function () {
        this._collection.each(function (model) {
            //TODO - move the template outside the js file - e.g. index.html and reference with $('#imageList')
            var listItem = _.template('<li class="item" style="background-color:<%= color %>"><%= text%></li>', model.toJSON());
            // or alternatively
            this._imagesListEl.append(listItem);
        }, this);

        this._el.append(this._slidingContainer.el);
        this._el.append(this._imagesListEl);
    }
});