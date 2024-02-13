import { ReactElement } from 'react';
import { TConfigProps } from './config';

export * from './config';
export type TFacetecSdk = typeof FaceTecSDK;
export type TFacetecProps = {
  config: TConfigProps;
};

declare module 'mdfin-facetec' {
  export function Facetec(props: TFacetecProps): ReactElement;
}
