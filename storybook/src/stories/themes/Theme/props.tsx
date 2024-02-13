import _ from 'lodash';

export const storytitle = 'themes/Misc';

export const params = {
  // layout: 'centered',
};

function getSrc(path: string) {
  return [
    [`${path}.eot`],
    [`${path}.eot?#iefix`, 'embedded-opentype'],
    [`${path}.woff`, 'woff'],
    [`${path}.woff2`, 'woff2'],
    [`${path}.ttf`, 'truetype'],
    [`${path}.svg#Calibri`, 'svg'],
  ];
}

function getFontFamily(fileName: string) {
  return {
    fileName,
    'font-family': _.first(fileName.split('-')),
  };
}

export const args = {
  fonts: {
    Calibri: [
      {
        ...getFontFamily('Calibri-Regular'),
        'font-weight': 'normal',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/Calibri/Calibri-Regular'),
      },
      {
        ...getFontFamily('Calibri-Bold'),
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/Calibri/Calibri-Bold'),
      },
      {
        ...getFontFamily('Calibri-Italic'),
        'font-weight': 'normal',
        'font-style': 'italic',
        'font-display': 'swap',
        src: getSrc('/fonts/Calibri/Calibri-Italic'),
      },
      {
        ...getFontFamily('Calibri-BoldItalic'),
        'font-weight': 'bold',
        'font-style': 'italic',
        'font-display': 'swap',
        src: getSrc('/fonts/Calibri/Calibri-BoldItalic'),
      },
      {
        ...getFontFamily('Calibri-Light'),
        'font-weight': 'lighter',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/Calibri/Calibri-Light'),
      },
      {
        ...getFontFamily('Calibri-LightItalic'),
        'font-weight': 'lighter',
        'font-style': 'italic',
        'font-display': 'swap',
        src: getSrc('/fonts/Calibri/Calibri-LightItalic'),
      },
    ],
    /* NunitoSans-Black, NunitoSans-BlackItalic, NunitoSans-Bold, NunitoSans-BoldItalic, NunitoSans-ExtraBold, NunitoSans-ExtraBoldItalic, NunitoSans-ExtraLight, NunitoSans-ExtraLightItalic, NunitoSans-Italic, NunitoSans-Light, NunitoSans-LightItalic, NunitoSans-Regular, NunitoSans-SemiBold, NunitoSans-SemiBoldItalic */
    NunitoSans: [
      {
        ...getFontFamily('NunitoSans-Bold'),
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/NunitoSans/NunitoSans-Bold'),
      },
      {
        ...getFontFamily('NunitoSans-Italic'),
        'font-weight': 'normal',
        'font-style': 'italic',
        'font-display': 'swap',
        src: getSrc('/fonts/NunitoSans/NunitoSans-Italic'),
      },
      {
        ...getFontFamily('NunitoSans-BoldItalic'),
        'font-weight': 'bold',
        'font-style': 'italic',
        'font-display': 'swap',
        src: getSrc('/fonts/NunitoSans/NunitoSans-BoldItalic'),
      },
    ],
    Raleway: [
      {
        ...getFontFamily('Raleway-Regular'),
        'font-weight': 'normal',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/Raleway/Raleway-Regular'),
      },
      {
        ...getFontFamily('Raleway-Bold'),
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/Raleway/Raleway-Bold'),
      },
      {
        ...getFontFamily('Raleway-Medium'),
        'font-weight': '500',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/Raleway/Raleway-Medium'),
      },
      {
        ...getFontFamily('Raleway-SemiBold'),
        'font-weight': '600',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/Raleway/Raleway-SemiBold'),
      },
      {
        ...getFontFamily('Raleway-Black'),
        'font-weight': '900',
        'font-style': 'normal',
        'font-display': 'swap',
        src: getSrc('/fonts/Raleway/Raleway-Black'),
      },
    ],
  },
};

export const argTypes = {};
