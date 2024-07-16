/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:nNl5iUAkjh0a@ep-old-wave-a559g2l2.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };