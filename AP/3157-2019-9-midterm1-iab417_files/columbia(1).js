/*EvaluationKIT START*/var evalkit_jshosted = document.createElement('script');evalkit_jshosted.setAttribute('type', 'text/javascript');evalkit_jshosted.setAttribute('src', 'https://columbia.evaluationkit.com/CanvasScripts/columbia.js?v=3');document.getElementsByTagName('head')[0].appendChild(evalkit_jshosted);/*EvaluationKIT END*/

/*
A simple jQuery function that can add listeners on attribute change.
http://meetselva.github.io/attrchange/
About License:
Copyright (C) 2013-2014 Selvakumar Arumugam
You may use attrchange plugin under the terms of the MIT Licese.
https://github.com/meetselva/attrchange/blob/master/MIT-License.txt
 */
(function($) {
	function isDOMAttrModifiedSupported() {
		var p = document.createElement('p');
		var flag = false;

		if (p.addEventListener) {
			p.addEventListener('DOMAttrModified', function() {
				flag = true
			}, false);
		} else if (p.attachEvent) {
			p.attachEvent('onDOMAttrModified', function() {
				flag = true
			});
		} else { return false; }
		p.setAttribute('id', 'target');
		return flag;
	}

	function checkAttributes(chkAttr, e) {
		if (chkAttr) {
			var attributes = this.data('attr-old-value');

			if (e.attributeName.indexOf('style') >= 0) {
				if (!attributes['style'])
					attributes['style'] = {}; //initialize
				var keys = e.attributeName.split('.');
				e.attributeName = keys[0];
				e.oldValue = attributes['style'][keys[1]]; //old value
				e.newValue = keys[1] + ':'
						+ this.prop("style")[$.camelCase(keys[1])]; //new value
				attributes['style'][keys[1]] = e.newValue;
			} else {
				e.oldValue = attributes[e.attributeName];
				e.newValue = this.attr(e.attributeName);
				attributes[e.attributeName] = e.newValue;
			}

			this.data('attr-old-value', attributes); //update the old value object
		}
	}

	//initialize Mutation Observer
	var MutationObserver = window.MutationObserver
			|| window.WebKitMutationObserver;

	$.fn.attrchange = function(a, b) {
		if (typeof a == 'object') {//core
			var cfg = {
				trackValues : false,
				callback : $.noop
			};
			//backward compatibility
			if (typeof a === "function") { cfg.callback = a; } else { $.extend(cfg, a); }

			if (cfg.trackValues) { //get attributes old value
				this.each(function(i, el) {
					var attributes = {};
					for ( var attr, i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
						attr = attrs.item(i);
						attributes[attr.nodeName] = attr.value;
					}
					$(this).data('attr-old-value', attributes);
				});
			}

			if (MutationObserver) { //Modern Browsers supporting MutationObserver
				var mOptions = {
					subtree : false,
					attributes : true,
					attributeOldValue : cfg.trackValues
				};
				var observer = new MutationObserver(function(mutations) {
					mutations.forEach(function(e) {
						var _this = e.target;
						//get new value if trackValues is true
						if (cfg.trackValues) {							
							e.newValue = $(_this).attr(e.attributeName);
						}						
						if ($(_this).data('attrchange-status') === 'connected') { //execute if connected
							cfg.callback.call(_this, e);
						}
					});
				});

				return this.data('attrchange-method', 'Mutation Observer').data('attrchange-status', 'connected')
						.data('attrchange-obs', observer).each(function() {
							observer.observe(this, mOptions);
						});
			} else if (isDOMAttrModifiedSupported()) { //Opera
				//Good old Mutation Events
				return this.data('attrchange-method', 'DOMAttrModified').data('attrchange-status', 'connected').on('DOMAttrModified', function(event) {
					if (event.originalEvent) { event = event.originalEvent; }//jQuery normalization is not required 
					event.attributeName = event.attrName; //property names to be consistent with MutationObserver
					event.oldValue = event.prevValue; //property names to be consistent with MutationObserver
					if ($(this).data('attrchange-status') === 'connected') { //disconnected logically
						cfg.callback.call(this, event);
					}
				});
			} else if ('onpropertychange' in document.body) { //works only in IE		
				return this.data('attrchange-method', 'propertychange').data('attrchange-status', 'connected').on('propertychange', function(e) {
					e.attributeName = window.event.propertyName;
					//to set the attr old value
					checkAttributes.call($(this), cfg.trackValues, e);
					if ($(this).data('attrchange-status') === 'connected') { //disconnected logically
						cfg.callback.call(this, e);
					}
				});
			}
			return this;
		} else if (typeof a == 'string' && $.fn.attrchange.hasOwnProperty('extensions') &&
				$.fn.attrchange['extensions'].hasOwnProperty(a)) { //extensions/options
			return $.fn.attrchange['extensions'][a].call(this, b);
		}
	}
})(jQuery);


/*===============================
 *
 * Global Variables
 *
 *===============================
//*/
var columbia_timeout_value = 100;
var columbia_interval_value = 2000;
var columbia_roster_link_interval = null;
var columbia_admin_people_link_interval = null;
var columbia_option_student = "option[value='147']";
var columbia_option_teacher = "option[value='149']";
//var columbia_option_lra_student = "option[value='177']";
var columbia_current_user_id = ENV['current_user_id'];
var columbia_tool_id_mycourses = 10924;


