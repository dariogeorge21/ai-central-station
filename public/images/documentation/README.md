# Documentation Page Images Guide

This guide provides instructions for adding and managing images for the AI Central Station Documentation page.

## Directory Structure

```
public/
└── images/
    └── documentation/
        ├── thumbnails/     # For AI tool card thumbnails
        ├── screenshots/    # For detailed tool screenshots
        └── logos/         # For AI tool logos
```

## Required Images

### 1. AI Tool Card Thumbnails
- **Location**: `/public/images/documentation/thumbnails/`
- **Naming Convention**: `{tool-id}-thumbnail.jpg`
- **Recommended Size**: 400x300 pixels
- **Format**: JPG or PNG
- **Example**: `chatgpt-thumbnail.jpg`

### 2. Tool Screenshots
- **Location**: `/public/images/documentation/screenshots/`
- **Naming Convention**: `{tool-id}-screenshot-{number}.jpg`
- **Recommended Size**: 1200x800 pixels
- **Format**: JPG or PNG
- **Example**: `chatgpt-screenshot-1.jpg`

### 3. Tool Logos
- **Location**: `/public/images/documentation/logos/`
- **Naming Convention**: `{tool-id}-logo.png`
- **Recommended Size**: 200x200 pixels
- **Format**: PNG (with transparency)
- **Example**: `chatgpt-logo.png`

## Adding Images

### Method 1: Using Local Images

1. **Download the images** you want to use
2. **Rename them** according to the naming convention above
3. **Place them** in the appropriate subdirectory
4. **Update the code** to reference the local path:

```typescript
// In your component
<Image
  src="/images/documentation/thumbnails/chatgpt-thumbnail.jpg"
  alt="ChatGPT Interface"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

### Method 2: Using Online Images

1. **Get the image URL** from your source
2. **Update the code** to use the URL directly:

```typescript
// In your component
<Image
  src="https://example.com/path/to/image.jpg"
  alt="ChatGPT Interface"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

## Image Requirements

### Thumbnails
- Resolution: 400x300 pixels
- Format: JPG or PNG
- File size: Optimize to under 100KB
- Aspect ratio: 4:3
- Content: Should show the tool's main interface or a representative screenshot

### Screenshots
- Resolution: 1200x800 pixels
- Format: JPG or PNG
- File size: Optimize to under 300KB
- Aspect ratio: 3:2
- Content: Should show specific features or use cases

### Logos
- Resolution: 200x200 pixels
- Format: PNG with transparency
- File size: Optimize to under 50KB
- Aspect ratio: 1:1
- Content: Official tool logo with transparent background

## Image Optimization Tips

1. **Compression**:
   - Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Compress images before adding them to the project

2. **Naming**:
   - Use lowercase letters
   - Replace spaces with hyphens
   - Include tool ID in filename
   - Add descriptive suffixes (thumbnail, screenshot, logo)

3. **Organization**:
   - Keep related images together in appropriate subdirectories
   - Maintain consistent naming conventions
   - Document any special cases or variations

## Next.js Image Component Usage

```typescript
import Image from 'next/image';

// Local image
<Image
  src="/images/documentation/thumbnails/chatgpt-thumbnail.jpg"
  alt="ChatGPT Interface"
  width={400}
  height={300}
  className="rounded-lg object-cover"
/>

// Online image
<Image
  src="https://example.com/path/to/image.jpg"
  alt="ChatGPT Interface"
  width={400}
  height={300}
  className="rounded-lg object-cover"
/>
```

## Troubleshooting

1. **Images not loading**:
   - Check if the path is correct
   - Verify image exists in the specified directory
   - Ensure proper permissions

2. **Image optimization issues**:
   - Verify image format is supported
   - Check if image dimensions are correct
   - Ensure file size is within limits

3. **Layout issues**:
   - Verify width and height props
   - Check className for proper styling
   - Ensure container has proper dimensions

## Maintenance

1. **Regular updates**:
   - Review and update images periodically
   - Remove unused images
   - Optimize new images before adding

2. **Version control**:
   - Keep image versions in sync with code
   - Document major image changes
   - Maintain backup of original images

## Additional Resources

- [Next.js Image Component Documentation](https://nextjs.org/docs/api-reference/next/image)
- [Image Optimization Best Practices](https://nextjs.org/docs/basic-features/image-optimization)
- [WebP Format Guide](https://developers.google.com/speed/webp) 