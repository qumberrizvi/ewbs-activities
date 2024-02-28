
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // schema: "https://crm-api.ewbsbusiness.ae/graphql",
  schema: "http://localhost:3000/graphql",
  documents: "src/**/*.ts",
  generates: {
    "src/app/core/graphql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "fragment-matcher", "typescript-apollo-angular"]
    },
  }
};

export default config;
