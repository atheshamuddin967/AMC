import { Client } from 'basic-ftp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testDeploy() {
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
      process.exit(1);
    }

    console.log('🚀 Starting test deployment...');
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

    // List current directory to see where we are
    console.log('📂 Current directory contents:');
    const list = await client.list();
    list.forEach(item => {
      console.log(`   ${item.isDirectory ? '📁' : '📄'} ${item.name}`);
    });

    // Try to change to remote directory
    console.log(`\n📂 Attempting to navigate to ${config.remotePath}...`);
    try {
      await client.cd(config.remotePath);
      console.log('✅ Successfully navigated to remote path!');
    } catch (error) {
      console.log('⚠️  Could not navigate to configured path, staying in current directory');
      console.log(`   You may need to update remotePath in ftp-config.json`);
    }

    // Upload test file
    console.log('\n📤 Uploading test file...');
    const testFilePath = join(__dirname, 'test-deploy.html');
    await client.uploadFrom(testFilePath, 'test-deploy.html');

    console.log('✅ Test file uploaded successfully!');
    console.log(`🌐 Try visiting: http://${config.host}/test-deploy.html`);
    console.log('\n✨ FTP deployment is working! You can now use "npm run deploy" for full deployment.');

  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    console.error('\n🔍 Troubleshooting tips:');
    console.error('   1. Verify your FTP credentials in ftp-config.json');
    console.error('   2. Check if FTP access is enabled in cPanel');
    console.error('   3. Verify the remotePath is correct for your server');
    process.exit(1);
  } finally {
    client.close();
  }
}

testDeploy();
