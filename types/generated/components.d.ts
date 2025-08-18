import type { Schema, Attribute } from '@strapi/strapi';

export interface BodySectionRepeat extends Schema.Component {
  collectionName: 'components_body_section_repeats';
  info: {
    displayName: 'section-repeat';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'body.section-repeat': BodySectionRepeat;
    }
  }
}
