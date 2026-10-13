pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Expense Tracker pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the console log.'
        }
    }
}


