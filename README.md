# Next.js Markdown Viewer

## Font Installation

This project uses Fira Code Nerd Font. To install the font:

### Option 1: Download Manually
1. Download Fira Code Nerd Font from [Nerd Fonts](https://www.nerdfonts.com/font-downloads)
2. Place the following font files in `public/fonts/`:
   - `FiraCodeNerdFont-Regular.ttf`
   - `FiraCodeNerdFont-Medium.ttf`
   - `FiraCodeNerdFont-Bold.ttf`

### Option 2: Using Homebrew (macOS)
```bash
brew tap homebrew/cask-fonts
brew install font-fira-code-nerd-font
```

### Option 3: Using Scoop (Windows)
```powershell
scoop bucket add nerd-fonts
scoop install fira-code-nerd-font
```

### Option 4: Using Package Managers (Linux)
#### Ubuntu/Debian
```bash
sudo apt install fonts-firacode
```

#### Arch Linux
```bash
sudo pacman -S ttf-fira-code
```

## Development

1. Clone the repository
2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

## Features
- Dark theme
- Markdown rendering
- Responsive design
- Nerd Font integration

## License
MIT License