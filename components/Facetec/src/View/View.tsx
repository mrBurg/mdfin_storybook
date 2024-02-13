import React from 'react';
import classNames from 'classnames';
import { TViewProps } from './@types';

import scss from './Facetec.module.scss';

function ViewComponent(props: TViewProps) {
  const { controller } = props;

  return (
    <div className={scss.mainView}>
      <main className={scss.wrappingBoxContainer}>
        <div id="main-interface" className={scss.mainInterface}>
          <div id="controls" className={scss.controls}>
            {/* <div id="vocal-icon-container">
              <div>
                <img
                  id="vocal-guidance-icon-minimal"
                  alt="vocal-guidance-icon-minimal"
                  // disabled
                  className="vocal-icon"
                  src="/facetec/images/vocal_minimal.png"
                  onClick={() => {
                    //@ts-ignore
                    controller.onVocalGuidanceSettingsButtonPressed();
                  }}
                />
              </div>
              <div>
                <img
                  id="vocal-guidance-icon-full"
                  alt="vocal-guidance-icon-full"
                  // disabled
                  className="vocal-icon vocal-guidance-icon-full display-none"
                  src="/facetec/images/vocal_full.png"
                  onClick={() => {
                    //@ts-ignore
                    controller.onVocalGuidanceSettingsButtonPressed();
                  }}
                />
              </div>
              <div>
                <img
                  id="vocal-guidance-icon-off"
                  alt="vocal-guidance-icon-off"
                  // disabled
                  className="vocal-icon vocal-guidance-icon-off display-none"
                  src="/facetec/images/vocal_off.png"
                  onClick={() => {
                    //@ts-ignore
                    controller.onVocalGuidanceSettingsButtonPressed();
                  }}
                />
              </div>
            </div> */}
            <button
              id="enroll-button"
              // disabled
              onClick={() => {
                controller.onEnrollUserPressed();
              }}
              className={classNames(scss.button, scss.buttonBig)}
              disabled={!props.initialized}
            >
              Enroll User
            </button>
            <button
              id="id-scan-button"
              // disabled
              onClick={() => {
                controller.onPhotoIDMatchPressed();
              }}
              className={classNames(scss.button, scss.buttonBig)}
              disabled={!props.initialized}
            >
              Photo ID Match
            </button>
            <button
              id="audit-trail-button"
              // disabled
              onClick={() => {
                controller.onViewAuditTrailPressed();
              }}
              className={classNames(scss.button, scss.buttonMedium)}
              disabled={!props.initialized}
            >
              View Audit Trail
            </button>
            {/* <p id="status" className={scss.status}>
              Initializing...
            </p> */}
          </div>
        </div>
      </main>

      {/* <style jsx>{``}</style> */}
      {/* <style jsx global>{``}</style> */}
    </div>
  );
}

export const View = ViewComponent;
