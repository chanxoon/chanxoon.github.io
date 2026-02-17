// 여러장 출력시 브라우저 버젼 빈페이지 출력 방지
document.addEventListener('DOMContentLoaded', function() {
    // 마지막 요소 선택
    const reportWraps = document.querySelectorAll('.report-wrap');
    const lastReportWrap = reportWraps[reportWraps.length - 1];
    // 클래스 추가
    if (lastReportWrap) {
        lastReportWrap.classList.add('last-wrap'); // 클래스 추가
    }
});

// 각 섹션 height값 고정
// document.addEventListener("DOMContentLoaded", function() {
//     const sections = document.querySelectorAll('.report-wrap .contents .sec');
//     sections.forEach((section, index) => {
//         const height = section.offsetHeight; // 각 섹션의 높이 값을 가져옵니다.
//         section.style.minHeight = height + 'px';
//         console.log(`Section ${index + 1} height: ${height}px`);
//     });
// });