export interface Context {
  query: {
    page: string;
    live_preview?: string;
    content_type_uid?: string;
    entry_uid?: string;
  };
  resolvedUrl: string;
  params: { page: string };
}

export interface SectionProps {
  data: PagesComponent;
}

export interface PagesComponent {
  hero_section?: HeroSection;
  animal_health_solutions?: AnimalHealthSolutions;
  login_section?: LoginSection;
  testimonials?: Testimonials;
  wild_growth?: WildGrowth;
  learn_more_banner?: LearnMoreBanner;
  what_s_the_difference?: WhatSTheDifference;
  zoo_hero_section?: ZooHeroSection;
  $: GeneratedType14;
  exotic_wildlife_care?: ExoticWildlifeCare;
  formulations?: Formulations;
  library?: Library;
}

export interface ExoticWildlifeCare {
  title: Title3;
  _metadata: Metadata2;
  checks: Check[];
  description: Description2;
  $: GeneratedType25;
}

export interface Check {
  name: string;
  _metadata: Metadata3;
  $: GeneratedType17;
}

export interface Formulations {
  title: Title;
  _metadata: Metadata4;
  background_image: BackgroundImage2;
  formulations: Formulation[];
  $: GeneratedType35;
}

export interface Formulation {
  name: string;
  _metadata: Metadata5;
  image: Image;
  $: GeneratedType34;
}

export interface ZooHeroSection {
  background_image: BackgroundImage;
  _metadata: Metadata;
  subdescription: string;
  button_cta: ButtonCta;
  title: Title3;
  description: string;
  $: GeneratedType13;
}

export interface Library {
  description: Description3;
  _metadata: Metadata6;
  learn_more_cards: LearnMoreCard[];
  title: Title11;
  $: GeneratedType57;
}

export interface LearnMoreCard {
  button_cta: ButtonCta2;
  _metadata: Metadata7;
  image: Image2;
  title: string;
  $: GeneratedType49;
}

export interface Image2 {
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
  ACL: Acl4;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails4;
  url: string;
  $: GeneratedType48;
}

export interface ButtonCta2 {
  title: string;
  href: string;
  $: GeneratedType44;
}

export interface HeroSection {
  has_parallax: boolean;
  _metadata: Metadata;
  right_background_image: RightBackgroundImage;
  background_image: BackgroundImage;
  normal_title: string;
  bold_title: string;
  single_promo_image?: BackgroundImage;
  description: string;
  animal_images: AnimalImage[];
  $: GeneratedType19;
}

export interface LearnMoreBanner {
  section_title: SectionTitle;
  section_description: SectionDescription;
  background_image: BackgroundImage;
  button_cta: ButtonCta;
  background_color: BackgroundColor;
  _metadata: Metadata;
  $: GeneratedType24;
}

export interface AnimalHealthSolutions {
  section_title: SectionTitle;
  _metadata: Metadata3;
  learn_more: LearnMore[];
  section_description: string;
  $: GeneratedType39;
}

export interface LoginSection {
  title: Title7;
  _metadata: Metadata5;
  description: string;
  external_link: Link;
  page_reference: any[];
  background_image: BackgroundImage2;
  $: GeneratedType55;
}

export interface Testimonials {
  section_title: SectionTitle2;
  _metadata: Metadata6;
  section_description: string;
  testimonial_card: TestimonialCard[];
  $: GeneratedType84;
}

export interface WildGrowth {
  section_description: SectionDescription3;
  promoimage: BackgroundImage;
  first_paragraph: string;
  second_paragraph: string;
  _metadata: Metadata8;
  section_title: SectionTitle3;
  link: Link2;
  mosaic_pictures: MosaicPicture[];
  $: GeneratedType118;
}

export interface WhatSTheDifference {
  section_title: string;
  _metadata: Metadata10;
  section_description: SectionDescription4;
  button_cta: ButtonCta;
  categories: Category[];
  $: GeneratedType139;
}

export interface PageResponse {
  uid: string;
  _version: number;
  locale: string;
  ACL: Acl;
  _in_progress: boolean;
  created_at: string;
  created_by: string;
  global_field: GlobalField;
  page_components: PagesComponent[];
  tags: any[];
  title: string;
  updated_at: string;
  updated_by: string;
  url: string;
  publish_details: PublishDetails9;
  $: GeneratedType141;
}

export interface Acl {
  $: GeneratedType;
}

export interface GeneratedType {}

export interface GlobalField {
  meta_title: string;
  meta_description: string;
  keywords: string;
  enable_search_indexing: boolean;
  $: GeneratedType2;
}

export interface GeneratedType2 {
  meta_title: MetaTitle;
  meta_description: MetaDescription;
  keywords: Keywords;
  enable_search_indexing: EnableSearchIndexing;
}

export interface MetaTitle {
  'data-cslp': string;
}

export interface MetaDescription {
  'data-cslp': string;
}

export interface Keywords {
  'data-cslp': string;
}

export interface EnableSearchIndexing {
  'data-cslp': string;
}

export interface Metadata {
  uid: string;
  $: GeneratedType3;
}

export interface GeneratedType3 {
  uid: Uid;
}

export interface Uid {
  'data-cslp': string;
}

export interface RightBackgroundImage {
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
  $: GeneratedType6;
}

export interface Acl2 {
  $: GeneratedType4;
}

export interface GeneratedType4 {}

export interface PublishDetails {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType5;
}

export interface GeneratedType5 {
  time: Time;
  user: User;
  environment: Environment;
  locale: Locale;
}

export interface Time {
  'data-cslp': string;
}

export interface User {
  'data-cslp': string;
}

export interface Environment {
  'data-cslp': string;
}

export interface Locale {
  'data-cslp': string;
}

export interface GeneratedType6 {
  uid: Uid2;
  _version: Version;
  parent_uid: ParentUid;
  created_by: CreatedBy;
  updated_by: UpdatedBy;
  created_at: CreatedAt;
  updated_at: UpdatedAt;
  content_type: ContentType;
  file_size: FileSize;
  filename: Filename;
  title: Title;
  is_dir: IsDir;
  url: Url;
}

