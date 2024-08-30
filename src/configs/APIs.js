import axios from "axios";
import cookie from "react-cookies";

const SERVER_CONTEXT = "/harmony";
const SERVER = "http://localhost:8080";

export const endpoints = {
	login: `${SERVER_CONTEXT}/api/users/login`,
	register: `${SERVER_CONTEXT}/api/users/register`,
	confirm: `${SERVER_CONTEXT}/api/users/confirm`,
	profile: `${SERVER_CONTEXT}/api/users/profile`,
	updateProfile: `${SERVER_CONTEXT}/api/users/profile/update`,
	products: `${SERVER_CONTEXT}/api/products`,
	categories: `${SERVER_CONTEXT}/api/categories`,
	tags: `${SERVER_CONTEXT}/api/tags`,
	taxes: `${SERVER_CONTEXT}/api/taxes`,
	orders: `${SERVER_CONTEXT}/api/orders`,
};

export const authApi = () => {
	return axios.create({
		baseURL: SERVER,
		headers: {
			Authorization: cookie.load("token"),
		},
	});
};

export default axios.create({
	baseURL: SERVER,
});