/*===============================
 *
 * Run when the html page is ready to load
 *
 *===============================
//*/
try {
    $( document ).ready(function() {
	    columbia_handle_dashboard_tool();
	    columbia_handle_courses_tool();
	    columbia_handle_allcourses_tool();
	    columbia_handle_mycourses_tool();
	    columbia_highlight_my_courses_link();
	    columbia_handle_people_tool();
	    columbia_handle_people_link_in_admin_courses_tool();
    });
} catch(e){
    console.error("document.ready():"+e);
}


/*===============================
 *
 * Dashboard in Global Navigation
 *
 *===============================
//*/
function columbia_handle_dashboard_tool() {
	try {
        if ($("#main #dashboard").length) {
        	var html = 'Dashboard <a href="'+columbia_generate_my_courses_link()+'" style="font-size:0.7em;">My Courses</a>';
        	$("#main #dashboard .ic-Dashboard-header__title").html(html);
        }
	} catch(e){
	    console.error("columbia_handle_dashboard_tool():"+e);
	}
}


/*===============================
 *
 * Courses in Global Navigation
 *
 *===============================
//*/
function columbia_handle_courses_tool() {
	try {
		$("#header #global_nav_courses_link:not(.columbia_bound)").addClass('columbia_bound').on("click", function(){
			if ($(".ReactTrayPortal").length) {
			    //console.log("courses panel opened");
			    var html = '<li class="ic-NavMenu-list-item ic-NavMenu-list-item--feature-item"><a href="'+columbia_generate_my_courses_link()+'" class="ic-NavMenu-list-item__link">My Courses</a></li>';
			    $(".ReactTrayPortal .ic-NavMenu__link-list").append(html);
			}
		});
	} catch(e){
	    console.error("columbia_handle_courses_tool():"+e);
	}
}

function columbia_handle_allcourses_tool() {
	try {
        if ($("#main #content #my_courses_table").length) {
        	var html = 'All Courses <a href="'+columbia_generate_my_courses_link()+'" style="font-size:0.7em;">My Courses</a>';
        	$("#main #content .header-bar h2").html(html);
        }
	} catch(e){
	    console.error("columbia_handle_courses_tool():"+e);
	}
}


