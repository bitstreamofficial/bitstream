'use client';

import { useState } from 'react';

const blogPosts = [
  {
    title: 'Building Scalable React Applications in 2024',
    excerpt:
      'Learn the best practices and patterns for creating maintainable and scalable React applications that can grow with your business needs.',
    author: 'Sarah Chen',
    authorRole: 'Lead Developer',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Development',
    featured: true,
    image: '/api/placeholder/800/400',
    tags: ['React', 'JavaScript', 'Architecture', 'Best Practices'],
    gradient: 'from-blue-500 to-cyan-500',
    views: '2.4k',
    likes: '156',
  },
  {
    title: 'The Future of Mobile Development: React Native vs Native',
    excerpt:
      'A comprehensive comparison of cross-platform and native mobile development approaches, analyzing performance, development time, and maintenance.',
    author: 'Michael Rodriguez',
    authorRole: 'Mobile Architect',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Mobile',
    featured: false,
    image: '/api/placeholder/800/400',
    tags: ['React Native', 'iOS', 'Android', 'Mobile'],
    gradient: 'from-purple-500 to-pink-500',
    views: '1.8k',
    likes: '89',
  },
  {
    title: 'Optimizing Web Performance: Core Web Vitals Guide',
    excerpt:
      "Essential techniques for improving your website's performance and user experience through Core Web Vitals optimization.",
    author: 'Emily Johnson',
    authorRole: 'Performance Expert',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Performance',
    featured: false,
    image: '/api/placeholder/800/400',
    tags: ['Performance', 'SEO', 'Web Vitals', 'Optimization'],
    gradient: 'from-green-500 to-emerald-500',
    views: '3.1k',
    likes: '203',
  },
  {
    title: 'Introduction to TypeScript: Why Your Team Should Make the Switch',
    excerpt:
      'Discover the benefits of TypeScript and how to migrate your JavaScript projects for better code quality and developer experience.',
    author: 'David Kim',
    authorRole: 'Senior Developer',
    date: '2023-12-28',
    readTime: '6 min read',
    category: 'Development',
    featured: false,
    image: '/api/placeholder/800/400',
    tags: ['TypeScript', 'JavaScript', 'Development', 'Migration'],
    gradient: 'from-orange-500 to-red-500',
    views: '1.5k',
    likes: '92',
  },
  {
    title: 'Mastering CSS Grid: Modern Layout Techniques',
    excerpt:
      'Deep dive into CSS Grid properties and techniques for creating complex, responsive layouts with ease.',
    author: 'Lisa Wang',
    authorRole: 'Frontend Designer',
    date: '2023-12-20',
    readTime: '7 min read',
    category: 'Design',
    featured: false,
    image: '/api/placeholder/800/400',
    tags: ['CSS', 'Grid', 'Layout', 'Design'],
    gradient: 'from-teal-500 to-blue-500',
    views: '987',
    likes: '67',
  },
  {
    title: 'DevOps Best Practices: CI/CD Pipeline Setup',
    excerpt:
      'Learn how to set up efficient CI/CD pipelines for your projects using modern DevOps tools and practices.',
    author: 'Alex Thompson',
    authorRole: 'DevOps Engineer',
    date: '2023-12-15',
    readTime: '15 min read',
    category: 'DevOps',
    featured: false,
    image: '/api/placeholder/800/400',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Docker'],
    gradient: 'from-indigo-500 to-purple-500',
    views: '2.2k',
    likes: '134',
  },
];

const categories = [
  'All',
  'Development',
  'Mobile',
  'Performance',
  'Design',
  'DevOps',
];

