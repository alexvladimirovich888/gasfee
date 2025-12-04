import React from 'react';

export interface NavIcon {
  name: string;
  icon?: React.ReactNode;
  imgSrc?: string;
  href: string;
}

export interface GasPrice {
  value: number;
  formatted: string;
}