module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets' : "@/assets",
                'common' : "@/common",
                'componnents': "@/componnents",
                'network' : "@/network",
                'views' : "@/views"
            }
        }
    }
}