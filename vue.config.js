const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        // tutaj w razie potrzeby dodamy konfigurację, jeśli pojawią się błędy z bibliotekami Node'a
    }
})