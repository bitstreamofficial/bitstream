#!/usr/bin/env ts-node

import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const DB_NAME = 'bitstream'

async function setupDatabase() {
  console.log('🚀 Setting up BitStream database...')

  const client = new MongoClient(MONGODB_URI)

  try {
    await client.connect()
    console.log('✅ Connected to MongoDB')

    const db = client.db(DB_NAME)

    // Create collections
    const collections = ['users', 'projects', 'blog_posts', 'contacts']

    for (const collectionName of collections) {
      try {
        await db.createCollection(collectionName)
        console.log(`✅ Created collection: ${collectionName}`)
      } catch (error) {
        console.log(`ℹ️  Collection ${collectionName} already exists`)
      }
    }

    // Create indexes
    await db.collection('users').createIndex({ email: 1 }, { unique: true })
    await db.collection('blog_posts').createIndex({ slug: 1 }, { unique: true })
    await db.collection('projects').createIndex({ name: 1 }, { unique: true })

    console.log('✅ Created database indexes')

    // Insert sample data
    const sampleProjects = [
      {
        name: 'Litaria',
        description: 'A comprehensive literature management platform for researchers and academics.',
        technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
        category: 'Web Application',
        status: 'Live',
        createdAt: new Date()
      },
      {
        name: 'BEMS',
        description: 'Building Energy Management System for optimizing energy consumption.',
        technologies: ['Next.js', 'IoT Integration', 'PostgreSQL', 'Chart.js'],
        category: 'IoT Platform',
        status: 'Live',
        createdAt: new Date()
      },
      {
        name: 'DIU BusBuddy',
        description: 'Smart bus tracking system for Dhaka International University campus.',
        technologies: ['React Native', 'Firebase', 'Google Maps API'],
        category: 'Mobile App',
        status: 'Live',
        createdAt: new Date()
      },
      {
        name: 'ScheduLearn',
        description: 'Intelligent scheduling platform for educational institutions.',
        technologies: ['Vue.js', 'Express.js', 'MySQL', 'Socket.io'],
        category: 'Web Platform',
        status: 'Live',
        createdAt: new Date()
      },
      {
        name: 'DIU LeaderBoard',
        description: 'Gamified leaderboard system for student achievements and competitions.',
        technologies: ['React', 'GraphQL', 'Redis', 'AWS'],
        category: 'Web Application',
        status: 'Live',
        createdAt: new Date()
      }
    ]

    const existingProjects = await db.collection('projects').countDocuments()
    if (existingProjects === 0) {
      await db.collection('projects').insertMany(sampleProjects)
      console.log('✅ Inserted sample projects')
    } else {
      console.log('ℹ️  Sample projects already exist')
    }

    console.log('🎉 Database setup completed successfully!')

  } catch (error) {
    console.error('❌ Database setup failed:', error)
    process.exit(1)
  } finally {
    await client.close()
  }
}

if (require.main === module) {
  setupDatabase()
}

export { setupDatabase }
