# School Images Configuration Guide

This folder contains all the image configurations for Sri Vivekananda Vidyalaya website.

## How to Use This Configuration

1. **Replace URLs**: Update the URLs in `imageConfig.ts` with your actual school images
2. **Maintain Aspect Ratios**: Keep similar dimensions for best visual results
3. **Optimize Images**: Compress images for faster loading
4. **Use High Quality**: Minimum 1260x750 for main images, 800x600 for gallery

## Image Categories and Their Purpose

### 🏫 **Hero Section Images**
- **Background**: Main hero background image (school campus aerial view recommended)
- **School Building**: Primary school building exterior shot

### 📚 **About Section Images**
- **School Exterior**: Beautiful exterior view of the school
- **Principal Office**: Professional shot of principal's office or meeting room

### 🎓 **Academic Images**
- **Smart Classroom**: Modern classroom with digital boards/projectors
- **Biology Class**: Students in biology lab or classroom
- **Physics Class**: Physics laboratory or demonstration
- **Projector Class**: Classroom with projector in use

### 🏢 **Facilities Images**
- **Library**: School library with students reading/studying
- **Science Lab**: Well-equipped science laboratory
- **Computer Lab**: Students working on computers
- **Auditorium**: School auditorium or assembly hall
- **Playground**: Sports ground or playground area
- **School Van**: School transportation vehicle

### ⚽ **Sports & Activities Images**
- **Sports Day**: Annual sports day celebration
- **Cricket**: Students playing cricket
- **Volleyball**: Volleyball match or practice
- **Kids Playing**: Children engaged in recreational activities

### 🏆 **Achievement Images**
- **Child Achievement 1**: Students receiving awards or certificates
- **Child Achievement 2**: Academic or sports achievement moments
- **Awards**: Trophy display or award ceremonies
- **Celebration**: School celebration events

### 📸 **Gallery Images**
- **Event 1-6**: Various school events, functions, and activities

## Image Specifications

| Category | Recommended Size | Aspect Ratio | Usage |
|----------|------------------|--------------|-------|
| Hero Background | 1920x1080 | 16:9 | Full-screen background |
| Main Images | 1260x750 | 16:10 | Section backgrounds |
| Gallery Images | 800x600 | 4:3 | Photo gallery |
| Thumbnails | 400x300 | 4:3 | Small previews |

## Tips for Best Results

1. **Lighting**: Use well-lit, bright images
2. **Composition**: Include students and activities when possible
3. **Quality**: High resolution, sharp focus
4. **Consistency**: Similar lighting and color tone across images
5. **Authenticity**: Use actual school photos for credibility

## File Naming Convention

When saving your images, use descriptive names:
- `hero-background.jpg`
- `school-building-exterior.jpg`
- `biology-lab-students.jpg`
- `sports-day-celebration.jpg`
- `library-students-reading.jpg`

## Updating Images

To update any image:
1. Open `src/assets/images/imageConfig.ts`
2. Find the relevant category and image name
3. Replace the URL with your new image URL
4. Save the file - changes will reflect automatically