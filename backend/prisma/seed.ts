import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const loc = await prisma.location.create({ data: { slug: 'home', name: 'Home', description: 'Your safe home', difficulty: 1 } });
  const user = await prisma.user.create({ data: { email: 'player@riftcity.local', password: 'changeme' } });
  const character = await prisma.character.create({ data: { userId: user.id, name: 'PlayerOne' } });
  console.log({ loc, user, character });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());
