/*jslint white: true, browser: true, devel: true, onevar: true, undef: true,
 eqeqeq: true, plusplus: false, bitwise: true, regexp: true,
 newcap: true, immed: true, noempty: true, boss: false, nonew: true, forin: true,
 maxlen: 350, indent: 4 */
/*globals
 $: false,
 window: false,
 Utils: false,
 */
app.Icon = Backbone.Model.extend({

    defaults: {
        icon: '',
        color: '',
        text: ''
    }
});