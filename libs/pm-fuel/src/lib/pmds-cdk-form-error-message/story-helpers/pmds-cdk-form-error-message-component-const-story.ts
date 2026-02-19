////////Component imports
import { IPmdsCdkFormErrorMessage } from "../models/pmds-cdk-form-error-message.model";

export const literalsErrorFn: IPmdsCdkFormErrorMessage<unknown> = (name: string, error: string, value?: any, label?: string) => {
    return {
      'required': `${name} is required`,
      'min': `${name} must be greater than or equal to ${value?.min}`,
      'max': `${name} must be less than or equal to ${value?.max}`,
      'minlength': `${name} must be at least ${value?.requiredLength} characters`,
      'maxlength': `${name} must be less than ${value?.requiredLength} characters`,
      'pattern': `${name} invalid format`,
    }[error] || 'wrong value';
  }