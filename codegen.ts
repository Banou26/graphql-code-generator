import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: ['./src/schema.graphql'],
  documents: ['src/**/*.ts'],
  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
