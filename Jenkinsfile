pipeline  {
    agent any
    stages {
        stage('Preparation') { // for display purposes
            // Get some code from a GitHub repository
            steps{
                git branch: 'main', url: 'https://github.com/tanchonglim/devops-playground.git'
            }

        }
        stage('Docker Build') {
            //build docker 
            steps {
                bat 'docker build -t tanchonglim/devops-playground:latest .' 
            }
           
        }
        stage("Testing"){
            //run
            
            //run Jmeter 
            //if testing fail, add comment in Jira issue
            steps{
                echo 'testing'
            }
        }
        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                bat "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                bat 'docker push tanchonglim/devops-playground:latest'
                }
            }
        }
        stage("Update Jira"){
            //update Jira issue to done
            steps{
                echo 'jira'
            }
        }

    }

}
