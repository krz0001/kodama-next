import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="prose md:prose-lg lg:prose-xl prose-invert max-w-none mt-7">
      <h2>
        Our latest blog posts
      </h2>

      <div className="flex flex-col not-prose">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}