/*===============================
 *
 * My Courses
 *
 *===============================
//*/
function columbia_handle_mycourses_tool() {
	try {
        if ($("#header #global_nav_courses_link").length) {
        	var html = '<li class="menu-item ic-app-header__menu-list-item ">'+
				'<a id="global_nav_mycourses_link" href="'+columbia_generate_my_courses_link()+'" class="ic-app-header__menu-list-link">'+
				'<div class="menu-item-icon-container" aria-hidden="true">'+
				'<svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--courses" version="1.1" x="0" y="0" viewBox="0 0 512.004 512.004" enable-background="new 0 0 280 280" xml:space="preserve">'+
				'<path d="M291.057,242.811c1.51,2.953,4.514,4.659,7.62,4.659c1.297,0,2.628-0.299,3.866-0.93 c0.503-0.256,50.731-25.771,75.503-33.596c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.489-6.178-6.989-10.709-5.572 c-26.095,8.252-75.981,33.596-78.097,34.671C290.596,233.467,288.924,238.605,291.057,242.811z"/><path d="M298.677,145.071c1.297,0,2.628-0.299,3.866-0.93c0.503-0.256,50.731-25.771,75.503-33.596 c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.489-6.178-6.989-10.709-5.572c-26.095,8.252-75.981,33.596-78.097,34.671 c-4.198,2.133-5.871,7.27-3.738,11.477C292.567,143.364,295.571,145.071,298.677,145.071z"/><path d="M503.469,128.004c-4.719,0-8.533,3.823-8.533,8.533v332.8c0,14.114-11.486,25.6-25.6,25.6h-204.8v-19.635 c12.442-4.352,44.851-14.498,76.8-14.498c74.334,0,124.809,16.461,125.312,16.631c2.568,0.853,5.436,0.427,7.68-1.178 c2.227-1.604,3.541-4.181,3.541-6.921V93.871c0-4.002-2.773-7.467-6.682-8.329c0,0-6.69-1.493-18.125-3.593 c-4.617-0.853-9.079,2.219-9.933,6.844c-0.853,4.642,2.21,9.088,6.844,9.941c4.361,0.802,8.013,1.51,10.829,2.074v357.188 c-19.337-5.069-62.276-14.259-119.467-14.259c-37.18,0-73.702,12.211-85.001,16.35c-10.044-4.437-40.405-16.35-77.133-16.35 c-58.778,0-107.196,9.694-128,14.618V100.475c17.041-4.19,67.371-15.138,128-15.138c31.113,0,57.796,9.685,68.267,14.063v335.804 c0,3.072,1.655,5.914,4.326,7.424c2.671,1.519,5.965,1.476,8.602-0.111c0.845-0.503,85.393-51.004,160.435-76.015 c3.49-1.169,5.837-4.42,5.837-8.098V8.537c0-2.799-1.374-5.419-3.678-7.014c-2.287-1.596-5.222-1.963-7.859-0.981 C346.856,26.15,277.771,69.141,277.079,69.568c-3.994,2.5-5.214,7.765-2.714,11.759c2.492,3.994,7.757,5.214,11.759,2.714 c0.631-0.401,60.732-37.794,123.477-63.027v331.281c-58.249,20.241-119.066,53.291-145.067,68.087V93.871 c0-3.234-1.826-6.187-4.719-7.637c-1.468-0.725-36.437-17.963-80.614-17.963c-77.107,0-136.388,16.683-138.88,17.399 c-3.661,1.041-6.187,4.395-6.187,8.201v375.467c0,2.671,1.263,5.197,3.388,6.81c1.502,1.135,3.311,1.724,5.146,1.724 c0.785,0,1.57-0.111,2.338-0.333c0.589-0.162,59.597-16.734,134.195-16.734c31.198,0,57.856,9.711,68.267,14.071v20.062h-204.8 c-14.114,0-25.6-11.486-25.6-25.6v-332.8c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v332.8 c0,23.526,19.14,42.667,42.667,42.667h426.667c23.526,0,42.667-19.14,42.667-42.667v-332.8 C512.002,131.827,508.188,128.004,503.469,128.004z"/><path d="M291.057,191.611c1.51,2.953,4.514,4.659,7.62,4.659c1.297,0,2.628-0.299,3.866-0.93 c0.503-0.256,50.731-25.771,75.503-33.596c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.489-6.178-6.989-10.709-5.572 c-26.095,8.252-75.981,33.596-78.097,34.671C290.596,182.267,288.924,187.405,291.057,191.611z"/><path d="M291.057,294.011c1.51,2.953,4.514,4.659,7.62,4.659c1.297,0,2.628-0.299,3.866-0.93 c0.503-0.256,50.731-25.771,75.503-33.596c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.489-6.178-6.989-10.709-5.572 c-26.095,8.252-75.981,33.596-78.097,34.671C290.596,284.667,288.924,289.805,291.057,294.011z"/><path d="M206.748,158.366c-52.693-12.365-112.572,3.388-115.089,4.062c-4.548,1.22-7.253,5.896-6.033,10.453 c1.024,3.814,4.471,6.323,8.235,6.323c0.734,0,1.476-0.094,2.219-0.29c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.067,9.182-1.775,10.257-6.366C214.189,164.032,211.339,159.441,206.748,158.366z"/><path d="M206.748,209.566c-52.693-12.356-112.572,3.388-115.089,4.062c-4.548,1.22-7.253,5.897-6.033,10.453 c1.024,3.814,4.471,6.323,8.235,6.323c0.734,0,1.476-0.094,2.219-0.29c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.067,9.182-1.775,10.257-6.366C214.189,215.232,211.339,210.641,206.748,209.566z"/><path d="M291.057,345.211c1.51,2.953,4.514,4.659,7.62,4.659c1.297,0,2.628-0.299,3.866-0.93 c0.503-0.256,50.731-25.771,75.503-33.596c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.488-6.178-6.989-10.709-5.572 c-26.095,8.252-75.981,33.596-78.097,34.671C290.596,335.867,288.924,341.005,291.057,345.211z"/><path d="M206.748,260.766c-52.693-12.356-112.572,3.379-115.089,4.062c-4.548,1.22-7.253,5.897-6.033,10.453 c1.024,3.814,4.471,6.332,8.235,6.332c0.734,0,1.476-0.102,2.219-0.299c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.067,9.182-1.775,10.257-6.366C214.189,266.432,211.339,261.841,206.748,260.766z"/><path d="M206.748,363.166c-52.693-12.365-112.572,3.388-115.089,4.062c-4.548,1.22-7.253,5.897-6.033,10.453 c1.024,3.814,4.471,6.332,8.235,6.332c0.734,0,1.476-0.102,2.219-0.299c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.058,9.182-1.775,10.257-6.366C214.189,368.832,211.339,364.241,206.748,363.166z"/><path d="M206.748,311.966c-52.693-12.365-112.572,3.379-115.089,4.062c-4.548,1.22-7.253,5.897-6.033,10.453 c1.024,3.814,4.471,6.332,8.235,6.332c0.734,0,1.476-0.102,2.219-0.299c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.067,9.182-1.775,10.257-6.366C214.189,317.632,211.339,313.041,206.748,311.966z"/>'+
				'</svg></div><div class="menu-item__text">My Courses</div></a></li>';
			$(html).insertBefore($("#header #global_nav_courses_link").parent());
/*
				'<svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--courses" version="1.1" x="0" y="0" viewBox="0 0 335.08 335.079" enable-background="new 0 0 280 259" xml:space="preserve">'+
				'<path d="M311.175,115.775c-1.355-10.186-1.546-27.73,7.915-33.621c0.169-0.108,0.295-0.264,0.443-0.398 c7.735-2.474,13.088-5.946,8.886-10.618l-114.102-34.38L29.56,62.445c0,0-21.157,3.024-19.267,35.894 c1.026,17.89,6.637,26.676,11.544,31l-15.161,4.569c-4.208,4.672,1.144,8.145,8.88,10.615c0.147,0.138,0.271,0.293,0.443,0.401 c9.455,5.896,9.273,23.438,7.913,33.626c-33.967,9.645-21.774,12.788-21.774,12.788l7.451,1.803 c-5.241,4.736-10.446,13.717-9.471,30.75c1.891,32.864,19.269,35.132,19.269,35.132l120.904,39.298l182.49-44.202 c0,0,12.197-3.148-21.779-12.794c-1.366-10.172-1.556-27.712,7.921-33.623c0.174-0.105,0.301-0.264,0.442-0.396 c7.736-2.474,13.084-5.943,8.881-10.615l-7.932-2.395c5.29-3.19,13.236-11.527,14.481-33.183 c0.859-14.896-3.027-23.62-7.525-28.756l15.678-3.794C332.949,128.569,345.146,125.421,311.175,115.775z M158.533,115.354 l30.688-6.307l103.708-21.312l15.451-3.178c-4.937,9.036-4.73,21.402-3.913,29.35c0.179,1.798,0.385,3.44,0.585,4.688 L288.14,122.8l-130.897,32.563L158.533,115.354z M26.71,147.337l15.449,3.178l99.597,20.474l8.701,1.782l0,0l0,0l26.093,5.363 l1.287,40.01L43.303,184.673l-13.263-3.296c0.195-1.25,0.401-2.89,0.588-4.693C31.44,168.742,31.651,156.373,26.71,147.337z M20.708,96.757c-0.187-8.743,1.371-15.066,4.52-18.28c2.004-2.052,4.369-2.479,5.991-2.479c0.857,0,1.474,0.119,1.516,0.119 l79.607,25.953l39.717,12.949l-1.303,40.289L39.334,124.07l-5.88-1.647c-0.216-0.061-0.509-0.103-0.735-0.113 C32.26,122.277,21.244,121.263,20.708,96.757z M140.579,280.866L23.28,247.98c-0.217-0.063-0.507-0.105-0.733-0.116 c-0.467-0.031-11.488-1.044-12.021-25.544c-0.19-8.754,1.376-15.071,4.519-18.288c2.009-2.052,4.375-2.479,5.994-2.479 c0.859,0,1.474,0.115,1.519,0.115c0,0,0.005,0,0,0l119.316,38.908L140.579,280.866z M294.284,239.459 c0.185,1.804,0.391,3.443,0.591,4.693l-147.812,36.771l1.292-40.01l31.601-6.497l4.667,1.129l17.492-5.685l80.631-16.569 l15.457-3.18C293.261,219.146,293.466,231.517,294.284,239.459z M302.426,185.084c-0.269,0.006-0.538,0.042-0.791,0.122 l-11.148,3.121l-106.148,29.764l-1.298-40.289l34.826-11.359l84.327-27.501c0.011-0.005,4.436-0.988,7.684,2.315 c3.144,3.214,4.704,9.537,4.52,18.28C313.848,184.035,302.827,185.053,302.426,185.084z"></path>'+
				'<svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--courses" version="1.1" x="0" y="0" viewBox="0 0 512.004 512.004" enable-background="new 0 0 280 259" xml:space="preserve">'+
				'<path d="M291.057,242.811c1.51,2.953,4.514,4.659,7.62,4.659c1.297,0,2.628-0.299,3.866-0.93 c0.503-0.256,50.731-25.771,75.503-33.596c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.489-6.178-6.989-10.709-5.572 c-26.095,8.252-75.981,33.596-78.097,34.671C290.596,233.467,288.924,238.605,291.057,242.811z"/><path d="M298.677,145.071c1.297,0,2.628-0.299,3.866-0.93c0.503-0.256,50.731-25.771,75.503-33.596 c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.489-6.178-6.989-10.709-5.572c-26.095,8.252-75.981,33.596-78.097,34.671 c-4.198,2.133-5.871,7.27-3.738,11.477C292.567,143.364,295.571,145.071,298.677,145.071z"/><path d="M503.469,128.004c-4.719,0-8.533,3.823-8.533,8.533v332.8c0,14.114-11.486,25.6-25.6,25.6h-204.8v-19.635 c12.442-4.352,44.851-14.498,76.8-14.498c74.334,0,124.809,16.461,125.312,16.631c2.568,0.853,5.436,0.427,7.68-1.178 c2.227-1.604,3.541-4.181,3.541-6.921V93.871c0-4.002-2.773-7.467-6.682-8.329c0,0-6.69-1.493-18.125-3.593 c-4.617-0.853-9.079,2.219-9.933,6.844c-0.853,4.642,2.21,9.088,6.844,9.941c4.361,0.802,8.013,1.51,10.829,2.074v357.188 c-19.337-5.069-62.276-14.259-119.467-14.259c-37.18,0-73.702,12.211-85.001,16.35c-10.044-4.437-40.405-16.35-77.133-16.35 c-58.778,0-107.196,9.694-128,14.618V100.475c17.041-4.19,67.371-15.138,128-15.138c31.113,0,57.796,9.685,68.267,14.063v335.804 c0,3.072,1.655,5.914,4.326,7.424c2.671,1.519,5.965,1.476,8.602-0.111c0.845-0.503,85.393-51.004,160.435-76.015 c3.49-1.169,5.837-4.42,5.837-8.098V8.537c0-2.799-1.374-5.419-3.678-7.014c-2.287-1.596-5.222-1.963-7.859-0.981 C346.856,26.15,277.771,69.141,277.079,69.568c-3.994,2.5-5.214,7.765-2.714,11.759c2.492,3.994,7.757,5.214,11.759,2.714 c0.631-0.401,60.732-37.794,123.477-63.027v331.281c-58.249,20.241-119.066,53.291-145.067,68.087V93.871 c0-3.234-1.826-6.187-4.719-7.637c-1.468-0.725-36.437-17.963-80.614-17.963c-77.107,0-136.388,16.683-138.88,17.399 c-3.661,1.041-6.187,4.395-6.187,8.201v375.467c0,2.671,1.263,5.197,3.388,6.81c1.502,1.135,3.311,1.724,5.146,1.724 c0.785,0,1.57-0.111,2.338-0.333c0.589-0.162,59.597-16.734,134.195-16.734c31.198,0,57.856,9.711,68.267,14.071v20.062h-204.8 c-14.114,0-25.6-11.486-25.6-25.6v-332.8c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v332.8 c0,23.526,19.14,42.667,42.667,42.667h426.667c23.526,0,42.667-19.14,42.667-42.667v-332.8 C512.002,131.827,508.188,128.004,503.469,128.004z"/><path d="M291.057,191.611c1.51,2.953,4.514,4.659,7.62,4.659c1.297,0,2.628-0.299,3.866-0.93 c0.503-0.256,50.731-25.771,75.503-33.596c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.489-6.178-6.989-10.709-5.572 c-26.095,8.252-75.981,33.596-78.097,34.671C290.596,182.267,288.924,187.405,291.057,191.611z"/><path d="M291.057,294.011c1.51,2.953,4.514,4.659,7.62,4.659c1.297,0,2.628-0.299,3.866-0.93 c0.503-0.256,50.731-25.771,75.503-33.596c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.489-6.178-6.989-10.709-5.572 c-26.095,8.252-75.981,33.596-78.097,34.671C290.596,284.667,288.924,289.805,291.057,294.011z"/><path d="M206.748,158.366c-52.693-12.365-112.572,3.388-115.089,4.062c-4.548,1.22-7.253,5.896-6.033,10.453 c1.024,3.814,4.471,6.323,8.235,6.323c0.734,0,1.476-0.094,2.219-0.29c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.067,9.182-1.775,10.257-6.366C214.189,164.032,211.339,159.441,206.748,158.366z"/><path d="M206.748,209.566c-52.693-12.356-112.572,3.388-115.089,4.062c-4.548,1.22-7.253,5.897-6.033,10.453 c1.024,3.814,4.471,6.323,8.235,6.323c0.734,0,1.476-0.094,2.219-0.29c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.067,9.182-1.775,10.257-6.366C214.189,215.232,211.339,210.641,206.748,209.566z"/><path d="M291.057,345.211c1.51,2.953,4.514,4.659,7.62,4.659c1.297,0,2.628-0.299,3.866-0.93 c0.503-0.256,50.731-25.771,75.503-33.596c4.489-1.425,6.98-6.221,5.555-10.709c-1.417-4.488-6.178-6.989-10.709-5.572 c-26.095,8.252-75.981,33.596-78.097,34.671C290.596,335.867,288.924,341.005,291.057,345.211z"/><path d="M206.748,260.766c-52.693-12.356-112.572,3.379-115.089,4.062c-4.548,1.22-7.253,5.897-6.033,10.453 c1.024,3.814,4.471,6.332,8.235,6.332c0.734,0,1.476-0.102,2.219-0.299c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.067,9.182-1.775,10.257-6.366C214.189,266.432,211.339,261.841,206.748,260.766z"/><path d="M206.748,363.166c-52.693-12.365-112.572,3.388-115.089,4.062c-4.548,1.22-7.253,5.897-6.033,10.453 c1.024,3.814,4.471,6.332,8.235,6.332c0.734,0,1.476-0.102,2.219-0.299c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.058,9.182-1.775,10.257-6.366C214.189,368.832,211.339,364.241,206.748,363.166z"/><path d="M206.748,311.966c-52.693-12.365-112.572,3.379-115.089,4.062c-4.548,1.22-7.253,5.897-6.033,10.453 c1.024,3.814,4.471,6.332,8.235,6.332c0.734,0,1.476-0.102,2.219-0.299c0.572-0.162,58.223-15.326,106.778-3.934 c4.565,1.067,9.182-1.775,10.257-6.366C214.189,317.632,211.339,313.041,206.748,311.966z"/>'+
//*/
        }
	} catch(e){
	    console.error("columbia_handle_mycourses_tool():"+e);
	}
}

