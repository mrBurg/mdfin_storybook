import getRandomValues from 'get-random-values';

function copy2Clipboard(data: string) {
  const body = (top || self).document.getElementsByTagName('body')[0];
  const container = document.createElement('div');

  let animation = 0;
  let opacity = 1;

  const applyStyle = (element: HTMLElement, style: Record<string, unknown>) => {
    for (const i in style) {
      (element.style as unknown as Record<string, unknown>)[i] = style[i];
    }
  };

  const fadeIndication = () => {
    opacity -= 0.05;
    applyStyle(container, {
      opacity: String(opacity),
    });

    animation = requestAnimationFrame(fadeIndication);

    if (opacity <= 0) {
      cancelAnimationFrame(animation);
      container.remove();
    }
  };

  const addIndication = () => {
    console.log('Data copied to clipboard...');

    animation = requestAnimationFrame(fadeIndication);

    applyStyle(container, {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      position: 'fixed',
      left: '0',
      top: '0',
      color: '#383838',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.5em',
    });

    container.innerText = 'Copied to clipboard...';

    body.append(container);
  };

  switch (true) {
    case !!navigator.clipboard:
      navigator.clipboard
        .writeText(data)
        .then(() => addIndication())
        .catch((err) => console.log(err));
      break;
    case typeof document.execCommand === 'function' &&
      typeof document.queryCommandSupported === 'function' &&
      document.queryCommandSupported('copy'): {
      const textAreaClipboard = document.createElement('textarea');

      textAreaClipboard.value = data;
      applyStyle(textAreaClipboard, {
        position: 'absolute',
        visibility: 'hidden',
        opacity: '0',
        zIndex: '-9999',
      });

      textAreaClipboard.setAttribute('readonly', '');

      document.body.append(textAreaClipboard);

      textAreaClipboard.select();

      document.execCommand('copy');

      addIndication();

      document.body.removeChild(textAreaClipboard);

      break;
    }
    default:
      console.log('Copying to clipboard is not supported');
  }
}

function generateUUId() {
  return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
    (c ^ (getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}

/* function generateUUId() {
  return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (c: unknown) =>
      (
        (c as number) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] &
          (15 >> ((c as number) / 4)))
      ).toString(16)
  );
} */

function toHash(data: string) {
  let hash = 0;

  if (data.length == 0) {
    return hash;
  }

  for (let i = 0; i < data.length; i++) {
    hash = (hash << 5) - hash + data.charCodeAt(i);
    hash = hash & hash;
  }

  return hash;
}

function getSuffix() {
  return toHash(generateUUId()).toString(36).replace('-', '');
}

/* export const _ = {
  isBoolean(data: unknown) {
    return typeof data == typeof true;
  },
  isNumber(data: unknown) {
    return typeof data == typeof 0;
  },
  isString(data: unknown) {
    return typeof data == typeof '';
  },
  isFunction(data: unknown) {
    return typeof data == typeof (() => ({}));
  },
  isNull(data: unknown) {
    return data === null;
  },
  isObject(data: unknown) {
    return data != null && typeof data == typeof {} && !Array.isArray(data);
  },
  isArray(data: unknown) {
    return Array.isArray(data);
  },
  isUndefined(data: unknown) {
    return typeof data == String(void 0);
  },
}; */

export { copy2Clipboard, generateUUId, toHash, getSuffix };
