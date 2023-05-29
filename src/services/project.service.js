import axios from 'axios';

const API_URL = '/'

class ProjectService {
  getProject(path) {
    let project = null
    return this.getProjects().then(
        response => {
          return response.find(obj => obj.path == path)
        },
        error => {
          console.log('Could not find the project!')
        }
    )
  }

  getProjects() {
    return axios
      .get(API_URL + "projects.json")
      .then(response => {
        return response.data
      })
  }

  /*updateBankaccounts(data) {
    return axios
      .post(API_URL + "bankaccounts", data)
      .then(response => {
        return response.data
      })
  }*/
}

export default new ProjectService()