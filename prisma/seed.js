import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

// Actual creator IDs from your database
const creatorIds = [
  "0379d838-0f4d-4f70-a4b1-d359093c05ad",
  "96fd6f03-a646-4960-90a2-ef4fbf2c8256",
  "b605dad1-f811-4032-868c-55f8490e257b",
  "e41d900f-7ab0-4305-858c-93625c9aaa54",
  "33a0678f-1b7e-40d5-8edf-2135f636ba82",
  "b8e64ade-1ec8-4092-97f5-00c11bd03a55",
  "1a40c525-38b6-4d55-9c96-285d89934c81",
  "241a1d70-ff43-4de1-90fb-72e8a3b2d393",
  "7fecfc51-cc97-48a2-868a-92d99ad78039",
  "5a27666e-4709-4c19-aed8-88f03a920803",
  "14b8ef0c-9fff-40bc-819e-a1e1a3a0877a",
  "126a8c92-68af-4fff-9b8c-21409000e6df",
  "631a3245-0043-40e4-bdf3-d6f349206b43",
  "3202550d-5652-4110-85e7-b6171d95d7ac",
  "5ae553b9-ea9d-441b-b2a4-98fcb7d65770",
  "409467a0-69e7-47f2-a071-844ac8eecdcf",
  "41d633eb-6d44-4db5-9b9b-51e6fad20e07",
  "6c5832d3-3323-4118-ba04-cc557428a21d",
  "f0af1616-464b-46c9-8443-26a16ffe27e6",
  "3a20cb4a-2047-4427-9b79-0c49c2dc5b8b",
];

const conversations = [
  {
    createrId: creatorIds[0],
    type: "group",
    name: "Tech Enthusiasts",
    bio: "A group for discussing the latest in technology and innovation",
    isPublic: true,
  },
  {
    createrId: creatorIds[1],
    type: "group",
    name: "Book Club",
    bio: "Monthly book discussions and recommendations",
    isPublic: true,
  },
  {
    createrId: creatorIds[2],
    type: "group",
    name: "Fitness Warriors",
    bio: "Share workout routines, meal plans, and motivation",
    isPublic: false,
  },
  {
    createrId: creatorIds[0],
    type: "group",
    name: "Gaming Squad",
    bio: "Casual and competitive gaming discussions",
    isPublic: true,
  },
  {
    createrId: creatorIds[3],
    type: "group",
    name: "Movie Buffs",
    bio: "Reviews, recommendations, and movie night planning",
    isPublic: true,
  },
  {
    createrId: creatorIds[1],
    type: "group",
    name: "Cooking Masters",
    bio: "Share recipes, cooking tips, and food photography",
    isPublic: true,
  },
  {
    createrId: creatorIds[4],
    type: "group",
    name: "Travel Wanderers",
    bio: "Share travel experiences, tips, and destination guides",
    isPublic: false,
  },
  {
    createrId: creatorIds[2],
    type: "group",
    name: "Photography Club",
    bio: "Share your best shots and learn photography techniques",
    isPublic: true,
  },
  {
    createrId: creatorIds[0],
    type: "group",
    name: "Music Lovers",
    bio: "Discover new music, share playlists, and discuss concerts",
    isPublic: true,
  },
  {
    createrId: creatorIds[3],
    type: "group",
    name: "Study Group",
    bio: "Collaborative learning and academic support",
    isPublic: false,
  },
  {
    createrId: creatorIds[1],
    type: "group",
    name: "Art & Design",
    bio: "Showcase artwork and discuss design principles",
    isPublic: true,
  },
  {
    createrId: creatorIds[4],
    type: "group",
    name: "Pet Parents",
    bio: "Share pet photos, care tips, and funny stories",
    isPublic: true,
  },
  {
    createrId: creatorIds[2],
    type: "group",
    name: "Startup Founders",
    bio: "Connect with entrepreneurs and share business insights",
    isPublic: false,
  },
  {
    createrId: creatorIds[0],
    type: "group",
    name: "Language Exchange",
    bio: "Practice languages with native speakers",
    isPublic: true,
  },
  {
    createrId: creatorIds[3],
    type: "group",
    name: "Crypto Traders",
    bio: "Discuss cryptocurrency markets and blockchain technology",
    isPublic: false,
  },
  {
    createrId: creatorIds[1],
    type: "group",
    name: "Garden Club",
    bio: "Gardening tips, plant care, and green thumb advice",
    isPublic: true,
  },
  {
    createrId: creatorIds[4],
    type: "group",
    name: "Anime & Manga",
    bio: "Discuss your favorite series and upcoming releases",
    isPublic: true,
  },
  {
    createrId: creatorIds[2],
    type: "group",
    name: "Sports Fans",
    bio: "Live game discussions and sports news",
    isPublic: true,
  },
  {
    createrId: creatorIds[0],
    type: "group",
    name: "DIY Projects",
    bio: "Share home improvement and craft projects",
    isPublic: false,
  },
  {
    createrId: creatorIds[3],
    type: "group",
    name: "Mental Wellness",
    bio: "A supportive space for mental health discussions",
    isPublic: false,
  },
];

async function main() {
  const prisma = new PrismaClient();

  const conversations = await prisma.$queryRaw`
    SELECT *
    FROM Conversations as c
    INNER JOIN Users as u
    WHERE c.createrId = u.id 
     `;

  console.log(conversations);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