function columbia_generate_my_courses_link() {
	try {
		return '/users/'+columbia_current_user_id+'/external_tools/'+columbia_tool_id_mycourses
	} catch(e){
	    console.error("columbia_generate_my_courses_link():"+e);
	    return '/courses';
	}
}

function columbia_highlight_my_courses_link() {
	try {
		var mclink = columbia_generate_my_courses_link();
		if (window.location.href.indexOf(mclink) != -1) {
			if ($("#header #global_nav_mycourses_link").length) {
				$("#header #global_nav_mycourses_link").parent().addClass("ic-app-header__menu-list-item--active");
			}
		}
	} catch(e){
	    console.error("columbia_highlight_my_courses_link():"+e);
	}
}


/*===============================
 *
 * People Tool
 *
 *===============================
//*/
function columbia_handle_people_tool() {
	try {
        if ($("#addUsers").length) {
            $("#addUsers:not(.columbia_bound)").addClass('columbia_bound').on("click", function(){
                setTimeout(columbia_change_people, columbia_timeout_value);
            });
            columbia_roster_link_interval = setInterval(columbia_check_roster_links_click, columbia_interval_value);
        } else {
			columbia_check_people_page();
        }
	} catch(e){
	    console.error("columbia_handle_people_tool():"+e);
	}
}

