const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

/**
 * This class is used to configure the environment
 * based on the values stored in config/endpoints.yml and
 * config/env/*.yml
 */

class ConfigHelper {
    getProjectRoot(){
        return path.resolve("./");
    }
    
    getConfigPath(){
        return this.getProjectRoot() + "/common/config/";
    }
    
    loadCommonConfigurations(){
        const coreConfig = yaml.load(fs.readFileSync(this.getConfigPath() + "endpoints.yml"));
        return coreConfig;
    }
    
    loadEnvConfigurations(env){
        /**
        * Hardcoding this to local for now, could generate a separate file on
        * the fly during runtime that contains vars passed into run command
        */
       let config;
        if (env){
            config = yaml.load(fs.readFileSync(this.getConfigPath() + "env/" + env.toLowerCase() + ".yml"));
        } else {
            config = {};
        }
        return config;
    }
    
    accessConfig(){
        /**
        * Access the configuration dictionary
        * :return: Dictionary of configuration options
        */
        const envConnfig = this.loadEnvConfigurations('local');
        const coreConfig = this.loadCommonConfigurations();
        const config = { ...envConnfig, ...coreConfig};
        return config;
    }
}
module.exports = ConfigHelper;