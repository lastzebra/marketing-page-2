# Demo Video Modal Setup

## ✅ Implemented

The demo video modal is fully implemented and accessible. Clicking the "Demo" button in the Hero section opens a modal overlay with the demo video.

## 📁 Files Created

1. **`src/components/media/DemoVideo.tsx`**
   - Reusable video component with reduced motion support
   - Handles autoplay based on `prefers-reduced-motion`
   - Shows play button overlay when needed

2. **`src/components/media/DemoVideoModal.tsx`**
   - Accessible modal component with:
     - Portal to `document.body`
     - Focus management (focuses close button on open)
     - ESC key handling
     - Backdrop click to close
     - Body scroll lock
     - ARIA attributes (`role="dialog"`, `aria-modal="true"`)

3. **`src/components/sections/Hero.tsx`** (updated)
   - Demo button now opens modal instead of navigating to anchor

## 🎥 Video File Setup

### Current Configuration

The video source is set to:
```typescript
videoSrc="/video_bba602b6_1768573593217.mp4"
```

### How to Add the Video File

1. **Create `public` folder** (if it doesn't exist):
   ```bash
   mkdir public
   ```

2. **Copy the video file** to the `public` folder:
   ```bash
   cp /mnt/data/video_bba602b6_1768573593217.mp4 public/video_bba602b6_1768573593217.mp4
   ```

   Or if the file is in a different location:
   ```bash
   cp /path/to/your/video_bba602b6_1768573593217.mp4 public/
   ```

3. **Verify the file exists**:
   - The file should be accessible at: `http://localhost:3000/video_bba602b6_1768573593217.mp4`
   - In production: `https://yourdomain.com/video_bba602b6_1768573593217.mp4`

### Change Video File

To use a different video file:

1. **Update `Hero.tsx`**:
   ```typescript
   <DemoVideoModal
     videoSrc="/your-new-video.mp4"  // Change this path
     // ... other props
   />
   ```

2. **Place the new file** in the `public` folder

3. **Supported formats**: MP4, WebM, OGG (MP4 recommended for best compatibility)

## ⚙️ Video Settings

### Current Settings (in `DemoVideoModal.tsx`):

```typescript
<DemoVideo
  src={videoSrc}
  autoplay={true}      // Auto-plays when modal opens
  loop={true}          // Video loops continuously
  muted={true}         // Muted by default (required for autoplay)
  playsInline={true}   // Plays inline on mobile
  className="w-full h-full"
/>
```

### How to Tweak Autoplay

**Disable autoplay**:
```typescript
// In DemoVideoModal.tsx
<DemoVideo
  autoplay={false}  // Change to false
  // ...
/>
```

**Enable controls** (if needed):
```typescript
// In DemoVideo.tsx, add controls attribute
<video
  controls={true}  // Add this to show video controls
  // ...
/>
```

**Note**: `autoplay={false}` will always show the play button overlay, even without `prefers-reduced-motion`.

### Reduced Motion Behavior

When `prefers-reduced-motion: reduce` is enabled:
- ✅ **Autoplay is disabled** (even if `autoplay={true}`)
- ✅ **Play button overlay is shown** (user must click to play)
- ✅ **Video still works manually** (user controls playback)

This is handled automatically by the `DemoVideo` component.

## 🎨 Customization

### Modal Styling

**Change modal size** (in `DemoVideoModal.tsx`):
```typescript
className="relative z-10 w-full max-w-4xl"  // Change max-w-4xl to max-w-2xl, max-w-6xl, etc.
```

**Change backdrop color** (in `DemoVideoModal.tsx`):
```typescript
className="absolute inset-0 bg-black/80"  // Change opacity: /80, /70, etc.
```

**Change modal border/glow** (in `DemoVideoModal.tsx`):
```typescript
className="... border border-surface-1 ..."  // Adjust border color
```

### Video Aspect Ratio

**Change aspect ratio** (in `DemoVideoModal.tsx`):
```typescript
<div className="relative w-full aspect-video">  // Change to aspect-square, aspect-[16/9], etc.
```

## ♿ Accessibility Features

✅ **ARIA attributes**:
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby="demo-modal-title"`
- `aria-describedby="demo-modal-description"`

✅ **Keyboard navigation**:
- **ESC**: Closes modal
- **Tab**: Navigates between focusable elements
- **Focus trap**: Focus stays within modal when open

✅ **Focus management**:
- Focuses close button when modal opens
- Restores focus to Demo button when modal closes

✅ **Screen readers**:
- Title and description are announced
- Video has `aria-label`

## 📱 Mobile Considerations

✅ **Plays inline** (`playsInline={true}`) - prevents fullscreen on iOS  
✅ **Touch-friendly** - backdrop and close button are large enough  
✅ **Responsive** - modal adapts to screen size with padding

## 🧪 Testing Checklist

- [ ] Click "Demo" button → Modal opens
- [ ] Click X button → Modal closes
- [ ] Click backdrop → Modal closes
- [ ] Press ESC → Modal closes
- [ ] Focus moves to close button when modal opens
- [ ] Focus returns to Demo button when modal closes
- [ ] Background scroll is prevented when modal is open
- [ ] Video autoplays (if not reduced motion)
- [ ] Video loops
- [ ] Video is muted
- [ ] Reduced motion: Play button shown, no autoplay
- [ ] Mobile: Video plays inline (no fullscreen)
- [ ] No console errors

## 🐛 Troubleshooting

**Video doesn't play**:
- Check file path in `public` folder
- Verify file format (MP4 recommended)
- Check browser console for errors
- Ensure video file isn't corrupted

**Modal doesn't open**:
- Check browser console for errors
- Verify `isModalOpen` state is updating
- Check `DemoVideoModal` component is imported correctly

**Focus doesn't restore**:
- Check if button is still mounted when modal closes
- Verify `handleCloseModal` is called correctly

**Body scroll not locked**:
- Check browser DevTools → Elements → `body` should have `overflow: hidden`
- Verify cleanup function is running

## 📝 Notes

- The video file must be in the `public` folder to be accessible
- Video should be optimized for web (compressed, appropriate resolution)
- Recommended: MP4 format with H.264 codec for best compatibility
- For best performance: Keep video file size under 5MB if possible
