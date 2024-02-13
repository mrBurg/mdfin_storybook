// import { scssConstants } from 'mdfin-theme';

import { categories, controlType } from '@root/constants';

export const storytitle = 'molecules/Footer';

export const params = {
  // layout: 'centered',
  /* backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: scssConstants['gray-light'],
      },
    ],
  }, */
};

export const args = {
  value: [
    {
      title: null,
      text: 'Site-ul https://imprumut.net are un rol informativ cu scopul de a vă ajuta să identificați o soluție optimă nevoilor dvs. Analiza fiecărei solicitări se face independent de către instituția financiar non-bancară pe baza informațiilor furnizate de dvs., motiv pentru care vă sfătuim să consultați termenii și condițiile fiecărei instituții în parte. Conținutul de pe acest site este preluat de pe site-urile instituțiilor non-bancare și sunt date cu titlu de exemplu, putând conține informații incomplete sau neactuale pentru care nu ne asumăm nicio răspundere. Vă recomandăm cu tărie să verificați ofertele de pe site-ul instituțiilor non-bancare și/sau să solicitați informații de la aceștia în cazul în care sunteți contactat telefonic.',
    },
    {
      title: null,
      text: 'Subliniem faptul că site-ul https://imprumut.net NU este bancă sau IFN, nici broker. Nu vă oferim consultanță financiară, nu negociem și nu aranjăm încheierea niciunui contract de împrumut, nici nu vindem produse financiare și nici nu oferim împrumuturi pentru dvs. Site-ul https://imprumut.net este un intermediar cu ajutorul căruia solicitarea dvs. se redirecționează automat către instituția financiară abilitată să vă acorde un împrumut.',
    },
    {
      title:
        'Costul total al împrumutului și un exemplu de calcul al primului împrumut.',
      text: 'Un împrumut în valoare de 2.000 lei a fost acordat împrumutatului pentru o perioadă de 90 zile. Sunt 365 zile într-un an, rata este de 0,001% pe zi (respectiv, rata anuală a dobânzii este de 0,0365%). Suma dobânzii este de 73 lei pe an (2000 * 0,0365%), iar pentru 90 de zile dobânda va fi de 18 lei. Suma totală de plată va fi în valoare de 2018 lei (2000 lei (datorie principală) + 18 lei (dobândă)).',
    },
    {
      title: 'Detalii de contact',
      text: 'BrainCom OÜ, Lasnamäe linnaosa, Peterburi tee 47, Tallinn 2. Email: imprumut.info@gmail.com',
    },
    {
      title: null,
      text: 'Consultați aici Politica de confidențialitate a Datelor. © 2022 « BrainCom OÜ» Toate drepturile',
    },
  ],
};

export const argTypes = {
  value: {
    description: 'Array of objects',
    control: { type: controlType.OBJECT },
    table: {
      category: categories.REQUIRED,
      defaultValue: {
        summary: String(void 0),
      },
      type: {
        summary: 'One value structure',
        detail: JSON.stringify(
          {
            title: 'string',
            text: 'string',
            tags: {},
          },
          null,
          2
        ),
      },
    },
  },
};
