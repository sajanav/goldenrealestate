import http from "../http-common";
class ProgressBarDataService {
    getAll() {
      return http.get("/api/progressbar");
    }
    get(id) {
      return http.get(`/progressbar/${id}`);
    }
  
    create(data) {
      return http.post("/progressbar", data);
    }
  
    update(id, data) {
      return http.put(`/progressbar/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/progressbar/${id}`);
    }
    findByName(title) {
      return http.get(`/progressbar?name=${title}`);
    }
  }
  export default new ProgressBarDataService();