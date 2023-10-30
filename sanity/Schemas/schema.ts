import { SchemaTypeDefinition } from 'sanity';
import Page from './Page Builder/page';
import siteSettings from './Site Settings/siteSettings';
import headingAndTitle from './types/headingAndTitle';
import bot from './types/bot';
import styling from './types/styling';
import report from './types/report';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //Documents
    Page,
    siteSettings,

    //Objects
    headingAndTitle,

    //Objects
    bot,

    //Objects
    report,

    styling,

  ],

};
