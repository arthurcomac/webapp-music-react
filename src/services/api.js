import axios from "axios";

const api = axios.create({
	baseURL: "https://cors-anywhere.herokuapp.com/http://api.deezer.com",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization, Origin, Accept, Accept-Encoding",
		"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
	}
});

export default api;