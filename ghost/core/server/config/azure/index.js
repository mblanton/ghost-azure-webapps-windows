// Module to add Azure environment settings to configuration

function makeAzureConfig(nconf) {

    // Azure - Set configuration for Azure Web Apps
    if(process.env.WEBSITE_HOSTNAME) {
        var azureUrl;
        if (process.env.websiteUrl) {
            azureUrl = ('http://' + process.env.websiteUrl);
        } else {
            azureUrl = ('http://' + process.env.WEBSITE_HOSTNAME);
        }
        var azurePort = process.env.PORT;
        nconf.set('url', azureUrl);
        nconf.set('server:port', azurePort);
    }

    if(process.env.emailService) {
        // For more information:
        // https://docs.ghost.org/v1/docs/mail-config
        var emailService = process.env.emailService;
        var emailUsername = process.env.emailUsername;
        var emailPassword = process.env.emailPassword;
        var emailFromAddress = process.env.emailFromAddress;

        nconf.set('mail:transport', 'SMTP');
        nconf.set('mail:options:service', emailService);
        nconf.set('mail:options:auth:user', emailUsername);
        nconf.set('mail:options:auth:pass', emailPassword);
        nconf.set('mail:from', emailFromAddress);
    }

    if(process.env.MYSQL_HOST) {
        var mysqlHost = process.env.MYSQL_HOST;
        var mysqlUsername = process.env.MYSQL_USERNAME;
        var mysqlPassword = process.env.MYSQL_PASSWORD;
        var mysqlDatabase = process.env.MYSQL_DATABASE;

        nconf.set('database:client', 'mysql');
        nconf.set('database:connection:host', mysqlHost);
        nconf.set('database:connection:user', mysqlUsername);
        nconf.set('database:connection:user', mysqlUsername);
        nconf.set('database:connection:password', mysqlPassword);
        nconf.set('database:connection:database', mysqlDatabase);
    }
}

module.exports = makeAzureConfig;