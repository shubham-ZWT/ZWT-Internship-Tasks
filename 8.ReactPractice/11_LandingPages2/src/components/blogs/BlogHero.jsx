import React from "react";
import BlogCard from "./BlogCard";

export default function BlogHero() {
  const blogs = [
    {
      title:
        "The Architecture of Intelligence: Integrating LLMs into React Workflows",
      slug: "architecture-of-intelligence-llm-react",
      excerpt:
        "Moving beyond simple API calls. Learn how to build deeply integrated AI features that feel like a native part of your UI/UX, not just a chatbot sidebar.",
      date: "Oct 12, 2025",
      category: "Generative AI",
    },
    {
      title: "Scaling Modern Monoliths: Lessons from ZealousWeb",
      slug: "scaling-modern-monoliths-lessons",
      excerpt:
        "Microservices aren't always the answer. Exploring how we maintained speed and developer experience in large-scale full-stack applications.",
      date: "Sep 28, 2025",
      category: "Architecture",
    },
    {
      title: "Deterministic UI in a Non-Deterministic AI World",
      slug: "deterministic-ui-ai-world",
      excerpt:
        "How to handle streaming responses, token timeouts, and hallucinations while keeping your frontend polished and user-friendly.",
      date: "Aug 15, 2025",
      category: "Frontend",
    },
    {
      title: "Refactoring the Legacy: A Trainee's Guide to Senior Thinking",
      slug: "refactoring-legacy-senior-thinking",
      excerpt:
        "Reflecting on my journey from MS Projects to now. The mental shifts required to move from 'making it work' to 'making it last'.",
      date: "July 02, 2025",
      category: "Career",
    },
    {
      title: "Next.js 15 and the Future of Server Components",
      slug: "nextjs-15-server-components-future",
      excerpt:
        "A deep dive into the latest rendering patterns and how they optimize Core Web Vitals for high-traffic enterprise sites.",
      date: "May 19, 2025",
      category: "Full Stack",
    },
  ];
  return (
    <div className="w-full mt-32 md:mt-48 px-6 text-app-dark-bg pb-6">
      <div className="max-w-7xl mx-auto flex flex-col text-center items-center gap-6">
        <h1 className="font-bold text-8xl tracking-tighter ">Blogs</h1>
        <p className="text-center max-w-4xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          molestiae asperiores rem quam cum laudantium corporis earum? Autem
          possimus nobis ad similique sint tempore nesciunt saepe.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {blogs.map((blog) => (
            <BlogCard
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
              slug={blog.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
