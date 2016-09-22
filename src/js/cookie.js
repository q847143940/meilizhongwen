// 设置 cookie：

// $.cookie('the_cookie', 'the_value');
// 注：如果 $.cookie 没有第三个参数，那么当浏览器关闭时，该 cookie 将会自动删除。

// 设置一个有效期为 7 天的 cookie：

// $.cookie('the_cookie', 'the_value', {expires: 7});
// 注：$.cookie 第三个参数是一个对象，除了可以设置有效期（expires: 7），还可以设置有效路径（path: '/'）、有效域（domain: 'jquery.com'）及安全性（secure: true）。

// 读取 cookie：

// $.cookie('the_cookie');
// 注：如果没有该 cookie，返回 null。

// 删除 cookie：

// $.cookie('the_cookie', null);
;(function($){
	$.extend({
		cookie:function(name, value, options){
		    if (typeof value != 'undefined') { // name and value given, set cookie
		        options = options || {};
		        if (value === null) {
		            value = '';
		            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
		            options.expires = -1;
		        }
		        var expires = '';
		        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
		            var date;
		            if (typeof options.expires == 'number') {
		                date = new Date();
		                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
		            } else {
		                date = options.expires;
		            }
		            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
		        }
		        // NOTE Needed to parenthesize options.path and options.domain
		        // in the following expressions, otherwise they evaluate to undefined
		        // in the packed version for some reason...
		        var path = options.path ? '; path=' + (options.path) : '';
		        var domain = options.domain ? '; domain=' + (options.domain) : '';
		        var secure = options.secure ? '; secure' : '';
		        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		    } else { // only name given, get cookie
		        var cookieValue = null;
		        if (document.cookie && document.cookie != '') {
		            var cookies = document.cookie.split(';');
		            for (var i = 0; i < cookies.length; i++) {
		                var cookie = jQuery.trim(cookies[i]);
		                // Does this cookie string begin with the name we want?
		                if (cookie.substring(0, name.length + 1) == (name + '=')) {
		                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
		                    break;
		                }
		            }
		        }
		        return cookieValue;
		    }
		}
	});
})(jQuery);

