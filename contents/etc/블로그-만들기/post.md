---
title: "Next.js 로 블로그 만들기"
subtitle: "Next.js 블로그 만든 과정 정리"
path: "블로그-만들기"
date: "2025-03-01"
category: "etc"
thumbnailImage: "thumbnail.png"
---

## 블로그 만들기 도전

개발자로서의 나의 버킷리스트 중 하나는 블로그를 직접 만드는 것이다. 블로그를 만들고 싶은 이유는 단순하다.

- 내가 원하는 디자인과 필요한 기능을 자유롭게 구현하기 위해
- 학습과 경험을 위해

나는 블로그 스킨을 변경하는 것을 좋아한다. 남들이 만들어 놓은 스킨 대신에, 내 입맛대로 그때그때 디자인을 조정할 수 있다면 재밌을 것 같았다. 티스토리와 같은 플랫폼에서도 스킨을 편집하거나 직접 만들어볼 수 있지만, 스킨 편집 시 웹상에서 코드를 수정하는 UI 가 다소 불편했고 복잡한 코드가 있어서 해당 방법은 패스했다. 그래서 직접 Next.js 로 블로그를 만들면서 원하는 대로 디자인과 기능을 만들어보기로 했다. 🧐

또한, 블로그 제작은 학습 목적에도 큰 도움이 되었다. 처음 개발을 시작했을 때는 배포만 하면 다 되는 줄 알 았다. (ㅋㅋ) 아무런 설정 없이도 구글이 내가 작성한 글을 자동으로 노출해주는 줄 알았는데.. 실제로는 SEO 설정과 최적화 등 생각보다 많은 작업이 필요하다. 직접 블로그를 만들어 보면서 어떤 설정들이 검색 노출에 영향을 미치는지, 어떻게 하면 글이 더 잘 보이게 할 수 있는지 등 많은 것을 배울 수 있을 것이라고 생각했고 실제로 학습에 많은 도움이 되었다. 🥹

## 기술 스택 및 도구

블로그는 Next.js로 개발하였다. Next.js는 SSR과 SSG를 지원하여 SEO 최적화와 성능 향상에 큰 도움을 준다.
특히, 메인 글 목록과 글 상세 페이지를 SSG로 구현하였다.

프로젝트 폴더 내에 게시글을 작성하고 GitHub에 push하면 빌드 시 자동으로 정적 파일이 생성되어 배포되는 구조가 SSG가 적합하다고 판단했고,
빠른 페이지 로딩 속도를 기대할 수 있을 것이라 생각했다.

## 프로젝트 구조

### 글 작성을 위한 폴더 구조

프로젝트의 루트 폴더 내 contents 디렉터리에는 아래와 같이 글과 이미지를 작성하도록 구조를 설계했다.

```
contents
 ┣ etc
 ┃ ┗ 블로그-만들기
 ┃     ┣ images
 ┃     ┃ ┗ thumbnail.png
 ┃     ┗ post.md
 ┣ javascript
 ┗ react
```

어떤 구조를 선택해야 사용하기 편할까 고민한 끝에, 카테고리별로 게시글과 관련 이미지를 직관적으로 관리할 수 있는 구조를 채택했다.
각 카테고리 폴더 내에 해당 게시글의 텍스트와 이미지를 함께 보관함으로써, 필요한 콘텐츠를 쉽게 찾고 효율적으로 관리할 수 있도록 구성했다.

Next.js는 정적 자산을 public 폴더에서 제공하기 때문에, 빌드 시 contents 폴더에 있는 이미지를 자동으로 public 폴더로 복사하는 과정을 추가했다.
이 방식은 매번 수동으로 이미지를 public 폴더에 옮길 필요 없이, 콘텐츠 작성과 관리가 편리할 것이라 생각했다.
특히, 블로그마다 일일이 public 폴더에 맞춰 이미지를 이동하는 작업은 번거로웠기에, 자동화된 처리 방식이 더 적합하다고 판단했다.

하지만 이 방식에는 단점이 있는데...
각 게시글에 맞는 이미지가 contents 폴더와 복사된 public 폴더에 모두 존재하게 되어 이미지가 중복된다는 점입니다. 🥲
결과적으로, 동일한 이미지 파일이 두 군데에 저장되므로, 배포 파일의 용량이 증가하고 관리 측면에서도 불필요한 중복이 발생할 수 있을 것이다.
그래서 나는 이를 개선하기 위해 고민 중에 있다... 아예 복사하는 방식을 없애야하나..

## 개선 방향

아직 부족한 점이 많고, 추가하고싶은 기능도 많아서 갈 길이 멀다. 🛣️
앞으로 추가하고 싶은 기능은 다음과 같다

```
게시글 목차
검색
다크모드
등...

```

## 후기

마지막으로... 간단한 후기를 적어보자면 솔직히 만들어보고나니 이렇게 하는 것이 맞나? 의문이 많이 든다.
내가 개발한 방식이 누가 보기엔 왜 저렇게 하지? 라는 생각이 들 정도일수도 있을 것이다. 하지만, 개발에는 가장 적합한 방식은 있을지라도 정답은 없다 생각하기에 다양한 방법을 찾아가면서 이리저리 시도해볼 생각이다.

다음 글에서는 블로그 개발 과정 상세내용과 개발 과정에서 겪은 트러블 슈팅을 정리할 예정이다. 🥹
