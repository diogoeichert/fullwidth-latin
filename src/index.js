"use strict";

const FULLWIDTH_CHAR = 0xFEE0;

const FULLWIDTH_CODES = {
	BEGIN: 65281,
	END: 65374,
};

function isFullwidth(char) {
	const charCode = char.charCodeAt(0);
	return (charCode >= FULLWIDTH_CODES.BEGIN && charCode <= FULLWIDTH_CODES.END);
}

/**
 *
 * @param {string} text - The text containing Latin characters to be converted.
 * @returns {string} - The text with Latin characters converted to fullwidth.
 */
function fullwidthLatin(text) {
	return text.split("").map(function(char) {
		if (char.match(/[a-zA-Z]/) && !isFullwidth(char)) {
			return String.fromCharCode(char.charCodeAt(0) + FULLWIDTH_CHAR);
		}

		return char;
	}).join("");
}

module.exports = fullwidthLatin;
