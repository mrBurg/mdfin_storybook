declare module '*.scss' {
  const scssContent: Record<string, string>;

  export default scssContent;
}

declare module '*.module.scss' {
  const scssModuleContent: Record<string, string>;

  export default scssModuleContent;
}
