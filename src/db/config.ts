// import { defineDb } from 'astro:db';

// // https://astro.build/db/config
// export default defineDb({
//   tables: {}
// });

import { defineDb, defineTable, column } from 'astro:db'

const views = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    count: column.number({
      default: 1
    })
  }
})

export default defineDb({
  tables: { views }
})
