import React from 'react';
import { ElementStatus } from '@shared/theme/colors';
export interface IPagination {
    totalOfPages: number | string;
    currentPage: number | string;
    option?: any;
    status?: ElementStatus;
    rounded?: boolean;
    className?: string;
    callbackGetListData: (search: string, page: number, option?: any) => Promise<void>;
}
declare const Pagination: React.FC<IPagination>;
export { Pagination };
