// Blog CMS Service
// This service provides a unified interface for fetching blog content
// It can be configured to work with various headless CMS providers

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorImage?: string;
  readTime: string;
  image: string;
  publishedAt: string;
  featured?: boolean;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// CMS Configuration type - credentials should be provided via environment variables
// when connecting to a real CMS provider
interface CMSConfig {
  provider: 'contentful' | 'sanity' | 'strapi' | 'static';
  // Note: In production, use environment variables for sensitive config:
  // apiUrl: process.env.CMS_API_URL
  // accessToken: process.env.CMS_ACCESS_TOKEN
}

// Default to static content for demo purposes
const config: CMSConfig = {
  provider: 'static',
};

// Static blog posts for fallback/demo
const staticPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'scale-shopify-support-without-burning-out-team',
    title: '5 Ways to Scale Shopify Support Without Burning Out Your Team',
    excerpt: 'Growing your Shopify store is exciting — until customer inquiries start overwhelming your inbox. Here\'s how to scale support sustainably.',
    content: `
      <h2>The Challenge of Scaling Support</h2>
      <p>Growing your Shopify store is exciting — until customer inquiries start overwhelming your inbox. As your business scales, so do the demands on your support team. Without the right systems in place, you risk burning out your team and letting customer experience suffer.</p>
      
      <h2>1. Implement Tiered Support</h2>
      <p>Not all inquiries require the same level of expertise. Create a tiered system where simple questions (shipping status, return policies) are handled by Tier 1 agents, while complex issues escalate to specialists.</p>
      
      <h2>2. Invest in Self-Service Resources</h2>
      <p>A comprehensive FAQ, knowledge base, and order tracking system can reduce ticket volume by 30-40%. Customers often prefer finding answers themselves if the resources are easy to navigate.</p>
      
      <h2>3. Leverage Automation Wisely</h2>
      <p>Use chatbots and automated responses for common queries, but always provide a clear path to human support. The goal is to augment your team, not replace the human touch that builds customer loyalty.</p>
      
      <h2>4. Outsource Strategically</h2>
      <p>Partner with a BPO that understands eCommerce. A well-trained external team can handle overflow during peak seasons, night shifts, and routine inquiries — freeing your core team to focus on complex issues and strategy.</p>
      
      <h2>5. Monitor and Optimize Continuously</h2>
      <p>Track metrics like first response time, resolution time, and CSAT scores. Use this data to identify bottlenecks and continuously improve your processes.</p>
      
      <h2>Conclusion</h2>
      <p>Scaling support doesn't mean sacrificing quality or burning out your team. With the right combination of technology, process, and partnership, you can deliver exceptional customer experiences at any scale.</p>
    `,
    category: 'eCommerce',
    author: 'Jesel Cura',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI2ODA4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2025-01-15T10:00:00Z',
    featured: true,
    tags: ['Shopify', 'Customer Support', 'Scaling', 'eCommerce'],
    metaTitle: '5 Ways to Scale Shopify Support | SageStone Inc Blog',
    metaDescription: 'Learn how to scale your Shopify customer support without burning out your team. Expert tips on tiered support, automation, and strategic outsourcing.',
  },
  {
    id: '2',
    slug: 'how-property-managers-benefit-from-virtual-assistants',
    title: 'How Property Managers Benefit from Virtual Assistants',
    excerpt: 'Tenant communication, maintenance requests, leasing admin — discover how virtual assistants free up 30+ hours per week for property managers.',
    content: `
      <h2>The Property Manager's Dilemma</h2>
      <p>Property managers wear many hats: leasing agent, maintenance coordinator, tenant relations specialist, and administrator. With portfolios growing and tenant expectations rising, something has to give — or does it?</p>
      
      <h2>Tasks Perfect for Virtual Assistants</h2>
      <ul>
        <li><strong>Tenant Communication:</strong> Responding to routine inquiries, sending reminders, and coordinating move-ins/move-outs</li>
        <li><strong>Maintenance Coordination:</strong> Logging requests, dispatching vendors, and following up on completion</li>
        <li><strong>Leasing Admin:</strong> Processing applications, scheduling tours, and preparing lease documents</li>
        <li><strong>Accounting Support:</strong> Rent collection follow-ups, invoice processing, and reporting</li>
      </ul>
      
      <h2>The Results Speak for Themselves</h2>
      <p>Property managers who work with dedicated VAs report saving 30+ hours per week, reducing response times by 60%, and improving tenant satisfaction scores significantly.</p>
      
      <h2>Finding the Right Fit</h2>
      <p>Look for VAs with property management experience, excellent communication skills, and familiarity with industry tools like AppFolio, Buildium, or Yardi. A good BPO partner will handle training and quality assurance.</p>
    `,
    category: 'Property Management',
    author: 'Jesel Cura',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2025-01-10T10:00:00Z',
    tags: ['Property Management', 'Virtual Assistants', 'Productivity'],
    metaTitle: 'Virtual Assistants for Property Managers | SageStone Inc',
    metaDescription: 'Discover how property managers save 30+ hours per week with virtual assistants. Learn which tasks to delegate and how to find the right VA for your portfolio.',
  },
  {
    id: '3',
    slug: 'customer-success-core-of-bpo-strategy',
    title: 'Why Customer Success Should Be the Core of Every BPO Strategy',
    excerpt: 'Most BPOs focus on cost savings. But the best outsourcing partners prioritize customer success. Here\'s why it matters.',
    content: `
      <h2>Beyond Cost Savings</h2>
      <p>When most companies think about outsourcing, they think about cost savings. And while reducing costs is important, it shouldn't be the primary driver of your BPO strategy.</p>
      
      <h2>The Customer Success Mindset</h2>
      <p>Customer success-focused BPOs measure their value not by how much they save you, but by how much value they create for your customers — and by extension, your business.</p>
      
      <h2>Key Differentiators</h2>
      <ul>
        <li><strong>Proactive vs. Reactive:</strong> Anticipating customer needs instead of just responding to tickets</li>
        <li><strong>Outcome-Focused:</strong> Measuring success by customer retention and satisfaction, not just handle time</li>
        <li><strong>Continuous Improvement:</strong> Regularly analyzing data to identify opportunities for improvement</li>
        <li><strong>Partnership Approach:</strong> Acting as an extension of your team, aligned with your goals</li>
      </ul>
      
      <h2>The ROI of Customer Success</h2>
      <p>Companies that prioritize customer success see 18% higher CSAT scores, 25% lower churn rates, and significantly higher customer lifetime value. The right BPO partner can help you achieve these results.</p>
    `,
    category: 'Customer Experience',
    author: 'Jesel Cura',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0fGVufDF8fHx8MTc2MjY3MTI3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2025-01-05T10:00:00Z',
    tags: ['Customer Success', 'BPO', 'Strategy'],
    metaTitle: 'Customer Success in BPO Strategy | SageStone Inc',
    metaDescription: 'Learn why the best BPO partners prioritize customer success over cost savings, and how this approach delivers better ROI for your business.',
  },
  {
    id: '4',
    slug: 'real-cost-back-office-operations',
    title: 'The Real Cost of Back-Office Operations: In-House vs. Outsourced',
    excerpt: 'A complete breakdown of the true costs of managing back-office operations in-house versus outsourcing to a BPO partner.',
    content: `
      <h2>Understanding True Costs</h2>
      <p>When comparing in-house versus outsourced operations, most companies only look at direct labor costs. But the true cost includes much more.</p>
      
      <h2>Hidden Costs of In-House Operations</h2>
      <ul>
        <li><strong>Recruiting and Hiring:</strong> Job postings, interviews, background checks, onboarding</li>
        <li><strong>Training and Development:</strong> Initial training, ongoing education, certifications</li>
        <li><strong>Benefits and Overhead:</strong> Health insurance, PTO, office space, equipment</li>
        <li><strong>Management Time:</strong> Supervision, performance reviews, HR issues</li>
        <li><strong>Technology:</strong> Software licenses, hardware, IT support</li>
        <li><strong>Turnover Costs:</strong> Recruiting replacements, knowledge loss, productivity gaps</li>
      </ul>
      
      <h2>The Outsourcing Advantage</h2>
      <p>A good BPO partner absorbs many of these costs and spreads them across multiple clients, achieving economies of scale. You pay a predictable monthly rate while they handle recruiting, training, management, and technology.</p>
      
      <h2>Making the Right Choice</h2>
      <p>The decision isn't always about cost. Consider factors like control, flexibility, scalability, and strategic focus. The best choice depends on your specific situation and goals.</p>
    `,
    category: 'Operations',
    author: 'Jesel Cura',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1580795478966-561ba4f1ce68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBvcGVyYXRpb25zJTIwdGVhbXxlbnwxfHx8fDE3NjI3MTQ4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    publishedAt: '2025-01-01T10:00:00Z',
    tags: ['Operations', 'Cost Analysis', 'Outsourcing'],
    metaTitle: 'In-House vs Outsourced Operations Cost Analysis | SageStone Inc',
    metaDescription: 'Complete breakdown of the true costs of in-house vs outsourced back-office operations. Understand hidden costs and make informed decisions.',
  },
  {
    id: '5',
    slug: 'build-global-team-that-works',
    title: 'How to Build a Global Team That Actually Works',
    excerpt: 'Best practices for managing distributed teams across time zones, cultures, and communication preferences. Lessons from 10 years of global ops.',
    content: `
      <h2>The Global Team Challenge</h2>
      <p>Building a distributed team that works well together isn't just about hiring talented people in different locations. It requires intentional effort around communication, culture, and processes.</p>
      
      <h2>Key Success Factors</h2>
      
      <h3>1. Async-First Communication</h3>
      <p>Design your workflows to work asynchronously. Use clear documentation, recorded videos, and detailed handoffs. Reserve synchronous meetings for relationship-building and complex problem-solving.</p>
      
      <h3>2. Cultural Intelligence</h3>
      <p>Invest in understanding different work cultures. What's considered direct communication in one culture might be rude in another. Create space for team members to share their preferences and norms.</p>
      
      <h3>3. Clear Processes and Documentation</h3>
      <p>When you can't tap someone on the shoulder to ask a question, documentation becomes critical. Create playbooks, FAQs, and decision trees that empower team members to work independently.</p>
      
      <h3>4. Intentional Team Building</h3>
      <p>Remote teams need more deliberate effort to build relationships. Schedule virtual social events, celebrate wins together, and create opportunities for casual conversation.</p>
      
      <h2>The Payoff</h2>
      <p>Well-managed global teams offer significant advantages: access to diverse talent pools, follow-the-sun support coverage, and fresh perspectives that drive innovation.</p>
    `,
    category: 'Remote Work',
    author: 'Jesel Cura',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-20T10:00:00Z',
    tags: ['Remote Work', 'Team Building', 'Global Teams'],
    metaTitle: 'Building Effective Global Teams | SageStone Inc',
    metaDescription: 'Learn best practices for managing distributed teams across time zones and cultures. 10 years of lessons from global operations experts.',
  },
  {
    id: '6',
    slug: 'data-driven-cx-turning-feedback-into-action',
    title: 'Data-Driven CX: Turning Customer Feedback Into Action',
    excerpt: 'How to use analytics, CSAT tracking, and sentiment analysis to improve customer experience and drive business growth.',
    content: `
      <h2>The Data Opportunity</h2>
      <p>Every customer interaction generates valuable data. The question is: are you using it effectively to improve your customer experience?</p>
      
      <h2>Building Your CX Analytics Framework</h2>
      
      <h3>1. Track the Right Metrics</h3>
      <p>Go beyond basic metrics like ticket volume. Track CSAT, NPS, Customer Effort Score, first contact resolution rate, and time to resolution. Each tells a different part of the story.</p>
      
      <h3>2. Implement Sentiment Analysis</h3>
      <p>Use AI-powered tools to analyze the sentiment of customer communications. Identify trends in positive and negative feedback, and track how sentiment changes over time.</p>
      
      <h3>3. Close the Feedback Loop</h3>
      <p>Collecting data is only valuable if you act on it. Create processes to regularly review insights, identify improvement opportunities, and implement changes.</p>
      
      <h3>4. Share Insights Across Teams</h3>
      <p>Customer feedback shouldn't live only in the support team. Share insights with product, marketing, and leadership to drive company-wide improvements.</p>
      
      <h2>From Insights to Action</h2>
      <p>The most successful companies treat CX data as a strategic asset, using it to make informed decisions about products, processes, and priorities.</p>
    `,
    category: 'Analytics',
    author: 'Jesel Cura',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-15T10:00:00Z',
    tags: ['Analytics', 'Customer Experience', 'Data'],
    metaTitle: 'Data-Driven Customer Experience | SageStone Inc',
    metaDescription: 'Learn how to use analytics, CSAT tracking, and sentiment analysis to improve customer experience and drive business growth.',
  },
  {
    id: '7',
    slug: 'outsourcing-myths-debunked',
    title: 'Outsourcing Myths Debunked: What Founders Get Wrong About BPO',
    excerpt: '"It\'s too expensive." "Quality will suffer." "I\'ll lose control." We debunk the most common misconceptions about outsourcing.',
    content: `
      <h2>Myth #1: Outsourcing Is Only for Big Companies</h2>
      <p><strong>Reality:</strong> Modern BPO partners offer flexible solutions that scale with your needs. Startups and SMBs can start with a single VA and grow from there.</p>
      
      <h2>Myth #2: Quality Will Suffer</h2>
      <p><strong>Reality:</strong> Quality depends on your partner, not the model. The right BPO invests heavily in recruiting, training, and QA — often delivering better results than an in-house team with less experience.</p>
      
      <h2>Myth #3: I'll Lose Control</h2>
      <p><strong>Reality:</strong> Good BPO partners provide full visibility through dashboards, regular reporting, and open communication. You maintain strategic control while they handle execution.</p>
      
      <h2>Myth #4: It's Too Expensive</h2>
      <p><strong>Reality:</strong> When you factor in all costs (recruiting, training, benefits, overhead, management time), outsourcing often costs 35-50% less than building an in-house team.</p>
      
      <h2>Myth #5: Customers Will Know and Won't Like It</h2>
      <p><strong>Reality:</strong> Well-trained outsourced teams can be indistinguishable from in-house staff. What customers care about is getting their issues resolved quickly and professionally.</p>
      
      <h2>Making It Work</h2>
      <p>The key to successful outsourcing is finding the right partner — one who understands your business, shares your values, and treats your customers like their own.</p>
    `,
    category: 'Industry Insights',
    author: 'Jesel Cura',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-10T10:00:00Z',
    tags: ['BPO', 'Outsourcing', 'Myths'],
    metaTitle: 'Outsourcing Myths Debunked | SageStone Inc',
    metaDescription: 'We debunk the most common misconceptions about BPO and outsourcing. Learn what founders often get wrong about working with external teams.',
  },
  {
    id: '8',
    slug: 'streamlining-customer-support-workflows',
    title: 'From Chaos to Clarity: Streamlining Customer Support Workflows',
    excerpt: 'A step-by-step guide to building efficient customer support workflows that scale with your business.',
    content: `
      <h2>Signs Your Workflow Needs Work</h2>
      <ul>
        <li>Tickets falling through the cracks</li>
        <li>Inconsistent responses to similar issues</li>
        <li>Long resolution times for simple problems</li>
        <li>Team members unclear on priorities</li>
        <li>Customers having to repeat themselves</li>
      </ul>
      
      <h2>Building Better Workflows</h2>
      
      <h3>Step 1: Map Your Current State</h3>
      <p>Document every type of inquiry you receive and how it's currently handled. Identify bottlenecks, redundancies, and gaps.</p>
      
      <h3>Step 2: Categorize and Prioritize</h3>
      <p>Create clear categories for inquiries and define priority levels. Ensure everyone knows how to classify and escalate tickets.</p>
      
      <h3>Step 3: Build Decision Trees</h3>
      <p>Create flowcharts that guide agents through common scenarios. This ensures consistency and reduces training time for new team members.</p>
      
      <h3>Step 4: Implement Automation</h3>
      <p>Automate routing, tagging, and responses for common inquiries. Use templates and macros to speed up manual responses.</p>
      
      <h3>Step 5: Measure and Iterate</h3>
      <p>Track key metrics and continuously improve. The best workflows evolve based on data and feedback.</p>
    `,
    category: 'Customer Experience',
    author: 'Jesel Cura',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-05T10:00:00Z',
    tags: ['Customer Support', 'Workflows', 'Efficiency'],
    metaTitle: 'Streamlining Customer Support Workflows | SageStone Inc',
    metaDescription: 'A step-by-step guide to building efficient customer support workflows that scale with your business. From chaos to clarity.',
  },
  {
    id: '9',
    slug: 'founders-guide-hiring-first-virtual-assistant',
    title: 'The Founder\'s Guide to Hiring Your First Virtual Assistant',
    excerpt: 'What to look for, how to onboard, and how to set up your VA for success. A practical guide for first-time outsourcers.',
    content: `
      <h2>When It's Time to Hire</h2>
      <p>You're ready for a VA when administrative tasks are consuming time you should spend on strategy and growth. If you're spending hours on inbox management, scheduling, or data entry, it's time.</p>
      
      <h2>Defining the Role</h2>
      <p>Before hiring, document exactly what tasks you want to delegate. Be specific about tools, processes, and expected outcomes. A clear job description attracts better candidates.</p>
      
      <h2>What to Look For</h2>
      <ul>
        <li><strong>Communication Skills:</strong> Clear, professional written and verbal communication</li>
        <li><strong>Self-Management:</strong> Ability to work independently with minimal supervision</li>
        <li><strong>Technical Aptitude:</strong> Comfort with learning new tools and software</li>
        <li><strong>Reliability:</strong> Consistent availability and responsiveness</li>
        <li><strong>Problem-Solving:</strong> Initiative to handle unexpected situations</li>
      </ul>
      
      <h2>Setting Up for Success</h2>
      <ul>
        <li>Create detailed SOPs for key tasks</li>
        <li>Set up secure access to necessary tools</li>
        <li>Establish communication protocols</li>
        <li>Define KPIs and check-in cadence</li>
        <li>Start with a trial period</li>
      </ul>
      
      <h2>The BPO Advantage</h2>
      <p>Working with a BPO partner simplifies this process. They handle recruiting, vetting, training, and management — giving you a pre-qualified, supported VA from day one.</p>
    `,
    category: 'Remote Work',
    author: 'Jesel Cura',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080',
    publishedAt: '2024-12-01T10:00:00Z',
    tags: ['Virtual Assistants', 'Hiring', 'Founders'],
    metaTitle: 'How to Hire Your First Virtual Assistant | SageStone Inc',
    metaDescription: 'A practical guide for founders hiring their first VA. What to look for, how to onboard, and how to set your virtual assistant up for success.',
  },
];

