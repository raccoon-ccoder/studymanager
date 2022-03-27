import { DefaultTheme } from 'styled-components';

// const color = {
//     black: '#1e2025',
//     light-yellow: '#ffef7d',
//     yellow: '#ffcc3b',
//     gray: '#262a30',
//     light-gray: '#8f9399',
//     white: '#f7efe2',
//     c-light-yellow: '#fade92',
// };

// const size = {
//     mobile-base-space: '1.25rem',
//     card-radius: '20px',
//     c-w: '300px',   /* chart-width */
//     c-b: '25px',    /* chart-border */
//     c-p: '0',       /* chart-percent */
// };

const theme:DefaultTheme = {
    color: {
        black: '#1e2025',
        lightYellow: '#ffef7d',
        yellow: '#ffcc3b',
        gray: '#262a30',
        lightGray: '#8f9399',
        white: '#f7efe2',
        cLightYellow: '#fade92',
    },

    size: {
        mobileBaseSpace: '1.25rem',
        card: {
            radius: '20px',
            width: '300px',
            border: '25px', 
            percent: '0', 
        },
        icon: {
            border: `3px solid #ffef7d`,
            borderRadius: '50%',
            headerWidth: '2.5rem',
            headerHeight: '2.5rem',
            cursor: 'pointer',
        },
    }
};

// .dots {
//     color: var(--light-gray);
//     cursor: pointer;
// }

// .round-icon {
//     color: var(--yellow);
//     cursor: pointer;
// }
// cursor => icon.cursor로 통일
// round-icon.color, dots.color는  원래 color theme 사용
export default theme;