const categoryColors = {
  Development: 'from-blue-500 to-blue-600',
  Mobile: 'from-purple-500 to-purple-600',
  Performance: 'from-green-500 to-green-600',
  Design: 'from-teal-500 to-teal-600',
  DevOps: 'from-indigo-500 to-indigo-600',
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container-custom section-padding">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block">
            <h1 className="animate-fade-in-up mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              BitStream Blog
            </h1>
            <div className="animate-fade-in-up animation-delay-200 mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
          <p className="animate-fade-in-up animation-delay-400 mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Insights, tutorials, and thoughts on modern web and mobile
            development
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="animate-fade-in-up animation-delay-600 mb-16">
            <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/40 bg-white/60 shadow-2xl backdrop-blur-lg">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex min-h-[500px] flex-col justify-end p-8 md:p-12">
                {/* Featured Badge */}
                <div className="absolute left-6 top-6">
                  <span className="flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-semibold text-white">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                  </span>
                </div>

                {/* Category and Meta */}
                <div className="mb-4 flex items-center gap-4">
                  <span
                    className={`bg-gradient-to-r ${categoryColors[featuredPost.category as keyof typeof categoryColors]} rounded-full px-4 py-2 text-sm font-semibold text-white`}
                  >
                    {featuredPost.category}
                  </span>
                  <span className="text-sm text-white/80">
                    {featuredPost.readTime}
                  </span>
                  <span className="text-sm text-white/80">
                    {featuredPost.date}
                  </span>
                </div>

                {/* Title and Excerpt */}
                <h2 className="mb-4 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-blue-200 md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mb-6 max-w-3xl text-lg text-white/90">
                  {featuredPost.excerpt}
                </p>

                {/* Author and Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`h-12 w-12 bg-gradient-to-r ${featuredPost.gradient} mr-4 flex items-center justify-center rounded-full`}
                    >
                      <span className="text-lg font-semibold text-white">
                        {featuredPost.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {featuredPost.author}
                      </p>
                      <p className="text-sm text-white/80">
                        {featuredPost.authorRole}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span className="text-sm">{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="text-sm">{featuredPost.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    transform rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105
                    ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'border border-white/40 bg-white/60 text-gray-700 backdrop-blur-lg hover:bg-white/80'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              {regularPosts.map((post, index) => (
                <article
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div
                    className={`
                    flex h-full flex-col overflow-hidden rounded-2xl border
                    border-white/40 bg-white/60 backdrop-blur-lg transition-all duration-500
                    ${hoveredPost === index ? 'scale-105 bg-white/80 shadow-2xl shadow-black/10' : 'hover:bg-white/70 hover:shadow-xl'}
                  `}
                  >
                    {/* Image Placeholder */}
                    <div
                      className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                    >
                      {/* Overlay pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <span
                            className={`bg-gradient-to-r ${categoryColors[post.category as keyof typeof categoryColors]} rounded-full px-3 py-1 text-sm font-semibold text-white`}
                          >
                            {post.category}
                          </span>
                          <div className="flex items-center gap-3 text-sm text-white/80">
                            <div className="flex items-center gap-1">
                              <svg
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <svg
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                              <span>{post.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Meta Info */}
                      <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mb-4 line-clamp-3 flex-1 text-gray-600">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="cursor-pointer rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`h-8 w-8 bg-gradient-to-r ${post.gradient} mr-3 flex items-center justify-center rounded-full`}
                          >
                            <span className="text-sm font-semibold text-white">
                              {post.author
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {post.author}
                            </p>
                            <p className="text-xs text-gray-500">
                              {post.authorRole}
                            </p>
                          </div>
                        </div>
                        <button className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center">
              <button className="transform rounded-full border border-white/40 bg-white/60 px-8 py-4 font-semibold text-gray-700 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/80">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter */}
            <div className="rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                📧 Stay Updated
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Get the latest articles and insights delivered straight to your
                inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/40 bg-white/80 px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                🏷️ Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'React',
                  'TypeScript',
                  'Mobile',
                  'Performance',
                  'CSS',
                  'JavaScript',
                  'DevOps',
                  'Design',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="cursor-pointer rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 text-sm text-gray-700 transition-all duration-300 hover:from-blue-100 hover:to-purple-100 hover:text-blue-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="rounded-2xl border border-white/40 bg-white/60 p-6 backdrop-blur-lg">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                📝 Recent Posts
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={index} className="group flex cursor-pointer gap-3">
                    <div
                      className={`h-12 w-16 bg-gradient-to-br ${post.gradient} flex-shrink-0 rounded-lg`}
                    ></div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                        {post.title}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
