import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createImage(title, imageUrl) {
  const image = await prisma.image.create({
    data: {
      title,
      imageUrl,
    },
  });

  console.log('Created image:', image);
}

createImage('Example Title', 'https://example.com/image.jpg')
  .catch((error) => {
    console.error('Failed to create image:', error);
  })
  .finally(() => {
    prisma.$disconnect();
  });

// 페이지 업로드 핸들러
app.post("/pages/upload", async (req, res) => {
  const { title, imageUrl, createAt } = req.body;

  try {
    const image = await prisma.image.create({ // 프리즈마를 사용하여 DB에 데이터 저장
      data: {
        title,
        imageUrl,
        createAt: new Date(createAt),
      },
    });

    const url = image.imageUrl; // 저장 후에 얻은 URL 값
    const date = image.createAt.toISOString(); // 저장 후에 얻은 날짜 값

    console.log('Created image:', image);
    res.status(200).json({ message: 'Image created successfully' });
  } catch (error) {
    console.error('Failed to create image:', error);
    res.status(500).json({ error: 'Failed to create image' });
  }
});
