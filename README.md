
<details>
<summary>Step-2.-Week-1</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제

</br>


# Step-2.-Week-1

카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제
</br>

## **과제명**

```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```

</br>

## **과제 설명**

✅**과제 1.**

```
쇼핑몰 웹사이트를 탐색해 어떠한 페이지 구성을 가지고 있는지 체크합니다.
쇼핑몰 웹사이트를 탐색해 어떠한 페이지 구성을 가지고 있는지 체크합니다.
대부분의 쇼핑몰은 다음의 페이지 구성을 가지고 있습니다.

- 메인 페이지
- 상품 검색 결과 페이지
- 개별 상품 상세 페이지
- 주문 목록 페이지
- 결제 페이지
- 결제 완료 페이지
- 장바구니 페이지
- ...

이와 같이 위의 서비스가 동작하는데 필수적인 페이지가 무엇이 있고, 해당 페이지에서 어떠한 기능이 구현되어야 하는지 작성하세요.
이와 같이 위의 서비스가 동작하는데 필수적인 페이지가 무엇이 있고, 해당 페이지에서 어떠한 기능이 구현되어야 하는지 작성하세요.
그리고 어떠한 디렉터리 구조로 프로젝트를 진행할지 작성해주세요. (README.md 파일에 작성)
```

```
README.md의 예시 형식입니다. 아래를 참고해 작성해주세요.
README.md의 예시 형식입니다. 아래를 참고해 작성해주세요.
각 페이지마다 핵심 기능, 기능 상세 설명, 인터페이스 요구사항이 어떤 것이 있을지 고민해서 작성해주세요.

###예시

#페이지별 구성
1. 로그인 페이지
- 핵심 기능: 로그인 요청 및 사용자 로그인 정보 저장
- 기능 상세 설명: 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 합니다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다.
-- ...

#디렉터리 구조
- public
- src
- components
- hooks
- routes
- styles
- dto
- ...
```

1. **메인 페이지**

   핵심기능

   - 다양한 상품 보여주기
   - 로그인

   기능 상세 설명

   - 상품들의 사진과 이름, 가격을 보여준다

   인터페이스 요구사항

   - 상품을 클릭하면 해당 상품 상세 페이지로 이동한다
   - 로그인 버튼을 누르면 로그인 페이지로 이동한다

2. **로그인 페이지**

   핵심기능

   - 로그인 요청 및 사용자 로그인 정보 저장

   기능 상세 설명

   - 이메일과 비밀번호를 이용해 로그인 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보낸다
   - 회원가입 버튼을 누르면 회원가입 페이지로 이동한다

3. **회원가입 페이지**

   핵심기능

   - 회원가입을 한다

   기능 상세 설명

   - 이메일과 비밀번호, 비밀번호 확인으로 회원가입을 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 이메일 또는 비밀번호, 비밀번호 확인에 들어온 값이 적합하지 않은 경우 적절한 알림을 보낸다
   - 회원가입이 완료되면 로그인 페이지로 이동한다

4. **개별 상품 상세 페이지**

   핵심기능

   - 옵션과 수량 선택 후 장바구니에 추가

   기능 상세 설명

   - 품절된 옵션을 제외한 옵션과 수량을 선택하고 장바구니에 추가 후, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 로그인이 안됐을 때 옵션이나 장바구니 버튼을 누르면 적절한 알림을 보낸다
   - 로그인이 돼있고 옵션을 누르면 선택한 옵션이 보여진다
   - 옵션을 중복해서 누르면 알림을 보낸다
   - 수량 증가 버튼을 누르면 수량이 증가한다

5. **장바구니 페이지**

   핵심기능

   - 장바구니에 담은 상품들을 보여준다

   기능 상세 설명

   - 장바구니에 담긴 상품들의 이름과 옵션과 수량을 표시하고 각각의 가격과 총 가격을 표시한다

   인터페이스 요구사항

   - 결제버튼을 누르면 결제 페이지로 이동한다
   - 각각의 상품의 x버튼을 누르면 장바구니에서 제외된다

6. **결제 페이지**

   핵심기능

   - 결제를 한다

   기능 상세 설명

   - 카드사, 카드번호, 카드 비밀번호로 결제를 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 카드사, 카드번호, 카드 비밀번호에 들어온 겂이 적합하지 않은 경우 적절한 알림을 보낸다

7. **결제 완료 페이지**

   핵심기능

   - 결제완료 상태를 보여준다

   기능 상세 설명

   - 결제가 완료되었다는 메시지를 보여준다

   인터페이스 요구사항

   - 홈으로 돌아가기 버튼을 누르면 메인 페이지로 이동한다

**디렉터리 구조**

- public
- src
- components
- hooks
- routes
- styles
- dto

</br>

✅**과제 2.**

