import type {Config} from 'jest';

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  // coveragePathIgnorePatterns:[
  //   "/node_modules/",
  //   "src/__tests__/",
  //   "src/index.ts",
  //   "src/server.ts",
  //   "src/config.ts",
  //   "src/middlewares/",
  //   "src/utils/",
  //   "src/types/",
  //   "src/constants/",
  //   "src/database/",

  //   "src/services/",
  //   "src/controllers/",
  //   "src/routes/",
  //   "src/helpers/",
  //   "src/lib/",
  //   "src/__mocks__/",
  //   "src/__tests__/utils/",
  //   "src/__tests__/helpers/",
    
    
    
  //   "src/__tests__/middlewares/",
  //   "src/__tests__/lib/",
  //   "src/__tests__/config/",
  //   "src/__tests__/database/",

  //   "src/__tests__/constants/",
  //   "src/__tests__/types/",
   
  //   "src/__tests__/e2e/",
  //   "src/__tests__/fixtures/",
  //   "src/__tests__/setup/",
  //   "src/__tests__/teardown/",
  //   "src/__tests__/mocks/",
  //   "src/__tests__/helpers/fixtures/",
  //   "src/__tests__/helpers/mocks/",
  //   "src/__tests__/helpers/setup/",
  //   "src/__tests__/helpers/teardown/",
  //   "src/__tests__/helpers/constants/",
  //   "src/__tests__/helpers/types/",
  //   "src/__tests__/helpers/lib/",
  //   "src/__tests__/helpers/services/",
  //   "src/__tests__/helpers/controllers/",
  //   "src/__tests__/helpers/routes/",
  //   "src/__tests__/helpers/middlewares/",
  //   "src/__tests__/helpers/database/",
  //   "src/__tests__/helpers/config/",
  //   "src/__tests__/helpers/utils/",
  //   "src/__tests__/helpers/__mocks__/",
  //   "src/__tests__/helpers/__tests__/",
  //   "src/__tests__/helpers/__fixtures__/",
  //   "src/__tests__/helpers/__setup__/",
  //   "src/__tests__/helpers/__teardown__/",
  //   "src/__tests__/helpers/__mocks__/",
  //   "src/__tests__/helpers/__integration__/",
  //   "src/__tests__/helpers/__e2e__/",
  //   "src/__tests__/helpers/__fixtures__/",
  //   "src/__tests__/helpers/__setup__/", 
  

  // ],
  
};

export default config;