function columbia_check_people_page() {
	$('#wrapper .ic-app-crumbs #breadcrumbs li a').each(function(i, el) {
		if ($.trim($(this).text()).toLowerCase() === 'people') {
			if ($(this).attr('href').endsWith('users')) {
	            setTimeout(columbia_handle_people_tool, columbia_timeout_value);
			}
		}
	});
}

function columbia_check_roster_links_click() {
	try {
        $('table.roster div.admin-links:not(.columbia_bound)').addClass('columbia_bound').on('click', function(){
            //console.log( "admin-links");
            setTimeout(columbia_roster_role_selection, columbia_timeout_value);
        });
	} catch(e){
	    console.error("columbia_check_roster_links_click():"+e);
	}
}

function columbia_change_people() {
	try {
		if ($("#add_people_modal").length) {
			var uni = $("#add_people_modal label[for=peoplesearch_radio_unique_id] span:nth-child(2)");
			uni.text('UNI');
			$("#add_people_modal #peoplesearch_radio_unique_id:not(.columbia_bound)").addClass('columbia_bound').on("click", function(){
			    setTimeout(columbia_change_example_uni, columbia_timeout_value/2);
			});
			$("#add_people_modal #peoplesearch_radio_cc_path:not(.columbia_bound)").addClass('columbia_bound').on("click", function(){
			    setTimeout(columbia_change_example_email, columbia_timeout_value/2);
			});
			$("#add_people_modal button#addpeople_next:not(.columbia_bound)").addClass('columbia_bound').on("click", function(){
				setTimeout(function(){
					$("#add_people_modal button#addpeople_back:not(.columbia_bound)").addClass('columbia_bound').on("click", function(){
						setTimeout(columbia_change_people, columbia_timeout_value/2);
					});
				}, 1000);
			}).attrchange({
				trackValues: true,
			    /* enables tracking old and new values */
			    callback: function(e) { //callback handler on DOM changes
			    	if ("aria-disabled" === e.attributeName) {
			    		if (!e.newValue) {
			    			let roleVal = $("#add_people_modal #peoplesearch_select_role").val();
			    			if (roleVal === "" || roleVal === "Please select a role") {
			    				$(this).attr("aria-disabled", true);
			    			}
			    		}
			    	}
// 			    	console.log("attributeName="+e.attributeName+", oldValue="+e.oldValue+", newValue="+e.newValue);
			    }
			});
			columbia_change_add_users();
			$("#add_people_modal button#addpeople_next").css("visibility", "hidden");
			$("#add_people_modal #peoplesearch_radio_unique_id").click();
		} else {
			setTimeout(columbia_change_people, columbia_timeout_value);
		}
	} catch(e){
	    console.error("columbia_change_people():"+e);
	}
}

