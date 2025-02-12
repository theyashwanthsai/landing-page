const fs = require('fs');
const https = require('https');
const path = require('path');

const FONT_BASE_URL = 'https://github.com/ryanoasis/nerd-fonts/raw/master/patched-fonts/FiraCode/Regular/FiraCodeNerdFont-';
const FONT_VARIANTS = ['Regular', 'Medium', 'Bold'];
const DOWNLOAD_DIR = path.join(__dirname, 'public', 'fonts');

// Ensure fonts directory exists
if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

function downloadFont(variant) {
  const fileName = `FiraCodeNerdFont-${variant}.ttf`;
  const fileUrl = `${FONT_BASE_URL}${variant}.ttf`;
  const filePath = path.join(DOWNLOAD_DIR, fileName);

  return new Promise((resolve, reject) => {
    https.get(fileUrl, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded ${fileName}`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${fileName}: ${response.statusCode}`);
        reject(new Error(`Download failed for ${fileName}`));
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${fileName}:`, err);
      reject(err);
    });
  });
}

async function downloadFonts() {
  try {
    for (const variant of FONT_VARIANTS) {
      await downloadFont(variant);
    }
    console.log('All fonts downloaded successfully!');
  } catch (error) {
    console.error('Font download failed:', error);
  }
}

downloadFonts();