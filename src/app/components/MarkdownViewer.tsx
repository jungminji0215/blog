import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown className="prose max-w-none" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
