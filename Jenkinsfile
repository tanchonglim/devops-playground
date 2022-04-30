pipeline  {
    agent any
    stages {
        stage('Preparation') { 
            // Get some code from a GitHub repository
            steps{
                echo "Start preparation"
                git branch: 'main', url: 'https://github.com/tanchonglim/devops-playground.git'
            }

        }
        stage('Docker Build') {
            //build docker 
            steps {
                echo "Start docker build"
                bat 'docker build -t tanchonglim/devops-playground:latest .' 
            }
           
        }
        stage("Testing"){
            //run docker in local
            //run Jmeter 
            //if testing fail, add comment in Jira issue
            steps{
                echo "Start testing"
                bat 'docker rm -f docker-devops-playground'
                bat 'docker run -d --name docker-devops-playground --publish 8088:8088 tanchonglim/devops-playground'
                bat 'jmeter -jjmeter.save.saveservice.output_format=xml -n -t "C:\\Users\\User\\Desktop\\SC devops\\test.jmx" -l "C:\\Users\\User\\Desktop\\SC devops\\result.jtl"'
                perfReport 'C:\\Users\\User\\Desktop\\SC devops\\result.jtl'
                bat 'docker stop docker-devops-playground'
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