export interface Uid2 {
  'data-cslp': string;
}

export interface Version {
  'data-cslp': string;
}

export interface ParentUid {
  'data-cslp': string;
}

export interface CreatedBy {
  'data-cslp': string;
}

export interface UpdatedBy {
  'data-cslp': string;
}

export interface CreatedAt {
  'data-cslp': string;
}

export interface UpdatedAt {
  'data-cslp': string;
}

export interface ContentType {
  'data-cslp': string;
}

export interface FileSize {
  'data-cslp': string;
}

export interface Filename {
  'data-cslp': string;
}

export interface Title {
  'data-cslp': string;
}

export interface IsDir {
  'data-cslp': string;
}

export interface Url {
  'data-cslp': string;
}

export interface BackgroundImage {
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
  ACL: Acl3;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails2;
  url: string;
  $: GeneratedType9;
}

export interface Acl3 {
  $: GeneratedType7;
}

export interface GeneratedType7 {}

export interface PublishDetails2 {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType8;
}

export interface GeneratedType8 {
  time: Time2;
  user: User2;
  environment: Environment2;
  locale: Locale2;
}

export interface Time2 {
  'data-cslp': string;
}

export interface User2 {
  'data-cslp': string;
}

export interface Environment2 {
  'data-cslp': string;
}

export interface Locale2 {
  'data-cslp': string;
}

export interface GeneratedType9 {
  uid: Uid3;
  _version: Version2;
  parent_uid: ParentUid2;
  created_by: CreatedBy2;
  updated_by: UpdatedBy2;
  created_at: CreatedAt2;
  updated_at: UpdatedAt2;
  content_type: ContentType2;
  file_size: FileSize2;
  filename: Filename2;
  title: Title2;
  is_dir: IsDir2;
  url: Url2;
}

export interface Uid3 {
  'data-cslp': string;
}

export interface Version2 {
  'data-cslp': string;
}

export interface ParentUid2 {
  'data-cslp': string;
}

export interface CreatedBy2 {
  'data-cslp': string;
}

export interface UpdatedBy2 {
  'data-cslp': string;
}

export interface CreatedAt2 {
  'data-cslp': string;
}

export interface UpdatedAt2 {
  'data-cslp': string;
}

export interface ContentType2 {
  'data-cslp': string;
}

export interface FileSize2 {
  'data-cslp': string;
}

export interface Filename2 {
  'data-cslp': string;
}

export interface Title2 {
  'data-cslp': string;
}

export interface IsDir2 {
  'data-cslp': string;
}

export interface Url2 {
  'data-cslp': string;
}

export interface AnimalImage {
  background_color: BackgroundColor;
  animal_image: AnimalImage2;
  _metadata: Metadata2;
  $: GeneratedType18;
}

export interface BackgroundColor {
  hsl: Hsl;
  hex: string;
  rgb: Rgb;
  hsv: Hsv;
  oldHue: number;
  source: string;
  $: GeneratedType13;
}

export interface Hsl {
  h: number;
  s: number;
  l: number;
  a: number;
  $: GeneratedType10;
}

export interface GeneratedType10 {
  h: H;
  s: S;
  l: L;
  a: A;
}

export interface H {
  'data-cslp': string;
}

export interface S {
  'data-cslp': string;
}

export interface L {
  'data-cslp': string;
}

export interface A {
  'data-cslp': string;
}

export interface Rgb {
  r: number;
  g: number;
  b: number;
  a: number;
  $: GeneratedType11;
}

export interface GeneratedType11 {
  r: R;
  g: G;
  b: B;
  a: A2;
}

export interface R {
  'data-cslp': string;
}

export interface G {
  'data-cslp': string;
}

export interface B {
  'data-cslp': string;
}

export interface A2 {
  'data-cslp': string;
}

export interface Hsv {
  h: number;
  s: number;
  v: number;
  a: number;
  $: GeneratedType12;
}

export interface GeneratedType12 {
  h: H2;
  s: S2;
  v: V;
  a: A3;
}

export interface H2 {
  'data-cslp': string;
}

export interface S2 {
  'data-cslp': string;
}

export interface V {
  'data-cslp': string;
}

export interface A3 {
  'data-cslp': string;
}

export interface GeneratedType13 {
  hex: Hex;
  oldHue: OldHue;
  source: Source;
}

export interface Hex {
  'data-cslp': string;
}

export interface OldHue {
  'data-cslp': string;
}

export interface Source {
  'data-cslp': string;
}

export interface AnimalImage2 {
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
  ACL: Acl4;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails3;
  url: string;
  $: GeneratedType16;
}

export interface Acl4 {
  $: GeneratedType14;
}

export interface GeneratedType14 {}

export interface PublishDetails3 {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType15;
}

export interface GeneratedType15 {
  time: Time3;
  user: User3;
  environment: Environment3;
  locale: Locale3;
}

export interface Time3 {
  'data-cslp': string;
}

export interface User3 {
  'data-cslp': string;
}

export interface Environment3 {
  'data-cslp': string;
}

export interface Locale3 {
  'data-cslp': string;
}

export interface GeneratedType16 {
  uid: Uid4;
  _version: Version3;
  parent_uid: ParentUid3;
  created_by: CreatedBy3;
  updated_by: UpdatedBy3;
  created_at: CreatedAt3;
  updated_at: UpdatedAt3;
  content_type: ContentType3;
  file_size: FileSize3;
  filename: Filename3;
  title: Title3;
  is_dir: IsDir3;
  url: Url3;
}

export interface Uid4 {
  'data-cslp': string;
}

export interface Version3 {
  'data-cslp': string;
}

export interface ParentUid3 {
  'data-cslp': string;
}

export interface CreatedBy3 {
  'data-cslp': string;
}

export interface UpdatedBy3 {
  'data-cslp': string;
}

export interface CreatedAt3 {
  'data-cslp': string;
}

