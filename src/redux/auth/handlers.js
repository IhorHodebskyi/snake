export const handleSignUpFulfilled = (
	state,
	{ payload },
) => {
	state.user = payload.user;
	state.token = payload.token;
	state.isLoggedIn = true;
	state.isLoading = false;
};

export const handleLogInFulfilled = (
	state,
	{ payload },
) => {
	state.user = payload.user;
	state.token = payload.token;
	state.isLoggedIn = true;
	state.isLoading = false;
};

export const handleLogOutFulfilled = state => {
	state.user = { name: null, email: null };
	state.token = null;
	state.isLoggedIn = false;
	state.isLoading = false;
	state.error = null;
};

export const handleRefreshUserPending = (
	state,
	{ payload },
) => {
	state.user = payload;
	state.isRefreshing = true;
	state.isLoggedIn = true;
};

export const handlePending = state => {
	state.isLoading = true;
};

export const handleFulfilled = state => {
	state.isRefreshing = false;
	state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
	state.isRefreshing = false;
	state.error = payload;
	state.isLoading = false;
};
