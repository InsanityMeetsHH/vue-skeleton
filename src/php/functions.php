<?php
/**
 * Minifies html
 * 
 * @param string $html
 * @return string|null
 */
function htmlMinify($html) {
    $search = [
        '/\>[^\S ]+/s',      // strip whitespaces after tags, except space
        '/[^\S ]+\</s',      // strip whitespaces before tags, except space
        '/(\s)+/s',          // shorten multiple whitespace sequences
        '/<!--(.|\s)*?-->/', // Remove HTML comments
        "[']",               // escape single quotes
    ];

    $replace = [
        '>',
        '<',
        '\\1',
        '',
        "\\'"
    ];

    return preg_replace($search, $replace, $html);
}
