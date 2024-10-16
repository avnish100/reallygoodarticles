'use client'

import Link from 'next/link'
import { BookmarkIcon, RssIcon, ChevronRightIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [hoveredId, setHoveredId] = useState(null)

  const articles = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      excerpt: "Exploring the potential impacts and advancements in AI over the next decade.",
      author: "Dr. Jane Smith",
      date: "2023-05-15",
      category: "Technology",
      imageUrl: "/placeholder.svg?height=400&width=600",
      featured: true
    },
    {
      id: 2,
      title: "Sustainable Living: Small Changes, Big Impact",
      excerpt: "Discover how minor adjustments in your daily life can contribute to a more sustainable future.",
      author: "Mark Johnson",
      date: "2023-05-10",
      category: "Environment",
      imageUrl: "/placeholder.svg?height=400&width=600"
    },
    {
      id: 3,
      title: "The Art of Mindfulness in a Digital Age",
      excerpt: "Learn how to stay present and focused in an increasingly connected world.",
      author: "Sarah Lee",
      date: "2023-05-05",
      category: "Wellness",
      imageUrl: "/placeholder.svg?height=400&width=600"
    },
    {
      id: 4,
      title: "Emerging Trends in Quantum Computing",
      excerpt: "Unraveling the mysteries and potential applications of quantum computing technology.",
      author: "Dr. Alex Chen",
      date: "2023-05-20",
      category: "Technology",
      imageUrl: "/placeholder.svg?height=400&width=600"
    },
    {
      id: 5,
      title: "The Rise of Vertical Farming",
      excerpt: "Exploring innovative solutions to feed growing urban populations sustainably.",
      author: "Emma Rodriguez",
      date: "2023-05-18",
      category: "Environment",
      imageUrl: "/placeholder.svg?height=400&width=600"
    },
    // Add more articles as needed
  ]

  const featuredArticle = articles.find(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <BookmarkIcon className="h-8 w-8 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold tracking-tight">ReallyGoodArticles</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-white hover:text-indigo-200 transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-indigo-200 transition-colors duration-300">About</Link></li>
              <li><Link href="/categories" className="text-white hover:text-indigo-200 transition-colors duration-300">Categories</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Curated Articles
            </span>
          </h1>

          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={featuredArticle.imageUrl} alt={featuredArticle.title} />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{featuredArticle.category}</div>
                    <Link href={`/article/${featuredArticle.id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{featuredArticle.title}</Link>
                    <p className="mt-2 text-gray-500">{featuredArticle.excerpt}</p>
                    <div className="mt-4 flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src="/placeholder.svg?height=40&width=40" alt={featuredArticle.author} />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{featuredArticle.author}</p>
                        <p className="text-sm text-gray-500">{featuredArticle.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredId(article.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="inline-block bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className={`p-4 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 ${hoveredId === article.id ? 'opacity-100' : 'opacity-0'}`}>
                  <Link href={`/article/${article.id}`} className="text-white flex items-center justify-center">
                    Read More <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <BookmarkIcon className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-semibold">CuratedReads</span>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/privacy" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} CuratedReads. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}