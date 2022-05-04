import { IPagination } from '.';
declare type IPaginationProps = IPagination & {
    isFirstPage: boolean;
    isLastPage: boolean;
};
export declare const PaginationContainer: import("styled-components").StyledComponent<"div", any, IPaginationProps, never>;
export {};
