////////PNXT libraries
import { IPmdsCdkOptionDropdown } from '../../pmds-cdk-dropdown/models/pmds-cdk-option-dropdown.model';

export interface IPmdsCdkHeaderCompanyModalData {
    dataQA: string,
    companies: IPmdsCdkOptionDropdown[],
    selectedCompany: string
	close: (company: IPmdsCdkOptionDropdown) => void;
}
