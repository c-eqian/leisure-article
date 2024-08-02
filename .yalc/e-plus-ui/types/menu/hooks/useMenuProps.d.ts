import { IMenuProps, MenuItemProps } from '../type';
export declare const useFilterMenuProps: (props: IMenuProps) => import("vue").ComputedRef<Omit<IMenuProps, "items" | "level" | "defaultActive">>;
export declare const useFilterMenuItemProps: (props: MenuItemProps) => import("vue").ComputedRef<Omit<MenuItemProps, "children" | "title" | "visible" | "index" | "icon" | "group" | "subMenu">>;
export declare const useFilterSubMenuProps: (props: MenuItemProps) => import("vue").ComputedRef<Omit<MenuItemProps, "children" | "title" | "visible" | "index" | "icon" | "group">>;
