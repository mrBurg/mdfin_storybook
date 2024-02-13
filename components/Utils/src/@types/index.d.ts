export { copy2Clipboard, generateUUId, toHash, getSuffix } from '..';

declare module 'mdfin-utils' {
  export function copy2Clipboard(data: string): Function;
  export function generateUUId(): Function;
  export function toHash(data: string): Function;
  export function getSuffix(): Function;
}
