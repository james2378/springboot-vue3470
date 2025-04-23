const base = {
    get() {
        return {
            url : "http://localhost:8080/wangshangxitongdiaocha/",
            name: "wangshangxitongdiaocha",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangshangxitongdiaocha/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上系统调查"
        } 
    }
}
export default base
