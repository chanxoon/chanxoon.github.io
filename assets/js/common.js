let scrollY;
let wrap = document.querySelector('body');
let myScroll;

// 스크린 높이 계산
function syncHeight() {
    document.documentElement.style.setProperty('--window-inner-height', `${window.innerHeight}px`);
}

function bodyLock() {
    scrollY = window.scrollY;
    document.documentElement.classList.add('is-locked');
    wrap.style.top = `-${scrollY}px`;
}

function bodyUnlock() {
    document.documentElement.classList.remove('is-locked');
    window.scrollTo(0, scrollY);
    wrap.style.top = '';
}

// tab menu event
function tabMenuEvent() {
    $('.tabMenu li').click(function () {
        const tabId = $(this).data('tab');
        const tabParent = $(this).closest('.tabWrap');

        $(tabParent).find('.tabMenu li').removeClass('active');
        $(this).addClass('active');

        $(tabParent).find('.tabPanel').removeClass('active');
        $('#' + tabId).addClass('active');
    });
}

// popup open
function modalOpen(el) {
    $('#' + el).fadeIn('fast');
    $('#dim').fadeIn('fast');
    bodyLock();
    tabMenuEvent();
}

// popup close
function modalClose(el) {
    $(el).parents('.popWrap').fadeOut('fast');
    $('#dim').fadeOut('fast');
    bodyUnlock();
}

function headerActiveCheck() {
    const TopVal = $(window).scrollTop();
    const TopFixed1 = 100;

    if (TopFixed1 <= TopVal) {
        $('#header').addClass('active');
    } else {
        $('#header').removeClass('active');
    }
}
$(window).on('scroll', headerActiveCheck);
// 새로고침
$(document).ready(() => {
    headerActiveCheck();
});


