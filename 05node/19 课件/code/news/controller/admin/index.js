let adminModel = require("../../service/admin");
module.exports = {
    async index(ctx) {
        // 后端管理的主页
        // ctx.body = "admin的主页";
        await ctx.render("./admin/admin.pug");
    },
    async addNews(ctx) {
        // 后端管理的添加页面
        // ctx.body = "添加";
        await ctx.render("./admin/addNews.pug");
    },
    async newsList(ctx) {
        // 后端管理的新闻页面
        // ctx.body = "新闻列表";
        await ctx.render("./admin/newsList.pug");
    },
    async addData(ctx) {
        // console.log(ctx.query)
        // console.log(ctx.request.body);
        // console.log(ctx.request.files);
        let res = await adminModel.addData(ctx.request);
        let info ;
        if (res.affectedRows > 0) {
             info = {
                info: "操作成功",
                status: 1
            }
        } else {
             info = {
                info: "操作失败",
                status: 0
            }
        }
        ctx.body = info;
    }
}