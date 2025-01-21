from PIL import Image
import os
from pathlib import Path

def compress_image(input_path, output_path, target_size_kb):
    """
    壓縮圖片至指定大小（KB），保持原始尺寸不變
    
    Args:
        input_path: 輸入圖片路徑
        output_path: 輸出圖片路徑
        target_size_kb: 目標檔案大小（KB）
    """
    # 轉換目標大小為位元組
    target_size = target_size_kb * 1024

    # 打開圖片
    img = Image.open(input_path)
    
    # 如果是 RGBA 模式，轉換為 RGB
    if img.mode == 'RGBA':
        img = img.convert('RGB')
    
    # 初始品質設定
    quality = 95
    min_quality = 5
    max_quality = 95
    
    # 二分搜尋法找到最適合的品質設定
    while min_quality <= max_quality:
        quality = (min_quality + max_quality) // 2
        # 暫存檔案用於大小檢查
        temp_output = str(Path(output_path).with_suffix('.temp.jpg'))
        img.save(temp_output, 'JPEG', quality=quality)
        
        current_size = os.path.getsize(temp_output)
        
        # 刪除暫存檔案
        os.remove(temp_output)
        
        # 調整搜尋範圍
        if current_size > target_size:
            max_quality = quality - 1
        elif current_size < target_size * 0.95:  # 允許 5% 的誤差
            min_quality = quality + 1
        else:
            break
    
    # 使用找到的最佳品質設定儲存圖片
    img.save(output_path, 'JPEG', quality=quality)
    final_size = os.path.getsize(output_path) / 1024  # 轉換為 KB
    return final_size, quality

def batch_compress_images(input_folder, output_folder, target_size_kb):
    """
    批次處理資料夾中的所有圖片
    
    Args:
        input_folder: 輸入資料夾路徑
        output_folder: 輸出資料夾路徑
        target_size_kb: 目標檔案大小（KB）
    """
    # 建立輸出資料夾
    os.makedirs(output_folder, exist_ok=True)
    
    # 支援的圖片格式
    image_extensions = {'.jpg', '.jpeg', '.JPG', '.JPEG'}
    
    results = []
    for filename in os.listdir(input_folder):
        if Path(filename).suffix in image_extensions:
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename)
            
            original_size = os.path.getsize(input_path) / 1024  # KB
            
            # 如果原始檔案已經小於目標大小，直接複製
            if original_size <= target_size_kb:
                from shutil import copy2
                copy2(input_path, output_path)
                final_size = original_size
                quality = 100
            else:
                final_size, quality = compress_image(input_path, output_path, target_size_kb)
            
            results.append({
                'filename': filename,
                'original_size': original_size,
                'final_size': final_size,
                'quality': quality
            })
    
    return results

# 使用範例
if __name__ == "__main__":
    input_folder = "/home/alfonso/Git_workspace/zebra314.github.io/assets/image/photo_page"
    output_folder = "/home/alfonso/Downloads/tmp"
    target_size_kb = 800  # 目標 800kb
    
    results = batch_compress_images(input_folder, output_folder, target_size_kb)
    
    # 印出結果
    print("\n壓縮結果摘要:")
    print("-" * 80)
    print(f"{'檔案名稱':<30} {'原始大小(KB)':<15} {'壓縮後大小(KB)':<15} {'品質設定':<10}")
    print("-" * 80)
    for result in results:
        print(f"{result['filename']:<30} {result['original_size']:<15.1f} {result['final_size']:<15.1f} {result['quality']:<10}")