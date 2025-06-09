import Auth from '../classes/auth';
import File from '../classes/file';

export const authFactory = () => {
	// define parameters for initialization here

	return new Auth();
};

export const fileFactory = () => {
	// define parameters for initialization here

	return new File()
}