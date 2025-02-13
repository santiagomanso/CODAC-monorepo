import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { ReactElement, ReactNode } from 'react';

import { Settings } from '../contexts/settingsContext';

export type ContentWidth = 'full' | 'boxed';

export type ThemeName = 'light' | 'dark' | 'gag' | string;

export type NavLink = {
  path: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?:
    | string
    | string[]
    | ReactNode
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string });
  badgeColor?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
};

export type NavSectionTitle = {
  sectionTitle: string;
  action?: string;
  subject?: string;
};

export type VerticalNavItemsType = (NavLink | NavSectionTitle)[];

export type LayoutProps = {
  hidden: boolean;
  settings: Settings;
  children: ReactNode;
  verticalNavItems?: VerticalNavItemsType;
  scrollToTop?: (props?: any) => ReactNode;
  saveSettings: (values: Settings) => void;
  footerContent?: (props?: any) => ReactNode;
  verticalAppBarContent?: (props?: any) => ReactNode;
  verticalNavMenuContent?: (props?: any) => ReactNode;
  verticalNavMenuBranding?: (props?: any) => ReactNode;
  afterVerticalNavMenuContent?: (props?: any) => ReactNode;
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode;
};

export type BlankLayoutProps = {
  children: ReactNode;
};
