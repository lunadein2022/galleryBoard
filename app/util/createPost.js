import prisma from "../lib/prisma";

export const createPost = async () => {
    const data = [ {
        title : '7th Title',
        imageUrl : 'http://res.cloudinary.com/dssjtmnan/image/upload/v1699499139/elhnjsp0wxitmnelfb2w.jpg',
        createAt : '2023-11-03T03:05:39+00:00'
    },
    {
        title : '8th Title',
        imageUrl : 'http://res.cloudinary.com/dssjtmnan/image/upload/v1699499139/elhnjsp0wxitmnelfb2w.jpg',
        createAt : '2023-11-04T03:05:39+00:00'
    }
]
    try {
        const results = await prisma.Image.create ({
            data: {
                title : '5th Title',
                imageUrl : 'http://res.cloudinary.com/dssjtmnan/image/upload/v1699499139/elhnjsp0wxitmnelfb2w.jpg',
                createAt : '2023-11-02T03:05:39+00:00'
            }
        });
        return results;

    }catch (error) {
        console.log(error)
    }
    
    return 'data';
} 