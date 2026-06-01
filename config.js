// ===== BIRTHDAY WEBSITE CONFIGURATION =====
// Edit this file to customize your birthday website

const CONFIG = {
    // The date you met your friend (format: YYYY-MM-DD)
    // This will be used to calculate the days counter
    meetingDate: '2025-03-21', // Change this to your meeting date!

    // Gallery items: Add your memories here
    // Each item should have: image (emoji or URL), title, and date (format: YYYY-MM-DD)
    memories: [
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/73d8222d13364dc5/65458246af4268fca213ef90c06d5c59.jpg',
            title: '第一次去公共地图一起玩',
            date: '2025-04-03'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/0e0a7308374d452f/5a621886cb91a68794dd6ffeabd11462.jpg',
            title: '第一次送我礼物',
            date: '2025-07-01'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/273b8ff20d8e49fa/4bcf7436ca055d89e2a4cb4949ce14d6.jpg',
            title: '一起玩星露谷嘿嘿',
            date: '2025-08-15'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/760895119a0448fe/4349e54c5f37e6e45ffa3a48380bd744.jpg',
            title: '锅铲游泳',
            date: '2025-08-20'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/28be87e6fda64af8/07f4c386a65adbf392a12ccdd1b8b5f9.jpg',
            title: '武汉见面！',
            date: '2025-12-24'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/d08b123375ad4c87/d0737b69178c8b0040e5b4064bc1480d.jpg',
            title: '第一次一起吃饭',
            date: '2025-12-24'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/08311760cd7341bf/933ecf1d03569601cb646b2855564a58.jpg',
            title: '第一次一次看电影',
            date: '2025-12-24'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/1cb07ef5866a4fef/3d903129c81f81325175c959ee3eb3a5.jpg',
            title: '历史性地一刻',
            date: '2025-12-25'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/3143e205842c4c53/06d44f5df465b1129d042cae3003ca62.jpg',
            title: '更多星露谷',
            date: '2025 & 2026'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/5a460149d03b4d90/11ddf55d4a49480cb70904f61d972046.jpg',
            title: '第一次一起旅游',
            date: '2026-05-06'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/8f5b3ef804c14138/1fcc1bba89096bd2a685901e16634518.jpg',
            title: '很喜欢的影子照',
            date: '2026-05-07'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/94d0a2fa6f794e4c/4d26c899fa01d5f1687d183b60a11b6c.jpg',
            title: '更多大连',
            date: '2026-05-08'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/a4c7f6998e284090/517549aeb0435b2c47e9fb1a9f00386a.jpg',
            title: '也是吹上定情曲了',
            date: '2026-05-08'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/3ef9d9fc44254efe/d087ea86846ff3d702b903af979d2bfd.jpg',
            title: '第一次去到你家！',
            date: '2026-05-30'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/f8603cc3d7a54cda/b001e442756c175ff6df76e1a540ab7a.jpg',
            title: '萌',
            date: '2026-05-30'
        },
        {
            image: 'https://www.imgfox.cn/apis/uploads/20260601/103cfa6197b8499f/b33cefdbff0da6ab121767a769a94ffe.jpg',
            title: '嘿嘿陈奕童24岁生日快乐呀',
            date: '2026-06-02'
        }
    ],

    // Birthday date (format: YYYY-MM-DD)
    birthdayDate: '2026-06-02' // Change this to your friend's birthday!
};

// Function to calculate days between two dates
function calculateDaysBetween(startDate, endDate) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
