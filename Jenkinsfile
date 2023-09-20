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

        stage('Deploy to Render') {
            steps {
                // Replace the command with the full path to the render executable
                sh '/usr/local/bin/render deploy'
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
