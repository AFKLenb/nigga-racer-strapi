import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialsInfo extends Schema.Component {
  collectionName: 'components_socials_infos';
  info: {
    displayName: 'info';
    icon: 'check';
    description: '';
  };
  attributes: {
    nameAbout: Attribute.String;
    nameProject: Attribute.String;
    nameService: Attribute.String;
    nameContact: Attribute.String;
  };
}

export interface SocialsKontakt extends Schema.Component {
  collectionName: 'components_socials_kontakt';
  info: {
    displayName: '\u041A\u043E\u043D\u0442\u0430\u043A\u0442';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    namePhone: Attribute.String;
    iconPhone: Attribute.Media & Attribute.Required;
    nameEmail: Attribute.String & Attribute.Required;
    nameWork: Attribute.String & Attribute.Required;
    iconEmail: Attribute.Media & Attribute.Required;
    iconWork: Attribute.Media & Attribute.Required;
  };
}

export interface SocialsLogo extends Schema.Component {
  collectionName: 'components_socials_logos';
  info: {
    displayName: 'logo';
    icon: 'chartCircle';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface SocialsSoczSeti extends Schema.Component {
  collectionName: 'components_socials_socz_seti';
  info: {
    displayName: '\u0421\u043E\u0446-\u0441\u0435\u0442\u044C';
    icon: 'alien';
    description: '';
  };
  attributes: {
    urlVk: Attribute.String & Attribute.Required;
    urlYoutube: Attribute.String & Attribute.Required;
    urlTelegram: Attribute.String & Attribute.Required;
    iconVk: Attribute.Media & Attribute.Required;
    iconYoutube: Attribute.Media & Attribute.Required;
    iconTelegram: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'socials.info': SocialsInfo;
      'socials.kontakt': SocialsKontakt;
      'socials.logo': SocialsLogo;
      'socials.socz-seti': SocialsSoczSeti;
    }
  }
}
