pipeline {
    agent {
        label 'playwright-docker'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Install Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**'
        }
    }
}