// HTML 요소들을 변수에 저장
const body = document.body;
const colorCodeSpan = document.getElementById('color-code');
const changeColorBtn = document.getElementById('change-color-btn');

// 16진수 색상 코드를 구성하는 문자 배열
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// 버튼 클릭 이벤트 리스너 추가
changeColorBtn.addEventListener('click', () => {
    // 무작위 16진수 색상 코드 생성
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    // 배경색과 텍스트를 변경
    body.style.backgroundColor = hexColor;
    colorCodeSpan.textContent = hexColor;
});

// 0부터 hex 배열 길이-1 사이의 무작위 정수 반환
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
