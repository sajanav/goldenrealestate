import http from "../http-common";
class DefectDataService {
    getAll() {
      return http.get("/api/defects");
    }
    get(id) {
      return http.get(`/defects/${id}`);
    }
  
    create(data) {
      return http.post("/defects", data);
    }
  
    update(id, data) {
      return http.put(`/defects/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/defects/${id}`);
    }
    findByName(title) {
      return http.get(`/defects?name=${title}`);
    }
  }
  export default new DefectDataService();