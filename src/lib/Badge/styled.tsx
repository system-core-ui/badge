import type { CSSObject } from '@emotion/react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ThemeSchema } from '@thanh-libs/theme';
import type { BadgePlacement, BadgeColor, BadgeShape } from '../models';
import { getColorPalette } from './helpers';

export const BadgeRootStyled = styled.span(
  (): CSSObject => {
    return {
      position: 'relative',
      display: 'inline-flex',
      verticalAlign: 'middle',
      flexShrink: 0,
    };
  }
);

export const VisuallyHiddenStyled = styled.span(
  (): CSSObject => ({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  })
);

export interface BadgeBadgeOwnerState {
  ownerColor?: BadgeColor;
  ownerShape?: BadgeShape;
  ownerDot?: boolean;
  ownerPlacement?: BadgePlacement;
  ownerOffset?: [number, number];
  ownerInvisible?: boolean;
}

export const BadgeBadgeStyled = styled.span<BadgeBadgeOwnerState>(
  ({ ownerColor = 'primary', ownerShape = 'pill', ownerDot, ownerPlacement = 'top-right', ownerOffset, ownerInvisible }): CSSObject => {
    const theme: ThemeSchema = useTheme();
    const { shape, typography } = theme;

    // Use robust color helper from ThemeSchema
    const colorPalette = getColorPalette(theme, ownerColor);
    const baseColor = colorPalette.main;
    const contrastText = colorPalette.contrastText;

    let top = 'auto', bottom = 'auto', left = 'auto', right = 'auto';
    let transform = '';

    const offsetXPx = ownerOffset?.[0] || 0;
    const offsetYPx = ownerOffset?.[1] || 0;

    // Use a slightly softer translation (e.g., 30%) instead of 50% so the badge anchors well to the content
    switch (ownerPlacement) {
      case 'top-left':
        top = `${0 + offsetYPx}px`;
        left = `${0 + offsetXPx}px`;
        transform = ownerInvisible ? 'scale(0) translate(-30%, -30%)' : 'scale(1) translate(-30%, -30%)';
        break;
      case 'bottom-right':
        bottom = `${0 - offsetYPx}px`;
        right = `${0 - offsetXPx}px`;
        transform = ownerInvisible ? 'scale(0) translate(30%, 30%)' : 'scale(1) translate(30%, 30%)';
        break;
      case 'bottom-left':
        bottom = `${0 - offsetYPx}px`;
        left = `${0 + offsetXPx}px`;
        transform = ownerInvisible ? 'scale(0) translate(-30%, 30%)' : 'scale(1) translate(-30%, 30%)';
        break;
      case 'top-right':
      default:
        top = `${0 + offsetYPx}px`;
        right = `${0 - offsetXPx}px`;
        transform = ownerInvisible ? 'scale(0) translate(30%, -30%)' : 'scale(1) translate(30%, -30%)';
        break;
    }

    const dotStyle: CSSObject = {
      height: '8px',
      minWidth: '8px',
      padding: 0,
      borderRadius: '50%',
    };

    let shapeBorderRadius = shape?.borderRadius || '4px';
    if (ownerShape === 'pill') {
      shapeBorderRadius = '9999px';
    } else if (ownerShape === 'circle') {
      shapeBorderRadius = '50%';
    } else if (ownerShape === 'square') {
      shapeBorderRadius = '4px';
    }

    const countStyle: CSSObject = {
      height: '20px',
      minWidth: '20px',
      padding: ownerShape === 'circle' ? '0' : '0 6px',
      borderRadius: shapeBorderRadius,
      fontSize: typography?.body?.fontSize || '0.75rem',
      fontWeight: typography?.fontWeight || 500,
      lineHeight: '20px',
      whiteSpace: 'nowrap',
      textAlign: 'center',
    };

    return {
      position: 'absolute',
      display: 'flex',
      flexFlow: 'row wrap',
      placeContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      zIndex: 1,
      backgroundColor: baseColor,
      color: contrastText,
      transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      transformOrigin: '100% 0%',
      top,
      bottom,
      left,
      right,
      transform,
      ...(ownerDot ? dotStyle : countStyle),
    };
  }
);
