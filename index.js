const FULL_WIDTH_CHAR = 0xFEE0;

export function fullWidth(text) {
    return text.split('').map(function(char) {
        if (char.match(/[a-zA-Z]/)) {
            return String.fromCharCode(char.charCodeAt(0) + FULL_WIDTH_CHAR);
        }

        return char;
    }).join('');
}
