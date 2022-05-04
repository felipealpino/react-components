import { ValidationError } from 'yup';
interface IErrors {
    [key: string]: string;
}
export declare function getValidationErrors(err: ValidationError): IErrors;
export {};
