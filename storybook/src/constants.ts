export enum categories {
  REQUIRED = 'Required',
  OPTIONAL = 'Optional',
  EVENTS = 'Events',
  OPTIONS = 'Options',
}

export enum controlType {
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  RANGE = 'range',
  OBJECT = 'object',
  FILE = 'file',
  RADIO = 'radio',
  INLINE_RADIO = 'inline-radio',
  CHECK = 'check',
  INLINE_CHECK = 'inline-check',
  SELECT = 'select',
  MULTI_SELECT = 'multi-select',
  TEXT = 'text',
  COLOR = 'color',
  DATE = 'date',
}

export enum actionType {
  CLICK = 'click',
  BLUR = 'blur',
  CHANGE = 'change',
}
