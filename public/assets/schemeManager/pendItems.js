window.AppConfig.PendItems = (function () {
    const units = {
        地板面积: '㎡',
        墙壁面积: '㎡',
        地脚线长度: 'm',
        橱柜: 'm',
        柜子: '㎡',
        排污处理: '项',
        安装地漏: '个',
        卫浴拆除: '套',
        拆除门: '个',
        门洞修复: '个',
        强电安装: '个',
        开关面板: '个',
        全局: '个',
    };

    const regions = [
        { name: '客餐厅', 地板面积: 40, 墙壁面积: 26 * 2.7, 地脚线长度: 26, 强电安装: 0, 开关面板: 0 },
        { name: '主卧', 地板面积: 16.8, 墙壁面积: 19 * 2.7, 地脚线长度: 19, 拆除门: 1, 门洞修复: 1, 强电安装: 0, 开关面板: 0 },
        { name: '次卧', 地板面积: 9.9, 墙壁面积: 13 * 2.7, 地脚线长度: 13, 拆除门: 1, 门洞修复: 1, 强电安装: 0, 开关面板: 0 },
        { name: '书房', 地板面积: 7.9, 墙壁面积: 11 * 2.7, 地脚线长度: 11, 拆除门: 1, 门洞修复: 1, 强电安装: 0, 开关面板: 0 },
        { name: '厨房', 地板面积: 6.3, 墙壁面积: 21, 橱柜: 3, 排污处理: 1, 拆除门: 1, 门洞修复: 1, 强电安装: 0, 开关面板: 0 },
        { name: '主卫', 地板面积: 3.8, 墙壁面积: 20, 排污处理: 1, 安装地漏: 2, 卫浴拆除: 1, 拆除门: 1, 门洞修复: 1, 强电安装: 0, 开关面板: 0 },
        { name: '次卫', 地板面积: 3.1, 墙壁面积: 14, 排污处理: 1, 安装地漏: 2, 卫浴拆除: 1, 拆除门: 1, 门洞修复: 1, 强电安装: 0, 开关面板: 0 },
        { name: '观景阳台', 地板面积: 4.9, 墙壁面积: 2.5 * 2.7, 安装地漏: 1, 拆除门: 1, 门洞修复: 1, 强电安装: 0, 开关面板: 0 },
        { name: '生活阳台', 地板面积: 2.2, 墙壁面积: 2.4 * 2.7, 安装地漏: 1, 拆除门: 1, 门洞修复: 1, 强电安装: 0, 开关面板: 0 },
        { name: '全局', 地板面积: 100, 墙壁面积: 100 },
    ];

    const items = [
        // 拆除类
        { name: '地砖拆除', countType: '地板面积', regions: ['客餐厅', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '墙砖拆除', countType: '墙壁面积', regions: ['观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '木地板拆除', countType: '地板面积', regions: ['主卧', '次卧', '书房'] },
        { name: '水泥沙找平层拆除', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '地脚线拆除', countType: '地脚线长度', regions: ['客餐厅', '主卧', '次卧', '书房'] },
        { name: '橱柜拆除', countType: '橱柜', regions: ['厨房'] },
        { name: '卫浴拆除', countType: '卫浴拆除', regions: ['主卫', '次卫'] },
        { name: '卫生间挖沉池', countType: '地板面积', regions: ['主卫', '次卫'] },
        { name: '柜子拆除', countType: '柜子', regions: ['客餐厅', '主卧', '次卧', '书房'] },
        { name: '拆除门', countType: '拆除门', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '天花拆除', countType: '地板面积', regions: ['客餐厅', '厨房', '主卫', '次卫'] },
        { name: '墙面铲灰', countType: '墙壁面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '天花铲灰', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        // 墙面类
        { name: '墙面基膜处理', countType: '墙壁面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '墙面扇灰', countType: '墙壁面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '墙面油漆', countType: '墙壁面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '墙面批荡处理', countType: '墙壁面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '墙面铺600X300砖', countType: '墙壁面积', regions: ['观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '墙面防水处理', countType: '墙壁面积', regions: ['观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '墙面填缝处理', countType: '墙壁面积', regions: ['观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        // 天花类
        { name: '天花基膜处理', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '天花扇灰', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '天花油漆', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '铝扣板天花', countType: '地板面积', regions: ['厨房', '主卫', '次卫'] },
        // 地面类
        { name: '地面铺800X800砖', countType: '地板面积', regions: ['客餐厅'] },
        { name: '地面铺300X300砖', countType: '地板面积', regions: ['观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '地面铺木纹砖', countType: '地板面积', regions: ['主卧', '次卧', '书房'] },
        { name: '地面找平', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '地面防水处理', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '暗装地脚线', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房'] },
        { name: '地面填缝处理', countType: '地板面积', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        // 厨卫类
        { name: '厨房排污处理', countType: '排污处理', regions: ['厨房'] },
        { name: '卫生间排污处理', countType: '排污处理', regions: ['主卫', '次卫'] },
        { name: '沉池架空处理', countType: '地板面积', regions: ['主卫', '次卫'] },
        { name: '沉池内二次找平', countType: '地板面积', regions: ['主卫', '次卫'] },
        { name: '安装地漏', countType: '安装地漏', regions: ['观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        // 水电类
        { name: '强电安装', countType: '强电安装', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '开关面板', countType: '开关面板', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '线路检测费用', countType: '全局', regions: ['全局'] },
        // 综合类
        { name: '墙面补线槽', countType: '全局', regions: ['全局'] },
        { name: '全屋扇灰阴阳角处理', countType: '全局', regions: ['全局'] },
        { name: '门洞修复', countType: '门洞修复', regions: ['客餐厅', '主卧', '次卧', '书房', '观景阳台', '厨房', '生活阳台', '主卫', '次卫'] },
        { name: '地面保护', countType: '地板面积', regions: ['全局'] },
        { name: '卫生清洁', countType: '地板面积', regions: ['全局'] },
        { name: '废料外运', countType: '全局', regions: ['全局'] },
        // 管理类
        { name: '设计费', countType: '全局', regions: ['全局'] },
        { name: '材料搬运费', countType: '全局', regions: ['全局'] },
        { name: '综合管理费', countType: '全局', regions: ['全局'] },
        { name: '工程废料清运', countType: '全局', regions: ['全局'] },

        { name: '其他', countType: '全局', regions: ['全局'] },
    ];

    const PendItems = [];

    function getCount(item, regionName) {
        if (regionName === '全局') {
            return 1;
        }
        const countType = item.countType;
        const region = regions.find(region => region.name === regionName);
        return region[countType] ?? 0;
    }

    function getUnit(item) {
        const countType = item.countType;
        return units[countType] ?? '';
    }

    for (let item of items) {
        for (let region of item.regions) {
            PendItems.push({
                itemName: item.name,
                region: region,
                count: getCount(item, region),
                unit: getUnit(item),
            });
        }
    }

    return PendItems;
})();