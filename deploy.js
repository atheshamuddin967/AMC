import { Client } from 'basic-ftp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function deploy() {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    // Load FTP config
    const configPath = join(__dirname, 'ftp-config.json');
    let config;

    try {
      config = JSON.parse(readFileSync(configPath, 'utf-8'));
    } catch (error) {
      console.error('❌ Error: ftp-config.json not found!');
      console.log('📝 Please create ftp-config.json from ftp-config.example.json');
      console.log('   and fill in your FTP credentials.');
      process.exit(1);
    }

    console.log('🚀 Starting deployment...');
    console.log(`📡 Connecting to ${config.host}...`);

    // Connect to FTP server
    await client.access({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port || 21,
      secure: config.secure || false,
    });

    console.log('✅ Connected successfully!');

    // Change to remote directory
    console.log(`📂 Navigating to ${config.remotePath}...`);
    await client.ensureDir(config.remotePath);
    await client.cd(config.remotePath);

    // Upload dist folder
    console.log('📤 Uploading files from dist folder...');
    await client.uploadFromDir(join(__dirname, 'dist'));

    console.log('✅ Deployment completed successfully!');
    console.log(`🌐 Your site should be live at your domain`);

  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
