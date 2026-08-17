import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/api/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok' });
  } catch (e) {
    res.status(500).json({ status: 'error', error: String(e) });
  }
});

// Character endpoint
app.get('/api/character/:userId', async (req, res) => {
  try {
    const character = await prisma.character.findUnique({
      where: { userId: req.params.userId },
      include: { inventory: true }
    });
    if (!character) return res.status(404).json({ error: 'Character not found' });
    res.json(character);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

export default app;
