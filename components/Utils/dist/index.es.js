import getRandomValues from 'get-random-values';

function copy2Clipboard(data) {
    var body = (top || self).document.getElementsByTagName('body')[0];
    var container = document.createElement('div');
    var animation = 0;
    var opacity = 1;
    var applyStyle = function (element, style) {
        for (var i in style) {
            element.style[i] = style[i];
        }
    };
    var fadeIndication = function () {
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
    var addIndication = function () {
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
                .then(function () { return addIndication(); })
                .catch(function (err) { return console.log(err); });
            break;
        case typeof document.execCommand === 'function' &&
            typeof document.queryCommandSupported === 'function' &&
            document.queryCommandSupported('copy'):
            {
                var textAreaClipboard = document.createElement('textarea');
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
    return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ (getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16);
    });
}
function toHash(data) {
    var hash = 0;
    if (data.length == 0) {
        return hash;
    }
    for (var i = 0; i < data.length; i++) {
        hash = (hash << 5) - hash + data.charCodeAt(i);
        hash = hash & hash;
    }
    return hash;
}
function getSuffix() {
    return toHash(generateUUId()).toString(36).replace('-', '');
}

export { copy2Clipboard, generateUUId, getSuffix, toHash };
