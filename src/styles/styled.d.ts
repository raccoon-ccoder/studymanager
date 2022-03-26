import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
        black: string;
        lightYellow: string;
        yellow: string;
        gray: string;
        lightGray: string;
        white: string;
        cLightYellow: string;
    };

    size: {
        mobileBaseSpace: string;
        card: {
            radius: string;
            width: string;
            border: string;
            percent: string;
        };
        icon: {
            border: string;
            borderRadius: string;
            headerWidth: string;
            headerHeight: string;
            cursor: string;
        };
    }
  }
}