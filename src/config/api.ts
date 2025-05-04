export const API_BASE_URL = 'http://localhost:5000';

export const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/api/signup`,
  LOGIN: `${API_BASE_URL}/api/login`,
  VERIFY_EMAIL: `${API_BASE_URL}/api/verify-email`,
  ADMIN_USERS: `${API_BASE_URL}/api/admin/users`,
  ADMIN_BLOCK_USER: (userId: string) => `${API_BASE_URL}/api/admin/users/${userId}/block`,
  ADMIN_STAR_USER: (userId: string) => `${API_BASE_URL}/api/admin/users/${userId}/star`,
}; 