const fs = require('node-filesystem')

const app = (config) => {
    print(config.filesystem)
}

app({
    filesystem: fs
})