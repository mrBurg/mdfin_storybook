import { Dispatch, SetStateAction } from 'react';
import { EnrollmentProcessor, PhotoIDMatchProcessor } from '../../processors';
import { TauditTrail } from '../../View/@types';

export type TlatestProcessor = PhotoIDMatchProcessor | EnrollmentProcessor;
export type TlatestNetworkResponseStatus = number;
export type TsessionTokenCallback = (token: string) => void;
export type TControllerProps = {
  setAuditTrail: Dispatch<SetStateAction<TauditTrail>>;
  setInitialized: Dispatch<SetStateAction<boolean>>;
};