function columbia_change_add_users() {
	try {
        $('#add_people_modal div.addpeople__peoplesearch textarea:not(.columbia_bound)').addClass('columbia_bound').on('keyup', function(){
            // console.log( "change users to add="+$(this).val() );
            if ($(this).val() === "") {
            	$("#add_people_modal button#addpeople_next").css("visibility", "hidden");
            } else {
            	var roleSelection = $("#add_people_modal #peoplesearch_select_role").val();
            	// console.log( "roleSelection after changing users to add="+roleSelection );
            	if (roleSelection === "" || roleSelection === "Please select a role") {
            		$("#add_people_modal button#addpeople_next").css("visibility", "hidden");
            	} else {
            		$("#add_people_modal button#addpeople_next").css("visibility", "visible");
            	}
            }
        });
	} catch(e){
	    console.error("columbia_change_add_users():"+e);
	}
}

function columbia_change_people_role_for_select() {
	try {
			var roleSelection = $("#add_people_modal #peoplesearch_select_role");
			if (roleSelection.length) {
				roleSelection.find(columbia_option_student).val('').text('Please select a role');
				roleSelection.find(columbia_option_teacher).remove();
				columbia_hide_lra_roles(roleSelection);
				if (!roleSelection.hasClass("columbia_bound")) {
					roleSelection.addClass("columbia_bound").on("change", function(){
						// console.log( "roleSelection="+$(this).val() );
						if ($(this).val() === "") {
							// $("#add_people_modal button#addpeople_next").attr("aria-disabled", true);
							$("#add_people_modal button#addpeople_next").css("visibility", "hidden");
						} else {
							var cus = $("#add_people_modal div.addpeople__peoplesearch textarea").val();
							// console.log( "user list to add="+cus );
							if (cus === "") {
								// $("#add_people_modal button#addpeople_next").attr("aria-disabled", true);
								$("#add_people_modal button#addpeople_next").css("visibility", "hidden");
							} else {
								// $("#add_people_modal button#addpeople_next").removeAttr("aria-disabled");
								$("#add_people_modal button#addpeople_next").css("visibility", "visible");
							}
						}
					});
				}

				//console.log( "roleSelection="+roleSelection.val() );
			}
	} catch(e){
	    console.error("columbia_change_people_role():"+e);
	}
}

