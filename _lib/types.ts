import { PortableTextBlock } from 'sanity';

export type ISiteSettings = {
  accentColor: IColor;
  _id: string;
  title: string;
  description: string;
  logo: ISanityImage;
  textColor: IColor;
  bgColor: IColor;
};

export type IColor = {
  alpha: number;
  hex: string;
};

export type IPage = {
  _id: string;
  _rev: string;
  _type: 'page';
  name: string;
  menuOrder?: number;
  content?: IHeadingAndTitle[];
  CustomCSS?: object;
};

export type ISanityImage = {
  _key: string;
  _id: string;
  url: any;
  _type: string;
  asset: {
    url(url: any): unknown;
    _ref: string;
    _type: string;
  };
};

export type IHeadingAndTitle = {
  _id: string;
  _type: string;
  _key: string;
  heading: string;
};

export type ISlug = {
  current: string;
};

export type IBot = {
  _ref?: string;
  _type?: string;
  _key?: string;
  tenantId: string;
  instanceId: string;
  subscriptionKey: string;
  debug: boolean;
  autoScroll: boolean;
  heading?: string;
  content?: any;
  image: ISanityImage;
};

export type IReport = {
  _id: string;
  _type: string;
  _key: string;
  reportUrl: string;
  logo: ISanityImage;
  companyName: string;
};