```
프론트 개발자가 다른 프론트 개발자와 소통 및 UI 디자이너와 소통하는데 필수적인 UI 컴포넌트의 명칭과 사용법을 익힙니다.
수업시간에 배운 컴포넌트의 명칭과 사용법 이외에 대표적인 UI 라이브러리 홈페이지를 조사해보면 수많은 컴포넌트가 어떤식으로 동작하는지 확인할 수 있습니다.
리액트 프로젝트를 생성하고, 토스트, 브래드크럼, 캐러셀, 라디오버튼, 토글버튼, 체크리스트를 UI 라이브러리가 아닌 자신만의 방식으로 스타일링하고 상태 관리를 적용해 코드를 작성하세요.
작성된 코드는 레퍼지토리에 업로드하여 멘토님에게 전달해주세요.
```

</br>

✅**과제 3.**

```
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요.
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요.
하나의 페이지에 모든 컴포넌트를 둬도 좋고, 각 페이지별로 분리해도 괜찮습니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다.
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다.
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다.
2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다.
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_1주차 과제

</br>


</div>
</details>

---

<details>
<summary>Step-2.-Week-4</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제
</br>

## **과제명**

</br>

## **과제 설명**

✅**과제 1. 상품 상세 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요. 
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. UI 라이브러리를 사용할 때 모든 구성요소에 UI 라이브러리의 규칙을 적용할 필요는 없습니다. UI 라이브러리의 사용법을 익히고, 하나 이상의 컴포넌트에 적용해봅니다.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_4주차 과제


</br>

**2. PR 내용 :**


>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-5</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 5주차 클론 과제

</br>

## **과제명**
```
주문 결제 개발 
```

</br>

## **과제 설명**

✅**과제 1. 주문 결제 페이지 개발**

```
- 백엔드 API 문서를 참고하여 주문 결제 페이지를 개발하세요.
- 결제 페이지에서는 결제 전 결제 상세 정보에 대한 데이터를 조회하고, 결제를 확정하는 기능 2가지에 중점을 둡니다.
```

</br>

✅**과제 2. 테스트 결제**

```
- 한 개의 PG 서비스 또는 PG 서비스를 돕는 서드파티 앱을 사용해 개발합니다.
- 테스트 환경에서 결제를 성공해야 합니다.
- 결제가 실패하는 경우(잔고 부족, 결제 정보 불일치 등)에 대해 에러 캐칭을 적용하세요.
- 다양한 에러 상황에 대해 주석으로 에러 상황과 대응 방식을 설명해주세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 결제를 구현할 때 새로운 모듈을 학습하는데 있어서 생각보다 시간 소요가 클 것입니다. 또한 몇몇의 PG사에서 제공하는 SDK의 경우 리액트와 호환성이 나쁜 경우도 있습니다. 
2. 테스트 결제시에 실제 비용이 나가는 것처럼 보이는 경우도 있습니다. PG사마다 정책이 다르지만 대부분 테스트 금액은 1일 이내로 환급받는 구조입니다.
3. 결제시에는 생각보다 많은 데이터를 하나의 페이로드에 담아 전달해야 합니다. 이 과정에서 데이터가 적절하지 않은 값이 들어갈 가능성이 높고, 코드가 복잡해질 수 있습니다. 기능 단위를 나누어 함수형 프로그래밍을 시도해보는게 도움이 될 수 있습니다.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_5주차 과제


</br>

**2. PR 내용 :**


>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>


<details>
<summary>Step-2.-Week-6</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 6주차 클론 과제

</br>

## **과제명**
```
프로젝트 마무리
```
</br>

## **과제 설명**

✅**과제 1. 배포**

```
- 카카오 배포환경을 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.

- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.
```

</br>

✅**과제 2. 프로젝트 마무리**

```
- 모든 핵심 기능이 정상 작동되도록 숨은 버그와 기능을 점검합니다.
- 특정한 파일이 너무 크다면, 코드 내의 함수를 다른 파일로 옮겨 import / export 하는 등 코드 리펙터링을 진행합니다.
- 개발 환경과 배포 환경 모두 버그가 없는지 체크합니다.
```

</br>


✅**과제 3.  README.md 정리**

