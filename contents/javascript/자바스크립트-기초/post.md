---
title: "자바스크립트의 가장 쉬운 기초"
subtitle: "자바스크립트에서 꼭 알아야하는 기초와 동작 원리"
path: "자바스크립트-기초"
date: "2024-01-11"
category: "javascript"
thumbnailImage: "minji.jpeg"
---

## Promise 란?

Promise 객체는 비동기 작업을 다루기 위해 만들어졌으며, 비동기 작업의 성공 혹은 실패 후 결과를 처리하기 쉽게 해준다. 또한 비동기 작업이 끝나고 실행할 콜백을 등록할 수 있는 메서드를 제공한다.

Promise 객체가 탄생하기 전에는 비동기 처리를 위해 콜백함수를 사용했다. 하지만 콜백 헬로 불리는 문제로 인해 가독성이 나쁘고 에러 처리가 분산되고 흐름의 추적하기 어려워지는 등 불편함이 있었다. 이러한 불편함을 보완할 수 있는 것이 Promise 이다.

## Promise 상태

Pending : 아직 대기 중인 상태
Fulfilled : 비동기 작업이 성공적으로 완료된 상태이며, resolve 로 인해 pending 상태에서 fulfilled 상태로 변함
Rejected : 비동기 작업이 실패한 상태이며, reject 로 인해 pending 에서 rejected 상태로 변함

## 예시

API 호출은 비동기 작업이어서 promise 를 사용한다. fetch 함수를 사용하면 promise 객체를 반환하므로 비동기 작업 처리를 쉽게 할 수 있다. 테스트를 위해 [jsonplaceholder](https://jsonplaceholder.typicode.com/posts/1) 를 사용해 보자.

```javascript
import React, { useState, useEffect } from "react";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((error) => console.error("오류 발생 => ", error));
  }, []);

  return <div>{post ? <div>{post.title}</div> : <div>Loading...</div>}</div>;
}

export default App;
```

위 코드의 동작 방식은 다음과 같다.

컴포넌트가 마운트될 때 useEffect 가 실행되어 fetch 함수를 사용해 비동기적으로 외부 API 로부터 데이터를 가져온다. fetch 함수는 Promise 객체를 반환하며, 호출 성공 시 then 블록에서 데이터를 받아 실행되어 setPost 를 사용해 상태를 업데이트하며, 실패 시 catch 블록에서 오류를 처리한다. 이렇게 promise 객체로 then 과 catch 를 사용하여 비동기 작업의 성공 실패 처리를 쉽게 할 수 있는 것을 알 수 있다.

```javascript
import React, { useState, useEffect } from "react";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = await response.json();

        setPost(data);
      } catch (error) {
        console.log("error :>> ", error);
      }
    };

    fetchPost();
  }, []);

  return <div>{post ? <div>{post.title}</div> : <div>Loading...</div>}</div>;
}

export default App;
```

async/await 를 사용하여 promise 객체를 더 쉽게 다룰 수 있다.

async 함수는 promise 객체를 반환하며 await 키워드는 promise 가 수행될 때까지 기다린다. 그 후에 다음 코드를 실행한다.

## fetch

fetch 함수가 반환하는 프로미스는 404, 500 등 HTTP 에러가 발생해도 에러를 reject 하지 않고 불리언 타입의 ok 상태를 false 로 설정한 Response 객체를 resolve 한다.

fetch 가 프로미스를 reject 하는 경우는 오프라인 등의 네트워크 장애나 CORS 에러에 의해 요청이 완료되지 않은 경우이다.

fetch 함수를 사용할 때는 fetch 함수가 반환한 프로미스가 resolve 한 불리언 타임의 ok 상태를 확인해 명시적으로 에러를 처리할 필요가 있다.

```javascript
const url = "http://...";

fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error("오류 발생");
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

```javascript
const url = "http://...";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("오류 발생");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
```
