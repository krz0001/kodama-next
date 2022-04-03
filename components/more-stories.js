import ProseContainer from '../components/prose-container'
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <ProseContainer className="mt-7">
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
    </ProseContainer>
  )
}