export interface UpdatedAt3 {
  'data-cslp': string;
}

export interface ContentType3 {
  'data-cslp': string;
}

export interface FileSize3 {
  'data-cslp': string;
}

export interface Filename3 {
  'data-cslp': string;
}

export interface Title3 {
  'data-cslp': string;
}

export interface IsDir3 {
  'data-cslp': string;
}

export interface Url3 {
  'data-cslp': string;
}

export interface Metadata2 {
  uid: string;
  $: GeneratedType17;
}

export interface GeneratedType17 {
  uid: Uid5;
}

export interface Uid5 {
  'data-cslp': string;
}

export interface GeneratedType18 {}

export interface GeneratedType19 {
  has_parallax: HasParallax;
  normal_title: NormalTitle;
  bold_title: BoldTitle;
  description: Description;
}

export interface HasParallax {
  'data-cslp': string;
}

export interface NormalTitle {
  'data-cslp': string;
}

export interface BoldTitle {
  'data-cslp': string;
}

export interface Description {
  'data-cslp': string;
}

export interface SectionTitle {
  uid: string;
  attrs: Attrs;
  children: Children[];
  type: string;
  _version: number;
  $: GeneratedType31;
}

export interface Attrs {
  $: GeneratedType21;
}

export interface GeneratedType21 {}

export interface Children {
  type: string;
  attrs: Attrs2;
  uid: string;
  children: Children2[];
  $: GeneratedType30;
}

export interface Attrs2 {
  style: Style;
  dir: string;
  $: GeneratedType24;
}

export interface Style {
  $: GeneratedType22;
}

export interface GeneratedType22 {}

export interface RedactorAttributes {
  $: GeneratedType23;
}

export interface GeneratedType23 {}

export interface GeneratedType24 {
  dir: Dir;
}

export interface Dir {
  'data-cslp': string;
}

export interface Children2 {
  text?: string;
  bold?: boolean;
  $: GeneratedType25;
  uid?: string;
  type?: string;
  attrs?: Attrs3;
  children?: Children3[];
}

export interface GeneratedType25 {
  text?: Text;
  bold?: Bold;
  uid?: Uid6;
  type?: Type;
}

export interface Text {
  'data-cslp': string;
}

export interface Bold {
  'data-cslp': string;
}

export interface Uid6 {
  'data-cslp': string;
}

export interface Type {
  'data-cslp': string;
}

export interface Attrs3 {
  style?: Style2;
  dir?: string;
  $: GeneratedType28;
}

export interface Style2 {
  $: GeneratedType26;
}

export interface GeneratedType26 {}

export interface RedactorAttributes2 {
  $: GeneratedType27;
}

export interface GeneratedType27 {}

export interface GeneratedType28 {
  dir?: Dir2;
}

export interface Dir2 {
  'data-cslp': string;
}

export interface Children3 {
  text: string;
  bold?: boolean;
  $: GeneratedType29;
}

export interface GeneratedType29 {
  text: Text2;
  bold?: Bold2;
}

export interface Text2 {
  'data-cslp': string;
}

export interface Bold2 {
  'data-cslp': string;
}

export interface GeneratedType30 {
  type: Type2;
  uid: Uid7;
}

export interface Type2 {
  'data-cslp': string;
}

export interface Uid7 {
  'data-cslp': string;
}

export interface GeneratedType31 {
  uid: Uid8;
  type: Type3;
  _version: Version4;
}

export interface Uid8 {
  'data-cslp': string;
}

export interface Type3 {
  'data-cslp': string;
}

export interface Version4 {
  'data-cslp': string;
}

export interface Metadata3 {
  uid: string;
  $: GeneratedType32;
}

export interface GeneratedType32 {
  uid: Uid9;
}

export interface Uid9 {
  'data-cslp': string;
}

export interface LearnMore {
  section_image: SectionImage;
  _metadata: Metadata4;
  title: string;
  description: string;
  link: Link;
  $: GeneratedType38;
}

export interface SectionImage {
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
  ACL: Acl5;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails4;
  url: string;
  $: GeneratedType35;
}

export interface Acl5 {
  $: GeneratedType33;
}

export interface GeneratedType33 {}

export interface PublishDetails4 {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType34;
}

export interface GeneratedType34 {
  time: Time4;
  user: User4;
  environment: Environment4;
  locale: Locale4;
}

export interface Time4 {
  'data-cslp': string;
}

export interface User4 {
  'data-cslp': string;
}

export interface Environment4 {
  'data-cslp': string;
}

export interface Locale4 {
  'data-cslp': string;
}

export interface GeneratedType35 {
  uid: Uid10;
  _version: Version5;
  parent_uid: ParentUid4;
  created_by: CreatedBy4;
  updated_by: UpdatedBy4;
  created_at: CreatedAt4;
  updated_at: UpdatedAt4;
  content_type: ContentType4;
  file_size: FileSize4;
  filename: Filename4;
  title: Title4;
  is_dir: IsDir4;
  url: Url4;
}

export interface Uid10 {
  'data-cslp': string;
}

export interface Version5 {
  'data-cslp': string;
}

export interface ParentUid4 {
  'data-cslp': string;
}

export interface CreatedBy4 {
  'data-cslp': string;
}

export interface UpdatedBy4 {
  'data-cslp': string;
}

export interface CreatedAt4 {
  'data-cslp': string;
}

export interface UpdatedAt4 {
  'data-cslp': string;
}

export interface ContentType4 {
  'data-cslp': string;
}

export interface FileSize4 {
  'data-cslp': string;
}

export interface Filename4 {
  'data-cslp': string;
}

export interface Title4 {
  'data-cslp': string;
}

export interface IsDir4 {
  'data-cslp': string;
}

export interface Url4 {
  'data-cslp': string;
}

export interface Metadata4 {
  uid: string;
  $: GeneratedType36;
}

export interface GeneratedType36 {
  uid: Uid11;
}

export interface Uid11 {
  'data-cslp': string;
}

