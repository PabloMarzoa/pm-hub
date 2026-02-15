export interface IPmdsCdkFileDownloaderInfoFile {
    createdAt: string;
    fileName: string;
    id: string;
    status: TPmdsCdkFileDownloaderInfoStatus;
    url?: string;
}

export interface IPmdsCdkFileDownloaderInfoButtons {
    label: string;
    icon: string;
    actionFn: (file? : any) => void;
}

export type TPmdsCdkFileDownloaderInfoStatus = 
    | 'COMPLETED'
    | 'FAILURE'
    | 'PROCESSING'
    | 'PENDING'
    | 'WAITING_VIRTUAL_ACCOUNTS'
    | ''
    ;