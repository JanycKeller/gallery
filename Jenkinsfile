pipeline {
    agent any
    
    tools {
        nodejs 'Node.js 12.22.9' 
    }
    
    environment {
        PATH = "${tool name: 'Node.js 12.22.9'}/bin:${PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                // Replace these commands with your actual deployment steps
                // You may need to configure Render CLI or use Render integrations
                sh 'render deploy'  // Example command (replace with Render deployment commands)
            }
        }

        stage('Make Changes to Landing Page') {
            steps {
                // Add "MILESTONE 2" to your landing page
                sh 'echo "MILESTONE 2" >> landing.html'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
