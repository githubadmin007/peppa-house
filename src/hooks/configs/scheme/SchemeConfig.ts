import { reactive } from 'vue';
import { IPendItem, IScheme, ISchemeItem } from './';

const pendItems = window.AppConfig.PendItems;

/** 方案中的项目 */
export class SchemeItem implements ISchemeItem {
    itemName: string;
    region: string;
    count: number;
    unit: string;
    laborCost: number;
    materialCost: number;
    isAdopt: boolean;
    remark: string;

    /** 单位费用 */
    get unitCost() {
        return this.laborCost + this.materialCost;
    }

    /** 项目总费用 */
    get totalCost() {
        return this.unitCost * this.count;
    }

    constructor(schemeItem: IPendItem | ISchemeItem) {
        const _schemeItem = schemeItem as ISchemeItem;
        this.itemName = schemeItem.itemName;
        this.region = schemeItem.region;
        this.count = schemeItem.count;
        this.unit = schemeItem.unit;
        this.laborCost = _schemeItem.laborCost ?? 0;
        this.materialCost = _schemeItem.materialCost ?? 0;
        this.isAdopt = _schemeItem.isAdopt ?? false;
        this.remark = _schemeItem.remark ?? '';
    }
}

/** 方案 */
export class Scheme implements IScheme {
    /** 方案名 */
    schemeName = '';

    /** 文件名 */
    fileName = '';

    /** 提供者 */
    provider = '';

    /** 备注 */
    remark = '';

    /** 方案中的项目 */
    schemeItems: SchemeItem[] = [];

    /** 方案总费用 */
    get totalPrice() {
        return this.schemeItems.map(item => item.totalCost).$sum();
    }

    /** 项目文件路径 */
    get filePath() {
        return `/assets/schemeManager/schemes/${this.fileName}.json`;
    }

    /** 构造函数 */
    constructor(scheme: IScheme) {
        this.schemeName = scheme.schemeName;
        this.fileName = scheme.fileName;
        this.provider = scheme.provider;
        this.remark = scheme.remark;
        this.initPendItems();
    }

    initPendItems() {
        this.schemeItems = pendItems.map(item => new SchemeItem(item));
    }

    /** 获取方案中的项目 */
    async refreshSchemeItems() {
        if (this.schemeItems.length == 0) {
            const response = await fetch(this.filePath);
            if (response.status == 200) {
                try {
                    const arr = await response.json() as ISchemeItem[];
                    this.schemeItems = arr.map(item => new SchemeItem(item));
                } catch {
                    alert(`找不到文件: ${this.filePath}`);
                }
            }
        }
    }
}

const schemeList = reactive<Scheme[]>(window.AppConfig.SchemeList.map(scheme => new Scheme(scheme)));

export function getSchemeList() {
    return schemeList;
}

export function getScheme(schemeName: string) {
    return schemeList.find(scheme => scheme.schemeName == schemeName);
}
