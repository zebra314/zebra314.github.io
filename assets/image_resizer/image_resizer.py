from PIL import Image
import os
from pathlib import Path

class ImageResizer:
  def __init__(self, target_dir):
    # Define size configurations
    self.size_configs = {
      'xxxlarge': 1300,
      'xxlarge': 1000,
      'xlarge': 700,
      'large': 300,
      'medium': 200,
      'small': 140,
      'xsmall': 100
    }

    # Create base directories
    self.base_dir = Path(target_dir) / "resized_images"
    self._create_directories()

  def _create_directories(self):
    """Create directories for each size if they don't exist"""
    for size in self.size_configs.keys():
      directory = self.base_dir / size
      directory.mkdir(parents=True, exist_ok=True)

  def _calculate_new_dimensions(self, image, target_width):
    """Calculate new dimensions maintaining aspect ratio"""
    width, height = image.size
    aspect_ratio = height / width
    new_height = int(target_width * aspect_ratio)
    return (target_width, new_height)

  def process_image(self, image_path):
    """Process a single image into all required sizes"""
    try:
      # Open the image
      with Image.open(image_path) as img:
        # Convert RGBA to RGB if necessary
        if img.mode == 'RGBA':
          img = img.convert('RGB')
        
        original_filename = Path(image_path).name
        filename_without_ext = Path(original_filename).stem
        extension = Path(original_filename).suffix
        
        # Process for each size configuration
        for size_name, target_width in self.size_configs.items():
          # Skip if original is smaller than target
          if img.size[0] < target_width:
            print(f"Original image smaller than {size_name} target width, skipping...")
            continue
          
          # Calculate new dimensions
          new_dimensions = self._calculate_new_dimensions(img, target_width)
          
          # Resize image
          resized_img = img.resize(new_dimensions, Image.Resampling.LANCZOS)
          
          # Save path
          save_path = self.base_dir / size_name / f"{filename_without_ext}{extension}"
          
          # Save with quality optimization
          resized_img.save(
            save_path,
            quality=85,  # Good balance between quality and file size
            optimize=True
          )
          
          print(f"Saved {size_name} version: {save_path}")
                
    except Exception as e:
      print(f"Error processing {image_path}: {str(e)}")

  def process_directory(self, directory_path):
      """Process all images in a directory"""
      directory = Path(directory_path)
      supported_formats = {'.jpg', '.jpeg', '.png', '.webp'}
      
      for image_path in directory.iterdir():
        if image_path.suffix.lower() in supported_formats:
          print(f"\nProcessing: {image_path}")
          self.process_image(str(image_path))

def main():
  # Directory containing original images
  input_dir = "/home/alfonso/Git_workspace/zebra314.github.io/assets/image/"
  target_dir = "/home/alfonso/Git_workspace/zebra314.github.io/assets/image"

  # Initialize resizer
  resizer = ImageResizer(target_dir)
  
  print(f"Starting image processing from: {input_dir}")
  print(f"Saving resized images to: {target_dir}")
  resizer.process_directory(input_dir)
  print("\nProcessing complete!")
  print("Remember to remove the original images in the input directory to avoid processing them again.")

if __name__ == "__main__":
  main()