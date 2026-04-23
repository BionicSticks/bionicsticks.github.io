#!/usr/bin/env python3
"""Composite iPhone screenshots onto 1600x900 frames with a simple device mockup."""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

CANVAS_W, CANVAS_H = 1600, 900
BG = (255, 255, 255, 255)

PHONE_H = 800
PHONE_ASPECT = 1206 / 2622
PHONE_W = round(PHONE_H * PHONE_ASPECT)
BEZEL = 10
SCREEN_W = PHONE_W - 2 * BEZEL
SCREEN_H = PHONE_H - 2 * BEZEL
BODY_RADIUS = 62
SCREEN_RADIUS = 54
SHADOW_OFFSET = 14
SHADOW_BLUR = 32
SHADOW_ALPHA = 70


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255
    )
    return mask


def compose(src, dst):
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), BG)

    phone_x = (CANVAS_W - PHONE_W) // 2
    phone_y = (CANVAS_H - PHONE_H) // 2

    # Drop shadow
    shadow_pad = SHADOW_BLUR * 2
    shadow = Image.new(
        "RGBA", (PHONE_W + shadow_pad * 2, PHONE_H + shadow_pad * 2), (0, 0, 0, 0)
    )
    ImageDraw.Draw(shadow).rounded_rectangle(
        (shadow_pad, shadow_pad, shadow_pad + PHONE_W - 1, shadow_pad + PHONE_H - 1),
        radius=BODY_RADIUS,
        fill=(0, 0, 0, SHADOW_ALPHA),
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(SHADOW_BLUR))
    canvas.alpha_composite(
        shadow, (phone_x - shadow_pad, phone_y - shadow_pad + SHADOW_OFFSET)
    )

    # Phone body (black rounded rect)
    body = Image.new("RGBA", (PHONE_W, PHONE_H), (0, 0, 0, 0))
    ImageDraw.Draw(body).rounded_rectangle(
        (0, 0, PHONE_W - 1, PHONE_H - 1), radius=BODY_RADIUS, fill=(14, 14, 16, 255)
    )
    canvas.alpha_composite(body, (phone_x, phone_y))

    # Screen with rounded corners
    screenshot = Image.open(src).convert("RGBA")
    screenshot = screenshot.resize((SCREEN_W, SCREEN_H), Image.LANCZOS)
    screenshot.putalpha(rounded_mask((SCREEN_W, SCREEN_H), SCREEN_RADIUS))
    canvas.alpha_composite(screenshot, (phone_x + BEZEL, phone_y + BEZEL))

    canvas.convert("RGB").save(dst, "PNG", optimize=True)


def main(argv):
    if len(argv) < 3:
        print("usage: compose_phone_mockups.py <src_dir> <dst_dir>", file=sys.stderr)
        return 2
    src_dir, dst_dir = Path(argv[1]), Path(argv[2])
    dst_dir.mkdir(parents=True, exist_ok=True)
    sources = sorted(p for p in src_dir.glob("*.png") if p.is_file())
    for i, src in enumerate(sources, start=1):
        dst = dst_dir / f"{i:02d}.png"
        print(f"{src.name} -> {dst.name}")
        compose(src, dst)
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
