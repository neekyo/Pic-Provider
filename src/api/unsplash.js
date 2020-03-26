import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID FY8fJcl4JXConLKVml08Gvd0-Kl60625becSH1RYCLQ'
	}
});
