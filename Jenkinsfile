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
            //clear docker container if exists
            //run docker in local
            //run Jmeter 
            //display performance report
            //stop docker
            steps{
                echo "Start testing"
                bat 'docker rm -f docker-devops-playground'
                bat 'docker run -d --name docker-devops-playground --publish 8088:8088 tanchonglim/devops-playground'
                dir("C:\\Program Files (x86)\\apache-jmeter-5.4.3\\bin"){
                    bat 'jmeter -jjmeter.save.saveservice.output_format=xml -n -t "C:\\Users\\User\\Desktop\\SC devops\\test.jmx" -l "C:\\Users\\User\\Desktop\\SC devops\\result.jtl"'
                }
                perfReport 'C:\\Users\\User\\Desktop\\SC devops\\result.jtl'
                bat 'docker stop docker-devops-playground'
            }
        }
        stage('Docker Push') {
            //push docker image to dockerhub
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
