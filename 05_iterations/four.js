const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift'
}

for (const key in myObject) {
    console.log(`${key} shortcut is fpr ${myObject[key]}`)
}