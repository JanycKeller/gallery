var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://keller18janyc:janojano23@cluster0.oasqshn.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://keller18janyc:janojano23@cluster0.oasqshn.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://keller18janyc:janojano23@cluster0.oasqshn.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;

