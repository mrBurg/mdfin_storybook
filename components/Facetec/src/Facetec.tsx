import Script from 'next/script';
import React, { useCallback, useEffect, useState } from 'react';

import { View } from './View';
import { Controller } from './controllers';
import { ViewAuditTrail } from './View/ViewAuditTrail';
import { TauditTrail } from './View/@types';
import { Config } from './config/Config';
import { TFacetecProps } from './@types';

function Facetec(props: TFacetecProps) {
  const [faceTecSDK, setFaceTecSDK] = useState(
    null as unknown as typeof FaceTecSDK
  );
  const [controller, setController] = useState(null as unknown as Controller);
  const [auditTrail, setAuditTrail] = useState(null as unknown as TauditTrail);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (faceTecSDK && props.config) {
      const config = new Config(faceTecSDK, props.config);

      setController(
        new Controller(faceTecSDK, config, { setAuditTrail, setInitialized })
      );
    }
  }, [faceTecSDK, props.config]);

  const renderAuditTrail = useCallback(() => {
    if (auditTrail) {
      return <ViewAuditTrail auditTrail={auditTrail} controller={controller} />;
    }
  }, [auditTrail, controller]);

  const renderFacetec = useCallback(() => {
    if (controller) {
      return (
        <>
          <View initialized={initialized} controller={controller} />
          {renderAuditTrail()}
        </>
      );
    }
  }, [controller, initialized, renderAuditTrail]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="/facetec/FaceTecSDK.js"
        onLoad={() => setFaceTecSDK(FaceTecSDK)}
      />
      {renderFacetec()}
    </>
  );
}

export { Facetec };
