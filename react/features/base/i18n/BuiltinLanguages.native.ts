import i18next from 'i18next';

/**
 * The builtin languages.
 */
const _LANGUAGES = {

    // Korean
    'ko': {
        main: require('../../../../lang/main-ko')
    },
};

// Register all builtin languages with the i18n library.
for (const name in _LANGUAGES) { // eslint-disable-line guard-for-in
    const { main } = _LANGUAGES[name as keyof typeof _LANGUAGES];

    i18next.addResourceBundle(
        name,
        'main',
        main,
        /* deep */ true,
        /* overwrite */ true);
}