export interface Link {
  title: string;
  href: string;
  $: GeneratedType37;
}

export interface GeneratedType37 {
  title: Title5;
  href: Href;
}

export interface Title5 {
  'data-cslp': string;
}

export interface Href {
  'data-cslp': string;
}

export interface GeneratedType38 {
  title: Title6;
  description: Description2;
}

export interface Title6 {
  'data-cslp': string;
}

export interface Description2 {
  'data-cslp': string;
}

export interface GeneratedType39 {
  section_description: SectionDescription;
}

export interface SectionDescription {
  'data-cslp': string;
}

export interface Title7 {
  uid: string;
  attrs: Attrs4;
  children: Children4[];
  type: string;
  _version: number;
  $: GeneratedType50;
}

export interface Attrs4 {
  $: GeneratedType40;
}

export interface GeneratedType40 {}

export interface Children4 {
  type: string;
  attrs: Attrs5;
  uid: string;
  children: Children5[];
  $: GeneratedType49;
}

export interface Attrs5 {
  style: Style3;

  dir: string;
  $: GeneratedType43;
}

export interface Style3 {
  $: GeneratedType41;
}

export interface GeneratedType41 {}

export interface RedactorAttributes3 {
  $: GeneratedType42;
}

export interface GeneratedType42 {}

export interface GeneratedType43 {
  dir: Dir3;
}

export interface Dir3 {
  'data-cslp': string;
}

export interface Children5 {
  text?: string;
  $: GeneratedType44;
  uid?: string;
  type?: string;
  attrs?: Attrs6;
  children?: Children6[];
}

export interface GeneratedType44 {
  text?: Text3;
  uid?: Uid12;
  type?: Type4;
}

export interface Text3 {
  'data-cslp': string;
}

export interface Uid12 {
  'data-cslp': string;
}

export interface Type4 {
  'data-cslp': string;
}

export interface Attrs6 {
  style?: Style4;
  dir?: string;
  $: GeneratedType47;
}

export interface Style4 {
  $: GeneratedType45;
}

export interface GeneratedType45 {}

export interface RedactorAttributes4 {
  $: GeneratedType46;
}

export interface GeneratedType46 {}

export interface GeneratedType47 {
  dir?: Dir4;
}

export interface Dir4 {
  'data-cslp': string;
}

export interface Children6 {
  text: string;
  $: GeneratedType48;
  bold?: boolean;
}

export interface GeneratedType48 {
  text: Text4;
  bold?: Bold3;
}

export interface Text4 {
  'data-cslp': string;
}

export interface Bold3 {
  'data-cslp': string;
}

export interface GeneratedType49 {
  type: Type5;
  uid: Uid13;
}

export interface Type5 {
  'data-cslp': string;
}

export interface Uid13 {
  'data-cslp': string;
}

export interface GeneratedType50 {
  uid: Uid14;
  type: Type6;
  _version: Version6;
}

export interface Uid14 {
  'data-cslp': string;
}

export interface Type6 {
  'data-cslp': string;
}

export interface Version6 {
  'data-cslp': string;
}

export interface Metadata5 {
  uid: string;
  $: GeneratedType51;
}

export interface GeneratedType51 {
  uid: Uid15;
}

export interface Uid15 {
  'data-cslp': string;
}

export interface BackgroundImage2 {
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
  ACL: Acl6;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails5;
  url: string;
  $: GeneratedType54;
}

export interface Acl6 {
  $: GeneratedType52;
}

export interface GeneratedType52 {}

export interface PublishDetails5 {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType53;
}

export interface GeneratedType53 {
  time: Time5;
  user: User5;
  environment: Environment5;
  locale: Locale5;
}

export interface Time5 {
  'data-cslp': string;
}

export interface User5 {
  'data-cslp': string;
}

export interface Environment5 {
  'data-cslp': string;
}

export interface Locale5 {
  'data-cslp': string;
}

export interface GeneratedType54 {
  uid: Uid16;
  _version: Version7;
  parent_uid: ParentUid5;
  created_by: CreatedBy5;
  updated_by: UpdatedBy5;
  created_at: CreatedAt5;
  updated_at: UpdatedAt5;
  content_type: ContentType5;
  file_size: FileSize5;
  filename: Filename5;
  title: Title8;
  is_dir: IsDir5;
  url: Url5;
}

export interface Uid16 {
  'data-cslp': string;
}

export interface Version7 {
  'data-cslp': string;
}

export interface ParentUid5 {
  'data-cslp': string;
}

export interface CreatedBy5 {
  'data-cslp': string;
}

export interface UpdatedBy5 {
  'data-cslp': string;
}

export interface CreatedAt5 {
  'data-cslp': string;
}

export interface UpdatedAt5 {
  'data-cslp': string;
}

export interface ContentType5 {
  'data-cslp': string;
}

export interface FileSize5 {
  'data-cslp': string;
}

export interface Filename5 {
  'data-cslp': string;
}

export interface Title8 {
  'data-cslp': string;
}

export interface IsDir5 {
  'data-cslp': string;
}

export interface Url5 {
  'data-cslp': string;
}

export interface GeneratedType55 {
  description: Description3;
}

export interface Description3 {
  'data-cslp': string;
}

export interface SectionTitle2 {
  uid: string;
  attrs: Attrs7;
  children: Children7[];
  type: string;
  _version: number;
  $: GeneratedType66;
}

export interface Attrs7 {
  $: GeneratedType56;
}

export interface GeneratedType56 {}

export interface Children7 {
  type: string;
  attrs: Attrs8;
  uid: string;
  children: Children8[];
  $: GeneratedType65;
}

export interface Attrs8 {
  style: Style5;
  dir: string;
  $: GeneratedType59;
}

export interface Style5 {
  $: GeneratedType57;
}

export interface GeneratedType57 {}

export interface RedactorAttributes5 {
  $: GeneratedType58;
}

export interface GeneratedType58 {}

export interface GeneratedType59 {
  dir: Dir5;
}

