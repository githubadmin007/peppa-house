import { IPendItem, IScheme } from '@/hooks/configs/scheme';

interface Window {
    AppConfig: {
        PendItems: IPendItem[];
        SchemeList: IScheme[];
    },
}