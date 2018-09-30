// {
//     appDir: "../",
//     baseUrl: "scripts/",
//     dir: "../../webapp-build",
//     //如果你想通过闭包编译器用"simple"优化模式压缩代码，
//     //可以注释掉optimize这一行
//     optimize: "none",
//
//     modules: [
//     {
//         name: "main"
//     }
// ]
// }
({
    baseUrl: ".",
    paths: {
        // jquery: "some/other/jquery"
    },
    name: "main",
    out: "main-built.js"
})