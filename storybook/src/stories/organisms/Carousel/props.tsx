import React from 'react';

export const storytitle = 'organisms/Carousel';

import { ContentBlock } from 'mdfin-content-block';

import { categories, controlType } from '@root/constants';

export const params = {
  // layout: 'centered',
};

const action = () => console.log('Do something');
const buttonText = 'Aplică acum';

export const args = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  content: [
    <ContentBlock
      key={0}
      title={'3 pași simpli'}
      content={
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, consequuntur hic. Harum obcaecati soluta et reprehenderit facilis iusto odit voluptate quo, quisquam libero dolore tempore accusamus porro, sit aspernatur labore.'
      }
      buttonText={buttonText}
      action={action}
    />,
    <ContentBlock
      key={1}
      title={'Condiții pentru obținerea împrumutului:'}
      content={[
        'Cetățenie Română;',
        'Peste 19 ani;',
        'Carte de identitate ;',
        'Internet și disponibilitate card credit;',
      ]}
      buttonText={buttonText}
      action={action}
    />,
    <ContentBlock
      key={2}
      title={'Un împrumut pentru a rezolva orice situație:'}
      content={[
        'Înainte de salariu. Situații diverse pe care nimeni nu le poate prevedea.',
        'Pentru a cumpăra un cadou. Ce poate înlocui o emoție pozitivă?',
        'Pentru călătorie. Ce poate fi mai bun decât amintirile?',
        'Plata cursurilor. Contribuirea la dobândirea cunoștintelor este o bună investiție.',
        'Renovarea locuinței sau achiziția de electrocasnice. ',
      ]}
      buttonText={buttonText}
      action={action}
    />,
    <ContentBlock
      key={3}
      title={'Modalități prin care se poate obține împrumutul:'}
      content={[
        'Online',
        'Oricând',
        'Fără a te ridica din canapeaua favorită.',
      ]}
      buttonText={buttonText}
      action={action}
    />,
  ],
};

export const argTypes = {
  content: {
    description: 'Carousel items',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.REQUIRED,
      defaultValue: { summary: String(void 0) },
    },
  },
  dots: {
    description: 'Dots',
    control: { type: controlType.BOOLEAN },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: true },
    },
  },
  speed: {
    description: 'Slider speed',
    control: { type: controlType.NUMBER },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: 500 },
    },
  },
  slidesToShow: {
    description: 'Slide to show',
    control: { type: controlType.NUMBER },
    table: {
      category: categories.OPTIONAL,
      defaultValue: { summary: 3 },
    },
  },
};
