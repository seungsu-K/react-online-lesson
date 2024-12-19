// 비동기 처리 3. Async, Await
// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        name: 'Kim',
        id: 'abc123',
      });
    }, 2000);
  });
}

console.log(getData());

// await
// async 함수 내부에서 사용하는 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// then 메서드를 사용할 필요가 없어짐

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
