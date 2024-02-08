import { authInstance } from '@/services/api.js';
import TokenService from '@/services/token.service.js';
import { useToast } from 'vue-toastification';
const toast = useToast();

class AuthService {
  login() {
    return authInstance.get('oauth/get-token.php')
    .then(response => {
      if (response.data) {
        TokenService.setToken(response.data.access_token);
        TokenService.setDomain(response.data.base_domain);
      }
      return response.data})
    .catch(error => { 
      toast.error(error.message);
      return error }) 
  }
}

export default new AuthService();