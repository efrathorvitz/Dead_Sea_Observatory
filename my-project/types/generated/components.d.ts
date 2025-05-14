import type { Schema, Struct } from '@strapi/strapi';

export interface ExternalLinksExternalLinks extends Struct.ComponentSchema {
  collectionName: 'components_external_links_external_links';
  info: {
    displayName: 'External_Links';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomepageTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_homepage_text_blocks';
  info: {
    description: '';
    displayName: 'textBlock';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'external-links.external-links': ExternalLinksExternalLinks;
      'homepage.text-block': HomepageTextBlock;
    }
  }
}
