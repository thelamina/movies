export const searchMovies = {
	isLoading: false,
	error: null,
	data: null,
	isSuccessful: false,
};

export const nominees = {
	isLoading: false,
	error: null,
	data: JSON.parse(localStorage.getItem('nominations')) || [],
	isSuccessful: false,
};
