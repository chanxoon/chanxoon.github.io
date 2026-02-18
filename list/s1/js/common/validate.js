var validate = {
    config: {
        /* 설정 */ langCd: 'ko',
        fileMaxSize: 5 /* 첨부파일 제한 사이즈 기준 mb */,
        fileAllowExt: [
            'gif',
            'png',
            'jpg',
            'jpeg',
            'doc',
            'docx',
            'xls',
            'xlsx',
            'hwp',
            'pdf',
            'zip',
            'ppt',
            'pptx',
            'ai',
            'psd',
        ] /* 첨부파일 허용 확장자 */,
        message: {
            ko: {
                required: '입력해주세요.',
                requiredSel: '선택해주세요.',
                minlength: '{0}자 이상 입력해주세요.',
                maxlength: '{0}자를 넘을 수 없습니다.',
                minvalue: '{0} 이상 입력해주세요.',
                maxvalue: '{0}을 넘을 수 없습니다.',
                minlengthSel: '{0}개 이상 선택해주세요.',
                maxlengthSel: '{0}개 이상 선택할 수 없습니다.',
                regex: '유효하지 않습니다.',
                extension: '확장자만 등록 가능합니다.',
                filesize: '첨부파일은 {0}까지 등록 가능합니다.',
            },
            en: {
                required: '입력해주세요.',
                requiredSel: '선택해주세요.',
                minlength: '{0}자 이상 입력해주세요.',
                maxlength: '{0}자를 넘을 수 없습니다.',
                minvalue: '{0} 이상 입력해주세요.',
                maxvalue: '{0}을 넘을 수 없습니다.',
                minlengthSel: '{0}개 이상 선택해주세요.',
                maxlengthSel: '{0}개 이상 선택할 수 없습니다.',
                regex: '유효하지 않습니다.',
                extension: '확장자만 등록 가능합니다.',
                filesize: '첨부파일은 {0}까지 등록 가능합니다.',
            },
        },
        regex: {
            pattern: {
                date: /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/, // 날짜 : yyyyMMdd
                datetime: /^(\d{1,4})(-|\/|.)(\d{1,2})\2(\d{1,2})\s+(\d{1,2}):(\d{1,2})(:(\d{1,2}))?$/, // 일시 : yyyy-MM-dd HH:mm:ss
                id: /^[a-z]{1}[0-9a-z]{3,11}$/,
                simpleId: /[0-9a-zA-Z]/,
                password: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/, // 비밀번호 : TODO: 설계서 기준으로 변경 필요 hkchoi
                email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/, // 이메일
                emailId: /^([\w-]+(?:\.[\w-]+)*)$/, // 이메일 아이디
                emailDomain: /((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/, // 이메일 주소
                phone: /^(01[016-9])-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/, // 휴대폰번호
                phoneWithoutHyphen: /[0-9]{10,11}$/, // 휴대폰번호(하이픈제거)
                zipCd: /^[0-9]{5}$/, // 우편번호
                ip: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/, // 아이피 TODO: 미사용시 삭제
                number: /^[0-9]+$/, // 숫자
                blank: /\s/g, // 공백
                korName: /[가-힣]*$/, // 한글이름
                authenticationNumber: /^[0-9]{6}$/, // 6자리 점유인증번호
            },
            replace: {
                onlyNumber: /[^0-9]/gi, // 숫자만
                exceptNumber: /[0-9]/gi, // 숫자제외
                onlyKor: /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\u318D\u119E\u11A2\u2022\u2025\u00B7\uFE55]/gi, // 한글 (천지인 미들닷 유니코드 포함)
                exceptKor: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\u318D\u119E\u11A2\u2022\u2025\u00B7\uFE55]/gi, // 한글 (천지인 미들닷 유니코드 포함)
                id: /[^0-9a-z]/gi, // 영문 대소문자, 숫자
            },
        },
        type: {
            id(el) {
                return validate.type.id(el);
            },
            simpleId(el) {
                return validate.type.simpleId(el);
            },
            korName(el) {
                return validate.type.korName(el);
            },
            password(el) {
                return validate.type.password(el);
            },
        },
    },
    bind() {
        /* input, textarea 글자수 체크 */
        $("input[maxlength!=''], textarea[maxlength!='']").on('keyup keypress', function () {
            var maxlength = Number($(this).attr('maxlength'));
            var length = validate.getLength($(this));
            if (length >= maxlength) {
                $(this).val($(this).val().substring(0, maxlength));
            }
            var limitUi = $(this).siblings('span.limit'); //
            if ($(limitUi).length > 0) {
                $(limitUi)
                    .find('span')
                    .text(validate.getLength($(this)));
            }
            var popupLimitUi = $(this).parent().hasClass('form_cont');
            if (popupLimitUi) {
                var $tempInfo = $(this).closest('.form_area').siblings('div.txt_info');
                $tempInfo.find('.col_type4').text('현재 ' + validate.getLength($(this)) + '글자');
            }
        });

        /* 키입력 이벤트 */
        $('[text-type*=onlyNumber]').on('keyup keypress', function (e) {
            return validate.regex.onlyNumber(e);
        });
        $('[text-type*=exceptNumber]').on('keyup keypress', function (e) {
            return validate.regex.exceptNumber(e);
        });
        $('[text-type*=onlyKor]').on('keyup keypress', function (e) {
            return validate.regex.onlyKor(e);
        });
        $('[text-type*=exceptKor]').on('keyup keypress', function (e) {
            return validate.regex.exceptKor(e);
        });
        $('[text-type*=id]').on('keyup keypress', function (e) {
            return validate.regex.id(e);
        });

        $('input:file').on('change', function (e) {
            if ($(':file').parents('.file_add.drag').length <= 0) {
                if (!validate.fileCheck($(this)[0])) {
                    $(this).val('');
                    $(this).siblings('input:text').val('');
                    e.preventDefault();
                }
            }
        });
    },
    regex: {
        onlyNumber(e) {
            var keyId = e.which ? e.which : e.keyCode;
            e.target.value = e.target.value.replace(validate.config.regex.replace.onlyNumber, '');
            return keyId >= 48 && keyId <= 57;
        },
        exceptNumber(e) {
            var keyId = e.which ? e.which : e.keyCode;
            e.target.value = e.target.value.replace(validate.config.regex.replace.exceptNumber, '');
            return (keyId >= 97 && keyId <= 122) || (keyId >= 65 && keyId <= 90);
        },
        onlyKor(e) {
            var keyId = e.which ? e.which : e.keyCode;
            e.target.value = e.target.value.replace(validate.config.regex.replace.onlyKor, '');
        },
        exceptKor(e) {
            var keyId = e.which ? e.which : e.keyCode;
            e.target.value = e.target.value.replace(validate.config.regex.replace.exceptKor, '');
        },
        id(e) {
            var keyId = e.which ? e.which : e.keyCode;
            e.target.value = e.target.value.replace(validate.config.regex.replace.id, '');
        },
    },
    // 문자열 포맷 변경 {0}{1}{2}... -> Array 순서대로 치환
    format(source, params) {
        if (!$.isArray(params)) {
            params = params.split(',');
        }
        if (params.length > 0) {
            $.each(params, function (i, n) {
                source = source.replace(new RegExp('\\{' + i + '\\}', 'g'), function () {
                    return n;
                });
            });
        }

        return source;
    },
    // 폼 validation check
    form(formSelector) {
        /*
            * Example 'javascript'
                validate.form($("#searchForm"));
            * Example 'form'
                <input type="text" id="" name=""
                    title="이름"                               <!-- 알럿띄울때 참조 ex) {title}을 입력하세요. -->
                    required="required"                       <!-- 필수입력 -->
                    minlength="2"                             <!-- 최소 입력 글자 수 -->
                    maxlength="10"                            <!-- 최대 입력 글자 수 -->
                    minvalue="2"                             <!-- 숫자입력시 입력 값 검증 -->
                    maxvalue="10"                            <!-- 숫자입력시 입력 값 검증 -->
                    data-regex-pattern="email"                <!-- 입력값과 비교할 정규식 패턴, validate.config.regex.pattern 에 정의 -->

                    data-message="이메일을 확인해주세요."         <!-- 유효성체크에 걸린 경우 알럿 메시지 custom -->
                    data-message-params="2,10"                <!-- 알럿메시지 참조 파라미터 : message에 {0}{1}{2}..{n} 파라미터가 여러개인경우 콤마로 구분지어 작성 -->
                    data-file-max-size="3"                    <!-- input type="file" 일때만 사용 : 파일첨부 가능한 최대 용량(MB), 미입력시 기본 용량으로 체크(validate.option.fileMaxSize) -->
                    data-file-allow-ext="jpg,gif,png"         <!-- input type="file" 일때만 사용 : 파일첨부 가능한 확장자 콤마로 구분지어 작성, 미입력시 기본 확장자로 체크(validate.option.fileAllowExt) -->

                <select id="" name="" required="required"><option></option></select>
                <input type="radio" id="" name="" required="required" />   <!-- 필수입력 1개이상 선택되어있어야 true반환 -->
                <input type="checkbox" id="" name="" required="required" minlength="2" />   <!-- 필수입력 1개이상 선택되어있어야 true반환, 2개이상 필수선택되어야하는경우 minlength 사용 -->
            />
        */
        var _config = this.config;
        var _regex = _config.regex;
        var _type = _config.type;

        var fields = $(formSelector)[0].elements;
        for (var i = 0, s = fields.length; i < s; i++) {
            var el = fields[i];
            var type = this.getType(el);
            var required = el.getAttribute('required') || ''; // 필수여부
            var minvalue = el.getAttribute('minvalue') || ''; // 숫자입력시 입력 값 검증
            var maxvalue = el.getAttribute('maxvalue') || ''; // 숫자입력시 입력 값 검증
            var minlength = el.getAttribute('minlength') || ''; // 최소 입력 글자 수
            var maxlength = el.getAttribute('maxlength') || ''; // 최대 입력 글자 수
            var regexpattern = el.getAttribute('data-regex-pattern') || ''; // 입력값 정규식 패턴 체크
            var validtype = el.getAttribute('data-valid-type') || ''; // 입력값 특정 타입 유효성 체크
            var filemaxsize = el.getAttribute('data-file-max-size') || ''; // 첨부파일 최대용량
            var fileallowext = el.getAttribute('data-file-allow-ext') || ''; // 첨부파일 허용확장자

            if (required === 'required') {
                if (this.isBlank(el)) return this.error(el, 'required');
                if (!isNaN(minlength) && !this.isBlankStr(minlength)) {
                    // 최소 입력 글자 수
                    if (!this.minlength(el, minlength)) return this.error(el, 'minlength', minlength);
                }
                if (!isNaN(maxlength) && !this.isBlankStr(maxlength)) {
                    // 최대 입력 글자 수
                    if (!this.maxlength(el, maxlength)) return this.error(el, 'maxlength', maxlength);
                }
                if (!isNaN(minvalue) && !this.isBlankStr(minvalue)) {
                    // 숫자 입력시 입력값 최소값 검증
                    if (!this.minvalue(el, minvalue)) return this.error(el, 'minvalue', minvalue);
                }
                if (!isNaN(maxvalue) && !this.isBlankStr(maxvalue)) {
                    // 숫자 입력시 입력값 최대값 검증
                    if (!this.maxvalue(el, maxvalue)) return this.error(el, 'maxvalue', maxvalue);
                }
                if (Object.keys(_regex.pattern).indexOf(regexpattern) > -1) {
                    // 입력값 정규식 패턴 체크
                    if (!_regex.pattern[regexpattern].test(el.value)) return this.error(el, 'regex', false, '이');
                }
                if (Object.keys(_type).indexOf(validtype) > -1) {
                    // 입력값 특정 타입 유효성 체크
                    return _type[validtype](el);
                }
            }
            if (type === 'file') {
                // file element, 최대 첨부 가능 용량, 허용 확장자(콤마로 구분)
                if (
                    (!isNaN(filemaxsize) && !this.isBlankStr(filemaxsize)) ||
                    (!isNaN(fileallowext) && !this.isBlankStr(fileallowext))
                ) {
                    if (
                        !this.fileCheck(
                            el,
                            el.getAttribute('data-file-max-size'),
                            el.getAttribute('data-file-allow-ext'),
                        )
                    )
                        return false;
                }
            }
        }
        return true;
    },
    error(el, messageKey, params, josa) {
        var _messages = this.config.message[this.config.langCd];

        var message = el.getAttribute('data-message'); // 알럿 메세지
        var messageparams = el.getAttribute('data-message-params'); // 알럿 메세지 파라미터

        var type = this.getType(el);
        messageKey += ['select', 'check', 'radio'].indexOf(type) > -1 ? 'Sel' : '';

        if (this.isBlankStr(message)) {
            var title = el.getAttribute('title');
            var name = el.getAttribute('name');
            message = (title || name) + this.josa(title || name, josa) + ' ';
            message += params ? this.format(_messages[messageKey], params) : _messages[messageKey];
        } else {
            message = messageparams ? this.format(message, messageparams) : message;
        }

        alert(message);
        el.focus();
    },
    // 한글 조사
    josa(str, divn) {
        divn = divn || '을';
        var last = /[가-힣]$/.test(str) && (str.substr(-1).charCodeAt(0) - 0xac00) % 28 > 0;
        return ['을', '를'].indexOf(divn) > -1 ? (last ? '을' : '를') : last ? '이' : '가';
    },
    // element null 체크
    isBlank(el, messageFlag) {
        if (typeof el !== 'object') {
            return this.isBlankStr(el, messageFlag);
        }
        el = this.findByElement(el);

        var returnFlag = false;
        var type = this.getType(el);

        if (type == undefined) {
            returnFlag = true;
        }
        switch (type) {
            case 'file':
            case 'text':
            case 'hidden':
                if (el.value === null || el.value === '') returnFlag = true;
                break;
            case 'select':
                if (el.selectedIndex === -1 || el[el.selectedIndex].value == null || el[el.selectedIndex].value === '')
                    returnFlag = true;
                break;
            case 'check':
            case 'radio':
                var checkbox = this.findByName(el.name);
                var checked = false;
                if (typeof checkbox.length !== 'undefined') {
                    for (var j = 0; j < checkbox.length; j++) {
                        if (checkbox[j].checked === true) checked = true;
                    }
                } else if (checkbox.checked === true) checked = true;
                if (checked === false) returnFlag = true;
                break;
        }

        if (returnFlag && messageFlag) this.error(el, 'required');
        return returnFlag;
    },
    isNotBlank(el, messageFlag) {
        return !this.isBlank(el, messageFlag);
    },
    // element 문자열 포함 여부 체크
    contains(el, chars) {
        el = this.findByElement(el);
        if (typeof el === 'string') {
            return this.containsStr(el, chars);
        }
        return this.containsStr(el.value, chars);
    },
    // 문자열 null 체크
    isBlankStr(str) {
        str = (str || '').toString();
        if (str === null || str.replace(/ /gi, '') === '' || str === undefined) {
            return true;
        }
    },
    isNotBlankStr(str) {
        return !this.isBlankStr(str);
    },
    // 문자열 포함 여부 체크
    containsStr(str, chars) {
        for (var i = 0; i < str.length; i++) {
            if (chars.indexOf(str.charAt(i)) !== -1) return true;
        }
        return false;
    },
    // element의 타입이 체크박스 또는 라디오버튼인지 여부 리턴
    checkable(el) {
        el = this.findByElement(el);
        return /radio|checkbox/i.test(el.type);
    },
    // name attribute로 jquery 객체 find
    findByName(name) {
        return $("[name='" + name + "']");
    },
    findByElement(el) {
        if (el && typeof el.nodeName === 'undefined') {
            el = el[0];
        }
        return el;
    },
    // element 타입 리턴
    getType(el) {
        el = this.findByElement(el);
        switch (el && el.tagName.toLowerCase()) {
            case 'select':
                return el.multiple === true ? 'multiselect' : 'select';
            case 'textarea':
                return 'text';
            case 'input':
                switch (el.type.toLowerCase()) {
                    case 'radio':
                        return 'radio';
                    case 'checkbox':
                        return 'check';
                    case 'file':
                        return 'file';
                    case 'text':
                    case 'tel':
                    case 'email':
                    case 'password':
                        return 'text';
                    case 'hidden':
                        return 'hidden';
                }
        }
    },
    // element 길이값 리턴
    getLength(el) {
        el = this.findByElement(el);
        switch (el.nodeName.toLowerCase()) {
            case 'select':
                return $('option:selected', el).length;
            case 'input':
                if (this.checkable(el)) {
                    return this.findByName(el.name).filter(':checked').length;
                }
        }
        return el.value.length;
    },
    // element value 리턴
    getValue(el) {
        el = this.findByElement(el);
        if (this.checkable(el)) {
            if ($(this.findByName(el.name)).filter(':checked').length > 1) {
                var tempArr = new Array();
                $.each($(this.findByName(el.name)).filter(':checked'), function (idx, item) {
                    tempArr.push($(item).val());
                });
                return tempArr;
            }
            return $(this.findByName(el.name)).filter(':checked').val() || '';
        }
        return el.value;
    },
    // 최소 길이 비교
    minlength(el, minlength, messageFlag) {
        el = this.findByElement(el);
        var length = $.isArray(el) ? el.length : this.getLength(el);

        if (length >= minlength) {
            return true;
        }
        if (messageFlag) this.error(el, 'minlength', minlength);
        return false;
    },
    // 최대 길이 비교
    maxlength(el, maxlength, messageFlag) {
        el = this.findByElement(el);
        var length = $.isArray(el) ? el.length : this.getLength(el);

        if (length <= maxlength) {
            return true;
        }
        if (messageFlag) this.error(el, 'maxlength', maxlength);
        return false;
    },
    // 입력값 최소값 검증
    minvalue(el, minvalue, messageFlag) {
        el = this.findByElement(el);
        if (isNaN(el.value) || Number(el.value) < minvalue) {
            if (messageFlag) this.error(el, 'minvalue', minvalue);
            return false;
        }
        return true;
    },
    // 입력값 최대값 검증
    maxvalue(el, maxvalue, messageFlag) {
        el = this.findByElement(el);
        if (isNaN(el.value) || Number(el.value) > maxvalue) {
            if (messageFlag) this.error(el, 'maxvalue', maxvalue);
            return false;
        }
        return true;
    },
    // 파일 확장자, 용량 체크
    fileCheck(el, maxSize, allowExt) {
        el = this.findByElement(el);
        var _messages = this.config.message[this.config.langCd];
        var _config = this.config;

        maxSize = maxSize || el.getAttribute('data-file-max-size') || _config.fileMaxSize;
        allowExt = allowExt || el.getAttribute('data-file-allow-ext') || _config.fileAllowExt;
        allowExt = !$.isArray(allowExt) ? allowExt.split(',') : allowExt;

        var $this = $(el);
        if ($this.val() !== '') {
            // 확장자 체크
            var ext = $this.val().split('.').pop().toLowerCase();
            if ($.inArray(ext, allowExt) === -1) {
                alert(allowExt.toString() + _messages.extension);
                $this.focus();
                return false;
            }

            // 용량 체크
            var fileSize = $this[0].files[0].size;

            // data-file-max-size
            var maxSizeMB = maxSize * 1024 * 1024;
            if (fileSize > maxSizeMB) {
                alert(this.format(_messages.filesize, convertFileSize(maxSizeMB)));
                $this.focus();
                return false;
            }
        }
        return true;
    },
    type: {
        id(el) {
            el = validate.findByElement(el);

            var id = el.value;

            if (validate.isBlank(el)) {
                alert('아이디를 입력해 주세요.');
                el.focus();
                return false;
            }

            if (id.match(validate.config.regex.pattern.blank)) {
                alert('아이디에 공백을 사용할 수 없습니다.');
                el.focus();
                return false;
            }

            if (!validate.config.regex.pattern.id.test(id)) {
                alert('사용할 수 없는 아이디 입니다.');
                el.focus();
                return false;
            }

            if (
                id == 'admin' ||
                id == 'manager' ||
                id == 's1admin' ||
                id == 's1manager' ||
                id == 'webmaster' ||
                id == 'test' ||
                id == 'root'
            ) {
                alert('사용할 수 없는 아이디입니다.');
                el.focus();
                return false;
            }

            return true;
        },
        simpleId(el) {
            el = validate.findByElement(el);

            var id = el.value;

            if (validate.isBlank(el)) {
                alert('아이디를 입력해주세요.');
                el.focus();
                return false;
            }

            if (!validate.config.regex.pattern.simpleId.test(id)) {
                alert('아이디를 정확히 입력해주세요.');
                el.focus();
                return false;
            }

            return true;
        },
        password(el, id, isSso) {
            el = validate.findByElement(el);

            var password = el.value;

            var maxLength = isSso ? 15 : 12;

            if (password.length < 8 || password.length >= maxLength + 1) {
                alert('비밀번호는 영문, 숫자, 특수문자 조합의 8~' + maxLength + '자로 입력해 주세요.');
                el.focus();
                return false;
            }

            var lower = new RegExp('[a-z]', 'g');
            var upper = new RegExp('[A-Z]', 'g');
            var number = new RegExp('[0-9]', 'ig');
            var special = new RegExp('[!@#$%^&*()_+=|~:;\'",.<>?/\\\\-]');

            var lowerCheck = lower.test(password);
            var numberCheck = number.test(password);
            var specialCheck = special.test(password);
            var upperCheck = upper.test(password);

            if (password.indexOf(']') > -1) {
                specialCheck = true;
            }

            if (
                (lowerCheck && numberCheck && specialCheck) ||
                (lowerCheck && numberCheck && upperCheck) ||
                (lowerCheck && specialCheck && upperCheck) ||
                (lowerCheck && specialCheck && upperCheck)
            ) {
                // 3가지 이상 혼용
                if (password.length < 8) {
                    alert('비밀번호 영문, 숫자, 특수문자 조합 중 3가지 이상 혼용은 8자 이상으로 입력해 주세요');
                    el.focus();
                    return false;
                }
            } else if (
                (lowerCheck && numberCheck) ||
                (lowerCheck && specialCheck) ||
                (numberCheck && specialCheck) ||
                (lowerCheck && upperCheck) ||
                (numberCheck && upperCheck) ||
                (specialCheck && upperCheck)
            ) {
                // 2가지 혼용
                if (password.length < 10) {
                    alert('비밀번호 영문, 숫자, 특수문자 조합 중 2가지 혼용은 10자 이상으로 입력해 주세요');
                    el.focus();
                    return false;
                }
            } else {
                alert('비밀번호는 영문대문자, 영문소문자, 숫자, 특수기호 중 2가지 이상 혼용하여야 합니다.');
                el.focus();
                return false;
            }

            var alertMessage = '비밀번호는 아이디가 포함되거나 연속 3자리 숫자 및 문자는 사용할 수 없습니다.';
            // 연속된 4개 이상의 숫자나 문자 체크
            var i = 1;
            var count = 0;
            while (i < password.length) {
                if (password.charAt(i) == password.charAt(i - 1)) {
                    count++;
                    if (count >= 2) {
                        alert(alertMessage);
                        el.focus();
                        return false;
                    }
                } else {
                    count = 0;
                }
                i++;
            }

            i = 1;
            count = 0;
            while (i < password.length) {
                if (password.charCodeAt(i) == password.charCodeAt(i - 1) + 1) {
                    count++;
                    if (count >= 2) {
                        alert(alertMessage);
                        el.focus();
                        return false;
                    }
                } else {
                    count = 0;
                }
                i++;
            }

            i = 1;
            count = 0;
            while (i < password.length) {
                if (password.charCodeAt(i) == password.charCodeAt(i - 1) - 1) {
                    count++;
                    if (count >= 2) {
                        alert(alertMessage);
                        el.focus();
                        return false;
                    }
                } else {
                    count = 0;
                }
                i++;
            }

            // 비밀번호에 ID가 포함되어있을 경우
            if (password.indexOf(id) > -1) {
                alert(alertMessage);
                el.focus();
                return false;
            }

            return true;
        },
        korName(el) {
            el = validate.findByElement(el) || {};

            var name = el.value;

            if (validate.isBlank(el)) {
                alert('이름을 입력해주세요.');
                el.focus();
                return false;
            }

            if (!validate.config.regex.pattern.korName.test(name)) {
                alert('이름을 정확히 입력해주세요.');
                el.focus();
                return false;
            }

            return true;
        },
        email(el, el2) {
            el = validate.findByElement(el);
            el2 = validate.findByElement(el2);

            var email = el2 ? el.value + '@' + el2.value : el.value;

            if (validate.isBlank(el)) {
                alert('이메일을 입력해주세요.');
                el.focus();
                return false;
            }

            if (el2 && validate.isBlank(el2)) {
                alert('이메일 도메인을 입력해주세요.');
                el2.focus();
                return false;
            }

            if (!validate.config.regex.pattern.email.test(email)) {
                alert('이메일을 정확히 입력해주세요.');
                el.focus();
                return false;
            }

            return true;
        },
        phone(el, el2, el3) {
            el = validate.findByElement(el);
            el2 = validate.findByElement(el2);
            el3 = validate.findByElement(el3);

            var phone = el2 ? (el3 ? el.value + el2.value + el3.value : el.value + el2.value) : el.value;

            if (validate.isBlank(el)) {
                alert('휴대폰 번호를 입력해주세요.');
                el.focus();
                return false;
            }

            if (el2 && validate.isBlank(el2)) {
                alert('휴대폰 번호를 입력해주세요.');
                el2.focus();
                return false;
            }

            if (el3 && validate.isBlank(el3)) {
                alert('휴대폰 번호를 입력해주세요.');
                el3.focus();
                return false;
            }

            if (!validate.config.regex.pattern.phoneWithoutHyphen.test(phone)) {
                alert('휴대폰 번호를 정확히 입력해주세요.');
                el.focus();
                return false;
            }

            return true;
        },
        authenticationNumber(el) {
            el = validate.findByElement(el);

            var authenticationNumber = el.value;

            if (validate.isBlank(el)) {
                alert('인증번호를 입력해주세요.');
                el.focus();
                return false;
            }

            if (!validate.config.regex.pattern.authenticationNumber.test(authenticationNumber)) {
                alert('인증번호를 정확히 입력해주세요.');
                el.focus();
                return false;
            }

            return true;
        },
    },
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
};

$(function () {
    validate.bind();
});
