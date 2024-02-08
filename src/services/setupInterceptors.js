import { apiInstance, authInstance } from '@/services/api.js';
import TokenService from '@/services/token.service.js';
import { useToast } from 'vue-toastification';
const toast = useToast();

const setup = () => {
  apiInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  apiInstance.interceptors.response.use(
    (res) => res,
    async (err) => {

      const statusCode = err.response.status;
      const originalConfig = err.config;

      if (originalConfig.url !== "oauth/get-token.php" && err.response.data) {
        if (statusCode !== 401) {
          toast.error(err.response.data.detail)
        }
          // Access Token was expired
        if (statusCode === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const rs = await authInstance.get("oauth/get-token.php");

            const accessToken = rs.data.access_token;
            TokenService.setToken(accessToken);

            return apiInstance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default setup;