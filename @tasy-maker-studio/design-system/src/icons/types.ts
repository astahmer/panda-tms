type SVGBase = Omit<React.SVGProps<SVGSVGElement>, 'path' | 'd'>;

export type IconSize = 'md' | 'lg' | 'xl';

/**
 * Base interface for Webb Icon
 */
export interface IconBase extends SVGBase {
  /**
   * The icon size, possible values: `md` (16px), `lg` (24px), `xl` (48px)
   * @default "md"
   */

  size?: IconSize;

  darkMode?: boolean;
}
