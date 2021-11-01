/* What is this file? 
    This file contains configuration needed to get parameters for the App, from an external source. 
    Said paramters do not change between biulds, so they don't need to be pulled live, at runtime.
    Technically, said parameters could be hardcoded in the app.
    But that's terribly hard to maintain.
    So, the purpose of this strategy is to have those paramters be
    * Editable online, comfortably, with a UI
    * Editable in bulk
    * Editable by more than 1 person, easily and without requiryng access to the code itself
    * Editable by people with NO coding experience

    How does this system work?
    1. Initially values are read from an externa source
    2. They are then stored in JSON files previous to building the app
    3. Finally values are read by the app during build
*/

const {
  writeToFileAsList,
  writeToFileAsObject,
} = require(`./services/data/data`);

const codePassage = "app8ysbg7zcWPQZwh";

writeToFileAsObject({
  baseId: codePassage,
  table: "infoSiteParams",
  view: "grid",
  key: "name",
});
