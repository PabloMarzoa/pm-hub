export interface IPmdsCdkFormErrorMessage<T> {
    (name: string, error: string, value?: T, label?: string): string;
}