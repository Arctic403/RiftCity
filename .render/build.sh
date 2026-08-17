#!/bin/bash
set -ex

cd backend
npm install
npx prisma generate
npx prisma migrate deploy
npm run build
