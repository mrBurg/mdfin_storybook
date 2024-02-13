declare module 'rc-slider' {
  const Slider: React.ComponentType<
    Partial<
      import('rc-slider/lib/Slider').SliderProps &
        Partial<Record<'className' | 'role', string>>
    >
  >;

  export const Range: React.ComponentType<
    Partial<
      import('rc-slider/lib/Range').RangeProps &
        Partial<Record<'className', string>>
    >
  >;

  export const Handle: React.ComponentType<
    Partial<
      import('rc-slider/lib/Handle').HandleProps &
        Partial<Record<'className', string>>
    >
  >;

  export const createSliderWithTooltip: typeof import('rc-slider/lib/createSliderWithTooltip').default;

  export default Slider;
}
