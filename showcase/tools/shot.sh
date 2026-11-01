#!/bin/zsh
# Kullanım: shot.sh <slug>  → showcase/_shots/<slug>-desktop.png, -mobile.png, -full.png
# Mobil görüntü 390px genişliğinde bir iframe içinden alınır (headless Chrome 500px altı pencere açmaz).
# Her çalıştırma kendi Chrome profilini kullanır, paralel çalıştırmalar çakışmaz.
set -e
ROOT=${0:A:h:h}
SLUG=$1
OUT=$ROOT/_shots; mkdir -p $OUT
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL="file://$ROOT/$SLUG/index.html"
PROF=$(mktemp -d)
WRAP=$OUT/.$SLUG-m390.html
print -r -- "<!doctype html><html><body style=\"margin:0;background:#888\"><iframe src=\"$URL\" style=\"border:0;width:390px;height:844px;display:block\"></iframe></body></html>" > $WRAP
shoot() { "$CH" --headless=new --disable-gpu --hide-scrollbars --user-data-dir=$PROF \
  --allow-file-access-from-files --virtual-time-budget=4000 --window-size=$2 --screenshot=$3 "$1" >/dev/null 2>&1 || true }
shoot "$URL" 1280,900 $OUT/$SLUG-desktop.png
shoot "$URL" 1280,4200 $OUT/$SLUG-full.png
shoot "file://$WRAP" 500,844 $OUT/$SLUG-mobile-raw.png
# 500px görüntüden soldaki 390px'i kes
python3 -c "import sys;from PIL import Image;Image.open(sys.argv[1]).crop((0,0,390,844)).save(sys.argv[2])" $OUT/$SLUG-mobile-raw.png $OUT/$SLUG-mobile.png
rm -rf $PROF $WRAP $OUT/$SLUG-mobile-raw.png
echo "$OUT/$SLUG-desktop.png $OUT/$SLUG-mobile.png $OUT/$SLUG-full.png"
