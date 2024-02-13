declare module '*.module.scss' {
  const scssModuleContent: Record<string, string>;

  export default scssModuleContent;
}

declare module '*.scss' {
  const scssContent: Record<string, string>;

  export default scssContent;
}

declare module '*.css' {
  const cssContent: Record<string, string>;

  export default cssContent;
}
