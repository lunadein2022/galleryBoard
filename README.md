This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<br>

## 🙌 Next.js14로 이미지 첨부 게시판 만들기

배포주소 : https://gallery-board-mpzepplaw-jennalice000s-projects.vercel.app/

Next.js는 리액트 기반의 프론트엔드 프레임워크이면서 동시에 Node.js 기반의 백엔드 작업을 지원하는 풀스택 프레임워크입니다. 
Next.js 14버전으로 이미지를 첨부하고 제목을 입력해 게시물을 업로드하면 갤러리형으로 데이터가 화면에 표시되는 게시판을 만들어봅니다.


### 구현목록

#### 클라이언트
1. 업로드페이지 ( 제목, 파일 첨부, 업로드 버튼 )
2. 홈페이지 (업로드한 사진 및 제목들을 화면에 표시  /  최신순)

#### 서버
1. 파일, 제목 데이터에 대한 POST, GET요청 구현
2. 받은 데이터를 DB에 insert, find하는 코드 구현
 
<br>

## ❓ 사용한 기술  
- Framework : Next.js 14
- DB : postgres / prisma
- Library : axios
- Cloud : Cloudinary

<br>

## 🙋‍♀️ 해당 기술 선택 이유
제가 생각한 데이터의 흐름은 ‘사용자로부터 데이터를 받아 DB에 저장해놓고 갤러리에서는 DB에 저장해 놓은 데이터들을 불러온다’였는데 막상 시작해보니 이미지파일은 DB에 그대로 저장할 수 없기 때문에 클라우드에 이미지를 저장해 URL을 대신 저장해야겠다고 생각했습니다. 

그래서 이미지 저장용 클라우드를 uploadthing, S3, vercel storage, Cloudinary를 모두 사용해보고 next.js와 같이 작업한 관련 자료가 비교적 많은  Cloudinary를 사용했습니다. 

그리고 오라클보다 좀 더 라이트한 사용감의 DB를 사용해보고자 (환경설정 등의 간편함 등)몽고디비와 postgres를 사용해 본 후 vercel에 배포도 함께 진행하면 좋곘다고 생각해 vercel과 코드에서는 프리즈마를 이용하여 postgres를 선택했습니다.

api호출 관련 라이브러리는 작성하기 편하다고 생각되어 axios로 선택하여 작성하였습니다.

<br>

## 🛠 구현한 것

![home](https://res.cloudinary.com/dssjtmnan/image/upload/v1699571213/r6ut6gddhe4jfz193qih.png) 
- 홈 화면입니다. 단순 이미지 업로드와 제목 작성 후 등록이면 하나의 페이지 안에 위치시켜도 될 것 같아 입력 폼을 컴포넌트화해 페이지 안에 위치시켰습니다.

![파일업로드](https://res.cloudinary.com/dssjtmnan/image/upload/v1699571210/wobwes7fuij4w0gkbuui.png)  
- Cloudinary 내의 업로드 위젯을 이용해 이미지 파일을 업로드할 수 있습니다.

![제목, 폼 전송](https://res.cloudinary.com/dssjtmnan/image/upload/v1699571207/v1djvzc5x1ag5lex1zjz.png)  
- 파일을 업로드한 후 제목을 입력하고 업로드 버튼을 눌러 게시물을 포스팅합니다.

![프리즈마](https://res.cloudinary.com/dssjtmnan/image/upload/v1699571206/n0bwn8a3ptrmlsfrgtcp.png)  
- 포스팅된 게시물들이 POSTGRES DB에 등록된 걸 프리즈마 GUI로 확인한 모습입니다.

![목록](https://res.cloudinary.com/dssjtmnan/image/upload/v1699571210/rgu5ku6ro8jjtlxmvn4h.png)  
- 등록한 게시물들을 갤러리형으로 확인할 수 있습니다.

## 발견한 문제

- 사진업로드와 제목 폼 전송이 동시에 이뤄지는게 아니어서 원하는 사진에 제목을 넣을 수 없는 문제
(다른 클라우드서비스를 이용하던지 multer와 같은 라이브러리 사용법을 익히는 등 시간이 필요함)
- 게시물의 순서가 최신순이 아님
(DB에 저장할 때 자동으로 ID가 순차적으로 생성되도록 했고 실제로 그렇게 생성되었으나 화면에 표시될 때는 순서대로 표시되지 않음 / 어느 부분에서 문제가 일어나는지 알아봐야 함)





