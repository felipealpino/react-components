import { ValidationError } from 'yup';

interface IErrors {
    [key: string]: string;
}

export function getValidationErrors(err: ValidationError): IErrors {
    const validationErrors: IErrors = {};

    err.inner.forEach(error => {
        validationErrors[error.path as string] = error.message;
    });

    return validationErrors;
}