export interface Dir5 {
  'data-cslp': string;
}

export interface Children8 {
  text?: string;
  $: GeneratedType60;
  uid?: string;
  type?: string;
  attrs?: Attrs9;
  children?: Children9[];
}

export interface GeneratedType60 {
  text?: Text5;
  uid?: Uid17;
  type?: Type7;
}

export interface Text5 {
  'data-cslp': string;
}

export interface Uid17 {
  'data-cslp': string;
}

export interface Type7 {
  'data-cslp': string;
}

export interface Attrs9 {
  style?: Style6;
  dir?: string;
  $: GeneratedType63;
}

export interface Style6 {
  $: GeneratedType61;
}

export interface GeneratedType61 {}

export interface RedactorAttributes6 {
  $: GeneratedType62;
}

export interface GeneratedType62 {}

export interface GeneratedType63 {
  dir?: Dir6;
}

export interface Dir6 {
  'data-cslp': string;
}

export interface Children9 {
  text: string;
  $: GeneratedType64;
  bold?: boolean;
}

export interface GeneratedType64 {
  text: Text6;
  bold?: Bold4;
}

export interface Text6 {
  'data-cslp': string;
}

export interface Bold4 {
  'data-cslp': string;
}

export interface GeneratedType65 {
  type: Type8;
  uid: Uid18;
}

export interface Type8 {
  'data-cslp': string;
}

export interface Uid18 {
  'data-cslp': string;
}

export interface GeneratedType66 {
  uid: Uid19;
  type: Type9;
  _version: Version8;
}

export interface Uid19 {
  'data-cslp': string;
}

export interface Type9 {
  'data-cslp': string;
}

export interface Version8 {
  'data-cslp': string;
}

export interface Metadata6 {
  uid: string;
  $: GeneratedType67;
}

export interface GeneratedType67 {
  uid: Uid20;
}

export interface Uid20 {
  'data-cslp': string;
}

export interface TestimonialCard {
  author_photo: AuthorPhoto;
  _metadata: Metadata7;
  author_name: string;
  author_description: string;
  testimony: Testimony;
  location: string;
  $: GeneratedType83;
}

export interface AuthorPhoto {
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
  ACL: Acl7;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails6;
  url: string;
  $: GeneratedType70;
}

export interface Acl7 {
  $: GeneratedType68;
}

export interface GeneratedType68 {}

export interface PublishDetails6 {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType69;
}

export interface GeneratedType69 {
  time: Time6;
  user: User6;
  environment: Environment6;
  locale: Locale6;
}

export interface Time6 {
  'data-cslp': string;
}

export interface User6 {
  'data-cslp': string;
}

export interface Environment6 {
  'data-cslp': string;
}

export interface Locale6 {
  'data-cslp': string;
}

export interface GeneratedType70 {
  uid: Uid21;
  _version: Version9;
  parent_uid: ParentUid6;
  created_by: CreatedBy6;
  updated_by: UpdatedBy6;
  created_at: CreatedAt6;
  updated_at: UpdatedAt6;
  content_type: ContentType6;
  file_size: FileSize6;
  filename: Filename6;
  title: Title9;
  is_dir: IsDir6;
  url: Url6;
}

export interface Uid21 {
  'data-cslp': string;
}

export interface Version9 {
  'data-cslp': string;
}

export interface ParentUid6 {
  'data-cslp': string;
}

export interface CreatedBy6 {
  'data-cslp': string;
}

export interface UpdatedBy6 {
  'data-cslp': string;
}

export interface CreatedAt6 {
  'data-cslp': string;
}

export interface UpdatedAt6 {
  'data-cslp': string;
}

export interface ContentType6 {
  'data-cslp': string;
}

export interface FileSize6 {
  'data-cslp': string;
}

export interface Filename6 {
  'data-cslp': string;
}

export interface Title9 {
  'data-cslp': string;
}

export interface IsDir6 {
  'data-cslp': string;
}

export interface Url6 {
  'data-cslp': string;
}

export interface Metadata7 {
  uid: string;
  $: GeneratedType71;
}

export interface GeneratedType71 {
  uid: Uid22;
}

export interface Uid22 {
  'data-cslp': string;
}

export interface Testimony {
  uid: string;
  attrs: Attrs10;
  children: Children10[];
  type: string;
  _version: number;
  $: GeneratedType82;
}

export interface Attrs10 {
  $: GeneratedType72;
}

export interface GeneratedType72 {}

export interface Children10 {
  type: string;
  attrs: Attrs11;
  uid: string;
  children: Children11[];
  $: GeneratedType81;
}

export interface Attrs11 {
  style: Style7;
  dir: string;
  $: GeneratedType75;
}

export interface Style7 {
  $: GeneratedType73;
}

export interface GeneratedType73 {}

export interface RedactorAttributes7 {
  $: GeneratedType74;
}

export interface GeneratedType74 {}

export interface GeneratedType75 {
  dir: Dir7;
}

export interface Dir7 {
  'data-cslp': string;
}

export interface Children11 {
  text?: string;
  $: GeneratedType76;
  uid?: string;
  type?: string;
  attrs?: Attrs12;
  children?: Children12[];
}

export interface GeneratedType76 {
  text?: Text7;
  uid?: Uid23;
  type?: Type10;
}

export interface Text7 {
  'data-cslp': string;
}

export interface Uid23 {
  'data-cslp': string;
}

export interface Type10 {
  'data-cslp': string;
}

export interface Attrs12 {
  style?: Style8;
  dir?: string;
  $: GeneratedType79;
}

export interface Style8 {
  $: GeneratedType77;
}

export interface GeneratedType77 {}

export interface RedactorAttributes8 {
  $: GeneratedType78;
}

export interface GeneratedType78 {}

export interface GeneratedType79 {
  dir?: Dir8;
}

export interface Dir8 {
  'data-cslp': string;
}

export interface Children12 {
  text: string;
  $: GeneratedType80;
}

export interface GeneratedType80 {
  text: Text8;
}

