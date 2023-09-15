type AdditionalParam = {
  url: string;
};

export type Action = {
  title: string;
  href: string;
  $: AdditionalParam;
};

export type Image = {
  filename: string;
  url: string;
  $: AdditionalParam;
};
