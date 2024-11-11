import fs from 'node:fs'


// const content = fs.readFileSync('courses.json', 'utf8')

// const contentToJson = JSON.parse(content)
// console.log(contentToJson.length)
const arrayCoruses = contentToJson.map(course =>
    { return {
        name: course.name,
        description: course.description,
        isExternal: course.isExternal,
        featuredImage:course.featuredImage
    }
})
// console.log(arrayCoruses)
fs.writeFileSync('courses.json', JSON.stringify(arrayCoruses, null, 2))
