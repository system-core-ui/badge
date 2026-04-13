import React, { forwardRef } from 'react';
import type { BadgeProps } from '../models';
import { BadgeRootStyled, BadgeBadgeStyled, VisuallyHiddenStyled } from './styled';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      count,
      dot = false,
      color = 'primary',
      max = 99,
      showZero = false,
      shape = 'pill',
      placement = 'top-right',
      offset,
      ...rest
    },
    ref
  ) => {
    const isZero = count === 0 || count === '0';
    let invisible = false;
    
    if (!showZero && isZero && !dot) {
      invisible = true;
    }

    let displayCount: React.ReactNode = count;
    if (!dot && typeof count === 'number' && max > 0 && count > max) {
      displayCount = `${max}+`;
    }

    return (
      <BadgeRootStyled ref={ref} {...rest}>
        {children}
        <BadgeBadgeStyled
          ownerColor={color}
          ownerShape={shape}
          ownerDot={dot}
          ownerPlacement={placement}
          ownerOffset={offset}
          ownerInvisible={invisible}
          aria-hidden={dot ? "true" : undefined}
        >
          {!dot && displayCount}
        </BadgeBadgeStyled>
        {!dot && typeof count === 'number' && (
          <VisuallyHiddenStyled aria-label={`hiển thị ${displayCount}`}>
             {displayCount}
          </VisuallyHiddenStyled>
        )}
      </BadgeRootStyled>
    );
  }
);

Badge.displayName = 'Badge';
