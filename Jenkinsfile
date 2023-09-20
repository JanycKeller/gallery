pipeline {
    agent any
    
    tools {
       
        nodejs 'Node.js 12.22.9' 
    }
      environment {
        // PATH to Node.js installation directory
        PATH = "${tool name: 'Node.js 12.22.9'}/bin:${PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checks code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Installs npm dependencies
                sh 'npm install'
            }
        }

        

       

        stage('Run Tests') {
            steps {
                // Run npm tests
                sh 'npm test'
            }
        }

    }

    post {
        success {
            // Send notifications or perform additional actions on success
            echo 'Pipeline succeeded!'
        }
    }
}
