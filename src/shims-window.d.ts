import { IPendItem, IScheme } from '@/hooks/configs/scheme';

declare global {
    interface Window {
        AppConfig: {
            PendItems: IPendItem[];
            SchemeList: IScheme[];
        },
    }
}