// Blog service class
class BlogService {
  private posts: BlogPost[] = staticPosts;
  private config: CMSConfig = config;

  // Fetch all blog posts
  async getPosts(options?: {
    category?: string;
    limit?: number;
    offset?: number;
    featured?: boolean;
  }): Promise<{ posts: BlogPost[]; total: number }> {
    // In a real implementation, this would fetch from the CMS API
    // For now, we filter the static posts
    let filteredPosts = [...this.posts];

    if (options?.featured !== undefined) {
      filteredPosts = filteredPosts.filter((p) => p.featured === options.featured);
    }

    if (options?.category && options.category !== 'All') {
      filteredPosts = filteredPosts.filter((p) => p.category === options.category);
    }

    // Sort by date (newest first)
    filteredPosts.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    const total = filteredPosts.length;
    const offset = options?.offset ?? 0;
    const limit = options?.limit ?? filteredPosts.length;

    return {
      posts: filteredPosts.slice(offset, offset + limit),
      total,
    };
  }

  // Fetch a single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    const post = this.posts.find((p) => p.slug === slug);
    return post || null;
  }

  // Fetch a single blog post by ID
  async getPostById(id: string): Promise<BlogPost | null> {
    const post = this.posts.find((p) => p.id === id);
    return post || null;
  }

  // Get all categories with post counts
  async getCategories(): Promise<BlogCategory[]> {
    const categoryMap = new Map<string, number>();

    this.posts.forEach((post) => {
      const count = categoryMap.get(post.category) || 0;
      categoryMap.set(post.category, count + 1);
    });

    const categories: BlogCategory[] = [
      { id: 'all', name: 'All', slug: 'all', count: this.posts.length },
    ];

    categoryMap.forEach((count, name) => {
      categories.push({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
        count,
      });
    });

    return categories;
  }

  // Search posts
  async searchPosts(query: string): Promise<BlogPost[]> {
    const lowerQuery = query.toLowerCase();
    return this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  }

  // Get related posts
  async getRelatedPosts(postId: string, limit: number = 3): Promise<BlogPost[]> {
    const currentPost = await this.getPostById(postId);
    if (!currentPost) return [];

    // Find posts in the same category, excluding the current post
    const related = this.posts
      .filter((p) => p.id !== postId && p.category === currentPost.category)
      .slice(0, limit);

    // If not enough related posts, add from other categories
    if (related.length < limit) {
      const additional = this.posts
        .filter((p) => p.id !== postId && !related.includes(p))
        .slice(0, limit - related.length);
      related.push(...additional);
    }

    return related;
  }
}

// Export singleton instance
export const blogService = new BlogService();

// Export hook for React components
export function useBlogService() {
  return blogService;
}
