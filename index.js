"use strict";
const qr = require('qr-image');
/**
 * Base64 PNG Encoder.
 * @param {string} data - Data to be converted.
 * @returns {string} base64 PNG string.
 */
function base64PNGEncoder(data) {
    return 'data:image/png;base64,' + qr.imageSync(data.toString(), {
        margin: 0
    }).toString('base64');
}
/**
 * Strcat <img> HTML string.
 * @param {Object[]} attributes - <img> attributes object.
 * @param {string} attributes.src - <img> src attribute.
 * @param {string} attributes.alt - <img> alt attribute.
 * @param {string} attributes.title - <img> title attribute.
 * @param {string[]} attributes.classList - <img> class attribute.
 */
function strcatImgHtml({
    src = '',
    alt = '',
    title = '',
    classList = []
}) {
    const element = '<img src="' + src + '" alt="' + alt + '" title="' + title + '" class="' + classList.join(' ') + '">';
    return element;
}
/**
 * Return QR code <img> HTML string.
 * @param {string[]} args
 * @param {string} args.data - converted data.
 * @param {string[]} args.attributes - <img> attributes.
 * @returns {string} <img> HTML string.
 */
function callback([data, ...attributes]) {
    if (data) {
        if (attributes.length) {
            // Parameter Inference
            const altRE = /^alt:(.+)/;
            const titleRE = /^title:(.+)/;
            let title = '';
            let alt = '';
            let classList = [];
            for (const attribute of attributes) {
                if (attribute.match(altRE)) {
                    alt = RegExp.$1;
                } else if (attribute.match(titleRE)) {
                    title = RegExp.$1;
                } else {
                    classList.push(attribute)
                }
            }
            // return <img> HTML string.
            return strcatImgHtml({
                src: base64PNGEncoder(data),
                alt: alt,
                title: title,
                classList: classList
            });
        } else {
            // return <img> HTML string.
            return strcatImgHtml({
                src: base64PNGEncoder(data)
            });
        }
    } else {
        throw new Error('hexo-tag-qrcode arguments error!');
    }
}
hexo.extend.tag.register('qrcode', callback);
