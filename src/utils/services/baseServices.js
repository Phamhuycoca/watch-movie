import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

const apiClient = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});

// Hàm tự động xác định Content-Type
const determineHeaders = (data) => {
    // Kiểm tra nếu dữ liệu có chứa file
    if (Object.values(data).some((value) => value instanceof File)) {
        return {
            'Content-Type': 'multipart/form-data', // Sử dụng 'multipart/form-data' khi có file
        };
    }
    return {
        'Content-Type': 'application/json', // Sử dụng 'application/json' khi không có file
    };
};

// Hàm kiểm tra token hợp lệ
const isTokenExpired = (token) => {
    try {
        const decoded = JSON.parse(atob(token.split('.')[1])); // Giải mã token (JWT)
        return decoded.exp * 1000 < Date.now(); // Kiểm tra thời gian hết hạn
    } catch (e) {
        return true; // Nếu token không hợp lệ thì coi như hết hạn
    }
};

// Hàm làm mới token
const sendrefreshToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            navigate('/login');
            throw new Error('Refresh token không tồn tại.');
        }
        const response = await axios.post('https://api.example.com/refresh', {
            refresh_token: refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        localStorage.setItem('token', accessToken); // Lưu lại token mới
        localStorage.setItem('refreshToken', newRefreshToken); // Lưu lại refresh token mới (nếu có)
        return accessToken;
    } catch (error) {
        console.error('Error refreshing token:', error);
        throw error;
    }
};

// Interceptor để kiểm tra token và làm mới khi hết hạn
apiClient.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');

        // Kiểm tra token và refresh token
        if (!token || !refreshToken) {
            navigate('/login');
            console.error('Token hoặc Refresh Token không tồn tại.');
            throw new Error('Token hoặc Refresh Token không tồn tại.');
        }

        // Nếu token hết hạn, làm mới token
        if (isTokenExpired(token)) {
            try {
                const newToken = await sendrefreshToken();
                config.headers['Authorization'] = `Bearer ${newToken}`;
            } catch (error) {
                console.error('Error refreshing token:', error);
                throw error;
            }
        } else {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

const _create = async (endpoint, data) => {
    try {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        const headers = determineHeaders(data);
        const response = await apiClient.post(endpoint, formData, { headers });
        return response.data;
    } catch (error) {
        console.error('Error creating data:', error);
        throw error;
    }
};

const _update = async (endpoint, id, data) => {
    try {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        const headers = determineHeaders(data);
        const response = await apiClient.put(`${endpoint}/${id}`, formData, {
            headers,
        });
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error;
    }
};

const _delete = async (endpoint, id) => {
    try {
        const response = await apiClient.delete(`${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};

const _getAll = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const _getById = async (endpoint, id) => {
    try {
        const response = await apiClient.get(`${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data by id:', error);
        throw error;
    }
};
export default { _create, _update, _delete, _getById, _getAll };
