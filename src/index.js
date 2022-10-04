import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import * as blocks from './blocks'
import * as documents from './documents'
import * as objects from './objects'

export default createSchema({
  name: 'create-ignite-cms',
  types: schemaTypes.concat([
    ...Object.values(blocks),
    ...Object.values(documents),
    ...Object.values(objects),
  ]),
})
