import { ReactElement } from "react";

export { $[component] } from '..';

declare module '$[registration-name]' {
  export function $[component](): ReactElement;
}
