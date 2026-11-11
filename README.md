# Camping Planner Web Starter

이 프로젝트는 캠핑 플래너 API를 호출하는 Next.js 화면을 JavaScript로 만든 시작 코드입니다. 첫 화면(`/`)에서 캠핑장 목록을 반려동물 동반 여부로 걸러 보고, 상세 화면(`/campsites/[id]`)에서 캠핑장 정보를 확인한 뒤 캠핑 계획을 추가하며, 내 캠핑 계획 화면(`/trips`)에서 계획의 상태와 평점을 바꿉니다. 서버 데이터 요청은 `src/lib/api.js`의 함수와 TanStack Query 훅이 맡고, 스타일은 vanilla-extract(`*.css.js`)로 작성했습니다.

사진이 없는 캠핑장 자리에 쓰는 `public/tent.svg`는 Microsoft Fluent UI Emoji(https://github.com/microsoft/fluentui-emoji)의 Tent 그림이며 MIT License를 따릅니다.

머리글 로고(`public/logo.svg`)와 파비콘(`src/app/icon.svg`)은 Tabler Icons(https://github.com/tabler/tabler-icons, v3.30.0)의 `tent` 아이콘에 선 색만 바꾼 것이며 MIT License(Copyright (c) 2020-2024 Paweł Kuna)를 따릅니다.

## 제공하는 것과 할 일

- 제공: 캠핑장 목록(`/`, 반려동물 동반 가능 캠핑장만 보는 필터)·상세(`/campsites/[id]`)와 캠핑 계획 추가 폼, 내 캠핑 계획(`/trips`)의 상태 변경·평점, 계획을 추가한 뒤의 알림, 404 화면. 화면의 기능은 모두 동작합니다.
- 할 일: `src/` 아래 JavaScript 파일을 TypeScript로 옮기고, TypeScript 설정과 `next.config.mjs`를 바꿉니다. 옮긴 뒤에도 화면과 동작은 그대로입니다.
- 손대지 않는 파일: `public/`의 그림 파일과 `src/app/icon.svg`는 옮길 대상이 아닙니다.

## 구조

- `src/app/`: App Router의 경로 파일(`page.jsx`)과 공통 레이아웃(`layout.jsx`)
- `src/features/campsites/`: 캠핑장 목록·카드·상세 화면 컴포넌트와 캠핑장 조회 훅(`hooks/`)
- `src/features/trips/`: 캠핑 계획 추가 폼, 계획 목록·카드, 평점 컴포넌트와 계획 조회·수정 훅(`hooks/`)
- `src/components/`: 버튼·입력란·패널·알림 막대 같은 공통 컴포넌트, 404 화면(`NotFoundPage/`)과 전체 레이아웃(`layouts/GlobalLayout/`)
- `src/lib/`: API 요청 함수(`api.js`), 쿼리 키(`queryKeys.js`), 목록 필터 변환 함수
- `src/providers/`, `src/contexts/`: TanStack Query의 `QueryClientProvider`와 알림 메시지 컨텍스트
- `src/constants/`: 캠핑 계획 상태 이름과 인원·메모 범위 상수
- `src/styles/`: 테마 변수와 전역 스타일

## 시작하기

1. 캠핑 플래너 API 서버 프로젝트를 그 저장소의 README대로 실행합니다. 캠핑장
   동기화(`pnpm campsites:sync`)까지 마쳐야 목록에 캠핑장이 보입니다.

2. 프로젝트 루트의 `.env.local`에 적힌 `NEXT_PUBLIC_API_URL`이 API 서버 주소와
   같은지 확인합니다. API 서버를 기본 포트(4000)로 실행했다면 바꿀 필요가 없습니다.

```bash
NEXT_PUBLIC_API_URL=http://localhost:4000
```

3. 의존성을 설치합니다.

```bash
pnpm install
```

4. 개발 서버를 실행합니다.

```bash
pnpm dev
```

5. 브라우저에서 `http://localhost:3000`에 접속하면 캠핑장 카드 60개가 보입니다.
   카드를 눌러 상세 화면의 캠핑 계획 추가 폼에서 `계획 추가`를 누르면 화면 아래에
   `계획을 추가했습니다.` 알림이 뜨고 내 캠핑 계획 화면(`/trips`)으로 이동하며,
   방금 추가한 계획이 `가고 싶음` 상태로 보입니다.

## 확인하기

코드 포맷은 Prettier로 검사합니다. 아래 명령은 파일을 고치지 않고 검사만 하며,
문제가 없으면 `All matched files use Prettier code style!`를 출력하고, 포맷이
다른 파일이 있으면 그 파일을 `[warn]`으로 시작하는 줄에 보여 줍니다.

```bash
pnpm format:check
```

포맷을 맞추려면 아래 명령을 실행합니다. 이 명령은 파일을 고쳐 씁니다.

```bash
pnpm format
```

배포용 빌드가 되는지는 아래 명령으로 확인합니다.

```bash
pnpm build
```
