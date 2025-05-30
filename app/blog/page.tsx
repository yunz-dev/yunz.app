import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-8">Yunz Yaps</h1>
      <BlogPosts />
    </section>
  )
}
