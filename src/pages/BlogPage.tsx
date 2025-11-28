import { useState, useEffect, useMemo } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Clock, User, ArrowRight, ArrowLeft, Search } from "lucide-react";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { blogService, BlogPost, BlogCategory } from "../services/blogService";
import { sanitizeHtmlSafe } from "../utils/sanitizeHtml";

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6);

  // Fetch posts and categories on mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsResult, categoriesResult] = await Promise.all([
          blogService.getPosts({ category: activeCategory }),
          blogService.getCategories(),
        ]);
        setPosts(postsResult.posts);
        setCategories(categoriesResult);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeCategory]);

  // Fetch related posts when a post is selected
  useEffect(() => {
    const fetchRelated = async () => {
      if (selectedPost) {
        const related = await blogService.getRelatedPosts(selectedPost.id);
        setRelatedPosts(related);
      }
    };
    fetchRelated();
  }, [selectedPost]);

  // Handle search
  useEffect(() => {
    const searchPosts = async () => {
      if (searchQuery.trim()) {
        const results = await blogService.searchPosts(searchQuery);
        setPosts(results);
      } else if (!loading) {
        const { posts } = await blogService.getPosts({ category: activeCategory });
        setPosts(posts);
      }
    };
    const debounceTimer = setTimeout(searchPosts, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, activeCategory, loading]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery("");
    setVisiblePosts(6);
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);
  const displayedPosts = regularPosts.slice(0, visiblePosts);

  // Single post view
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        {/* Article Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-white to-[#F9F8FB] py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollAnimation animation="fadeInUp">
              <button
                onClick={handleBackToList}
                className="flex items-center gap-2 text-[#8E3AFF] hover:text-[#B14EFF] mb-6 transition-colors min-h-[44px]"
                aria-label="Back to all articles"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to all articles
              </button>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <Badge className="mb-4 bg-white/90 text-[#8E3AFF] border-[#B14EFF]/30">
                {selectedPost.category}
              </Badge>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <h1 className="text-[#1C1B20] mb-6">{selectedPost.title}</h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="flex items-center gap-6 text-sm text-[#6D6A73]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>{selectedPost.readTime}</span>
                </div>
                <time dateTime={selectedPost.publishedAt}>
                  {new Date(selectedPost.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Featured Image */}
        <ScrollAnimation animation="scaleIn" className="max-w-4xl mx-auto px-6 -mt-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </ScrollAnimation>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <ScrollAnimation animation="fadeInUp">
            <div
              className="prose prose-lg max-w-none text-[#1C1B20]"
              dangerouslySetInnerHTML={{ __html: sanitizeHtmlSafe(selectedPost.content) }}
              style={{
                lineHeight: "1.8",
              }}
            />
          </ScrollAnimation>

          {/* Tags */}
          {selectedPost.tags && selectedPost.tags.length > 0 && (
            <ScrollAnimation animation="fadeInUp" className="mt-12 pt-8 border-t border-[#E7E2EE]">
              <h4 className="text-[#1C1B20] mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag) => (
                  <Badge key={tag} className="bg-[#F3E8FF] text-[#8E3AFF] border-[#B14EFF]/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </ScrollAnimation>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-[#F9F8FB]">
            <div className="max-w-7xl mx-auto px-6">
              <ScrollAnimation animation="fadeInUp">
                <h2 className="text-[#1C1B20] mb-8 text-center">Related Articles</h2>
              </ScrollAnimation>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <ScrollAnimation key={post.id} animation="fadeInUp" delay={index * 100}>
                    <Card
                      className="overflow-hidden border-[#E7E2EE] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => handlePostClick(post)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-[#8E3AFF] border-0">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-[#1C1B20] mb-2 group-hover:text-[#8E3AFF] transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-[#6D6A73]">{post.readTime}</p>
                      </div>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 lg:py-24 gradient-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <ScrollAnimation animation="fadeInUp">
              <h2 className="text-white mb-6">Ready to scale your operations?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let&apos;s discuss how SageStone can help you build your remote team.
              </p>
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-white !text-[#8E3AFF] hover:bg-white/90 min-w-[44px] min-h-[44px]"
                aria-label="Book a consultation"
              >
                <span className="text-[#8E3AFF]">Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#8E3AFF]" aria-hidden="true" />
              </Button>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F3E8FF] via-white to-[#F9F8FB] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fadeInUp" className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/90 text-[#8E3AFF] border-[#B14EFF]/30">
              Outsourcing Best Practices & Remote Team Management
            </Badge>
            <h1 className="text-[#1C1B20] mb-6">
              Insights for <span className="gradient-text">modern operations</span>
            </h1>
            <p className="text-xl text-[#6D6A73] leading-relaxed mb-8">
              Expert advice, industry trends, and practical guides for scaling your business operations. 
              Written by Jesel Cura and the SageStone Inc team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6D6A73]" aria-hidden="true" />
              <input
                id="blog-search"
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#E7E2EE] bg-white focus:outline-none focus:ring-2 focus:ring-[#B14EFF] focus:border-[#B14EFF]"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-[#E7E2EE] bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.name ? "default" : "outline"}
                className={activeCategory === category.name
                  ? "gradient-bg text-white" 
                  : "border-[#E7E2EE] text-[#6D6A73] hover:border-[#B14EFF] hover:text-[#8E3AFF]"
                }
                size="sm"
                onClick={() => handleCategoryChange(category.name)}
                aria-pressed={activeCategory === category.name}
              >
                {category.name}
                {category.count > 0 && (
                  <span className="ml-1 text-xs opacity-75">({category.count})</span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="py-20 text-center">
          <div className="inline-block w-8 h-8 border-4 border-[#B14EFF] border-t-transparent rounded-full animate-spin" />
          <p className="mt-4 text-[#6D6A73]">Loading articles...</p>
        </div>
      )}

      {/* Featured Article */}
      {!loading && featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="py-16 bg-[#F9F8FB]">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollAnimation animation="fadeInUp">
              <Badge className="mb-6 bg-white text-[#8E3AFF] border-[#B14EFF]/30">
                Featured Article
              </Badge>
            </ScrollAnimation>
            <ScrollAnimation animation="scaleIn" delay={100}>
              <Card
                className="overflow-hidden border-[#E7E2EE] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => handlePostClick(featuredPost)}
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B20]/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-[#8E3AFF] border-0">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <h2 className="text-[#1C1B20] mb-4">{featuredPost.title}</h2>
                    <p className="text-lg text-[#6D6A73] mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 mb-6 text-sm text-[#6D6A73]">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="gradient-bg text-white glow-button transition-lift hover-lift min-w-[44px] min-h-[44px]" aria-label={`Read article: ${featuredPost.title}`}>
                      Read article
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      {!loading && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            {posts.length === 0 ? (
              <ScrollAnimation animation="fadeInUp" className="text-center py-12">
                <p className="text-xl text-[#6D6A73]">No articles found.</p>
                {searchQuery && (
                  <Button
                    variant="outline"
                    className="mt-4 border-[#B14EFF] text-[#8E3AFF]"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear search
                  </Button>
                )}
              </ScrollAnimation>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedPosts.map((post, index) => (
                    <ScrollAnimation key={post.id} animation="fadeInUp" delay={index * 100}>
                      <Card
                        className="overflow-hidden border-[#E7E2EE] hover:shadow-xl transition-all duration-300 cursor-pointer group h-full"
                        onClick={() => handlePostClick(post)}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-white/90 text-[#8E3AFF] border-0">
                              {post.category}
                            </Badge>
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-[#1C1B20] mb-3 group-hover:text-[#8E3AFF] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-[#6D6A73] mb-4 leading-relaxed flex-1">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-[#E7E2EE]">
                            <div className="flex items-center gap-4 text-sm text-[#6D6A73]">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" aria-hidden="true" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" aria-hidden="true" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>

                          <button className="mt-4 text-sm text-[#8E3AFF] hover:text-[#B14EFF] flex items-center gap-1 group/btn">
                            Read more
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                          </button>
                        </div>
                      </Card>
                    </ScrollAnimation>
                  ))}
                </div>

                {visiblePosts < regularPosts.length && (
                  <ScrollAnimation animation="fadeInUp" className="text-center mt-12">
                    <Button 
                      variant="outline"
                      className="border-[#B14EFF] text-[#8E3AFF] hover:bg-[#F3E8FF] min-w-[44px] min-h-[44px]"
                      aria-label="Load more articles"
                      onClick={handleLoadMore}
                    >
                      Load more articles ({regularPosts.length - visiblePosts} remaining)
                    </Button>
                  </ScrollAnimation>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="text-white mb-6">
              Stay <span className="opacity-90">in the loop</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest insights on scaling operations, customer success, and remote team management delivered monthly.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                required
                aria-required="true"
                className="flex-1 px-4 py-3 rounded-lg border-0 bg-white/95 focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button type="submit" className="bg-white !text-[#8E3AFF] hover:bg-white/90 min-w-[44px] min-h-[44px]" aria-label="Subscribe to newsletter">
                <span className="text-[#8E3AFF]">Subscribe</span>
              </Button>
            </form>
          </ScrollAnimation>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-white border-t border-[#E7E2EE]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#6D6A73]">
              <strong>SageStone Inc Blog & Insights:</strong> Expert articles on outsourcing best practices, customer experience tips, 
              remote team management, Shopify support, property management operations, and scaling strategies for growing businesses. 
              Written by Jesel Cura and industry experts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
