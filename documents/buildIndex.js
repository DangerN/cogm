const fs = require('fs')

const index = []

const upCase = c => c.toUpperCase()

const dir = fs.readdirSync(__dirname)
dir.forEach(file => {
    if (file === 'buildIndex.js') {
        return
    }
    const files = fs.readdirSync(__dirname + '/' + file)

    files.forEach(f => {
        index.push({
            'category': file,
            'title': f
                .replace(/_/g, ' ')
                .replace(/\.md$/, '')
                .replace(/ (\S)/g, upCase)
                .replace(/^\S/g, upCase),
            'path': `${file}/${f}`
        })
    })
})

fs.writeFileSync(`${__dirname}/index.json`, JSON.stringify(index))
