import {
  FaceTecIDScanStatus,
  FaceTecSessionStatus,
} from '../../declarations/FaceTecPublicApi';
import { Controller } from '../../controllers';

export type TViewProps = {
  controller: Controller;
  initialized: boolean;
};

type TFaceTecIDScanResult = {
  idScan: string;
} & Record<'frontImages' | 'backImages', string[]>;

type TFaceTecSessionResult = {
  faceScan: string;
  [key: string]:
    | string
    | FaceTecSessionStatus
    | null
    | ReturnType<typeof Object.create>;
} & Record<'auditTrail' | 'lowQualityAuditTrail', string[]>;

export type TFaceTecAuditTrail = {
  isCompletelyDone: boolean;
  status: FaceTecIDScanStatus;
  sessionId: string | null;
};

export type TauditTrail = {
  scanResultBlob: string;
  SessionResult: TFaceTecAuditTrail & TFaceTecSessionResult;
  IDScanResult: TFaceTecAuditTrail & TFaceTecIDScanResult;
};

export type TViewAuditTrailProps = Pick<TViewProps, 'controller'> & {
  auditTrail: TauditTrail;
};
