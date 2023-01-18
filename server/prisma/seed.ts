import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const firstHabitId = '9789adb8-dbad-4c70-9bad-7c10652d775f'
const firstHabitCreationDate = new Date('2022-12-31T03:00:00.000')
const secondHabitId = '748d40e8-17c4-4343-bb99-405cc80ac247'
const secondHabitCreationDate = new Date('2023-01-12T01:00:00.000')
const thirdHabitId = '4c72ff4c-d09b-4b23-89f3-b4b807845371'
const thirdHabitCreationDate = new Date('2023-01-17T04:00:00.000')

async function run() {
  await prisma.day.deleteMany()
  await prisma.habit.deleteMany()
  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: 'Beber água',
        created_at: firstHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 }
          ],
        },
      },
    }),
    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: 'Beber água',
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 }
          ],
        },
      },
    }),
    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: 'Dormir 8h',
        created_at: thirdHabitCreationDate,
        weekDays: {
          create: [
            { week_day: 1 },
            { week_day: 2 },
            { week_day: 3 },
            { week_day: 4 },
            { week_day: 5 },
          ],
        },
      },
    }),
  ])
  await Promise.all([
    prisma.day.create({
      data: {
        date: new Date('2023-01-02'),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          },
        },
      },
    }),
    prisma.day.create({
      data: {
        date: new Date('2023-01-06'),
        dayHabits: {
          create: {
            habit_id: firstHabitId,
          },
        },
      },
    }),
    prisma.day.create({
      data: {
        date: new Date('2023-01-04'),
        dayHabits: {
          create: [
            { habit_id: firstHabitId },
            { habit_id: secondHabitId }
          ],
        },
      },
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })