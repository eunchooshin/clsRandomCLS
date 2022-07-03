import os
import glob
from PIL import Image

files = glob.glob('.\Users\chumchum\Desktop\programming\clsSpeakingRandomV3\images\grammar_image\glCard\resize/*.jpg')

for f in files:
    img = Image.open(f)
    img_resize = img.resize((int(img.width / 0.25), int(img.height / 0.25)))
    title, ext = os.path.splitext(f)
    img_resize.save(title + '_75' + ext)