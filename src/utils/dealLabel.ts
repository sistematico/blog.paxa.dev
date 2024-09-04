import _ from 'lodash'
export const dealLabel = (label) => {
  if (_.isEmpty(label)) {
    return []
  }
  
  if (_.isString(label)) {
    const arr = label.split(',')
    return [...arr]
  }
  
  if (_.isArray(label)) {
    return [...label]
  }
  return []
}
