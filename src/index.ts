const FULL_WIDTH_CHAR = 0xFEE0;

function isFullWidth(char: string) {
    return (char.charCodeAt(0) >= 65281 && char.charCodeAt(0) <= 65374);
}

export function fullWidth(text: string) {
    return text.split('').map(function(char) {
        if (char.match(/[a-zA-Z]/) && !isFullWidth(char)) {
            return String.fromCharCode(char.charCodeAt(0) + FULL_WIDTH_CHAR);
        }

        return char;
    }).join('');
}