function columbia_change_people_role() {
	try {
		var roleSelection = $("#add_people_modal .peoplesearch__selection #peoplesearch_select_role");
		if (roleSelection.length) {
			roleSelection.val('Please select a role');
			if (!roleSelection.hasClass("columbia_bound")) {
				roleSelection.addClass("columbia_bound").on("click", function(){
					setTimeout("columbia_override_role_selection();", 100);
				}).on("mouseout", function(){
					columbia_reset_role_selection(roleSelection);
				}).on("blur", function(){
					columbia_reset_role_selection(roleSelection);
					columbia_enable_next_button_for_add_user(roleSelection.val());
					columbia_handle_role_selection_by_arrow();
				});
			}
		
			columbia_handle_role_selection_by_arrow();
			columbia_handle_limit_privileges_to_course_section();
		}
	} catch(e){
	    console.error("columbia_change_people_role():"+e);
	}
}

function columbia_handle_role_selection_by_arrow() {
	try {
		let selections = $("#add_people_modal .peoplesearch__selections");
		let roleNsection = $("label[for='peoplesearch_select_role'], label[for='peoplesearch_select_section']");
		if (roleNsection.length) {
			if (!roleNsection.hasClass("columbia_bound")) {
				roleNsection.addClass("columbia_bound").on("click", function(){
					setTimeout("columbia_override_role_selection();", 100);
				}).on("mouseout", function(){
					setTimeout("columbia_override_role_selection();", 100);
				});
			}
		}
	} catch(e){
	    console.error("columbia_handle_role_selection_by_arrow():"+e);
	}
}

function columbia_handle_limit_privileges_to_course_section() {
	try {
		let limitPrivileges = $("#add_people_modal .peoplesearch__selections div[data-cid='Checkbox']");
		if (limitPrivileges.length) {
			if (!limitPrivileges.hasClass("columbia_bound")) {
				limitPrivileges.addClass("columbia_bound").on("click", function(){
					setTimeout("columbia_reset_role_selection();", 100);
				});
			}
		}
	} catch(e){
	    console.error("columbia_handle_limit_privileges_to_course_section():"+e);
	}
}

function columbia_reset_role_selection(roleSelection) {
	if (!roleSelection) {
		roleSelection = $("#add_people_modal #peoplesearch_select_role");
	}
	if (roleSelection.val() === 'Student' || roleSelection.val() === 'Teacher') {
		roleSelection.val('Please select a role');
	}
}

function columbia_enable_next_button_for_add_user(selectedRole) {
    let userinfo = $('#add_people_modal div.addpeople__peoplesearch textarea.columbia_bound').val();
    if (userinfo === "") {
    	$("#add_people_modal button#addpeople_next").css("visibility", "hidden");
    } else {
    	if (selectedRole === "" || selectedRole === "Please select a role") {
    		$("#add_people_modal button#addpeople_next").css("visibility", "hidden");
    	} else {
    		$("#add_people_modal button#addpeople_next").css("visibility", "visible");
    	}
    }
}

function columbia_override_role_selection() {
	let roleSelection = $("#add_people_modal #peoplesearch_select_role");
	//console.log( "for click, roleSelection="+roleSelection.val() );
	columbia_reset_role_selection(roleSelection);
	let options = $('div[data-cid="Options"] ul[role="listbox"]');
	//console.log("options=" + options.html());
	if (options.length > 0) {
		options.children().each(function(i, el) {
			let opt = $(el).find('#147');
			if (opt.length > 0) {
				$(el).remove();
			} else {
				opt = $(el).find('#149');
				if (opt.length > 0) {
					$(el).remove();
				}
			}
		});
		options.on("mousemove", function(){
			columbia_reset_role_selection(roleSelection);
			columbia_handle_role_selection_by_arrow();
		}).on("mouseout", function(){
			columbia_reset_role_selection(roleSelection);
			columbia_handle_role_selection_by_arrow();
		}).on("click", function(){
			columbia_enable_next_button_for_add_user(roleSelection.val());
			columbia_handle_role_selection_by_arrow();
		});
	}
	columbia_handle_role_selection_by_arrow();
}

function columbia_change_example_uni() {
	try {
	    var exm = $("#add_people_modal div.addpeople__peoplesearch").find("fieldset:nth-child(2) div");
	    exm.find("span:nth-child(1)").text('Example:');
	    exm.find("span:nth-child(3)").text('abc1234, xyz9876');
        columbia_change_people_role();
	} catch(e){
	    console.error("columbia_change_example_uni():"+e);
	}
}

function columbia_change_example_email() {
	try {
	    var exm = $("#add_people_modal div.addpeople__peoplesearch").find("fieldset:nth-child(2) div");
	    exm.find("span:nth-child(1)").text('Note:');
	    exm.find("span:nth-child(3)").text('add the email address listed in the Columbia directory');
	    //https://directory.columbia.edu/people/
        columbia_change_people_role();
	} catch(e){
	    console.error("columbia_change_example_email():"+e);
	}
}

function columbia_roster_role_selection() {
	try {
		var editRoles = $("div.ui-dialog div#edit_roles select#role_id");
		if (editRoles.length) {
			//console.log("role menu");
			editRoles.find(columbia_option_student).remove();
			editRoles.find(columbia_option_teacher).remove();
			columbia_hide_lra_roles(editRoles);
			var sval = editRoles.find("option:first-child").val();
			editRoles.val(sval).change();
		}
	} catch(e){
	    console.error("columbia_roster_role_selection():"+e);
	}
}

function columbia_hide_lra_roles(elem) {
	try {
		elem.find("option").each(function(i, el) {
			//console.error($(this).text());
			if ($(this).text().indexOf("LRA ") > -1) {
				$(this).remove();
			}
		});
	} catch(e){
	    console.error("columbia_hide_lra_roles():"+e);
	}
}

