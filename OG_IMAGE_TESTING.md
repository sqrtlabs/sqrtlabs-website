# OG Image Testing

This document explains how to test the OG (Open Graph) images for the SQRT Labs website.

## Testing OG Images

To test if the OG images are working correctly, you can access the following URLs:

1. **Homepage OG Image**: `/opengraph-image`
2. **Homepage Twitter Image**: `/twitter-image`
3. **Blog Post OG Image**: `/blog/[id]/opengraph-image` (replace [id] with actual blog post ID)
4. **Project OG Image**: `/projects/[id]/opengraph-image` (replace [id] with actual project ID)
5. **Test Image**: `/test-image` (simple test image)

## Common Issues

1. **404 Errors**: If you're getting 404 errors, make sure:
   - The image routes are correctly set up in the app directory
   - The file names are correct (opengraph-image.tsx, twitter-image.tsx)
   - The routes are properly exported

2. **CORS Issues**: If you see CORS errors, make sure:
   - You're accessing the images from the same domain
   - The image routes are correctly configured

3. **Image Not Generating**: If images aren't generating:
   - Check the server logs for errors
   - Verify the ImageResponse code is correct
   - Make sure the edge runtime is properly configured

## Debugging

To debug OG image generation:

1. Check the server console for log messages
2. Verify the image routes are being hit
3. Test with simple image generation first
4. Ensure all dependencies are correctly imported

## Image Requirements

- **Format**: PNG
- **Size**: 1200x630 pixels for OG images, 1200x600 for Twitter
- **Content**: Should include branding and relevant text
- **Performance**: Images are generated on-demand using Edge runtime