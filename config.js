// Server configuration
import dotenv from 'dotenv'
dotenv.config()

export const SERVER_PORT = process.env.PORT || 3000; // Server port
export const DEBUG = false; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = false; // Moderation mode

// Rate limit
export const PRIOD = 15 * 1000; // 15 seconds
export const RATE_LIMIT = 50; // 50 requests per 15 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [
    // "127.0.0.1"
];

// OpenAI API Keys
export let OPENAI_KEYS = [
    "sk-xxxxxxxxxxxxxxxxxxxxxx",
];

export let POE_KEYS = [
    "rays_wMOAuHVLamk9tGAqQ%3D%3D",
];
