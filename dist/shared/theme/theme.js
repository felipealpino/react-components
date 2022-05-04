import { colors } from './colors';
import { formElements } from './form-elements';
import { fonts, fontWeights } from './typography';
import { breakpoints, media } from './breakpoints';
export var theme = {
    colors: colors,
    fonts: fonts,
    fontWeights: fontWeights,
    formElements: formElements,
    breakpoints: breakpoints,
    media: media,
    siteMaxWidth: '1440px',
    maxWidths: {
        sm: '544px',
        md: '768px',
        lg: '1012px',
        xl: '1280px'
    },
    gridColumns: 12,
    borders: [0, '1px solid'],
    radii: ['0', '3px', '6px'],
    shadows: {
        sm: '0 1px 1px rgba(27, 31, 35, 0.1)',
        md: '0 1px 5px rgba(27, 31, 35, 0.15)',
        lg: '0 1px 15px rgba(27, 31, 35, 0.15)',
        xl: '0 10px 50px rgba(27, 31, 35, 0.07)'
    },
    space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
    accordionSizes: {
        tiny: {
            minHeight: '2.5rem'
        },
        small: {
            minHeight: '3.5rem'
        },
        medium: {
            minHeight: '4.5rem'
        },
        large: {
            minHeight: '5.5rem'
        },
        giant: {
            minHeight: '6.5rem'
        }
    },
    buttonSizes: {
        tiny: {
            fontSize: '0.625rem',
            lineHeight: '0.75rem',
            padding: '0.3125rem 0.625rem'
        },
        small: {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            padding: '0.4375rem 0.875rem'
        },
        medium: {
            fontSize: '0.875rem',
            lineHeight: '1rem',
            padding: '0.6875rem 1.125rem'
        },
        large: {
            fontSize: '1rem',
            lineHeight: '1.25rem',
            padding: '0.8125rem 1.125rem'
        },
        giant: {
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            padding: '0.9375rem 1.375rem'
        }
    },
    cardSizes: {
        tiny: {
            height: '13.5rem'
        },
        small: {
            height: '21.1875rem'
        },
        medium: {
            height: '28.875rem'
        },
        large: {
            height: '36.5625rem'
        },
        giant: {
            height: '44.25rem'
        }
    },
    spinnerSizes: {
        tiny: {
            fontSize: '1rem'
        },
        small: {
            fontSize: '1.25rem'
        },
        medium: {
            fontSize: '1.5rem'
        },
        large: {
            fontSize: '1.75rem'
        },
        giant: {
            fontSize: '2rem'
        }
    },
    modalSizes: {
        sm: {
            height: '270px',
            maxHeight: '90vh',
            maxWidth: '90vw',
            width: '480px'
        },
        md: {
            height: '360px',
            maxHeight: '90vh',
            maxWidth: '90vw',
            width: '640px'
        },
        lg: {
            height: '90vh',
            width: '90vw'
        }
    },
    wysiwyg: {
        maxWidth: '720px',
        tightness: {
            tight: {
                lineHeight: 1.2
            },
            "default": {
                lineHeight: 1.9
            },
            loose: {
                lineHeight: 2.5
            }
        }
    }
};
//# sourceMappingURL=theme.js.map