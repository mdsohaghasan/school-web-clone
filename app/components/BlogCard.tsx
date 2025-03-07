import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <span className="text-sm text-primary">{post.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-card-foreground">{post.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">By {post.author}</span>
          <Link
            href={`/blog/${post.id}`}
            className="text-primary hover:text-primary/90 font-semibold"
          >
            আরো পড়ুন →
          </Link>
        </div>
      </div>
    </div>
  );
} 