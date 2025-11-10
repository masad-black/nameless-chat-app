import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// Helper function to generate random items from array
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomItems(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

async function main() {
  console.log("🌱 Starting seed...");

  // Clear existing data (optional - comment out if you want to keep existing data)
  console.log("🗑️  Clearing existing data...");
  await prisma.groupRequests.deleteMany();
  await prisma.messages.deleteMany();
  await prisma.conversationMembers.deleteMany();
  await prisma.conversations.deleteMany();
  await prisma.users.deleteMany();

  // 1. Create 30 Users
  console.log("👥 Creating 30 users...");

  const usernames = [
    "alex_thunder",
    "bella_moon",
    "charlie_wave",
    "diana_star",
    "ethan_fire",
    "fiona_sky",
    "george_rock",
    "hannah_river",
    "isaac_storm",
    "julia_sun",
    "kevin_ocean",
    "laura_forest",
    "mason_wind",
    "nina_bloom",
    "oliver_peak",
    "penny_frost",
    "quinn_blaze",
    "rachel_cloud",
    "steven_leaf",
    "tara_dawn",
    "ursula_dusk",
    "victor_sage",
    "willow_rain",
    "xander_bolt",
    "yara_phoenix",
    "zane_knight",
    "aria_jade",
    "blake_steel",
    "chloe_rose",
    "derek_hunt",
  ];

  const bios = [
    "Coffee lover ☕ | Tech enthusiast",
    "Passionate about design and creativity 🎨",
    "Adventure seeker 🏔️ | Travel addict",
    "Bookworm 📚 | Always learning",
    "Fitness freak 💪 | Healthy lifestyle",
    "Music lover 🎵 | Guitar player",
    "Foodie 🍕 | Trying new recipes",
    "Gamer 🎮 | Streaming on weekends",
    "Nature lover 🌿 | Hiking enthusiast",
    "Photographer 📷 | Capturing moments",
    "Entrepreneur | Building the future",
    "Developer | Coding all day",
    "Writer ✍️ | Story teller",
    "Artist | Creating magic",
    "Mentor | Helping others grow",
  ];

  const hashedPassword = await bcrypt.hash("password123", 10);

  const users = await Promise.all(
    usernames.map(async (username, index) => {
      return prisma.users.create({
        data: {
          username,
          email: `${username}@example.com`,
          password: hashedPassword,
          bio: randomItem(bios),
          profileImage: `https://i.pravatar.cc/150?img=${index + 1}`,
        },
      });
    })
  );

  console.log(`✅ Created ${users.length} users`);

  // 2. Create Direct Conversations (1-on-1 chats)
  console.log("💬 Creating direct conversations...");

  const directConversations = [];

  // Create 15 direct conversations between random users
  for (let i = 0; i < 15; i++) {
    const [user1, user2] = randomItems(users, 2);

    const conversation = await prisma.conversations.create({
      data: {
        type: "direct",
        isPublic: false,
        createrId: user1.id,
      },
    });

    // Add both users as members
    await prisma.conversationMembers.createMany({
      data: [
        {
          conversationId: conversation.id,
          userId: user1.id,
          role: "member",
        },
        {
          conversationId: conversation.id,
          userId: user2.id,
          role: "member",
        },
      ],
    });

    directConversations.push({ conversation, members: [user1, user2] });
  }

  console.log(`✅ Created ${directConversations.length} direct conversations`);

  // 3. Create Group Conversations
  console.log("👥 Creating group conversations...");

  const groupNames = [
    "Study Group 📚",
    "Weekend Warriors 🎮",
    "Fitness Buddies 💪",
    "Foodies United 🍕",
    "Travel Squad ✈️",
    "Tech Innovators 💻",
    "Book Club 📖",
    "Music Lovers 🎵",
    "Photography Club 📷",
    "Movie Night 🎬",
    "Startup Ideas 💡",
    "Coding Ninjas 👨‍💻",
    "Art & Design 🎨",
    "Sports Fan Club ⚽",
    "Coffee Addicts ☕",
  ];

  const groupBios = [
    "A place for learning and growth",
    "Having fun together",
    "Staying healthy and motivated",
    "Sharing food adventures",
    "Planning our next adventure",
    "Discussing the latest in tech",
    "Reading and discussing books",
    "Sharing music recommendations",
    "Sharing our best shots",
    "Weekly movie recommendations",
    "Brainstorming business ideas",
    "Solving code challenges",
    "Sharing creative work",
    "Discussing sports and games",
    "For coffee enthusiasts",
  ];

  const groupConversations = [];

  // Create 10 groups with varying number of members
  for (let i = 0; i < 10; i++) {
    const creator = randomItem(users);
    const memberCount = Math.floor(Math.random() * 10) + 3; // 3-12 members
    const groupMembers = randomItems(
      users.filter((u) => u.id !== creator.id),
      memberCount - 1
    );

    const conversation = await prisma.conversations.create({
      data: {
        type: "group",
        name: groupNames[i],
        bio: groupBios[i],
        bannerImage: `https://picsum.photos/seed/${i}/800/200`,
        isPublic: Math.random() > 0.5, // 50% public, 50% private
        createrId: creator.id,
      },
    });

    // Add creator as admin
    await prisma.conversationMembers.create({
      data: {
        conversationId: conversation.id,
        userId: creator.id,
        role: "admin",
      },
    });

    // Add other members
    await prisma.conversationMembers.createMany({
      data: groupMembers.map((member) => ({
        conversationId: conversation.id,
        userId: member.id,
        role: Math.random() > 0.8 ? "admin" : "member", // 20% admins, 80% members
      })),
    });

    groupConversations.push({
      conversation,
      creator,
      members: [creator, ...groupMembers],
    });
  }

  console.log(`✅ Created ${groupConversations.length} group conversations`);

  // 4. Create Messages for all conversations
  console.log("💌 Creating messages...");

  const messageTexts = [
    "Hey! How are you doing?",
    "That sounds great!",
    "I totally agree with you",
    "What do you think about this?",
    "Let me know when you're free",
    "Haha, that's hilarious! 😂",
    "Thanks for sharing!",
    "I'll be there in 10 minutes",
    "Can we reschedule?",
    "Looking forward to it!",
    "That was an amazing experience",
    "I learned something new today",
    "Check out this cool thing I found",
    "Anyone up for coffee?",
    "Good morning everyone! ☀️",
    "Have a great day!",
    "See you soon!",
    "Count me in!",
    "Sorry, I can't make it today",
    "That's a brilliant idea!",
    "Let's do this! 💪",
    "I need some advice",
    "What's everyone up to?",
    "This is so exciting!",
    "I appreciate your help",
  ];

  let totalMessages = 0;

  // Add messages to direct conversations
  for (const { conversation, members } of directConversations) {
    const messageCount = Math.floor(Math.random() * 20) + 5; // 5-24 messages

    for (let i = 0; i < messageCount; i++) {
      const sender = randomItem(members);
      const isImage = Math.random() > 0.9; // 10% chance of image

      await prisma.messages.create({
        data: {
          conversationId: conversation.id,
          senderId: sender.id,
          type: isImage ? "image" : "text",
          content: isImage ? "Shared an image" : randomItem(messageTexts),
          imageUrl: isImage
            ? `https://picsum.photos/seed/${conversation.id}-${i}/400/300`
            : null,
          createdAt: new Date(
            Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
          ), // Last 7 days
        },
      });
      totalMessages++;
    }
  }

  // Add messages to group conversations
  for (const { conversation, members } of groupConversations) {
    const messageCount = Math.floor(Math.random() * 40) + 10; // 10-49 messages

    for (let i = 0; i < messageCount; i++) {
      const sender = randomItem(members);
      const isImage = Math.random() > 0.85; // 15% chance of image

      await prisma.messages.create({
        data: {
          conversationId: conversation.id,
          senderId: sender.id,
          type: isImage ? "image" : "text",
          content: isImage ? "Shared an image" : randomItem(messageTexts),
          imageUrl: isImage
            ? `https://picsum.photos/seed/${conversation.id}-${i}/400/300`
            : null,
          createdAt: new Date(
            Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
          ), // Last 7 days
        },
      });
      totalMessages++;
    }
  }

  console.log(`✅ Created ${totalMessages} messages`);

  // 5. Create Group Join Requests
  console.log("📝 Creating group join requests...");

  const publicGroups = groupConversations.filter(
    (g) => g.conversation.isPublic
  );
  let requestCount = 0;

  for (const { conversation, members } of publicGroups) {
    // Random users want to join public groups
    const requesters = randomItems(
      users.filter((u) => !members.some((m) => m.id === u.id)),
      Math.floor(Math.random() * 3) + 1 // 1-3 requests per public group
    );

    for (const requester of requesters) {
      await prisma.groupRequests.create({
        data: {
          conversationId: conversation.id,
          userId: requester.id,
        },
      });
      requestCount++;
    }
  }

  console.log(`✅ Created ${requestCount} group join requests`);

  // Summary
  console.log("\n🎉 Seed completed successfully!");
  console.log("═══════════════════════════════════════");
  console.log(`👥 Users: ${users.length}`);
  console.log(`💬 Direct Conversations: ${directConversations.length}`);
  console.log(`👥 Group Conversations: ${groupConversations.length}`);
  console.log(`💌 Messages: ${totalMessages}`);
  console.log(`📝 Group Requests: ${requestCount}`);
  console.log("═══════════════════════════════════════");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
