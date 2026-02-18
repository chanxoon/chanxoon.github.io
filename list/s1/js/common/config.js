$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        var name = $.trim(this.name);
        var value = $.trim(this.value);

        if (o[name] != null) {
            if (!o[name].push) {
                o[name] = [o[name]];
            }
            o[name].push(value || '');
        } else {
            o[name] = value || '';
        }
    });
    return o;
};

$.ajaxSetup({
    beforeSend(xhr) {
        xhr.setRequestHeader('AJAX', true);
    },
    error(error) {
        var oError = JSON.parse(error.responseText);

        alert(oError.errorMsg);
    },
});

$.extend({
    loading: {
        open() {
            $('div#loading').show();
        },
        close() {
            var $loading = $('div#loading');

            if ($loading.length > 0) {
                $loading.hide();
            }
        },
    },
    extendAjax(settings) {
        var { confirmMessage } = settings;
        if (confirmMessage && !confirm(confirmMessage)) {
            return false;
        }

        if (settings.loading) {
            $.loading.open();
        }

        var _settings = {
            url: settings.url,
            type: settings.type,
            data: settings.data,
            dataType: settings.dataType || 'json',
            async: true,
            cache: false,
            success(result) {
                $.loading.close();

                if (settings.success instanceof Function) {
                    if (settings.loading) {
                        $.loading.close();
                    }

                    settings.success(result);
                }
            },
            error(error) {
                $.loading.close();
                common.captcha.refresh();

                if (settings.error instanceof Function) {
                    settings.error(error);
                } else if (error) {
                    var oError = JSON.parse(error.responseText);

                    if (oError.errorMsg) {
                        alert(oError.errorMsg);
                    }

                    if (error.status === 401) {
                        var { redirectUrl } = oError;

                        if (oError.errorCode === 'UNAUTHORIZED_WEB_MEMBER') {
                            redirectUrl =
                                redirectUrl + +'?continue=' + encodeURIComponent(location.pathname + location.search);
                        }

                        location.href = redirectUrl;
                    }
                } else {
                    alert('처리 중 오류가 발생하였습니다.');
                }
            },
        };

        if (typeof settings.async !== undefined && settings.async === false) _settings.async = settings.async;
        if (typeof settings.cache !== undefined && settings.cache === false) _settings.cache = settings.cache;

        if (typeof settings.contentType !== undefined && settings.contentType === false)
            _settings.contentType = settings.contentType;
        if (typeof settings.processData !== undefined && settings.processData === false)
            _settings.processData = settings.processData;

        setTimeout(function () {
            $.ajax(_settings);
        }, 0);
    },
    getAjax(settings) {
        return this.extendAjax(
            $.extend(settings, {
                type: 'GET',
            }),
        );
    },
    postAjax(settings) {
        return this.extendAjax(
            $.extend(settings, {
                type: 'POST',
                contentType: 'application/json',
            }),
        );
    },
    getSyncAjax(settings) {
        settings.async = false;

        return this.getAjax(settings);
    },
    postSyncAjax(settings) {
        settings.async = false;

        return this.postAjax(settings);
    },
    htmlAjax(settings) {
        return this.extendAjax(
            $.extend(settings, {
                type: 'GET',
                dataType: 'text',
            }),
        );
    },
    htmlPostAjax(settings) {
        return this.extendAjax(
            $.extend(settings, {
                type: 'POST',
                dataType: 'text',
            }),
        );
    },
    postLayer(settings) {
        settings.type = 'POST';
        return this.layer(settings);
    },
    layer(settings) {
        settings = $.extend({}, settings, {
            success(result) {
                $layer = $(result);

                $('#layerWrapper').empty().append($layer);

                ui.layerOpen.init();
                ui.layerOpen.open(settings.layerId != undefined ? '#' + settings.layerId : '#layerType');

                ui.tab_menu.init();

                common.init();
                validate.bind();
            },
        });

        return settings.type === 'POST' ? this.htmlPostAjax(settings) : this.htmlAjax(settings);
    },
    filePostAjax(settings) {
        return this.extendAjax(
            $.extend(settings, {
                type: 'POST',
                contentType: false,
                processData: false,
            }),
        );
    },
    popup: {
        open(settings) {
            if (validate.isNotBlankStr(settings.url)) {
                var defaults = {
                    width: 500,
                    height: 700,
                    top: 100,
                    left: 100,
                    fullscreen: 'no',
                    menubar: 'no',
                    toolbar: 'no',
                    location: 'no',
                    status: 'no',
                    titlebar: 'yes',
                    scrollbars: 'yes',
                    resizable: 'no',
                    authCheck: null,
                };

                var customs = $.extend({}, defaults, settings);

                var features =
                    'width=' +
                    customs.width +
                    ', height=' +
                    customs.height +
                    ', top=' +
                    customs.top +
                    ', left=' +
                    customs.left +
                    ', fullscreen=' +
                    customs.fullscreen +
                    ', menubar=' +
                    customs.menubar +
                    ', toolbar=' +
                    customs.toolbar +
                    ', location=' +
                    customs.location +
                    ', status=' +
                    customs.status +
                    ', titlebar=' +
                    customs.titlebar +
                    ', scrollbars=' +
                    customs.scrollbars +
                    ', resizable=' +
                    customs.resizable;

                window.name = customs.name ? customs.name : 'defaultPopup'; // IE 크로스 도메인 Opener 이슈 조치

                if (customs.submitForm) {
                    var formId = customs.submitForm.prop('id');

                    if (formId) {
                        var formPopup = window.open('', formId, features);
                        customs.submitForm.prop({ action: customs.url, target: formId, method: 'POST' }).submit();

                        formPopup.focus();
                    }
                } else {
                    var basicPopup = window.open(customs.url, customs.target, features);

                    basicPopup.focus();
                }
            }
        },
        close(name) {
            var client = new ClientJS();

            if (client.getBrowser() === 'IE') {
                name = name || 'defaultPopup';

                if (!window.opener) {
                    window.opener = window.open('', name);
                }

                window.open('about:blank', '_self').close();
            } else {
                self.close();
            }
        },
    },
    niceAuthenticationPopup: {
        open(callbackFunction) {
            $.niceAuthenticationPopup.callbackFunction = callbackFunction instanceof Function ? callbackFunction : {};

            window.name = 'niceAuthentication'; // IE 크로스 도메인 Opener 이슈 조치

            $.popup.open({
                name: 'niceAuthentication',
                url: '/nice-check-plus/authentication',
                target: 'niceAuthenticationPopup',
                width: 400,
                height: 700,
                scrollbars: 'no',
            });
        },
        callback() {
            $.niceAuthenticationPopup.callbackFunction();
        },
    },
    searchContractPopup: {
        open(callbackFunction) {
            $.searchContractPopup.callbackFunction = callbackFunction instanceof Function ? callbackFunction : {};

            $.popup.open({
                name: 'searchContract',
                url: '/contract/search-contract',
                target: 'searchContractPopup',
                width: 500,
                height: 556,
            });
        },
        callback(contNo) {
            $.searchContractPopup.callbackFunction(contNo);
        },
    },
    addressPopup: {
        open(callbackFunction) {
            $.addressPopup.callbackFunction = callbackFunction instanceof Function ? callbackFunction : {};

            $.popup.open({
                name: 'address',
                url: '/address',
                target: 'addressPopup',
                width: 555,
                height: 555,
                resizable: 'yes',
            });
        },
        callback(address) {
            $.addressPopup.callbackFunction(address);
        },
    },
    cookie: {
        get(name) {
            var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return value ? value[2] : '';
        },
        set(name, value, day) {
            var expires = '';

            if (day) {
                var date = new Date();
                date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);

                expires = '; expires=' + date.toUTCString();
            }

            document.cookie = name + '=' + value + expires + ';path=/';
        },
        remove(name) {
            var date = new Date();
            document.cookie = name + '=' + '; expires=' + date.toUTCString() + '; path=/';
        },
    },
    imLink: {
        open(link) {
            if (link) {
                $.popup.open({
                    name: 'imPage',
                    url: link,
                    target: 'imLinkPopup',
                });
            }
        },
    },
});
