export interface ILogin {
	email: string;
	password: string;
}

export type LoginData = {
	user: {
		id: string;
		email: string;
		// name: string;
	};
	token: string;
};

export interface ISignup {
	// name: string,
	email: string;
	password: string;
}

export type SignupData = {
	user: {
		// name: string,
		// id: string;
		email: string;
		password: string;
	};
	// name: string;
};

export interface IForgotPassword {
	email: string
}
