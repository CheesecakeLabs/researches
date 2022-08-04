export function transformEnumToArray<T>(
  enumType: T,
): Record<string, T[keyof T]> {
  return Object.keys(enumType)
    .filter(x => isNaN(+x))
    .map(key => ({
      [key.toLowerCase()]: enumType[key as keyof typeof enumType],
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
}
