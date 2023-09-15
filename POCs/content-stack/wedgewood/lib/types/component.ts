type Style = Record<string, string>;

export type TextNode = {
  text: string;
  bold?: boolean;
};

export type ElementNode = {
  type: 'p' | 'span' | string;
  attrs?: {
    style?: Style;
    dir?: 'ltr' | 'rtl';
    [key: string]: any; // For any additional attributes
  };
  children: (TextNode | ElementNode)[];
  uid?: string;
  $?: Record<string, any>;
};

export interface SectionTitle {
  uid: string;
  attrs: {
    $: Record<string, any>;
  };
  children: ElementNode[];
  type: string;
  _version: number;
  $: Record<string, any>;
}
