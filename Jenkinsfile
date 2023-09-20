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
                // Replace the command with the full path to the render executable
                sh '/usr/local/bin/render deploy'
            }
        }

       post {
                success {
                    script {
                        def slackMessage = "Build ID: ${BUILD_ID}\n"
                        slackSend(channel: 'projectip1', message: slackMessage)
                    }
                }
            }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
    }
}
