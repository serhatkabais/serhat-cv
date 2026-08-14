import urllib.request
import re

url = "https://edumanu.com/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
asset_files = re.findall(r'/assets/[a-zA-Z0-9_\-]+\.js', html)

for asset in asset_files:
    full_url = "https://edumanu.com" + asset
    req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
    js = urllib.request.urlopen(req).read().decode('utf-8')
    more_assets = re.findall(r'assets/[a-zA-Z0-9_\-]+\.js', js)
    for m in more_assets:
        if m not in asset_files:
            asset_files.append("/" + m)

print("Total JS files found:", len(asset_files))
for asset in asset_files:
    try:
        full_url = "https://edumanu.com" + asset
        req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
        js = urllib.request.urlopen(req).read().decode('utf-8')
        imgs = re.findall(r'/[a-zA-Z0-9_\-]+\.(?:jpg|jpeg|png|webp|svg)', js)
        if imgs:
            print(asset, "->", set(imgs))
        urls = re.findall(r'https?://[^\s\"\']+\.(?:jpg|jpeg|png|webp)', js)
        if urls:
            print(asset, "-> URLS:", set(urls))
    except Exception as e:
        print(asset, e)
