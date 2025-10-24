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
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <div className="mb-4 inline-block sm:mb-6">
            <h1 className="animate-fade-in-up mb-3 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              BitStream Blog
            </h1>
            <div className="animate-fade-in-up animation-delay-200 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 sm:w-24 md:w-32"></div>
          </div>
          <p className="animate-fade-in-up animation-delay-400 mx-auto max-w-4xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
            Insights, tutorials, and thoughts on modern web and mobile
            development
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="animate-fade-in-up animation-delay-600 mb-8 sm:mb-12 md:mb-16">
            <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/40 bg-white/60 shadow-2xl backdrop-blur-lg sm:rounded-2xl md:rounded-3xl">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 flex min-h-[350px] flex-col justify-end p-5 sm:min-h-[400px] sm:p-6 md:min-h-[450px] md:p-8 lg:min-h-[500px] lg:p-12">
                {/* Featured Badge */}
                <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                  <span className="flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1.5 text-xs font-semibold text-white sm:px-4 sm:py-2 sm:text-sm">
                    <svg
                      className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                  </span>
                </div>

                {/* Category and Meta */}
                <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4 sm:gap-3 md:gap-4">
                  <span
                    className={`bg-gradient-to-r ${categoryColors[featuredPost.category as keyof typeof categoryColors]} rounded-full px-3 py-1.5 text-xs font-semibold text-white sm:px-4 sm:py-2 sm:text-sm`}
                  >
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-white/80 sm:text-sm">
                    {featuredPost.readTime}
                  </span>
                  <span className="text-xs text-white/80 sm:text-sm">
                    {featuredPost.date}
                  </span>
                </div>

                {/* Title and Excerpt */}
                <h2 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-200 sm:mb-4 sm:text-3xl md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mb-4 max-w-3xl text-base text-white/90 sm:mb-6 sm:text-lg">
                  {featuredPost.excerpt}
                </p>

                {/* Author and Stats */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center">
                    <div
                      className={`h-10 w-10 bg-gradient-to-r ${featuredPost.gradient} mr-3 flex items-center justify-center rounded-full sm:mr-4 sm:h-12 sm:w-12`}
                    >
                      <span className="text-base font-semibold text-white sm:text-lg">
                        {featuredPost.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white sm:text-base">
                        {featuredPost.author}
                      </p>
                      <p className="text-xs text-white/80 sm:text-sm">
                        {featuredPost.authorRole}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white/80 sm:gap-4">
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-3 w-3 sm:h-4 sm:w-4"
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
                      <span className="text-xs sm:text-sm">
                        {featuredPost.views}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="h-3 w-3 sm:h-4 sm:w-4"
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
                      <span className="text-xs sm:text-sm">
                        {featuredPost.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid w-full gap-6 sm:gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <div className="min-w-0 lg:col-span-3">
            {/* Category Filter - Responsive */}
            <div className="mb-6 sm:mb-8">
              {/* Mobile: Horizontal Scrollable */}
              <div className="md:hidden">
                <div className="rounded-xl border border-white/40 bg-white/60 p-1.5 backdrop-blur-lg sm:rounded-2xl">
                  <div className="hide-scrollbar flex gap-1.5 overflow-x-auto sm:gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
                          flex-shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm
                          ${
                            selectedCategory === category
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                              : 'bg-white/40 text-gray-700 active:bg-white/60'
                          }
                        `}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet & Desktop: Flex Wrap */}
              <div className="hidden flex-wrap gap-3 md:flex">
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
            </div>

            {/* Blog Posts Grid */}
            <div className="mb-8 grid w-full gap-6 sm:mb-10 md:grid-cols-2 md:gap-8 lg:mb-12">
              {regularPosts.map((post, index) => (
                <article
                  key={index}
                  className="group w-full cursor-pointer"
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div
                    className={`
                    flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/40
                    bg-white/60 backdrop-blur-lg transition-all duration-500 sm:rounded-2xl
                    ${hoveredPost === index ? 'bg-white/80 shadow-2xl shadow-black/10 md:scale-105' : 'md:hover:bg-white/70 md:hover:shadow-xl'}
                  `}
                  >
                    {/* Image Placeholder */}
                    <div
                      className={`h-40 bg-gradient-to-br sm:h-48 ${post.gradient} relative overflow-hidden`}
                    >
                      {/* Overlay pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                        <div className="flex items-center justify-between">
                          <span
                            className={`bg-gradient-to-r ${categoryColors[post.category as keyof typeof categoryColors]} rounded-full px-2.5 py-1 text-xs font-semibold text-white sm:px-3 sm:text-sm`}
                          >
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2 text-xs text-white/80 sm:gap-3 sm:text-sm">
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
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      {/* Meta Info */}
                      <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 sm:gap-3 sm:text-sm">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-xl">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600 sm:text-base">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
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
                            className={`h-8 w-8 bg-gradient-to-r sm:h-9 sm:w-9 ${post.gradient} mr-2.5 flex items-center justify-center rounded-full sm:mr-3`}
                          >
                            <span className="text-xs font-semibold text-white sm:text-sm">
                              {post.author
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-900 sm:text-sm">
                              {post.author}
                            </p>
                            <p className="text-[10px] text-gray-500 sm:text-xs">
                              {post.authorRole}
                            </p>
                          </div>
                        </div>
                        <button className="text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 sm:text-sm">
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
              <button className="transform rounded-full border border-white/40 bg-white/60 px-6 py-3 text-sm font-semibold text-gray-700 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/80 sm:px-8 sm:py-4 sm:text-base md:hover:scale-105">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="min-w-0 space-y-6 sm:space-y-8">
            {/* Newsletter */}
            <div className="rounded-xl border border-white/40 bg-white/60 p-5 backdrop-blur-lg sm:rounded-2xl sm:p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
                📧 Stay Updated
              </h3>
              <p className="mb-4 text-xs text-gray-600 sm:text-sm">
                Get the latest articles and insights delivered straight to your
                inbox.
              </p>
              <div className="space-y-2.5 sm:space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/40 bg-white/80 px-3 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 sm:rounded-xl sm:px-4 sm:py-3"
                />
                <button className="w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg sm:rounded-xl sm:py-3 md:hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="rounded-xl border border-white/40 bg-white/60 p-5 backdrop-blur-lg sm:rounded-2xl sm:p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
                🏷️ Popular Tags
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                    className="cursor-pointer rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-2.5 py-1 text-xs text-gray-700 transition-all duration-300 hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 sm:px-3 sm:text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="rounded-xl border border-white/40 bg-white/60 p-5 backdrop-blur-lg sm:rounded-2xl sm:p-6">
              <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
                📝 Recent Posts
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div
                    key={index}
                    className="group flex cursor-pointer gap-2.5 sm:gap-3"
                  >
                    <div
                      className={`h-10 w-14 bg-gradient-to-br sm:h-12 sm:w-16 ${post.gradient} flex-shrink-0 rounded-md sm:rounded-lg`}
                    ></div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-xs font-semibold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-sm">
                        {post.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-gray-500 sm:mt-1 sm:text-xs">
                        {post.date}
                      </p>
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
