declare module '*.module.scss' {
  const scssModuleContent: Record<string, string>;

  export default scssModuleContent;
}

declare module '*.svg' {
  const svgContent: string;
  export default svgContent;
}

/* declare module '@components/*' {
  const content: Record<string, neber>;

  export default content;
} */

/* declare module '@stories/*' {
  const content: Record<string, neber>;

  export default content;
} */

declare module '@root/*' {
  const content: ReturnType<typeof Object.create>;

  export const controlType: Record<string, unknown>;
  export const categories: Record<string, unknown>;
  export const actionType: Record<string, unknown>;

  export default content;
}
