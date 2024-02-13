import _ from 'lodash';

import { socialLinkList, socialLinkDataList } from 'mdfin-social-links';

import { categories, controlType } from '@root/constants';

export const storytitle = 'atoms/SocialLinks';

export const params = { layout: 'centered' };

const socialLinks = _.keys(socialLinkList);

export const args = {
  socialLinks,
  ..._.reduce(
    socialLinkList,
    (accum, item, index) => {
      let link = socialLinkDataList[item].href;

      switch (item) {
        case socialLinkList.FB:
          link += '/recognid';

          break;
        case socialLinkList.TW:
          link += '/RecognID';

          break;
        case socialLinkList.LI:
          link += '/company/recognid';

          break;
      }

      accum[index] = link;

      return accum;
    },
    {} as Record<keyof typeof socialLinkList, string>
  ),
};

export const argTypes = {
  socialLinks: {
    description: 'Social links',
    options: socialLinks,
    control: { type: controlType.INLINE_CHECK },
    table: {
      category: categories.REQUIRED,
      defaultValue: { summary: String(void 0) },
      type: {
        summary: 'Social networks',
        detail: _.join(_.values(socialLinkList), ', '),
      },
    },
  },
  ..._.reduce(
    socialLinkList,
    (accum, item, index) => {
      accum[index] = {
        // if: { arg: 'socialLinkList', truthy: true },
        description: item,
        control: { type: controlType.TEXT },
        table: {
          category: categories.OPTIONAL,
          defaultValue: { summary: String(void 0) },
        },
      };

      return accum;
    },
    {} as Record<string, unknown>
  ),
};
