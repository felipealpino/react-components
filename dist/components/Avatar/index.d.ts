import React from 'react';
export interface IAvatar {
    image?: string;
    width?: string | number;
    height?: string | number;
}
declare const Avatar: React.FC<IAvatar>;
export { Avatar };
