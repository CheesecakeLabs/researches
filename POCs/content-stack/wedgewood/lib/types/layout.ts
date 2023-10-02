import type {
  Acl,
  Acl2,
  Attrs,
  Attrs4,
  Children,
  Children4,
  GeneratedType10,
  GeneratedType11,
  GeneratedType12,
  GeneratedType13,
  GeneratedType23,
  GeneratedType27,
  GeneratedType4,
  GeneratedType8,
  Link,
  Metadata2,
  Metadata3,
  PagesComponent,
  PublishDetails,
  PublishDetails2,
} from './pages';

type AdditionalParam = {
  title: unknown;
  copyright: string;
  announcement_text: string;
  label: unknown;
  url: string;
};

type EntryData = {
  title: string;
  url: string;
  $: AdditionalParam;
};

type Navigation = {
  link: [Links];
};

type Author = {
  title: string;
  $: AdditionalParam;
};

type Blog = {
  url: string;
  body: string;
  title: string;
  $: AdditionalParam;
};

export type Posts = {
  locale: string;
  author: [Author];
  body: string;
  date: string;
  featured_image: unknown;
  is_archived: boolean;
  related_post: [Blog];
  seo: unknown;
  url: string;
  title: string;
  _owner: unknown;
};

export type HeaderProps = {
  uid: string;
  _version: number;
  locale: string;
  ACL: Acl;
  _in_progress: boolean;
  created_at: string;
  created_by: string;
  logo: Logo;
  navigation_menu: NavigationMenu[];
  notification_bar: NotificationBar;
  search_bar_placeholder: string;
  tags: any[];
  title: string;
  updated_at: string;
  updated_by: string;
  publish_details: PublishDetails2;
  $: GeneratedType13;
};

export interface Logo {
  uid: string;
  _version: number;
  parent_uid: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  content_type: string;
  file_size: string;
  filename: string;
  title: string;
  ACL: Acl2;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails;
  url: string;
  $: GeneratedType4;
}

export interface NotificationBar {
  show_announcement: boolean;
  announcement_text: string;
  $: GeneratedType11;
}

export interface NavigationMenu {
  label: string;
  link: Link[];
  login_card: LoginCard[];
  _metadata: Metadata3;
  $: GeneratedType10;
}

export interface LoginCard {
  title: string;
  description: string;
  page_reference: any[];
  _metadata: Metadata2;
  $: GeneratedType8;
}

export type Entry = [entry: EntryData];

export type NavLinks = {
  label?: string;
};

export type Links = {
  label?: string;
  title: string;
  href: string;
  $: AdditionalParam;
};

export type PageProps = {
  locale: string;
  page_components: PagesComponent[];
  uid: string;
  url: string;
  title: string;
  seo: unknown;
};

export type FooterProps = {
  uid: string;
  _version: number;
  locale: string;
  ACL: Acl;
  _in_progress: boolean;
  company_address: CompanyAddress;
  copyright: string;
  created_at: string;
  created_by: string;
  footer_text: FooterText;
  navigation: Navigation;
  tags: any[];
  title: string;
  updated_at: string;
  updated_by: string;
  publish_details: PublishDetails;
  $: GeneratedType27;
};

export interface CompanyAddress {
  type: string;
  attrs: Attrs;
  uid: string;
  children: Children[];
  _version: number;
  $: GeneratedType12;
}

export interface FooterText {
  type: string;
  attrs: Attrs4;
  uid: string;
  children: Children4[];
  _version: number;
  $: GeneratedType23;
}
