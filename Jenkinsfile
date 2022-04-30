node {
    agent any
    stage('Preparation') { // for display purposes
        // Get some code from a GitHub repository
        git branch: 'main', url: 'https://github.com/tanchonglim/devops-playground.git'
        commit = sh(returnStdout: true, script: 'git log -1 --oneline').trim()
        echo commit
        // commitMessage = commit.substring(15, commit.length())
        // echo commitMessage
    }
    stage('Build') {
        //build docker 
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
