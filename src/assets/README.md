# Assets Folder

## Adding Your Profile Photo

To add your profile photo to the hero section:

1. **Add your photo**: Place your profile photo in this folder and name it `profile-photo.jpg` (or update the filename in the Hero component)

2. **Supported formats**: .jpg, .jpeg, .png, .webp

3. **Recommended specifications**:

   - Size: 400x400 pixels (square format works best)
   - Format: JPG or PNG
   - File size: Under 500KB for optimal loading

4. **Update the import** (optional): If you want to use Vite's asset handling, uncomment and update the import line in `Hero.tsx`:

   ```tsx
   import profilePhoto from "@/assets/profile-photo.jpg";
   ```

   Then update the src attribute:

   ```tsx
   <AvatarImage src={profilePhoto} alt="Jihed Ben Salah - Profile photo" />
   ```

## Current Setup

The Hero component is currently set up to look for your photo at:

- Path: `/src/assets/profile-photo.jpg`
- Fallback: Shows "JBS" initials if photo is not found
- Styling: Circular avatar with tech-blue border and glow effect

Simply add your photo with the correct filename and it will appear automatically!
