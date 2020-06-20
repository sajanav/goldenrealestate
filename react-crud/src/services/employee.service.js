import http from "../http-common";
class EmployeeDataService {
    getAll() {
      return http.get("/api/employees");
    }
    get(id) {
      return http.get(`/employees/${id}`);
    }
  
    create(data) {
      return http.post("/employees", data);
    }
  
    update(id, data) {
      return http.put(`/employees/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/employees/${id}`);
    }
    findByName(title) {
      return http.get(`/employees?name=${title}`);
    }
  }
  export default new EmployeeDataService();