// Date 객체
// 1. Date 객체 생성
// new 키워드로 함께 객체를 생성하는 함수를 생성자 함수라고 한다
let date1 = new Date(); // 현재 날짜와 시간
let date2 = new Date('2000-01-01/10:10:10'); // 특정 날짜와 시간
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 '1970,01,01 00시 00분 00초'로부터 몇 ms가 지났는지 의미하는 값
let ts1 = date1.getTime();

let date4 = new Date(ts1);

// 3. 시간 요소를 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// js의 month는 0부터 시작하기 때문에 getMonth 메서드는 +1을 붙여주는 것이 좋다.

// 4. 시간 수정
date1.setFullYear(2023);
date1.setMonth(2); // 3월을 의미
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력
// 날짜와 요일 (시, 분, 초 제외)
date1.toDateString(); // Thu Mar 30 2023

// 현지 포맷
date1.toLocaleString(); // 2023. 3. 30. 오후 11:59:59
