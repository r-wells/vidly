pipeline {
    agent { docker { image 'node:12.4.1' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}