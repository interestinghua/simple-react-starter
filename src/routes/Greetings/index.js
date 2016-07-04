export default {
  path: 'greetings',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Greetings').default)
    })
  }
}
