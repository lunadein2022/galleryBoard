import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req, res) => {
  try {
    const allImage = await prisma.image.findMany({
      orderBy: {
        createAt: "desc",
      },
    });
    return NextResponse.json(allImage, {
      status: 200,
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req, res) => {
  const body = await req.json();

  try {
    const image = await prisma.image.create({
      data: {
        title: body.title,
        imageUrl: body.imageUrl,
        createAt: new Date(body.createAt),
      },
    });
    return NextResponse.json(image, {
      status: 200,
    });
  }catch (e) {
    return NextResponse.json(
      {error: "업로드 실패"},
      {
        status: 500,
      }
    )
  }
};
