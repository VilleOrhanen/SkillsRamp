import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { groq } from 'next-sanity';
import { client } from '../_lib/client';
import { IHeadingAndTitle, ISiteSettings } from '../_lib/types';
import Header, { IMenuItem } from '../components/header/Header';
import MapContent from '../components/MapContent';

type IPageProps = {
  name: string;
  title: string;
  description: string;
  content: IHeadingAndTitle[];
  menu: IMenuItem[];
  settings: ISiteSettings;
  CustomCSS: CustomCSS;
};

type CustomCSS = {
  css: {
    code: string;
    _type: string;
  };
  _type: string;
};

const IndexPage = (props: IPageProps) => {
  const { content, menu, settings, name, description, CustomCSS } = props;

  const customCSSString = String.raw`${CustomCSS.css.code}`;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <Header items={menu} settings={settings} />
      <MapContent content={content} />
      <style jsx global>{`
        :root {
          --bg-color: ${settings.bgColor.hex};
          --text-color: ${settings.textColor.hex};
          --accent-color: ${settings.accentColor.hex};
        }
        ${customCSSString}
      `}</style>
    </>
  );
};


export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');

  let { slug } = context.query;

  const pageQuery = groq`
    *[_type == 'page' && slug.current == '${slug}'][0]
  `;

  let pageResponse = await client.fetch(pageQuery);

  if (pageResponse == null) {
    return {
      notFound: true,
    };
  }

  const menuQuery = groq`
  *[_type == 'page' && defined(menuOrder)]{
    name,
    slug,
    menuOrder,
    title,
    CustomCSS,
  } | order(menuOrder asc)`;
  const siteSettingsQuery = groq`
  *[_type == 'siteSettings'][0]
`;

  let [menuResponse, siteSettingsResponse] = await Promise.all([
    client.fetch<IMenuItem[]>(menuQuery),
    client.fetch(siteSettingsQuery),
  ]);

  const { name, title, description, CustomCSS } = pageResponse;

  return {
    props: {
      name,
      title,
      description,
      CustomCSS,
      content: pageResponse.content,
      menu: menuResponse,
      settings: siteSettingsResponse,
    },
  };
};

export default IndexPage;
