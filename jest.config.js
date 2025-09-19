module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-junit', { ouputDirectory: './reports', outputName: 'junit.xml'}]
    ]
};