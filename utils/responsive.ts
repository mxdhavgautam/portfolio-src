// Equivalent to Flutter's ResponsiveScreenProvider

export function isMobileScreen(width: number): boolean {
  return width < 480
}

export function isTabScreen(width: number): boolean {
  return width >= 480 && width < 800
}

export function isDesktopScreen(width: number): boolean {
  return width >= 800
}

