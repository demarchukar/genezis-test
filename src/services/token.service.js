class TokenService {
  
  getToken() {
    return localStorage.getItem("access_token");
  }

  getDomain() {
    return localStorage.getItem("base_domain");
  }

  setToken(token) {
    localStorage.setItem("access_token", token);
  }

  setDomain(domain) {
    localStorage.setItem("base_domain", domain);
  }

}

export default new TokenService();