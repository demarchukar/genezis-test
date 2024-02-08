import { apiInstance } from '@/services/api.js';
import { useToast } from 'vue-toastification';
const toast = useToast();

class CrmService {
  postCrm(option, body) {
    return apiInstance.post(`/api/v4/${option}`, body)
    .then(response => {
      if (response.data) {
        toast.success(`Новая сущность добавлена`);
      }
      return response.data})
    .catch(error => { return error }) 
  }
}

export default new CrmService();