```
- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 많은 서비스가 개발 레벨에서는 잘 작동하다가도 배포 단계에서 에러를 만나는 경우가 많습니다. 배포 후에 기능을 하나하나 점검해보고, 여러 환경에서 시도해보세요.

2. 배포된 환경을 하나의 브라우저에서만 테스트하지 말고, 최대한 다양한 디바이스와 브라우저에서 테스트해보세요. 삼성 브라우저, 아이폰 사파리, 데스크탑이라면 크롬, 사파리, 파이어폭스 등으로 테스트해보세요.

3. 코드를 시간이 지나서 보면 어떤 목적으로, 왜 만들었는지 알아보기 힘든 경우가 많습니다. 기본적인 내용이라 생각한 부분도 주석을 달아주세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_6주차 과제


</br>

**2. PR 내용 :**


>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

</br>
</br>

## 과제 1

1. **메인 페이지**

   핵심기능

   - 다양한 상품 보여주기
   - 로그인

   기능 상세 설명

   - 상품들의 사진과 이름, 가격을 보여준다

   인터페이스 요구사항

   - 상품을 클릭하면 해당 상품 상세 페이지로 이동한다
   - 로그인 버튼을 누르면 로그인 페이지로 이동한다

   핵심기능

   - 다양한 상품 보여주기
   - 로그인

   기능 상세 설명

   - 상품들의 사진과 이름, 가격을 보여준다

   인터페이스 요구사항

   - 상품을 클릭하면 해당 상품 상세 페이지로 이동한다
   - 로그인 버튼을 누르면 로그인 페이지로 이동한다

2. **로그인 페이지**

   핵심기능

   - 로그인 요청 및 사용자 로그인 정보 저장

   기능 상세 설명

   - 이메일과 비밀번호를 이용해 로그인 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보낸다
   - 회원가입 버튼을 누르면 회원가입 페이지로 이동한다

   핵심기능

   - 로그인 요청 및 사용자 로그인 정보 저장

   기능 상세 설명

   - 이메일과 비밀번호를 이용해 로그인 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보낸다
   - 회원가입 버튼을 누르면 회원가입 페이지로 이동한다

3. **회원가입 페이지**

   핵심기능

   - 회원가입을 한다

   기능 상세 설명

   - 이메일과 비밀번호, 비밀번호 확인으로 회원가입을 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 이메일 또는 비밀번호, 비밀번호 확인에 들어온 값이 적합하지 않은 경우 적절한 알림을 보낸다
   - 회원가입이 완료되면 로그인 페이지로 이동한다

   핵심기능

   - 회원가입을 한다

   기능 상세 설명

   - 이메일과 비밀번호, 비밀번호 확인으로 회원가입을 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 이메일 또는 비밀번호, 비밀번호 확인에 들어온 값이 적합하지 않은 경우 적절한 알림을 보낸다
   - 회원가입이 완료되면 로그인 페이지로 이동한다

4. **개별 상품 상세 페이지**

   핵심기능

   - 옵션과 수량 선택 후 장바구니에 추가

   기능 상세 설명

   - 품절된 옵션을 제외한 옵션과 수량을 선택하고 장바구니에 추가 후, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 로그인이 안됐을 때 옵션이나 장바구니 버튼을 누르면 적절한 알림을 보낸다
   - 로그인이 돼있고 옵션을 누르면 선택한 옵션이 보여진다
   - 옵션을 중복해서 누르면 알림을 보낸다
   - 수량 증가 버튼을 누르면 수량이 증가한다

   핵심기능

   - 옵션과 수량 선택 후 장바구니에 추가

   기능 상세 설명

   - 품절된 옵션을 제외한 옵션과 수량을 선택하고 장바구니에 추가 후, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 로그인이 안됐을 때 옵션이나 장바구니 버튼을 누르면 적절한 알림을 보낸다
   - 로그인이 돼있고 옵션을 누르면 선택한 옵션이 보여진다
   - 옵션을 중복해서 누르면 알림을 보낸다
   - 수량 증가 버튼을 누르면 수량이 증가한다

5. **장바구니 페이지**

   핵심기능

   - 장바구니에 담은 상품들을 보여준다

   기능 상세 설명

   - 장바구니에 담긴 상품들의 이름과 옵션과 수량을 표시하고 각각의 가격과 총 가격을 표시한다

   인터페이스 요구사항

   - 결제버튼을 누르면 결제 페이지로 이동한다
   - 각각의 상품의 x버튼을 누르면 장바구니에서 제외된다

   핵심기능

   - 장바구니에 담은 상품들을 보여준다

   기능 상세 설명

   - 장바구니에 담긴 상품들의 이름과 옵션과 수량을 표시하고 각각의 가격과 총 가격을 표시한다

   인터페이스 요구사항

   - 결제버튼을 누르면 결제 페이지로 이동한다
   - 각각의 상품의 x버튼을 누르면 장바구니에서 제외된다

6. **결제 페이지**

   핵심기능

   - 결제를 한다

   기능 상세 설명

   - 카드사, 카드번호, 카드 비밀번호로 결제를 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 카드사, 카드번호, 카드 비밀번호에 들어온 겂이 적합하지 않은 경우 적절한 알림을 보낸다

   핵심기능

   - 결제를 한다

   기능 상세 설명

   - 카드사, 카드번호, 카드 비밀번호로 결제를 진행하고, 이에 대한 상태 처리를 한다

   인터페이스 요구사항

   - 카드사, 카드번호, 카드 비밀번호에 들어온 겂이 적합하지 않은 경우 적절한 알림을 보낸다

7. **결제 완료 페이지**

   핵심기능

   - 결제완료 상태를 보여준다

   기능 상세 설명

   - 결제가 완료되었다는 메시지를 보여준다

   인터페이스 요구사항

   - 홈으로 돌아가기 버튼을 누르면 메인 페이지로 이동한다

   핵심기능

   - 결제완료 상태를 보여준다

   기능 상세 설명

   - 결제가 완료되었다는 메시지를 보여준다

   인터페이스 요구사항

   - 홈으로 돌아가기 버튼을 누르면 메인 페이지로 이동한다

**디렉터리 구조**

- public
- src
- components
- hooks
- routes
- styles
- dtomain
