const version = '0.0.29';
const obj = {
    version,
    releaseDate: '2020-01-20',
    downloads: {
        linux: {
            url: `https://bleuzen.de/downloads/springer-verschlag/Springer%20Verschlag%20-%20v${version}%20-%20Linux.zip`,
            md5: '0b01c99ccaa4e0f303b788bfb28530b8'
        },
        windows: {
            url: `https://bleuzen.de/downloads/springer-verschlag/Springer%20Verschlag%20-%20v${version}%20-%20Windows.zip`,
            md5: '1f69f7b7b07468dd11628d405ac05af0'
        }
    }
}

const fs = require('fs');
fs.writeFileSync('data.json', JSON.stringify(obj, null, 4));
