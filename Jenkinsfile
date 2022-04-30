pipeline {
    stage('Preparation') { // for display purposes
        // Get some code from a GitHub repository
        git branch: 'main', url: 'https://github.com/tanchonglim/devops-playground.git'
    }
    stage('Docker Build') {
        //build docker 
        agent { dockerfile true }
           steps {
                sh 'docker build -t tanchonglim/devops-playground:latest .'
            }
        //if build fail, add comment in Jira issue
    }
    stage("Testing"){
        //run Jmeter 
        //if testing fail, add comment in Jira issue
    }
    stage("Jira"){
        //update Jira issue to done
    }
    stage('Results') {
        echo 'success'
    }
}
