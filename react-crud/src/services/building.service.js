import http from "../http-common";
class BuildingDataService {
    getAll() {
      return http.get("/api/buildings");
    }
    get(id) {
      return http.get(`/buildings/${id}`);
    }
  
    create(data) {
      return http.post("/buildings", data);
    }
  
    update(id, data) {
      return http.put(`/buildings/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/buildings/${id}`);
    }
    findByName(title) {
      return http.get(`/buildings?name=${title}`);
    }
  }
  export default new BuildingDataService();