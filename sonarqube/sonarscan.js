import scanner from 'sonarqube-scanner';
scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "56c3074144295b933991c7a5ee1aa17f5b5619ca",
        options: {
            'sonar.projectName': 'react-best-practices',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'sonarqube-react-project',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.project': './src',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    // eslint-disable-next-line no-undef
    () => process.exit()
)