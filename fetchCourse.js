import fetch from 'node-fetch';
import fs from 'node:fs';

let url = 'https://claseflix-api.herokuapp.com/api/courses?excludeNonPublic=true&fullCourse=false';

let options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.5.1'}};

fetch(url, options)
  .then(res => res.json())
  .then(json =>{ const arrayCourses = json.map(course => { return {
          id: course.id,
          name: course.name,
          description: course.description,
          isExternal: course.isExternal,
          featuredImage:course.featuredImage,
          slug:course.slug,
          url:course.url
      }}
    )
    fs.writeFileSync('courses.json', JSON.stringify(arrayCourses, null, 2))
  }
)
  .catch(err => console.error('error:' + err));