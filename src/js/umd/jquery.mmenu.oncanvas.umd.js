(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu v4.5.0
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Licensed under the MIT license:
 * http://en.wikipedia.org/wiki/MIT_License
 */
!function(e){function n(n,s,t){if(t)return"object"!=typeof n&&(n={}),n;n=e.extend(!0,{},e[a].defaults,n);for(var o=["position","zposition","modal","moveBackground"],i=0,l=o.length;l>i;i++)"undefined"!=typeof n[o[i]]&&(e[a].deprecated('The option "'+o[i]+'"',"offCanvas."+o[i]),n.offCanvas=n.offCanvas||{},n.offCanvas[o[i]]=n[o[i]]);return n}function s(n){n=e.extend(!0,{},e[a].configuration,n);for(var s=["panel","list","selected","label","spacer"],t=0,o=s.length;o>t;t++)"undefined"!=typeof n[s[t]+"Class"]&&(e[a].deprecated('The configuration option "'+s[t]+'Class"',"classNames."+s[t]),n.classNames[s[t]]=n[s[t]+"Class"]);if("undefined"!=typeof n.counterClass&&(e[a].deprecated('The configuration option "counterClass"',"classNames.counters.counter"),n.classNames.counters=n.classNames.counters||{},n.classNames.counters.counter=n.counterClass),"undefined"!=typeof n.collapsedClass&&(e[a].deprecated('The configuration option "collapsedClass"',"classNames.labels.collapsed"),n.classNames.labels=n.classNames.labels||{},n.classNames.labels.collapsed=n.collapsedClass),"undefined"!=typeof n.header)for(var s=["panelHeader","panelNext","panelPrev"],t=0,o=s.length;o>t;t++)"undefined"!=typeof n.header[s[t]+"Class"]&&(e[a].deprecated('The configuration option "header.'+s[t]+'Class"',"classNames.header."+s[t]),n.classNames.header=n.classNames.header||{},n.classNames.header[s[t]]=n.header[s[t]+"Class"]);for(var s=["pageNodetype","pageSelector","menuWrapperSelector","menuInjectMethod"],t=0,o=s.length;o>t;t++)"undefined"!=typeof n[s[t]]&&(e[a].deprecated('The configuration option "'+s[t]+'"',"offCanvas."+s[t]),n.offCanvas=n.offCanvas||{},n.offCanvas[s[t]]=n[s[t]]);return n}function t(){r=!0,c.$wndw=e(window),c.$html=e("html"),c.$body=e("body"),e.each([i,l,d],function(e,n){n.add=function(e){e=e.split(" ");for(var s in e)n[e[s]]=n.mm(e[s])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu inline panel nopanel list nolist subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},l.mm=function(e){return"mm-"+e},l.add("parent"),d.mm=function(e){return e+".mm"},d.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"),e[a]._c=i,e[a]._d=l,e[a]._e=d,e[a].glbl=c}var a="mmenu",o="4.5.0";if(!e[a]){var i={},l={},d={},r=!1,c={$wndw:null,$html:null,$body:null};e[a]=function(e,s,t){return this.$menu=e,this.opts=s,this.conf=t,this.vars={},this.opts=n(this.opts,this.conf,this.$menu),this._initMenu(),this._init(this.$menu.children(this.conf.panelNodetype)),this},e[a].version=o,e[a].addons=[],e[a].uniqueId=0,e[a].defaults={classes:"",slidingSubmenus:!0,onClick:{setSelected:!0}},e[a].configuration={panelNodetype:"ul, ol, div",transitionDuration:400,openingInterval:25,classNames:{panel:"Panel",selected:"Selected",label:"Label",spacer:"Spacer"}},e[a].prototype={_init:function(n){n=n.not("."+i.nopanel),n=this._initPanels(n),n=this._initLinks(n),n=this._bindCustomEvents(n);for(var s=0;s<e[a].addons.length;s++)"function"==typeof this["_init_"+e[a].addons[s]]&&this["_init_"+e[a].addons[s]](n);this._update()},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(i.wrapper);var n=[i.menu];n.push(i.mm(this.opts.slidingSubmenus?"horizontal":"vertical")),this.opts.classes&&n.push(this.opts.classes),this.$menu.addClass(n.join(" "))},_initPanels:function(n){var s=this;this.__findAddBack(n,"ul, ol").not("."+i.nolist).addClass(i.list);var t=this.__findAddBack(n,"."+i.list).find("> li");this.__refactorClass(t,this.conf.classNames.selected,"selected"),this.__refactorClass(t,this.conf.classNames.label,"label"),this.__refactorClass(t,this.conf.classNames.spacer,"spacer"),t.off(d.setSelected).on(d.setSelected,function(n,s){n.stopPropagation(),t.removeClass(i.selected),"boolean"!=typeof s&&(s=!0),s&&e(this).addClass(i.selected)}),this.__refactorClass(this.__findAddBack(n,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel"),n.add(this.__findAddBack(n,"."+i.list).children().children().filter(this.conf.panelNodetype).not("."+i.nopanel)).addClass(i.panel);var a=this.__findAddBack(n,"."+i.panel),o=e("."+i.panel,this.$menu);a.each(function(){var n=e(this),t=n.attr("id")||s.__getUniqueId();n.attr("id",t)}),a.each(function(){var n=e(this),t=n.is("ul, ol")?n:n.find("ul ,ol").first(),a=n.parent(),o=a.find("> a, > span"),d=a.closest("."+i.panel);if(a.parent().is("."+i.list)){n.data(l.parent,a);var r=e('<a class="'+i.subopen+'" href="#'+n.attr("id")+'" />').insertBefore(o);o.is("a")||r.addClass(i.fullsubopen),s.opts.slidingSubmenus&&t.prepend('<li class="'+i.subtitle+'"><a class="'+i.subclose+'" href="#'+d.attr("id")+'">'+o.text()+"</a></li>")}});var r=this.opts.slidingSubmenus?d.open:d.toggle;if(o.each(function(){var n=e(this),s=n.attr("id");e('a[href="#'+s+'"]',o).off(d.click).on(d.click,function(e){e.preventDefault(),n.trigger(r)})}),this.opts.slidingSubmenus){var c=this.__findAddBack(n,"."+i.list).find("> li."+i.selected);c.parents("li").removeClass(i.selected).end().add(c.parents("li")).each(function(){var n=e(this),s=n.find("> ."+i.panel);s.length&&(n.parents("."+i.panel).addClass(i.subopened),s.addClass(i.opened))}).closest("."+i.panel).addClass(i.opened).parents("."+i.panel).addClass(i.subopened)}else{var c=e("li."+i.selected,o);c.parents("li").removeClass(i.selected).end().add(c.parents("li")).addClass(i.opened)}var u=o.filter("."+i.opened);return u.length||(u=a.first()),u.addClass(i.opened).last().addClass(i.current),this.opts.slidingSubmenus&&a.not(u.last()).addClass(i.hidden).end().appendTo(this.$menu),a},_initLinks:function(n){var s=this;return this.__findAddBack(n,"."+i.list).find("> li > a").not("."+i.subopen).not("."+i.subclose).not('[rel="external"]').not('[target="_blank"]').off(d.click).on(d.click,function(n){var t=e(this),a=t.attr("href")||"";s.__valueOrFn(s.opts.onClick.setSelected,t)&&t.parent().trigger(d.setSelected);var o=s.__valueOrFn(s.opts.onClick.preventDefault,t,"#"==a.slice(0,1));o&&n.preventDefault(),s.__valueOrFn(s.opts.onClick.blockUI,t,!o)&&c.$html.addClass(i.blocking),s.__valueOrFn(s.opts.onClick.close,t,o)&&s.$menu.triggerHandler(d.close)}),n},_bindCustomEvents:function(n){var s=this;return n.off(d.toggle+" "+d.open+" "+d.close).on(d.toggle+" "+d.open+" "+d.close,function(e){e.stopPropagation()}),this.opts.slidingSubmenus?n.on(d.open,function(){return s._openSubmenuHorizontal(e(this))}):n.on(d.toggle,function(){var n=e(this);return n.triggerHandler(n.parent().hasClass(i.opened)?d.close:d.open)}).on(d.open,function(){return e(this).parent().addClass(i.opened),"open"}).on(d.close,function(){return e(this).parent().removeClass(i.opened),"close"}),n},_openSubmenuHorizontal:function(n){if(n.hasClass(i.current))return!1;var s=e("."+i.panel,this.$menu),t=s.filter("."+i.current);return s.removeClass(i.highest).removeClass(i.current).not(n).not(t).addClass(i.hidden),n.hasClass(i.opened)?t.addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(n.addClass(i.highest),t.addClass(i.subopened)),n.removeClass(i.hidden).addClass(i.current),setTimeout(function(){n.removeClass(i.subopened).addClass(i.opened)},this.conf.openingInterval),"open"},_update:function(e){if(this.updates||(this.updates=[]),"function"==typeof e)this.updates.push(e);else for(var n=0,s=this.updates.length;s>n;n++)this.updates[n].call(this,e)},__valueOrFn:function(e,n,s){return"function"==typeof e?e.call(n[0]):"undefined"==typeof e&&"undefined"!=typeof s?s:e},__refactorClass:function(e,n,s){e.filter("."+n).removeClass(n).addClass(i[s])},__findAddBack:function(e,n){return e.find(n).add(e.filter(n))},__transitionend:function(e,n,s){var t=!1,a=function(){t||n.call(e[0]),t=!0};e.one(d.transitionend,a),e.one(d.webkitTransitionEnd,a),setTimeout(a,1.1*s)},__getUniqueId:function(){return i.mm(e[a].uniqueId++)}},e.fn[a]=function(o,i){return r||t(),o=n(o,i),i=s(i),this.each(function(){var n=e(this);n.data(a)||n.data(a,new e[a](n,o,i))})},function(){var n=window.document,s=window.navigator.userAgent,t="ontouchstart"in n,o="WebkitOverflowScrolling"in n.documentElement.style,i=function(){return s.indexOf("Android")>=0?2.4>parseFloat(s.slice(s.indexOf("Android")+8)):!1}();e[a].support={touch:t,oldAndroidBrowser:i,overflowscrolling:function(){return t?o?!0:i?!1:!0:!0}()}}(),e[a].debug=function(){},e[a].deprecated=function(e,n){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn("MMENU: "+e+" is deprecated, use "+n+" instead.")}}}(jQuery);
}));