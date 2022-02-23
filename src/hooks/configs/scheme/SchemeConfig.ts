import { reactive, ref } from 'vue';

/** 候选项目接口 */
export interface IPendItem {
    itemName: string;
    region: string;
    count: number;
    unit: string;
}

/** 方案中的项目接口 */
export interface ISchemeItem extends IPendItem {
    laborCost: number;
    materialCost: number;
    isAdopt: boolean;
    remark: string;
}

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

    constructor(schemeItem: ISchemeItem) {
        this.itemName = schemeItem.itemName;
        this.region = schemeItem.region;
        this.count = schemeItem.count;
        this.unit = schemeItem.unit;
        this.laborCost = schemeItem.laborCost;
        this.materialCost = schemeItem.materialCost;
        this.isAdopt = schemeItem.isAdopt;
        this.remark = schemeItem.remark;
    }

    /** 单位费用 */
    get unitCost() {
        return this.laborCost + this.materialCost;
    }

    /** 总费用 */
    get totalCost() {
        return this.unitCost * this.count;
    }
}

/** 方案接口 */
export interface IScheme {
    schemeName: string;
    fileName: string;
    provider: string;
    remark: string;
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

    /** 构造函数 */
    constructor(scheme: IScheme) {
        this.schemeName = scheme.schemeName;
        this.fileName = scheme.fileName;
        this.provider = scheme.provider;
        this.remark = scheme.remark;
    }

    /** 项目文件路径 */
    get filePath() {
        return `/assets/schemeManager/schemes/${this.fileName}.json`;
    }

    /** 总费用 */
    get totalPrice() {
        return this.schemeItems.map(item => item.totalCost).$sum();
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

export const schemeList = reactive<Scheme[]>((window as any).AppConfig.SchemeList.map((scheme: any) => new Scheme(scheme)));

export const pendItems = reactive<IPendItem[]>((window as any).AppConfig.PendItems);

export function getScheme(schemeName: string) {
    return schemeList.find(scheme => scheme.schemeName == schemeName);
}
