# 📝 Guestbook App (with Docker + Express + SQLite + Nginx)

이 프로젝트는 Node.js 기반의 간단한 방명록 웹 애플리케이션으로, Docker를 활용하여 전체 환경을 컨테이너화했습니다.  
웹 서버는 Express, 데이터베이스는 SQLite를 사용하며, 앞단에 Nginx를 리버스 프록시로 구성했습니다.

---

## 📦 구성 요소

| 구성 요소 | 설명 |
|-----------|------|
| **Node.js (v21)** | Express 서버 구동 |
| **SQLite** | 파일 기반 초경량 데이터베이스 |
| **EJS** | 템플릿 렌더링 엔진 |
| **Nginx** | 리버스 프록시: 포트 80에서 요청 수신 후 내부 Express 앱에 전달 |
| **Docker / Docker Compose** | 전체 컨테이너 환경 구성 및 실행 |

---

## 📁 디렉토리 구조

```
guestbook-app/
├── Dockerfile
├── docker-compose.yml
├── app.js
├── package.json
├── 📁 views/
│   └── index.ejs
├── 📁 public/
│   └── style.css
├── 📁 db/
│   └── guestbook.db (실행 중 생성됨)
└── 📁 nginx/
    └── default.conf  ← nginx 설정파일
```

---

## 🚀 실행 방법

### 1. Docker Desktop 설치 (윈도우/맥)
- [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

### 2. 프로젝트 폴더에서 실행
```bash
docker compose up --build
```

### 3. 접속
브라우저에서 아래 주소로 접속하세요:

👉 [http://localhost](http://localhost)

---

## 🌐 요청 흐름 (구조)

```
사용자 브라우저 (http://localhost)
        |
        v
    [ Nginx (80포트) ]
        |
        v
[ Express 서버 (3000포트) ]
        |
        v
[ SQLite DB (guestbook.db) ]
```

- Nginx는 Docker Compose 네트워크 내부에서 `guestbook`이라는 이름으로 Express 앱에 요청을 전달합니다.

---

## ✅ 실습 포인트

- 직접 HTML 수정 → 스타일 변경
- 본인 이름 넣어보기
- SQLite 데이터베이스에 방명록 저장 확인
- Nginx 설정 구조 익히기
- 컨테이너 내 네트워크 흐름 이해하기