/*===============================
 *
 * Admin Courses Tool
 *
 *===============================
//*/
var columbia_admin_timeout_value = 1000;
var columbia_timeout_admin_courses_counter = 0;
var columbia_timeout_admin_courses_trial = 10;
function columbia_handle_people_link_in_admin_courses_tool() {
	try {
		setTimeout(columbia_check_admin_courses_page, columbia_admin_timeout_value);
	} catch(e){
	    console.error("columbia_handle_people_link_in_admin_courses_tool():"+e);
	}
}

function columbia_check_admin_courses_page() {
	try {
		columbia_timeout_admin_courses_counter++;
		var $crsForm = $('#content > div > div:nth-child(2) > form');
		if ($crsForm.length) {
			var btnText = $crsForm.find('button').text();
			// console.log('button: '+btnText);
			// console.log('breadcrumbs('+new Date()+'): '+$('#wrapper .ic-app-crumbs #breadcrumbs > ul > li:nth-child(3) span').text());
			if ('Course' === btnText) {
				columbia_admin_people_link_interval = setInterval(columbia_check_admin_people_links_click, columbia_interval_value);
			} else {
				if (columbia_timeout_admin_courses_counter < columbia_timeout_admin_courses_trial) {
			    	setTimeout(columbia_check_admin_courses_page, columbia_admin_timeout_value);
				}
			}
		} else {
			if (columbia_timeout_admin_courses_counter < columbia_timeout_admin_courses_trial) {
		    	setTimeout(columbia_check_admin_courses_page, columbia_admin_timeout_value);
			}
		}
	} catch(e){
	    console.error("columbia_check_admin_courses_page():"+e);
		if (columbia_timeout_admin_courses_counter < columbia_timeout_admin_courses_trial) {
	    	setTimeout(columbia_check_admin_courses_page, columbia_admin_timeout_value);
		}
	}
}

function columbia_check_admin_people_links_click() {
	try {
        $('tbody[data-automation="courses list"] tr > td:nth-child(8) > span:nth-child(1) > button:not(.columbia_bound)').addClass('columbia_bound').on('click', function(){
            setTimeout(columbia_change_people, columbia_timeout_value);
        });
	} catch(e){
	    console.error("columbia_check_admin_people_links_click():"+e);
	}
}


/*===============================
 *
 * Miscellaneous
 *
 *===============================
//*/


/*===============================
 *
 * Google Analytics
 *
 *===============================
//*/
//Minified working as of Aug 28, 2019
function removeStorage(e){try{localStorage.removeItem(e),localStorage.removeItem(e+"_expiresIn")}catch(t){return console.log("removeStorage: Error removing key ["+e+"] from localStorage: "+JSON.stringify(t)),!1}return!0}function getStorage(e){var t=Date.now(),o=localStorage.getItem(e+"_expiresIn");if(null==o&&(o=0),o<t)return removeStorage(e),null;try{return localStorage.getItem(e)}catch(t){return console.log("getStorage: Error reading key ["+e+"] from localStorage: "+JSON.stringify(t)),null}}function setStorage(e,t,o){o=null==o?86400:Math.abs(o);var s=Date.now()+1e3*o;try{localStorage.setItem(e,t),localStorage.setItem(e+"_expiresIn",s)}catch(t){return console.log("setStorage: Error setting key ["+e+"] in localStorage: "+JSON.stringify(t)),!1}return!0}async function coursesRequest(e){let t=await fetch("/api/v1/users/self/courses?per_page=100"),o=await t.text();o=o.substr(9),o=JSON.parse(o);var s=JSON.stringify(o);return setStorage("ga_enrollments",s,null),parseCourses(e,s)}function parseCourses(e,t){if(null!=t){let s=JSON.parse(t);for(var o=0;o<s.length;o++)if(s[o].id==e)return s[o]}return null}function gaCourseDimensions(e){custom_ga("set","dimension4",e.id),custom_ga("set","dimension5",e.name),custom_ga("set","dimension6",e.account_id),custom_ga("set","dimension7",e.enrollment_term_id),custom_ga("set","dimension8",e.enrollments[0].type),custom_ga("send","pageview")}function googleAnalyticsCode(e){var t,o,s,n;if(custom_ga("create",e,"auto"),t=ENV.current_user_id,o=ENV.current_user_roles,custom_ga("set","userId",t),custom_ga("set","dimension1",t),custom_ga("set","dimension3",o),n=window.location.pathname.match(/\/courses\/(\d+)/)){n=n[1],s=0;try{let e=getStorage("ga_enrollments");if(null!=e){var r=parseCourses(n,e);null===r?coursesRequest(n).then(e=>{null===e?(custom_ga("set","dimension4",n),custom_ga("send","pageview")):gaCourseDimensions(e)}):gaCourseDimensions(r)}else coursesRequest(n).then(e=>{null===e?(custom_ga("set","dimension4",n),custom_ga("send","pageview")):gaCourseDimensions(e)})}catch(e){if((s+=1)>5)return custom_ga("set","dimension4",n),void custom_ga("send","pageview")}}else custom_ga("send","pageview")}!function(e,t,o,s,n,r,a){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,r=t.createElement(o),a=t.getElementsByTagName(o)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",a.parentNode.insertBefore(r,a)}(window,document,"script",0,"custom_ga");
googleAnalyticsCode("UA-77307749-1");
