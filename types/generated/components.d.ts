import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentFooter extends Struct.ComponentSchema {
  collectionName: 'components_component_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Horaire: Schema.Attribute.Component<'footer.horaires', false>;
    informations: Schema.Attribute.Component<'footer.informations', false>;
    Location: Schema.Attribute.Component<'footer.location', false>;
  };
}

export interface ComponentHeader extends Struct.ComponentSchema {
  collectionName: 'components_component_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    NavItem: Schema.Attribute.Component<'component.navbar', true>;
  };
}

export interface ComponentHero extends Struct.ComponentSchema {
  collectionName: 'components_component_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    central_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    left_text: Schema.Attribute.String;
    right_text: Schema.Attribute.String;
  };
}

export interface ComponentHeure extends Struct.ComponentSchema {
  collectionName: 'components_component_heures';
  info: {
    displayName: 'Heure';
  };
  attributes: {
    day: Schema.Attribute.String;
    hour: Schema.Attribute.String;
  };
}

export interface ComponentImageGallerie extends Struct.ComponentSchema {
  collectionName: 'components_component_image_galleries';
  info: {
    displayName: 'ImageGallerie';
  };
  attributes: {
    image: Schema.Attribute.Component<'image-component.image', true>;
  };
}

export interface ComponentNavbar extends Struct.ComponentSchema {
  collectionName: 'components_component_navbars';
  info: {
    displayName: 'navbar';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ComponentRooms extends Struct.ComponentSchema {
  collectionName: 'components_component_rooms';
  info: {
    displayName: 'Rooms';
  };
  attributes: {
    images: Schema.Attribute.Component<'image-component.image', true>;
    text_1: Schema.Attribute.Text;
    text_2: Schema.Attribute.Text;
    text_3: Schema.Attribute.Text;
    text_4: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentServices extends Struct.ComponentSchema {
  collectionName: 'components_component_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', false>;
    images: Schema.Attribute.Component<'image-component.image', true>;
  };
}

export interface ComponentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_component_text_blocks';
  info: {
    displayName: 'text-block';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface FooterHoraires extends Struct.ComponentSchema {
  collectionName: 'components_footer_horaires';
  info: {
    displayName: 'Horaires';
  };
  attributes: {
    Heure: Schema.Attribute.Component<'component.heure', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterInformations extends Struct.ComponentSchema {
  collectionName: 'components_footer_informations';
  info: {
    displayName: 'Informations';
  };
  attributes: {
    address: Schema.Attribute.String;
    mail: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FooterLocation extends Struct.ComponentSchema {
  collectionName: 'components_footer_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ImageComponentImage extends Struct.ComponentSchema {
  collectionName: 'components_image_component_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface SectionAbout extends Struct.ComponentSchema {
  collectionName: 'components_section_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    Button: Schema.Attribute.Component<'component.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.button': ComponentButton;
      'component.footer': ComponentFooter;
      'component.header': ComponentHeader;
      'component.hero': ComponentHero;
      'component.heure': ComponentHeure;
      'component.image-gallerie': ComponentImageGallerie;
      'component.navbar': ComponentNavbar;
      'component.rooms': ComponentRooms;
      'component.services': ComponentServices;
      'component.text-block': ComponentTextBlock;
      'footer.horaires': FooterHoraires;
      'footer.informations': FooterInformations;
      'footer.location': FooterLocation;
      'image-component.image': ImageComponentImage;
      'section.about': SectionAbout;
    }
  }
}