export interface Text8 {
  'data-cslp': string;
}

export interface GeneratedType81 {
  type: Type11;
  uid: Uid24;
}

export interface Type11 {
  'data-cslp': string;
}

export interface Uid24 {
  'data-cslp': string;
}

export interface GeneratedType82 {
  uid: Uid25;
  type: Type12;
  _version: Version10;
}

export interface Uid25 {
  'data-cslp': string;
}

export interface Type12 {
  'data-cslp': string;
}

export interface Version10 {
  'data-cslp': string;
}

export interface GeneratedType83 {
  author_name: AuthorName;
  author_description: AuthorDescription;
  location: Location;
}

export interface AuthorName {
  'data-cslp': string;
}

export interface AuthorDescription {
  'data-cslp': string;
}

export interface Location {
  'data-cslp': string;
}

export interface GeneratedType84 {
  section_description: SectionDescription2;
}

export interface SectionDescription2 {
  'data-cslp': string;
}

export interface SectionDescription3 {
  uid: string;
  attrs: Attrs13;
  children: Children13[];
  type: string;
  _version: number;
  $: GeneratedType95;
}

export interface Attrs13 {
  $: GeneratedType85;
}

export interface GeneratedType85 {}

export interface Children13 {
  type: string;
  attrs: Attrs14;
  uid: string;
  children: Children14[];
  $: GeneratedType94;
}

export interface Attrs14 {
  style: Style9;
  dir: string;
  $: GeneratedType88;
}

export interface Style9 {
  $: GeneratedType86;
}

export interface GeneratedType86 {}

export interface RedactorAttributes9 {
  $: GeneratedType87;
}

export interface GeneratedType87 {}

export interface GeneratedType88 {
  dir: Dir9;
}

export interface Dir9 {
  'data-cslp': string;
}

export interface Children14 {
  text?: string;
  $: GeneratedType89;
  uid?: string;
  type?: string;
  attrs?: Attrs15;
  children?: Children15[];
}

export interface GeneratedType89 {
  text?: Text9;
  uid?: Uid26;
  type?: Type13;
}

export interface Text9 {
  'data-cslp': string;
}

export interface Uid26 {
  'data-cslp': string;
}

export interface Type13 {
  'data-cslp': string;
}

export interface Attrs15 {
  style?: Style10;
  dir?: string;
  $: GeneratedType92;
}

export interface Style10 {
  $: GeneratedType90;
}

export interface GeneratedType90 {}

export interface RedactorAttributes10 {
  $: GeneratedType91;
}

export interface GeneratedType91 {}

export interface GeneratedType92 {
  dir?: Dir10;
}

export interface Dir10 {
  'data-cslp': string;
}

export interface Children15 {
  text: string;
  $: GeneratedType93;
  break?: boolean;
}

export interface GeneratedType93 {
  text: Text10;
  break?: Break;
}

export interface Text10 {
  'data-cslp': string;
}

export interface Break {
  'data-cslp': string;
}

export interface GeneratedType94 {
  type: Type14;
  uid: Uid27;
}

export interface Type14 {
  'data-cslp': string;
}

export interface Uid27 {
  'data-cslp': string;
}

export interface GeneratedType95 {
  uid: Uid28;
  type: Type15;
  _version: Version11;
}

export interface Uid28 {
  'data-cslp': string;
}

export interface Type15 {
  'data-cslp': string;
}

export interface Version11 {
  'data-cslp': string;
}

export interface Metadata8 {
  uid: string;
  $: GeneratedType96;
}

export interface GeneratedType96 {
  uid: Uid29;
}

export interface Uid29 {
  'data-cslp': string;
}

export interface SectionTitle3 {
  uid: string;
  attrs: Attrs16;
  children: Children16[];
  type: string;
  _version: number;
  $: GeneratedType107;
}

export interface Attrs16 {
  $: GeneratedType97;
}

export interface GeneratedType97 {}

export interface Children16 {
  type: string;
  attrs: Attrs17;
  uid: string;
  children: Children17[];
  $: GeneratedType106;
}

export interface Attrs17 {
  style: Style11;
  dir: string;
  $: GeneratedType100;
}

export interface Style11 {
  $: GeneratedType98;
}

export interface GeneratedType98 {}

export interface RedactorAttributes11 {
  $: GeneratedType99;
}

export interface GeneratedType99 {}

export interface GeneratedType100 {
  dir: Dir11;
}

export interface Dir11 {
  'data-cslp': string;
}

export interface Children17 {
  text?: string;
  $: GeneratedType101;
  uid?: string;
  type?: string;
  attrs?: Attrs18;
  children?: Children18[];
  bold?: boolean;
}

export interface GeneratedType101 {
  text?: Text11;
  uid?: Uid30;
  type?: Type16;
  bold?: Bold5;
}

export interface Text11 {
  'data-cslp': string;
}

export interface Uid30 {
  'data-cslp': string;
}

export interface Type16 {
  'data-cslp': string;
}

export interface Bold5 {
  'data-cslp': string;
}

export interface Attrs18 {
  style?: Style12;
  dir?: string;
  $: GeneratedType104;
}

export interface Style12 {
  $: GeneratedType102;
}

export interface GeneratedType102 {}

export interface RedactorAttributes12 {
  $: GeneratedType103;
}

export interface GeneratedType103 {}

export interface GeneratedType104 {
  dir?: Dir12;
}

export interface Dir12 {
  'data-cslp': string;
}

export interface Children18 {
  text: string;
  $: GeneratedType105;
  bold?: boolean;
}

export interface GeneratedType105 {
  text: Text12;
  bold?: Bold6;
}

export interface Text12 {
  'data-cslp': string;
}

export interface Bold6 {
  'data-cslp': string;
}

export interface GeneratedType106 {
  type: Type17;
  uid: Uid31;
}

export interface Type17 {
  'data-cslp': string;
}

export interface Uid31 {
  'data-cslp': string;
}

export interface GeneratedType107 {
  uid: Uid32;
  type: Type18;
  _version: Version12;
}

