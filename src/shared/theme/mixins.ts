export declare type ObjectFitTypes = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | undefined;

export const objectFit = (fit?: string, position?: string) => {
  return `
        font-family: 'object-fit: ${fit || 'cover'};';
        object-fit: ${fit || 'cover'};
        ${position ? `object-position: ${position};` : ''}
    `;
};
