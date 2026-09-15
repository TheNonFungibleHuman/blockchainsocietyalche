import { lazy, Suspense } from 'react';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import DemoFallback from './DemoFallback';
import { urlFor } from '../../lib/image';

const NetworkDemo = lazy(() => import('../NetworkDemo'));
const HashDemo = lazy(() => import('../HashDemo'));
const BlockDemo = lazy(() => import('../BlockDemo'));
const ChainDemo = lazy(() => import('../ChainDemo'));
const ConsensusDemo = lazy(() => import('../ConsensusDemo'));

const demosByLanguage: Record<string, React.ComponentType> = {
  'interactive-hash': HashDemo,
  'interactive-network': NetworkDemo,
  'interactive-block': BlockDemo,
  'interactive-chain': ChainDemo,
  'interactive-consensus': ConsensusDemo,
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="font-bold text-2xl mb-4 mt-8 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-xl mb-4 mt-8 text-white">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold text-lg mb-4 mt-8 text-white">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-zinc-700 pl-4 italic text-zinc-400 mb-6">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="text-zinc-300 leading-relaxed mb-6">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-zinc-300">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-zinc-300">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="bg-zinc-900 text-zinc-200 text-sm font-mono px-1.5 py-0.5 rounded break-words border border-white/5">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
        {children}
      </a>
    ),
  },
  types: {
    codeBlock: ({ value }) => {
      const language = value?.language || '';
      const Demo = demosByLanguage[language];
      if (Demo) {
        return <Demo />;
      }
      return (
        <pre className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl overflow-x-auto mb-6">
          <code className={language ? `language-${language}` : ''}>{value?.code || ''}</code>
        </pre>
      );
    },
    image: ({ value }) => (
      <img
        src={urlFor(value).url()}
        alt={value?.alt || ''}
        className="rounded-xl my-6 w-full"
        loading="lazy"
      />
    ),
  },
};

export default function RichTextRenderer({ value }: { value: unknown[] }) {
  return (
    <Suspense fallback={<DemoFallback />}>
      <PortableText value={value} components={components} />
    </Suspense>
  );
}
