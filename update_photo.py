import shutil

src = r"C:\Users\serha\.gemini\antigravity\brain\660c557e-825e-4287-9d23-d1543b189ed5\media__1785066790327.jpg"
dst_png = r"D:\CODING TOOLS\ANTIGRAVITY\CV\serhat_photo.png"
dst_jpg = r"D:\CODING TOOLS\ANTIGRAVITY\CV\serhat_photo.jpg"

try:
    shutil.copyfile(src, dst_png)
    shutil.copyfile(src, dst_jpg)
    print("Successfully replaced profile image with user provided photo!")
except Exception as e:
    print("Error copying photo:", e)
