
const url = "10.132.46.98";
export default class BackendClient{
    addUser(user, callback) {
        fetch('http://' + url + ':3000/users',{method: 'POST', body: JSON.stringify(user)}).then((res) => {
            callback(res.status, res.text());
        });
    }

    addProject(project, callback) {
        fetch('http://' + url + ':3000/projects', {method: 'POST', body: JSON.stringify(project)}).then((res) => {
            callback(res.status, res.text());
        });
    }

    getUser(id, callback) {
        fetch('http://' + url + ':3000/users/' + id).then((res) => {
            callback(res.status, res.json());
        });
    }

    getProject(id, callback) {
        fetch('http://' +url + ':3000/projects/' + id).then((res) => {
            callback(res.status, res.json());
        });
    }
}
