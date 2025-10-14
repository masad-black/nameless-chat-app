import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const groups = [
  {
    createrId: "02d63c37-26ac-401c-b31a-5284aae4d0cf",
    type: "group",
    name: "Marvel Cinematic Universe Fans",
    bio: "Discussing all things MCU!",
    isPublic: true,
  },
  {
    createrId: "0a267598-712f-470e-841b-2c15b8ea0b30",
    type: "group",
    name: "Anime Lovers Club",
    bio: "Sharing our favorite anime series and movies",
    isPublic: true,
  },
  {
    createrId: "1013a346-012a-4359-9025-dd894c66096e",
    type: "group",
    name: "Premier League Fans",
    bio: "Football discussions and match analysis",
    isPublic: true,
  },
  {
    createrId: "136f7996-045b-4b15-a825-ce7a2eb06a09",
    type: "group",
    name: "AI Enthusiasts",
    bio: "Exploring artificial intelligence and machine learning",
    isPublic: true,
  },
  {
    createrId: "14120481-1441-4367-8367-0ddde866bbc3",
    type: "group",
    name: "CS Study Group",
    bio: "Computer science students helping each other",
    isPublic: false,
  },
  {
    createrId: "16a97a41-e6c0-411e-989f-390d4892f814",
    type: "group",
    name: "Star Wars Universe",
    bio: "May the Force be with you!",
    isPublic: true,
  },
  {
    createrId: "27e3b750-22bc-4684-9fe0-9417311b4616",
    type: "group",
    name: "NBA Basketball Fans",
    bio: "Basketball highlights and discussions",
    isPublic: true,
  },
  {
    createrId: "27ffc7dd-0468-423a-9782-ea7e50426aa3",
    type: "group",
    name: "Web Developers Hub",
    bio: "Frontend and backend development tips",
    isPublic: true,
  },
  {
    createrId: "4119569c-b70a-407a-a226-32c84ff747dd",
    type: "group",
    name: "Gaming Community",
    bio: "Video games, reviews, and multiplayer sessions",
    isPublic: true,
  },
  {
    createrId: "585294c0-76a4-4391-953d-la7f7e990013",
    type: "group",
    name: "Studio Ghibli Fans",
    bio: "Appreciating the magic of Studio Ghibli",
    isPublic: true,
  },
  {
    createrId: "5d574716-498d-416b-8556-0774a068ffe0",
    type: "group",
    name: "Tennis Players",
    bio: "Tennis tips, matches, and equipment reviews",
    isPublic: true,
  },
  {
    createrId: "5e19d306-353b-4388-866b-f2a00606ff8c",
    type: "group",
    name: "Data Science Pros",
    bio: "Data analysis, visualization, and ML projects",
    isPublic: false,
  },
  {
    createrId: "6daeea77-5236-4295-b514-2a08ff6c1b67",
    type: "group",
    name: "Lord of the Rings Fellowship",
    bio: "One group to rule them all",
    isPublic: true,
  },
  {
    createrId: "774b85b0-a374-4fa8-b014-c4cfc4594404",
    type: "group",
    name: "Cricket Enthusiasts",
    bio: "Cricket matches and player statistics",
    isPublic: true,
  },
  {
    createrId: "811ee682-a72a-4067-9b1a-856d66339cc5",
    type: "group",
    name: "Cyber Security Experts",
    bio: "Security tips, vulnerabilities, and best practices",
    isPublic: false,
  },
  {
    createrId: "81fd5996-d189-4fa8-b2ef-c5b2a4900403",
    type: "group",
    name: "Harry Potter Wizards",
    bio: "Hogwarts alumni and magical discussions",
    isPublic: true,
  },
  {
    createrId: "86bd16d0-7e0d-4a9d-ba6e-194c0f6eefd4",
    type: "group",
    name: "Olympic Sports Fans",
    bio: "Following Olympic games and athletes",
    isPublic: true,
  },
  {
    createrId: "8e171d20-1452-4568-9ed6-ac47bd79d5bd",
    type: "group",
    name: "Python Programmers",
    bio: "Python coding challenges and projects",
    isPublic: true,
  },
  {
    createrId: "90e35874-a1b6-4a08-a459-784d72911610",
    type: "group",
    name: "One Piece Nakama",
    bio: "Following the Straw Hat Pirates journey",
    isPublic: true,
  },
  {
    createrId: "9707a3c2-1f53-4abb-beb4-72119c9a41e7",
    type: "group",
    name: "F1 Racing Fans",
    bio: "Formula 1 races, teams, and drivers",
    isPublic: true,
  },
  {
    createrId: "ad95cd34-6166-4b53-baaf-c9f32a90daf7",
    type: "group",
    name: "Blockchain Developers",
    bio: "Cryptocurrency and blockchain technology",
    isPublic: false,
  },
  {
    createrId: "b39103de-31a4-44f2-9437-4460478c099a",
    type: "group",
    name: "Marathon Runners",
    bio: "Training tips and race experiences",
    isPublic: true,
  },
  {
    createrId: "b4283301-42e8-4912-986b-d5580c095c59",
    type: "group",
    name: "DevOps Engineers",
    bio: "CI/CD, containers, and infrastructure",
    isPublic: true,
  },
  {
    createrId: "bf2fd2dd-e28c-4cbf-9083-23ef5c384f9c",
    type: "group",
    name: "Attack on Titan Scouts",
    bio: "Discussion group for AOT fans",
    isPublic: true,
  },
  {
    createrId: "bf32278e-2869-4816-b232-40582a15f379",
    type: "group",
    name: "Swimming Club",
    bio: "Swimming techniques and competitions",
    isPublic: true,
  },
  {
    createrId: "02d63c37-26ac-401c-b31a-5284aae4d0cf",
    type: "group",
    name: "Movie Critics",
    bio: "Film reviews and analysis",
    isPublic: true,
  },
  {
    createrId: "0a267598-712f-470e-841b-2c15b8ea0b30",
    type: "group",
    name: "Manga Readers",
    bio: "Latest manga chapters and discussions",
    isPublic: false,
  },
  {
    createrId: "1013a346-012a-4359-9025-dd894c66096e",
    type: "group",
    name: "Fantasy Football",
    bio: "Fantasy league management and tips",
    isPublic: true,
  },
  {
    createrId: "136f7996-045b-4b15-a825-ce7a2eb06a09",
    type: "group",
    name: "Mobile App Developers",
    bio: "iOS and Android development",
    isPublic: true,
  },
  {
    createrId: "14120481-1441-4367-8367-0ddde866bbc3",
    type: "group",
    name: "Open Source Contributors",
    bio: "Collaborating on open source projects",
    isPublic: true,
  },
];
async function main() {
  const prisma = new PrismaClient();

  for (let user of groups) {
    await prisma.conversations.create({
      data: {
        ...user,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
