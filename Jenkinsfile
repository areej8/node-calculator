pipeline {
    agent any

    tools {
        nodejs 'NodeJS'  // Make sure Jenkins has NodeJS configured with this name
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running Jest tests...'
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo '✅ Build and tests succeeded!'
        }
        failure {
            echo '❌ Build or tests failed!'
        }
    }
}