document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
    });

    /* ===== 프로젝트 영역 ===== */
    const tabsEl = document.getElementById('tabs');
    const projectListEl = document.getElementById('projectList');
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content > div');
    const closeBtn = document.getElementById('close');

    let projectData = null;

    /* ===== JSON 불러오기 ===== */
    fetch('projects.json')
        .then(res => {
            if (!res.ok) throw new Error('JSON load failed');
            return res.json();
        })
        .then(data => {
            projectData = data;

            const defaultType = projectData.tabs[0]?.id;
            if (!defaultType) return;

            renderTabs(defaultType);
            renderProjects(defaultType);
        })
        .catch(err => console.error(err));

    /* ===== 탭 렌더링 ===== */
    function renderTabs(activeType) {
        tabsEl.innerHTML = `
            <div class="custom-select">
                <button type="button" class="select-btn">
                    <span class="label"></span>
                </button>
                <ul class="select-list"></ul>
            </div>
        `;

        const customSelect = tabsEl.querySelector('.custom-select');
        const selectBtn = customSelect.querySelector('.select-btn');
        const selectLabel = customSelect.querySelector('.label');
        const selectList = customSelect.querySelector('.select-list');

        projectData.tabs.forEach(tab => {
            // ===== PC 탭 버튼 =====
            const btn = document.createElement('button');
            btn.className = 'tab' + (tab.id === activeType ? ' active' : '');
            btn.textContent = tab.label;

            btn.addEventListener('click', () => setActiveTab(tab.id));
            tabsEl.appendChild(btn);

            // ===== 모바일 셀렉트 옵션 =====
            const li = document.createElement('li');
            li.textContent = tab.label;
            li.dataset.id = tab.id;

            if (tab.id === activeType) selectLabel.textContent = tab.label;

            li.addEventListener('click', () => {
                setActiveTab(tab.id);
                selectList.style.display = 'none';
            });

            selectList.appendChild(li);
        });

        // 셀렉트 열기/닫기
        selectBtn.addEventListener('click', () => {
            selectList.style.display = selectList.style.display === 'block' ? 'none' : 'block';
            selectBtn.classList.toggle('active');
        });

        // 외부 클릭 닫기
        document.addEventListener('click', e => {
            if (!customSelect.contains(e.target)) selectList.style.display = 'none';
        });
    }

    function setActiveTab(type) {
        // 버튼 active 변경
        document.querySelectorAll('.tab').forEach(btn => {
            btn.classList.toggle('active', btn.textContent === getLabel(type));
        });

        // 셀렉트 라벨 변경
        const label = document.querySelector('.custom-select .label');
        if (label) label.textContent = getLabel(type);

        renderProjects(type);
    }

    function getLabel(type) {
        const found = projectData.tabs.find(t => t.id === type);
        return found ? found.label : '';
    }

    /* ===== 프로젝트 렌더링 ===== */
    function renderProjects(type) {
        projectListEl.innerHTML = '';

        let filtered;

        // ✅ all 탭 처리 추가
        if (type === 'all') {
            filtered = projectData.projects;
        } else {
            filtered = projectData.projects.filter(p => p.type === type);
        }

        if (!filtered.length) {
            projectListEl.innerHTML = '<p class="empty">프로젝트가 없습니다.</p>';
            return;
        }

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project';

            const images = project.images?.length
                ? project.images
                : project.image
                ? [project.image]
                : [];

            card.innerHTML = `
                <div class="thumb">
                    <img src="${images[0] || ''}" alt="${project.title}">
                    <div class="overlay"><span>VIEW</span></div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                </div>
            `;

            card.addEventListener('click', () => openModal(images));
            projectListEl.appendChild(card);
        });
    }

    /* ===== 모달 열기 ===== */
    function openModal(images) {
        modalContent.innerHTML = '';
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = '프로젝트 이미지';
            modalContent.appendChild(img);
        });

        modal.classList.add('active');
        bodyLock();

        modalContent.scrollTop = 0;
    }

    /* ===== 모달 닫기 ===== */
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.classList.remove('active');
        modalContent.innerHTML = '';
        bodyUnlock();
    }

    wrap = document.getElementById('wrap');
    syncHeight();
    // selectbox
    $('.custom-sel').each(function () {
        const selWrap = $(this);
        const selBtn = $(this).find('button');
        const selLayer = $(this).find('ul');
        const selResult = $(this).find('input');
        selBtn.on('click', () => {
            if (selWrap.hasClass('open')) {
                selWrap.toggleClass('open');
                selLayer.slideToggle('fast');
            } else {
                $('.custom-sel').removeClass('open');
                $('.custom-sel > ul').slideUp('fast');
                selWrap.addClass('open');
                selLayer.slideDown('fast');
            }
        });
        selLayer.find('li').on('click', function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            selResult.val($(this).attr('data-value'));
            selBtn.text($(this).text());
            selWrap.removeClass('open');
            selLayer.slideUp('fast');
        });
    });
    // selectbox close
    $(document).on('click', e => {
        e.stopPropagation();
        const selWrap = $('.custom-sel');
        const selLayer = selWrap.find('ul');

        if (selWrap.has(e.target).length === 0) {
            selWrap.removeClass('open');
            selLayer.slideUp('fast');
        }
    });

    // 스크롤다운
    $('.scrollBtn button').on('click', () => {
        const $target = $('.introSec'); // 기준 엘리먼트
        const targetBottom = $target.offset().top + $target.outerHeight();
        const currentScroll = $(window).scrollTop();

        // 이미 하단보다 내려가 있으면 이동 안 함
        if (currentScroll >= targetBottom) return;

        $('html, body').animate(
            {
                scrollTop: targetBottom,
            },
            500,
        );
    });

    // 메뉴 버튼 액티브
    $('.navBtn button').on('click', function () {
        $(this).toggleClass('active');
        $('#header').toggleClass('on');
        $('.navListWrap').toggleClass('active');

        if ($(this).hasClass('active')) {
            bodyLock();
        } else {
            bodyUnlock();
        }
    });

    // 스크롤탑
    const $scrollBtn = $('#scrollTopBtn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $scrollBtn.fadeIn();
        } else {
            $scrollBtn.fadeOut();
        }
    });
    $scrollBtn.click(() => {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });
});

window.addEventListener('load', () => {});

window.addEventListener('resize', () => {
    syncHeight();
});

window.addEventListener('scroll', () => {});
