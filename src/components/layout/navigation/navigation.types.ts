import { ReactNode } from "react";

export type Items = {
  name: string;
  to: string;
  last?: boolean;
};

export interface INavigationItem extends Items {
  children: ReactNode;
  isHome: boolean;
};