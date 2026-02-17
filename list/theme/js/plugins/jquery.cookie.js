/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};
	
	$.getExpiresDate = function () {
		var expiresDate = new Date('9999-12-31');
		return expiresDate;
	};
}));

/**
 *   
  var cookieList = $.fn.cookieList("key값");
  function setCookie(url, name, age){
      
     var obj = new Object();
      obj.url = url;
      obj.name= name;
      obj.age = age;

      cookieList.add(obj);
  }
 * @param $
 */
(function ($) {
    $.fn.extend({
        cookieList: function (cookieName) {
            return {
                add: function (val) {
                    var array = this.items();
                    //현재  동일값 존재 여부 확인 후 없으면 넣는다.
                    //console.log("this.items().indexOf(val):"+this.indexOf(val));
                    //console.log("this.items().length():"+this.length());
                    //this.hasitem(val);
                    //console.log(typeof(this.hasitem(val)));
                    if(typeof(this.hasitem(val))== "undefined"){
                        array.push(val);
                        var inStr = JSON.stringify(array);
                        $.cookie(cookieName, inStr, { expires: $.getExpiresDate(), path: '/' });
                    }else{
                        //console.log(this.items().indexOf(val));
                    	//console.log("index 존재:"+val);
                    }
                },
                remove: function (val) {
                    var items = this.items();
                    var index = items.indexOf(val);
                    if (index != -1) {
                        items.splice(index, 1);
                        $.cookie(cookieName, items.join(','), { expires: $.getExpiresDate(), path: '/' });
                    }
                },
                indexOf: function (val) {
                    return this.items().indexOf(val);
                },
                clear: function () {
                    $.cookie(cookieName, null, { expires: $.getExpiresDate(), path: '/' });
                },
                items: function () {
                    var cookie = $.cookie(cookieName);
                    return cookie ? JSON.parse(cookie):[];
                },
                hasitem: function (val){
                    for (var k in this.items()){
                        var entry1 = JSON.stringify(this.items()[k]);
                        var val1 = JSON.stringify(val);
                        if(val1 == entry1){
                            //console.log("key:"+k);
                            return k;
                        }
                    }
                },
                length: function () {
                    return this.items().length;
                },
            };
        }
    });
})(jQuery);
