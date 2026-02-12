import { useParams } from "react-router-dom";

export default function SingleBlogPage() {
  
  const { slug } = useParams();

  return (
    <main className="max-w-7xl mx-auto mt-40 px-6 py-20">
      <article>
        <header className="mb-12">
          <h1 className="text-6xl font-normal tracking-tighter mb-6 capitalize">
            {slug.replace(/-/g, " ")}
          </h1>
          <div className="flex gap-4 text-gray-400">
            <span>By Your Name</span>
            <span>•</span>
            <span>12 Feb 2026</span>
          </div>
        </header>

        <div className="prose prose-xl prose-slate max-w-none">
          <p className="text-xl leading-relaxed text-gray-600">
            This is where your blog content for "{slug}" would live. You can use
            Markdown or fetch from a CMS like Sanity or Contentful.
          </p>
          {/* Add more blog content here */}
        </div>
      </article>
    </main>
  );
}
