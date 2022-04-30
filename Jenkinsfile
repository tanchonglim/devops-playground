node {
    stage('Preparation') { // for display purposes
        // Get some code from a GitHub repository
        git branch: 'main', url: 'https://github.com/tanchonglim/devops-playground.git'
        commit = sh(returnStdout: true, script: 'git log -1 --oneline').trim()
        commitMessage = commit.substring(15, commit.length())
        echo commit
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
