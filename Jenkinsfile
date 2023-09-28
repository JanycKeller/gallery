pipeline {
    agent any
    
    tools {
        nodejs 'Node.js 16.20.1' 
    }
    
    environment {
        PATH = "${tool name: 'Node.js 16.20.1'}/bin:${PATH}"
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
                sh 'npm install -g mocha' 
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
               
                sh '/usr/local/bin/render deploy'
            }
        }
    }

    post {
        success {
            script {
                def slackMessage = "Build ID: ${BUILD_ID}\n"
                slackSend(channel: 'projectip1', message: slackMessage)
                echo 'Pipeline succeeded!'
            }
        }
    }
}
