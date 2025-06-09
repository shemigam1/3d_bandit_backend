import { v2 as cloudinary } from "cloudinary";

const config = {
	nodeEnv: process.env.NODE_ENV || 'development',
	DATABASE_URL: process.env.DATABASE_URL || '',
	JWT_SECRET: process.env.JWT_SECRET || '',
};

export const cloudinaryConfig = cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
	api_key: process.env.CLOUDINARY_API_KEY || '',
	api_secret: process.env.CLOUDINARY_API_SECRET || '',
	secure: true
})

export default config;
