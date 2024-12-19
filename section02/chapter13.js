// 비동기 처리 2. Promise
// 비동기 작업을 효율적으로 처리할 수 있게 도와주는 내장 객체
// 비동기 작업 실행, 비동기 작업 상태 관리, 비동기 작업 결과 저장, 비동기 작업 병렬 실행, 비동기 작업 다시 실행 등등

// Promise의 3가지 상태
// 대기(pending) : 아직 작업이 완료되지 않은 상태
// 성공(fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 실패(rejected) : 비동기 작업이 실패한 상태
// 대기 -> 성공 = 해결(resolve)
// 대기 -> 실패 = 거부(reject)

const promise = new Promise((res, rej) => {
  // 비동기 작업 실행하는 함수
  // executor

  setTimeout(() => {
    const num = 10;

    if (typeof num === 'number') {
      res(num + 10);
    } else {
      rej('num이 숫자가 아닙니다');
    }

    // console.log('2초 지났습니다');
    // res('resolved');
    // rej('실패한 이유')
  }, 2000);
});

console.log(promise); // pending

setTimeout(() => {
  console.log(promise); // fulfilled || rejected
}, 3000);

// 비동기 작업이 성공한 경우, 결과값을 이용할 수 있다
// then 메서드는 promise 객체를 리턴하기 때문에 then이나 catch 메서드를 연결해서 사용할 수 있다.
// -> 프로미스 체이닝
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// 비동기 작업이 실패한 경우, 이후 처리를 도와주는 메서드
promise.catch((error) => {
  console.log(error);
});

function add10(num) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        res(num + 10);
      } else {
        rej('num이 숫자가 아닙니다');
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
