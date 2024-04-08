import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'UM evento p/ devs apaixonados(as) por código!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})