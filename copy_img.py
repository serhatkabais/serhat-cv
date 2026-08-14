import shutil

src = r"C:\Users\serha\.gemini\antigravity\brain\660c557e-825e-4287-9d23-d1543b189ed5\serhat_photo_1785065539415.png"
dst = r"D:\CODING TOOLS\ANTIGRAVITY\CV\serhat_photo.png"

try:
    shutil.copyfile(src, dst)
    print("Copied image to", dst)
except Exception as e:
    print("Error copying image:", e)
