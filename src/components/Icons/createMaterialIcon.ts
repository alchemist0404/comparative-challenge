import { createSvgIcon, SvgIcon } from '@mui/material';
import { ComponentType, createElement } from 'react';

export function createMaterialIcon(Icon: ComponentType): typeof SvgIcon {
    return createSvgIcon(
        createElement(Icon),
        Icon.displayName || 'OPTControlIcon',
    );
}
