import { TFacetecSdk } from '../@types';
import { FaceTecCustomization } from '../declarations/FaceTecCustomization';
import { getDefaultTheme } from './defaultTheme';
// import { getCustomizationForTheme } from './customizationForTheme';
// import { getLowLightCustomizationForTheme } from './lowLightCustomizationForTheme';
// import { getDynamicDimmingCustomizationForTheme } from './dynamicDimmingCustomizationForTheme';

export class Theme {
  currentCustomization = {} as FaceTecCustomization;
  currentLowLightCustomization = {} as FaceTecCustomization;
  currentDynamicDimmingCustomization = {} as FaceTecCustomization;
  // const themeResourceDirectory = '/facetec/images/themes/';
  // const defaultThemeName = 'MDFin Theme';

  constructor(private sdk: TFacetecSdk) {
    const customization = new this.sdk.FaceTecCustomization();

    this.currentCustomization = getDefaultTheme(this.sdk, customization);
    this.sdk.setCustomization(this.currentCustomization);

    /* cfg.currentCustomization = retrieveConfigurationWizardCustomization();
    this.sdk.setLowLightCustomization(cfg.currentLowLightCustomization); */

    /* cfg.currentLowLightCustomization =
      retrieveLowLightConfigurationWizardCustomization();
    this.sdk.setLowLightCustomization(cfg.currentLowLightCustomization); */

    /* cfg.currentDynamicDimmingCustomization =
      getDynamicDimmingCustomizationForTheme();
    this.sdk.setDynamicDimmingCustomization(
      cfg.currentDynamicDimmingCustomization
    ); */
  }

  /* retrieveConfigurationWizardCustomization() {
    const defaultCustomization = getDefaultTheme();
    this.currentLowLightCustomization = defaultCustomization;

    return defaultCustomization;
  } */

  /* retrieveLowLightConfigurationWizardCustomization() {
    const defaultCustomization = getDefaultTheme();
    this.currentLowLightCustomization = defaultCustomization;

    return defaultCustomization;
  } */

  /* retrieveDynamicDimmingConfigurationWizardCustomization() {
    const defaultCustomization = getDefaultTheme();
    this.currentDynamicDimmingCustomization = defaultCustomization;

    return defaultCustomization;
  } */
}
