import { argv } from 'yargs';
import _ from 'lodash';
import { stat, mkdir, writeFile, readFile, readdir, rm } from 'fs';
import path from 'path';

import { capitalizeFirstLetter } from './utils';

type TArgv = Record<'_', string[]> & Partial<Record<'cleanup', boolean>>;

const args = argv as TArgv;
const packageJsonPath = './../../storybook/package.json';
const prefix = 'mdfin';

function makeComponent() {
  const tplPath = './tpl';
  // const order = [
  //   '-utils' /* Utils */,
  //   '-theme' /* Themes */,
  //   '-with-' /* HOCS*/,
  //   '-simple-' /* Simple atom*/,
  //   '-widget' /* Widget */,
  // ];

  let [packageName, componentName] = args._;

  if (!componentName) {
    componentName = packageName.toLowerCase();
    packageName = prefix;
  }

  const registrationName = `${packageName}-${componentName}`;
  const nameParts = String(componentName).split('-');
  const component = _.reduce(
    nameParts,
    (accum, item) => accum + capitalizeFirstLetter(item),
    ''
  );
  const componentPath = `./../${component}`;

  function modifyPath(originPath: string) {
    return path.normalize(originPath.replace('.tpl', ''));
  }

  function postProcessing(data: string) {
    return data
      .replace(/\$\[package\]/g, String(packageName))
      .replace(/\$\[registration-name\]/g, String(registrationName))
      .replace(/\$\[component\]/g, String(component))
      .replace(
        /\$\[component-style-name\]/g,
        String(component.charAt(0).toLowerCase() + component.slice(1))
      );
  }

  function createFiles() {
    const modifyAll = () =>
      new Promise((resolve) =>
        _.each(
          [
            'src/@types/index.d.ts.tpl',
            'src/@types/style.d.ts.tpl',
            'src/scripts/index.tsx.tpl',
            'src/index.ts.tpl',
            '.gitignore.tpl',
            'jestconfig.json.tpl',
            'package.json.tpl',
            'postcss.config.js.tpl',
            'README.md.tpl',
            'rollup.config.mjs.tpl',
            'tsconfig.json.tpl',
          ],
          (item) =>
            readFile(path.normalize(`${tplPath}/${item}`), (_err, data) =>
              writeFile(
                modifyPath(`${componentPath}/${item}`),
                postProcessing(data.toString()),
                () => resolve(void 0)
              )
            )
        )
      );

    const modifySCSS = () =>
      new Promise((resolve) =>
        readFile(
          path.normalize(`${tplPath}/src/scss/index.scss.tpl`),
          (_err, data) =>
            writeFile(
              modifyPath(`${componentPath}/src/scss/${component}.scss.tpl`),
              postProcessing(data.toString()),
              () => resolve(void 0)
            )
        )
      );

    const modifyReadme = () =>
      new Promise((resolve) =>
        readFile(
          path.normalize(`${componentPath}/README.md`),
          (_err, readmeData) =>
            readFile(
              path.normalize(`${componentPath}/package.json`),
              (_err, packageJsonData) => {
                const { name, version, description, publishConfig } =
                  JSON.parse(packageJsonData.toString());

                writeFile(
                  modifyPath(`${componentPath}/README.md.tpl`),
                  readmeData
                    .toString()
                    .replace(/\$\[name\]/g, String(name))
                    .replace(/\$\[version\]/g, String(version))
                    .replace(/\$\[description\]/g, String(description))
                    .replace(/\$\[registry\]/g, String(publishConfig.registry)),
                  () => resolve(void 0)
                );
              }
            )
        )
      );

    const updatePackageJson = () =>
      new Promise((resolve) =>
        readFile(path.normalize(packageJsonPath), (_err, data) => {
          const jsonData = JSON.parse(data.toString());
          let allDependencies = _.map(
            {
              ...jsonData.dependencies,
              [registrationName]: `link:../components/${component}`,
            },
            (item, index) => [index, item]
          );

          /* const importantComponents = _.reduce(
            order,
            (accum, order) => {
              const filteredComponents = _.filter(allDependencies, (item) =>
                new RegExp(`${packageName}.*${order}`).test(_.first(item))
              );

              accum.push(...filteredComponents);

              return accum;
            },
            [] as string[][]
          ); */

          /* const dependencies = _.filter(
            allDependencies,
            (item) =>
              !new RegExp(`${packageName}.*(${_.join(order, '|')})`).test(
                _.first(item)
              )
          ); */

          /* allDependencies = _.concat(
            importantComponents,
            _.sortBy(dependencies, (item) => _.first(item))
          ); */

          jsonData.dependencies = _.fromPairs(
            _.sortBy(allDependencies, (item) => _.first(item))
          );

          writeFile(
            path.normalize(packageJsonPath),
            `${JSON.stringify(jsonData, null, 2)}\n`,
            () => resolve(void 0)
          );
        })
      );

    modifyAll()
      .then(modifySCSS)
      .then(modifyReadme)
      .then(updatePackageJson)
      .then(() =>
        console.log(
          `\x1b[92mComponent \x1b[93m"${registrationName}"\x1b[92m has been created in the path "${componentPath}"\x1b[0m`
        )
      );
  }

  function createComponent() {
    stat(path.normalize(componentPath), (_err, stat) => {
      if (stat) {
        throw new Error(
          `\x1b[32m***\x1b[0m\x1b[91m \x1b[37mComponent\x1b[0m \x1b[91m[ ${component} ]\x1b[0m \x1b[37malready exists\x1b[0m \x1b[32m***\x1b[0m`
        );
      }

      mkdir(path.normalize(componentPath), () => {
        _.each(['/src', '/assets'], (item, index, dirs) => {
          mkdir(path.normalize(componentPath + item), () => {
            if (index == dirs.length - 1) {
              const srcDirPath = `${componentPath}/src`;

              _.each(
                ['/@types', '/scripts', '/scss'],
                (item, index, subDirs) => {
                  mkdir(path.normalize(srcDirPath + item), () => {
                    if (index == subDirs.length - 1) {
                      createFiles();
                    }
                  });
                }
              );
            }
          });
        });
      });
    });
  }

  createComponent();
}

function cleanup() {
  const deletePaths = ['cache', 'node_modules'];

  console.log(
    `\x1b[92mCleaning up resources\n\x1b[93m${deletePaths.join('\n')}\x1b[0m`
  );

  readdir('./../', (_err, data) => {
    const folders = _.filter(data, (item) => item != '_autoCreator');

    _.each(folders, (folder) =>
      _.each(deletePaths, (item) => {
        const component = path.join(`./../`, folder, item);

        rm(component, { recursive: true, force: true }, (err) => {
          if (err) {
            console.log(err);
          }
        });
      })
    );
  });
}

if (args.cleanup) {
  cleanup();
} else {
  makeComponent();
}
