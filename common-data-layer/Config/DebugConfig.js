const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export default {
  useFixtures: false,
  ezLogin: false,
  yellowBox: dev,
  reduxLogging: dev,
  includeExamples: dev,
  useReactotron: dev
}
