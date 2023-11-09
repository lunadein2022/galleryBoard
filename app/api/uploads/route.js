// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function createImage(title, imageUrl) {
//   const image = await prisma.image.create({
//     data: {
//       title,
//       imageUrl,
//     },
//   });

//   console.log('Created image:', image);
// }

// createImage('Example Title', 'https://example.com/image.jpg')
//   .catch((error) => {
//     console.error('Failed to create image:', error);
//   })
//   .finally(() => {
//     prisma.$disconnect();
//   });

// 페이지 업로드 핸들러
// app.post("/pages/upload", async (req, res) => {
//   const { title, imageUrl, createAt } = req.body;

//   try {
//     const image = await prisma.image.create({ // 프리즈마를 사용하여 DB에 데이터 저장
//       data: {
//         title,
//         imageUrl,
//         createAt: new Date(createAt),
//       },
//     });

//     const url = image.imageUrl; // 저장 후에 얻은 URL 값
//     const date = image.createAt.toISOString(); // 저장 후에 얻은 날짜 값

//     console.log('Created image:', image);
//     res.status(200).json({ message: 'Image created successfully' });
//   } catch (error) {
//     console.error('Failed to create image:', error);
//     res.status(500).json({ error: 'Failed to create image' });
//   }
// });



// import prisma from "@/lib/prisma";
// import { NextResponse } from "next/server"

// export async function POST(request){
//     const res = await request.json()
//     const {title, imageUrl, createdAt} = res;
//      const result = await prisma.post.create({
//         data: {
//             title,
//             imageUrl,
//             createdAt: new Date(createdAt),
//         }
//      })

//     return NextResponse.json({result})
// }

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     // Read
//     const {user} = req.query

//     try{
//       const allImage = await prisma.Image.findMany({
//         orderBy: {
//           createAt: "desc",
//         },
//       }
//       );
//       res.json({ ok: true, allImage });
//     } catch (e) {
//       res.status(500).json(e);
//     }
//   }
//   if (req.method === "POST") {
//     // Create
//     const body = await req.json();
//     const image = await prisma.image.create({
//       data: {
//         title: body.title,
//         imageUrl: body.imageUrl,
//         createAt: new Date(body.createAt),
//       }
//     })



//     return NextResponse.json(image, { status: 201 });
//   }
// }


// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     // Read
//     const { image } = req.query;

//     try {
//       const allImage = await prisma.image.findMany({
//         orderBy: {
//           createAt: "desc",
//         },
//       });
//       res.json({ ok: true, allImage });
//     } catch (e) {
//       res.status(500).json(e);
//     }
//   } else if (req.method === "POST") { // else if로 수정
//     // Create
//     const body = await req.json();
//     const image = await prisma.image.create({
//       data: {
//         title: body.title,
//         imageUrl: body.imageUrl,
//         createAt: new Date(body.createAt),
//       },
//     });

//     res.status(201).json(image);
//   } else {
//     res.status(405).json({ error: "Method not allowed" }); // 잘못된 요청 메서드 처리
//   }
// }



import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req, res) => {
  const { image } = req.query;

  try {
    const allImage = await prisma.image.findMany({
      orderBy: {
        createAt: "desc",
      },
    });
    res.json({ ok: true, allImage });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const POST = async (req, res) => {
  const body = await req.json();
  const image = await prisma.image.create({
    data: {
      title: body.title,
      imageUrl: body.imageUrl,
      createAt: new Date(body.createAt),
    },
  });

  res.statusCode = 201; // 상태 코드를 설정합니다.
  res.json(image);
};
