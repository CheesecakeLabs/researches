export enum ShadowOptions {
  none,
  sm,
  md,
  lg,
  xl,
}

export function createShadows(
  shadowHexColor: string,
): Record<ShadowOptions, object> {
  return {
    [ShadowOptions.none]: {
      shadowColor: shadowHexColor,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,

      elevation: 0,
    },
    [ShadowOptions.sm]: {
      shadowColor: shadowHexColor,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    [ShadowOptions.md]: {
      shadowColor: shadowHexColor,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    [ShadowOptions.lg]: {
      shadowColor: shadowHexColor,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,

      elevation: 13,
    },
    [ShadowOptions.xl]: {
      shadowColor: shadowHexColor,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
    },
  };
}
