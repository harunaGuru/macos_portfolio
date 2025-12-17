pipeline {
  agent any
  parameters {
    choice(name: "Version", choices: ['1.1.0', '1.2.0', '1.3.0'], description: "")
    booleanParam(name: "executeTests", defaultValue: true, description: "")
  }

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
        echo "Building with version {params.Version}"
      }
    }

    stage('Test') {
      when {
        expression {
          params.executeTests
        }
      }
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
