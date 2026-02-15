////////Component imports
import { IData } from "./pmds-cdk-autocomplete-component-models-story";

export const data: IData[] = [
    {
      id: 'A123456789',
      firstName: 'John',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'johndoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    },
    {
      id: 'B123456789',
      firstName: 'Jane',
      lastName: 'Doe',
      amount: '1.234,56 EUR',
      email: 'janedoe@email.com'
    }
  ];


export const literalsErrorFn = (name: string, error: string, value?: any) => {
    return {
      'required': `${name} is required`,
      'min': `${name} must be greater than or equal to ${value?.min}`,
      'max': `${name} must be less than or equal to ${value?.max}`,
      'minlength': `${name} must be at least ${value?.requiredLength} characters`,
      'maxlength': `${name} must be less than ${value?.requiredLength} characters`,
      'pattern': `${name} invalid format`,
    }[error] || 'wrong value';
  }
