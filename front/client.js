
const url = "10.132.46.98";
export default class BackendClient{
    addUser(user, callback) {
        fetch('http://' + url + ':3000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)}).then((res) => res.text()).then((res) => {
            callback(res);
        });
    }

    addProject(project, callback) {
        fetch('http://' + url + ':3000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((res) => res.text()).then((res) => {
            callback(res);
        });
    }

    getUser(id, callback) {
        fetch('http://' + url + ':3000/users/' + id).then((res) => res.json()).then((res) => {
            callback(res);
        });
    }

    getProject(id, callback) {
        fetch('http://' +url + ':3000/projects/' + id).then((res) => res.json()).then((res) => {
            callback(res);
        });
    }

    getUserByName(name, callback){
        fetch('https://' + url + ':3000/users?name=' + name).then((res) => res.json()).then((res) => {
            callback(res);
        });
    }
}
