import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID izFrWAzUc_dK_mmOHrRFPsikPB2D8JWESqt-szTvoUg',
	},
})
