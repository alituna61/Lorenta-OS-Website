import { getPostBySlug } from "@/lib/markdown";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;

  try {
    post = getPostBySlug(slug);
  } catch (error) {
    console.error(`[Blog Okuma Hatası] ${slug} için:`, error);
    return notFound();
  }

  return (
    <Section spacing="default">
      <Container width="narrow">
        <div className="mb-12 space-y-6 border-b border-border-subtle pb-8">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-border-subtle bg-surface-subtle px-3 py-1 font-mono text-micro text-ink-tertiary">
              {post.meta.tag}
            </span>
            <span className="font-mono text-micro text-ink-tertiary">
              {post.meta.date}
            </span>
          </div>
          
          <h1 className="text-h2 sm:text-display font-medium tracking-tight text-ink-primary">
            {post.meta.title}
          </h1>
          
        </div>
        
        <div className="prose prose-neutral max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-ink-primary prose-p:leading-relaxed prose-p:text-ink-secondary prose-strong:font-semibold prose-strong:text-ink-primary prose-ul:list-disc prose-li:text-ink-secondary prose-hr:my-12 prose-hr:border-border-subtle md:prose-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </Container>
    </Section>
  );
}