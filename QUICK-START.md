# Quick Start: Deploy to Static Hosting

## Prerequisites
- The site is already built in the `/out` folder
- All dependencies are self-contained in that folder
- No server-side code - pure static HTML/CSS/JS

---

## Upload Steps (5 Minutes)

### 1. Get SFTP App
Download **FileZilla**: https://filezilla-project.org/download.php?type=client

### 2. Connect to Your Host
Open FileZilla and enter at the top:
```
Host: your-domain.com
Username: your_username
Password: your_password
Port: 22
```
Click **Quickconnect**

### 3. Navigate to Your Site Folder
Right side (remote): Go to your web root folder (e.g., `/public_html/` or `/www/`)

### 4. Upload Files
Left side (local): Navigate to:
```
/Users/anthony/Projects/Halos/halosbiolanding/out/
```

Select ALL files/folders inside `out/`:
- Drag them to the right side
- Wait ~5-10 minutes for upload

### 5. Done!
Visit your domain to see the site live.

---

## Important: Set Up Email Form

The "Join Waitlist" button needs a form service:

1. Go to https://formspree.io and sign up (free)
2. Create a form and copy the endpoint
3. Update line 61 in `/components/email-capture-dialog.tsx`
4. Run `pnpm run build` again
5. Re-upload the `/out` folder

---

For detailed instructions, see **IMPLEMENTATION.md**