export interface Uid32 {
  'data-cslp': string;
}

export interface Type18 {
  'data-cslp': string;
}

export interface Version12 {
  'data-cslp': string;
}

export interface Link2 {
  title: string;
  href: string;
  $: GeneratedType108;
}

export interface GeneratedType108 {
  title: Title10;
  href: Href2;
}

export interface Title10 {
  'data-cslp': string;
}

export interface Href2 {
  'data-cslp': string;
}

export interface MosaicPicture {
  reference: string;
  _metadata: Metadata9;
  background_color: BackgroundColor2;
  image: Image;
  $: GeneratedType117;
}

export interface Metadata9 {
  uid: string;
  $: GeneratedType109;
}

export interface GeneratedType109 {
  uid: Uid33;
}

export interface Uid33 {
  'data-cslp': string;
}

export interface BackgroundColor2 {
  hsl: Hsl2;
  hex: string;
  rgb: Rgb2;
  hsv: Hsv2;
  oldHue: number;
  source: string;
  $: GeneratedType113;
}

export interface Hsl2 {
  h: number;
  s: number;
  l: number;
  a: number;
  $: GeneratedType110;
}

export interface GeneratedType110 {
  h: H3;
  s: S3;
  l: L2;
  a: A4;
}

export interface H3 {
  'data-cslp': string;
}

export interface S3 {
  'data-cslp': string;
}

export interface L2 {
  'data-cslp': string;
}

export interface A4 {
  'data-cslp': string;
}

export interface Rgb2 {
  r: number;
  g: number;
  b: number;
  a: number;
  $: GeneratedType111;
}

export interface GeneratedType111 {
  r: R2;
  g: G2;
  b: B2;
  a: A5;
}

export interface R2 {
  'data-cslp': string;
}

export interface G2 {
  'data-cslp': string;
}

export interface B2 {
  'data-cslp': string;
}

export interface A5 {
  'data-cslp': string;
}

export interface Hsv2 {
  h: number;
  s: number;
  v: number;
  a: number;
  $: GeneratedType112;
}

export interface GeneratedType112 {
  h: H4;
  s: S4;
  v: V2;
  a: A6;
}

export interface H4 {
  'data-cslp': string;
}

export interface S4 {
  'data-cslp': string;
}

export interface V2 {
  'data-cslp': string;
}

export interface A6 {
  'data-cslp': string;
}

export interface GeneratedType113 {
  hex: Hex2;
  oldHue: OldHue2;
  source: Source2;
}

export interface Hex2 {
  'data-cslp': string;
}

export interface OldHue2 {
  'data-cslp': string;
}

export interface Source2 {
  'data-cslp': string;
}

export interface Image {
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
  ACL: Acl8;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails7;
  url: string;
  $: GeneratedType116;
}

export interface Acl8 {
  $: GeneratedType114;
}

export interface GeneratedType114 {}

export interface PublishDetails7 {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType115;
}

export interface GeneratedType115 {
  time: Time7;
  user: User7;
  environment: Environment7;
  locale: Locale7;
}

export interface Time7 {
  'data-cslp': string;
}

export interface User7 {
  'data-cslp': string;
}

export interface Environment7 {
  'data-cslp': string;
}

export interface Locale7 {
  'data-cslp': string;
}

export interface GeneratedType116 {
  uid: Uid34;
  _version: Version13;
  parent_uid: ParentUid7;
  created_by: CreatedBy7;
  updated_by: UpdatedBy7;
  created_at: CreatedAt7;
  updated_at: UpdatedAt7;
  content_type: ContentType7;
  file_size: FileSize7;
  filename: Filename7;
  title: Title11;
  is_dir: IsDir7;
  url: Url7;
}

export interface Uid34 {
  'data-cslp': string;
}

export interface Version13 {
  'data-cslp': string;
}

export interface ParentUid7 {
  'data-cslp': string;
}

export interface CreatedBy7 {
  'data-cslp': string;
}

export interface UpdatedBy7 {
  'data-cslp': string;
}

export interface CreatedAt7 {
  'data-cslp': string;
}

export interface UpdatedAt7 {
  'data-cslp': string;
}

export interface ContentType7 {
  'data-cslp': string;
}

export interface FileSize7 {
  'data-cslp': string;
}

export interface Filename7 {
  'data-cslp': string;
}

export interface Title11 {
  'data-cslp': string;
}

export interface IsDir7 {
  'data-cslp': string;
}

export interface Url7 {
  'data-cslp': string;
}

export interface GeneratedType117 {
  reference: Reference;
}

export interface Reference {
  'data-cslp': string;
}

export interface GeneratedType118 {}

export interface Metadata10 {
  uid: string;
  $: GeneratedType119;
}

export interface GeneratedType119 {
  uid: Uid35;
}

export interface Uid35 {
  'data-cslp': string;
}

export interface SectionDescription4 {
  uid: string;
  attrs: Attrs19;
  children: Children19[];
  type: string;
  _version: number;
  $: GeneratedType130;
}

export interface Attrs19 {
  $: GeneratedType120;
}

export interface GeneratedType120 {}

export interface Children19 {
  type: string;
  attrs: Attrs20;
  uid: string;
  children: Children20[];
  $: GeneratedType129;
}

export interface Attrs20 {
  style: Style13;
  dir: string;
  $: GeneratedType123;
}

export interface Style13 {
  $: GeneratedType121;
}

export interface GeneratedType121 {}

export interface RedactorAttributes13 {
  $: GeneratedType122;
}

export interface GeneratedType122 {}

export interface GeneratedType123 {
  dir: Dir13;
}

export interface Dir13 {
  'data-cslp': string;
}

export interface Children20 {
  text?: string;
  $: GeneratedType124;
  uid?: string;
  type?: string;
  attrs?: Attrs21;
  children?: Children21[];
}

export interface GeneratedType124 {
  text?: Text13;
  uid?: Uid36;
  type?: Type19;
}

export interface Text13 {
  'data-cslp': string;
}

