pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        echo 'checing out  code...'
      }
    }

    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
      }
    }

    stage('Build') {
      steps {
        echo 'Building application...'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
      }
    }
  }

  post {
    success {
      echo 'Pipeline completed successfully!'
    }
    failure {
      echo 'Pipeline failed!'
    }
    always {
      echo 'Pipeline finished.'
    }
  }
}
