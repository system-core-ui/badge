import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type BadgePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type BadgeShape = 'pill' | 'circle' | 'square';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** The content to be wrapped by the badge */
  children?: ReactNode;
  /** Number or text to show in badge */
  count?: number | ReactNode;
  /** Whether to display a dot instead of count */
  dot?: boolean;
  /** Main color of the badge */
  color?: BadgeColor;
  /** Shape of the badge */
  shape?: BadgeShape;
  /** Max count to show, if count is number */
  max?: number;
  /** Whether to show badge when count is zero */
  showZero?: boolean;
  /** Positioning of the badge relative to children */
  placement?: BadgePlacement;
  /** Offset array [x, y] */
  offset?: [number, number];
}
