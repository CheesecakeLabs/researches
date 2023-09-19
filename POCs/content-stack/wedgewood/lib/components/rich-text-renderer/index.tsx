import { Fragment } from 'react';

import type { ElementNode, TextNode } from '~/lib/types/component';
import type { SectionDescription, SectionTitle } from '~/lib/types/pages';

interface RichTextRendererProps {
  data: SectionTitle | SectionDescription;
}

function RichTextRenderer({ data }: RichTextRendererProps) {
  const renderNode = (
    node: TextNode | ElementNode
  ): JSX.Element | string | null => {
    if ('text' in node) {
      // text node
      if (node.bold) {
        return <strong>{node.text}</strong>;
      }
      return node.text;
    }

    const style = node.attrs?.style || {};

    switch (node.type) {
      case 'p':
        return (
          <p style={style}>
            {node.children.map((child, idx) => (
              <Fragment key={idx}>{renderNode(child)}</Fragment>
            ))}
          </p>
        );
      case 'span':
        return (
          <span style={style}>
            {node.children.map((child, idx) => (
              <Fragment key={idx}>{renderNode(child)}</Fragment>
            ))}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* @ts-ignore */}
      {data.children.map((child, idx) => (
        <Fragment key={idx}>
          {renderNode(child as unknown as ElementNode)}
        </Fragment>
      ))}
    </div>
  );
}

export default RichTextRenderer;
