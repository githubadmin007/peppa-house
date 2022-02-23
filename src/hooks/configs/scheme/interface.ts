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

/** 方案接口 */
export interface IScheme {
    schemeName: string;
    fileName: string;
    provider: string;
    remark: string;
}
