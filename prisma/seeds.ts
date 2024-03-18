import { PrismaClient } from '@prisma/client';
import { join } from 'path';
import { config } from 'dotenv';

config(); // This line loads the .env file at the root of the project into `process.env`

const prisma = new PrismaClient();

async function seed(file: string): Promise<void> {
  // Simulate loading and executing a seed file. In reality, you should call a specific async function here.
  // For example, if you have a file named `seedAdmins.ts`, you should import and call `await seedAdmins();`
  console.log(`Seeding ${file}...`);
  // Example: await import(`./seeds/${file}`).then((module) => module.default());

  console.log(`Seeded ${file}`);
}

async function main() {
  console.log(`Seeding ${process.env.NODE_ENV} database...`);
  
  // List all your seed functions here. Make sure these functions exist and are imported.
  await seed('admins');
  await seed('developers');
  await seed('businesses');
  await seed('conversations');
  await seed('hiring');
  await seed('referrals');
  await seed('specialties');
  
  console.log('Seeded database');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