export interface Uid36 {
  'data-cslp': string;
}

export interface Type19 {
  'data-cslp': string;
}

export interface Attrs21 {
  style?: Style14;
  dir?: string;
  $: GeneratedType127;
}

export interface Style14 {
  $: GeneratedType125;
}

export interface GeneratedType125 {}

export interface RedactorAttributes14 {
  $: GeneratedType126;
}

export interface GeneratedType126 {}

export interface GeneratedType127 {
  dir?: Dir14;
}

export interface Dir14 {
  'data-cslp': string;
}

export interface Children21 {
  text: string;
  $: GeneratedType128;
  break?: boolean;
}

export interface GeneratedType128 {
  text: Text14;
  break?: Break2;
}

export interface Text14 {
  'data-cslp': string;
}

export interface Break2 {
  'data-cslp': string;
}

export interface GeneratedType129 {
  type: Type20;
  uid: Uid37;
}

export interface Type20 {
  'data-cslp': string;
}

export interface Uid37 {
  'data-cslp': string;
}

export interface GeneratedType130 {
  uid: Uid38;
  type: Type21;
  _version: Version14;
}

export interface Uid38 {
  'data-cslp': string;
}

export interface Type21 {
  'data-cslp': string;
}

export interface Version14 {
  'data-cslp': string;
}

export interface ButtonCta {
  title: string;
  href: string;
  $: GeneratedType131;
}

export interface GeneratedType131 {
  title: Title12;
  href: Href3;
}

export interface Title12 {
  'data-cslp': string;
}

export interface Href3 {
  'data-cslp': string;
}

export interface Category {
  title: string;
  _metadata: Metadata11;
  items: Item[];
  $: GeneratedType138;
}

export interface Metadata11 {
  uid: string;
  $: GeneratedType132;
}

export interface GeneratedType132 {
  uid: Uid39;
}

export interface Uid39 {
  'data-cslp': string;
}

export interface Item {
  icon?: Icon;
  _metadata: Metadata12;
  title: string;
  description: string;
  $: GeneratedType137;
}

export interface Icon {
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
  ACL: Acl9;
  is_dir: boolean;
  tags: any[];
  publish_details: PublishDetails8;
  url: string;
  $: GeneratedType135;
}

export interface Acl9 {
  $: GeneratedType133;
}

export interface GeneratedType133 {}

export interface PublishDetails8 {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType134;
}

export interface GeneratedType134 {
  time: Time8;
  user: User8;
  environment: Environment8;
  locale: Locale8;
}

export interface Time8 {
  'data-cslp': string;
}

export interface User8 {
  'data-cslp': string;
}

export interface Environment8 {
  'data-cslp': string;
}

export interface Locale8 {
  'data-cslp': string;
}

export interface GeneratedType135 {
  uid: Uid40;
  _version: Version15;
  parent_uid: ParentUid8;
  created_by: CreatedBy8;
  updated_by: UpdatedBy8;
  created_at: CreatedAt8;
  updated_at: UpdatedAt8;
  content_type: ContentType8;
  file_size: FileSize8;
  filename: Filename8;
  title: Title13;
  is_dir: IsDir8;
  url: Url8;
}

export interface Uid40 {
  'data-cslp': string;
}

export interface Version15 {
  'data-cslp': string;
}

export interface ParentUid8 {
  'data-cslp': string;
}

export interface CreatedBy8 {
  'data-cslp': string;
}

export interface UpdatedBy8 {
  'data-cslp': string;
}

export interface CreatedAt8 {
  'data-cslp': string;
}

export interface UpdatedAt8 {
  'data-cslp': string;
}

export interface ContentType8 {
  'data-cslp': string;
}

export interface FileSize8 {
  'data-cslp': string;
}

export interface Filename8 {
  'data-cslp': string;
}

export interface Title13 {
  'data-cslp': string;
}

export interface IsDir8 {
  'data-cslp': string;
}

export interface Url8 {
  'data-cslp': string;
}

export interface Metadata12 {
  uid: string;
  $: GeneratedType136;
}

export interface GeneratedType136 {
  uid: Uid41;
}

export interface Uid41 {
  'data-cslp': string;
}

export interface GeneratedType137 {
  title: Title14;
  description: Description4;
}

export interface Title14 {
  'data-cslp': string;
}

export interface Description4 {
  'data-cslp': string;
}

export interface GeneratedType138 {
  title: Title15;
}

export interface Title15 {
  'data-cslp': string;
}

export interface GeneratedType139 {
  section_title: SectionTitle4;
}

export interface SectionTitle4 {
  'data-cslp': string;
}

export interface PublishDetails9 {
  time: string;
  user: string;
  environment: string;
  locale: string;
  $: GeneratedType140;
}

export interface GeneratedType140 {
  time: Time9;
  user: User9;
  environment: Environment9;
  locale: Locale9;
}

export interface Time9 {
  'data-cslp': string;
}

export interface User9 {
  'data-cslp': string;
}

export interface Environment9 {
  'data-cslp': string;
}

export interface Locale9 {
  'data-cslp': string;
}

export interface GeneratedType141 {
  uid: Uid42;
  _version: Version16;
  locale: Locale10;
  _in_progress: InProgress;
  created_at: CreatedAt9;
  created_by: CreatedBy9;
  title: Title16;
  updated_at: UpdatedAt9;
  updated_by: UpdatedBy9;
  url: Url9;
}

export interface Uid42 {
  'data-cslp': string;
}

export interface Version16 {
  'data-cslp': string;
}

export interface Locale10 {
  'data-cslp': string;
}

export interface InProgress {
  'data-cslp': string;
}

export interface CreatedAt9 {
  'data-cslp': string;
}

export interface CreatedBy9 {
  'data-cslp': string;
}

export interface Title16 {
  'data-cslp': string;
}

export interface UpdatedAt9 {
  'data-cslp': string;
}

export interface UpdatedBy9 {
  'data-cslp': string;
}

export interface Url9 {
  'data-cslp': string;
}
