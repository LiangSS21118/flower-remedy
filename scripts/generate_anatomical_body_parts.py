from collections import deque
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT / "花精身體反應區" / "地圖縱覽"
OUT_ROOT = ROOT / "花精身體反應區" / "各部位"
INK = (24, 24, 22, 255)
GENERATED_ROOT = Path("/Users/liangxin/.codex/generated_images/019f608d-900a-7bf3-9bd7-64eca8f06ffa")
AI_LINE_ASSETS = {
    "正臉": GENERATED_ROOT / "call_hzN0exTwIwkxdXvfQweAMlT4.png",
    "頭頂": GENERATED_ROOT / "call_hYav6ZxJke8rDVLC2zGwenJi.png",
    "頭部": GENERATED_ROOT / "call_hozRt9kUc2SO81d03qQBBPV5.png",
    "前頸": GENERATED_ROOT / "call_hozRt9kUc2SO81d03qQBBPV5.png",
    "後腦": GENERATED_ROOT / "call_utFG3GAcMozcI05x7Uo3x5oa.png",
    "頭部和右側胸肩": GENERATED_ROOT / "call_b8CZpx8420xPKOgDWDdku7vw.png",
    "頭部和左側胸肩": GENERATED_ROOT / "call_b8CZpx8420xPKOgDWDdku7vw.png",
    "軀幹（正面）": GENERATED_ROOT / "call_2tvewFAZdJAvY5CGLsCwtI9J.png",
    "右半側": GENERATED_ROOT / "call_1yfvJnR8mc2N7OZj68wZyIsF.png",
    "左半側": GENERATED_ROOT / "call_1yfvJnR8mc2N7OZj68wZyIsF.png",
    "軀幹（背面）": GENERATED_ROOT / "call_2bkw0kVfHQ7MelTO1bJc81yw.png",
    "軀幹（右側）": GENERATED_ROOT / "call_1yfvJnR8mc2N7OZj68wZyIsF.png",
    "軀幹（左側）": GENERATED_ROOT / "call_1yfvJnR8mc2N7OZj68wZyIsF.png",
    "右手臂（前方）": GENERATED_ROOT / "call_K4t6sPn7SINbsEdr2XFplAm2.png",
    "左手臂（前方）": GENERATED_ROOT / "call_K4t6sPn7SINbsEdr2XFplAm2.png",
    "右手臂（後方）": GENERATED_ROOT / "call_K4t6sPn7SINbsEdr2XFplAm2.png",
    "左手臂（後方）": GENERATED_ROOT / "call_K4t6sPn7SINbsEdr2XFplAm2.png",
    "右手心": GENERATED_ROOT / "call_xkA9qY3ENwDvOq1EwwDLrVW0.png",
    "左手心": GENERATED_ROOT / "call_xkA9qY3ENwDvOq1EwwDLrVW0.png",
    "右手背": GENERATED_ROOT / "call_RybyrOvzW34xAcbTWq1Ipzfs.png",
    "左手背": GENERATED_ROOT / "call_RybyrOvzW34xAcbTWq1Ipzfs.png",
    "腿部（正面）": GENERATED_ROOT / "call_zBNNyiuHJTDrSA9xA3YGHZS5.png",
    "腿部（背面）": GENERATED_ROOT / "call_zBNNyiuHJTDrSA9xA3YGHZS5.png",
    "右腿（內、外側）": GENERATED_ROOT / "call_K7VgDrZrwDGiudezet4uhqFa.png",
    "左腿（內、外側）": GENERATED_ROOT / "call_K7VgDrZrwDGiudezet4uhqFa.png",
    "右腳掌": GENERATED_ROOT / "call_1Dyy2kA5rjGakEdBmiDvKhlw.png",
    "左腳掌": GENERATED_ROOT / "call_1Dyy2kA5rjGakEdBmiDvKhlw.png",
}
AI_RENDER_OPTIONS = {
    "正臉": {"scale": 0.90},
    "頭頂": {"scale": 0.94, "crop_rect": (0.0, 0.0, 1.0, 0.83)},
    "頭部": {"scale": 0.94},
    "前頸": {"scale": 0.94},
    "後腦": {"scale": 0.96},
    "頭部和右側胸肩": {"scale": 0.98, "mirror": True, "crop_rect": (0.0, 0.0, 1.0, 0.62)},
    "頭部和左側胸肩": {"scale": 0.98, "crop_rect": (0.0, 0.0, 1.0, 0.62)},
    "右半側": {"scale": 0.98},
    "左半側": {"scale": 0.98, "mirror": True},
    "軀幹（右側）": {"scale": 0.98},
    "軀幹（左側）": {"scale": 0.98, "mirror": True},
    "左手臂（前方）": {"mirror": True},
    "左手臂（後方）": {"mirror": True},
    "左手心": {"mirror": True},
    "左手背": {"mirror": True},
    "左腿（內、外側）": {"mirror": True},
    "左腳掌": {"mirror": True},
}
GENITAL_REFERENCE = ROOT / "花精身體反應區" / "10 酸蘋果" / "男、女性生殖器.png"

MANUAL_NAMES = {
    "正臉",
    "頭頂",
    "頭部",
    "前頸",
    "後腦",
    "頭部和右側胸肩",
    "頭部和左側胸肩",
    "右半側",
    "左半側",
    "腿部（正面）",
    "腿部（背面）",
    "右腿（內、外側）",
    "左腿（內、外側）",
    "軀幹（正面）",
    "軀幹（背面）",
    "軀幹（右側）",
    "軀幹（左側）",
    "右手心",
    "左手心",
    "右手背",
    "左手背",
    "右手臂（前方）",
    "左手臂（前方）",
    "右手臂（後方）",
    "左手臂（後方）",
    "右腳掌",
    "左腳掌",
    "女生殖器",
    "生殖器（男）",
    "男下生殖器",
}


def source_path(group, name):
    return SOURCE_ROOT / group / f"{name}.png"


def canvas_from_source(group, name):
    if name == "頭頂":
        return (520, 520)
    with Image.open(source_path(group, name)) as im:
        return im.size


def make_image(size):
    return Image.new("RGBA", size, (255, 255, 255, 0))


def sw(size):
    return max(3, round(min(size) * 0.0065))


def line(draw, pts, width):
    draw.line(pts, fill=INK, width=width, joint="curve")


def ellipse(draw, box, width):
    draw.ellipse(box, outline=INK, width=width)


def arc(draw, box, start, end, width):
    draw.arc(box, start, end, fill=INK, width=width)


def draw_curve(draw, points, width, steps=56):
    out = []
    for i in range(0, len(points) - 3, 3):
        p0, p1, p2, p3 = points[i : i + 4]
        for t_i in range(steps + 1):
            t = t_i / steps
            x = ((1 - t) ** 3 * p0[0] + 3 * (1 - t) ** 2 * t * p1[0] + 3 * (1 - t) * t**2 * p2[0] + t**3 * p3[0])
            y = ((1 - t) ** 3 * p0[1] + 3 * (1 - t) ** 2 * t * p1[1] + 3 * (1 - t) * t**2 * p2[1] + t**3 * p3[1])
            out.append((x, y))
    if len(out) > 1:
        line(draw, out, width)


def trim_alpha(im, padding=12):
    bbox = im.getchannel("A").getbbox()
    if not bbox:
        return im
    x0, y0, x1, y1 = bbox
    x0 = max(0, x0 - padding)
    y0 = max(0, y0 - padding)
    x1 = min(im.width, x1 + padding)
    y1 = min(im.height, y1 + padding)
    return im.crop((x0, y0, x1, y1))


def generated_line_art(path, target_size, scale=0.92, mirror=False, crop=None, crop_rect=None):
    with Image.open(path).convert("RGB") as im:
        alpha = Image.new("L", im.size, 0)
        ap = alpha.load()
        px = im.load()
        for y in range(im.height):
            for x in range(im.width):
                r, g, b = px[x, y]
                is_green_key = g > 135 and r < 115 and b < 115
                darkness = 255 - min(r, g, b)
                # Keep the clear black medical linework, drop green key and white fill.
                if is_green_key or max(r, g, b) > 238 or darkness < 48:
                    a = 0
                else:
                    a = min(255, int((darkness - 42) * 2.1))
                ap[x, y] = a
        linework = Image.composite(
            Image.new("RGBA", im.size, INK),
            Image.new("RGBA", im.size, (255, 255, 255, 0)),
            alpha,
        )
    linework = trim_alpha(linework)
    if crop_rect:
        w, h = linework.size
        x0, y0, x1, y1 = crop_rect
        linework = linework.crop((int(w * x0), int(h * y0), int(w * x1), int(h * y1)))
        linework = trim_alpha(linework)
    if crop in {"left", "right"}:
        w, h = linework.size
        overlap = int(w * 0.08)
        if crop == "left":
            linework = linework.crop((0, 0, w // 2 + overlap, h))
        else:
            linework = linework.crop((w // 2 - overlap, 0, w, h))
        linework = trim_alpha(linework)
    if mirror:
        linework = linework.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    target_w, target_h = target_size
    linework.thumbnail((int(target_w * scale), int(target_h * scale)), Image.Resampling.LANCZOS)
    out = make_image(target_size)
    out.alpha_composite(linework, ((target_w - linework.width) // 2, (target_h - linework.height) // 2))
    return out


def threshold_line_art(im):
    im = im.convert("RGB")
    alpha = Image.new("L", im.size, 0)
    ap = alpha.load()
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            r, g, b = px[x, y]
            darkness = 255 - min(r, g, b)
            if r < 170 and g < 170 and b < 170 and darkness > 50:
                ap[x, y] = min(255, int(darkness * 1.6))
    return Image.composite(
        Image.new("RGBA", im.size, INK),
        Image.new("RGBA", im.size, (255, 255, 255, 0)),
        alpha,
    )


def reference_genital_line_art(name, target_size):
    src = Image.open(GENITAL_REFERENCE).convert("RGB")
    if name == "女生殖器":
        # Keep the female genital detail. The source crop avoids the numeric
        # labels, then masks the remaining arrowheads on the right side.
        crop = src.crop((0, 0, 455, 520))
        draw = ImageDraw.Draw(crop)
        draw.rectangle((366, 175, 455, 392), fill=(255, 255, 255))
        scale = 0.94
    else:
        # The male detail is reused by the front and lower-genital entries.
        # Crop to the side-view anatomy and remove the source figure number.
        crop = src.crop((25, 555, 555, 1030))
        draw = ImageDraw.Draw(crop)
        draw.rectangle((0, 190, 95, 305), fill=(255, 255, 255))
        scale = 0.94
    linework = trim_alpha(threshold_line_art(crop), padding=16)
    target_w, target_h = target_size
    linework.thumbnail((int(target_w * scale), int(target_h * scale)), Image.Resampling.LANCZOS)
    out = make_image(target_size)
    out.alpha_composite(linework, ((target_w - linework.width) // 2, (target_h - linework.height) // 2))
    return out


def source_exterior_outline(group, name):
    src = Image.open(source_path(group, name)).convert("RGB")
    w, h = src.size
    px = src.load()
    dark = [[False] * w for _ in range(h)]
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            # Keep black scan lines. Exclude red annotations and light gray paper.
            dark[y][x] = r < 96 and g < 96 and b < 96 and max(r, g, b) - min(r, g, b) < 42

    # Flood fill non-dark exterior background from image borders.
    exterior = [[False] * w for _ in range(h)]
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if not dark[y][x] and not exterior[y][x]:
                exterior[y][x] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if not dark[y][x] and not exterior[y][x]:
                exterior[y][x] = True
                q.append((x, y))
    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not dark[ny][nx] and not exterior[ny][nx]:
                exterior[ny][nx] = True
                q.append((nx, ny))

    keep = [[False] * w for _ in range(h)]
    for y in range(1, h - 1):
        for x in range(1, w - 1):
            if not dark[y][x]:
                continue
            near_outside = False
            for ny in range(y - 2, y + 3):
                for nx in range(x - 2, x + 3):
                    if 0 <= nx < w and 0 <= ny < h and exterior[ny][nx]:
                        near_outside = True
                        break
                if near_outside:
                    break
            keep[y][x] = near_outside

    # Remove small isolated remnants such as numbers/arrows that sit outside the body.
    seen = [[False] * w for _ in range(h)]
    components = []
    for y in range(h):
        for x in range(w):
            if not keep[y][x] or seen[y][x]:
                continue
            q = deque([(x, y)])
            seen[y][x] = True
            pts = []
            while q:
                cx, cy = q.popleft()
                pts.append((cx, cy))
                for nx in (cx - 1, cx, cx + 1):
                    for ny in (cy - 1, cy, cy + 1):
                        if 0 <= nx < w and 0 <= ny < h and keep[ny][nx] and not seen[ny][nx]:
                            seen[ny][nx] = True
                            q.append((nx, ny))
            xs = [p[0] for p in pts]
            ys = [p[1] for p in pts]
            components.append({"pts": pts, "count": len(pts), "box": (min(xs), min(ys), max(xs), max(ys))})

    if not components:
        return make_image((w, h))

    largest = max(c["count"] for c in components)
    out = Image.new("RGBA", (w, h), (255, 255, 255, 0))
    opx = out.load()
    for comp in components:
        x0, y0, x1, y1 = comp["box"]
        bw, bh = x1 - x0 + 1, y1 - y0 + 1
        long_enough = bw > w * 0.16 or bh > h * 0.16
        large_enough = comp["count"] > max(24, largest * 0.018)
        keep_comp = comp["count"] == largest or (large_enough and long_enough)
        # Drop tiny title remnants often found at lower-left corners.
        if x1 < w * 0.34 and y0 > h * 0.76 and comp["count"] < largest * 0.08:
            keep_comp = False
        if not keep_comp:
            continue
        for x, y in comp["pts"]:
            opx[x, y] = INK

    # Mildly thicken and smooth the scan stroke so it reads as one clean line.
    alpha = out.getchannel("A").filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.MinFilter(3))
    final = Image.new("RGBA", (w, h), (255, 255, 255, 0))
    final.putalpha(alpha)
    solid = Image.new("RGBA", (w, h), INK)
    final = Image.composite(solid, Image.new("RGBA", (w, h), (255, 255, 255, 0)), alpha)
    return final


def draw_front_head(draw, w, h, neck=False):
    lw = sw((w, h))
    cx = w * 0.5
    top = h * 0.045
    jaw = h * (0.70 if neck else 0.83)
    cheek = h * (0.47 if neck else 0.54)
    draw_curve(draw, [(cx, top), (w * 0.23, h * 0.03), (w * 0.18, h * 0.34), (w * 0.27, cheek), (w * 0.30, h * 0.64), (w * 0.39, jaw), (cx, jaw)], lw)
    draw_curve(draw, [(cx, top), (w * 0.77, h * 0.03), (w * 0.82, h * 0.34), (w * 0.73, cheek), (w * 0.70, h * 0.64), (w * 0.61, jaw), (cx, jaw)], lw)
    ellipse(draw, (w * 0.14, h * 0.32, w * 0.27, h * 0.52), lw)
    ellipse(draw, (w * 0.73, h * 0.32, w * 0.86, h * 0.52), lw)
    arc(draw, (w * 0.36, h * 0.34, w * 0.46, h * 0.40), 195, 345, max(2, lw - 1))
    arc(draw, (w * 0.54, h * 0.34, w * 0.64, h * 0.40), 195, 345, max(2, lw - 1))
    line(draw, [(cx, h * 0.40), (w * 0.49, h * 0.50), (w * 0.45, h * 0.56), (w * 0.54, h * 0.56)], max(2, lw - 1))
    arc(draw, (w * 0.38, h * 0.61, w * 0.62, h * 0.73), 20, 160, max(2, lw - 1))
    if neck:
        line(draw, [(w * 0.39, jaw * 0.99), (w * 0.39, h * 0.82), (w * 0.24, h * 0.96)], lw)
        line(draw, [(w * 0.61, jaw * 0.99), (w * 0.61, h * 0.82), (w * 0.76, h * 0.96)], lw)


def draw_back_head(draw, w, h, shoulders=True):
    lw = sw((w, h))
    cx = w * 0.5
    bottom = h * 0.66 if shoulders else h * 0.84
    draw_curve(draw, [(cx, h * 0.035), (w * 0.25, h * 0.03), (w * 0.20, h * 0.30), (w * 0.25, bottom), (w * 0.34, bottom + h * 0.03), (w * 0.42, bottom + h * 0.04), (cx, bottom + h * 0.04)], lw)
    draw_curve(draw, [(cx, h * 0.035), (w * 0.75, h * 0.03), (w * 0.80, h * 0.30), (w * 0.75, bottom), (w * 0.66, bottom + h * 0.03), (w * 0.58, bottom + h * 0.04), (cx, bottom + h * 0.04)], lw)
    ellipse(draw, (w * 0.14, h * 0.32, w * 0.27, h * 0.54), lw)
    ellipse(draw, (w * 0.73, h * 0.32, w * 0.86, h * 0.54), lw)
    line(draw, [(w * 0.38, bottom + h * 0.02), (w * 0.38, h * 0.87)], lw)
    line(draw, [(w * 0.62, bottom + h * 0.02), (w * 0.62, h * 0.87)], lw)
    line(draw, [(cx, h * 0.08), (cx, bottom - h * 0.02)], max(2, lw - 1))
    if shoulders:
        draw_curve(draw, [(w * 0.38, h * 0.84), (w * 0.24, h * 0.87), (w * 0.12, h * 0.93), (w * 0.03, h * 0.99)], lw)
        draw_curve(draw, [(w * 0.62, h * 0.84), (w * 0.76, h * 0.87), (w * 0.88, h * 0.93), (w * 0.97, h * 0.99)], lw)


def draw_top_head(draw, w, h):
    lw = sw((w, h))
    detail_lw = max(2, lw - 1)
    # Anatomical top view: a subtly asymmetrical cranium, ears, and nape.
    draw_curve(draw, [
        (w * 0.50, h * 0.055),
        (w * 0.34, h * 0.045), (w * 0.22, h * 0.16), (w * 0.17, h * 0.34),
        (w * 0.12, h * 0.52), (w * 0.18, h * 0.73), (w * 0.31, h * 0.83),
        (w * 0.39, h * 0.89), (w * 0.45, h * 0.90), (w * 0.50, h * 0.895),
    ], lw)
    draw_curve(draw, [
        (w * 0.50, h * 0.055),
        (w * 0.66, h * 0.045), (w * 0.78, h * 0.16), (w * 0.83, h * 0.34),
        (w * 0.88, h * 0.52), (w * 0.82, h * 0.73), (w * 0.69, h * 0.83),
        (w * 0.61, h * 0.89), (w * 0.55, h * 0.90), (w * 0.50, h * 0.895),
    ], lw)
    # Ears with inner contours, kept sparse so dots remain the only region marks.
    draw_curve(draw, [(w * 0.165, h * 0.39), (w * 0.065, h * 0.36), (w * 0.045, h * 0.57), (w * 0.17, h * 0.61)], lw)
    draw_curve(draw, [(w * 0.835, h * 0.39), (w * 0.935, h * 0.36), (w * 0.955, h * 0.57), (w * 0.83, h * 0.61)], lw)
    draw_curve(draw, [(w * 0.13, h * 0.43), (w * 0.095, h * 0.48), (w * 0.10, h * 0.55), (w * 0.145, h * 0.57)], detail_lw)
    draw_curve(draw, [(w * 0.87, h * 0.43), (w * 0.905, h * 0.48), (w * 0.90, h * 0.55), (w * 0.855, h * 0.57)], detail_lw)
    draw_curve(draw, [(w * 0.145, h * 0.47), (w * 0.122, h * 0.50), (w * 0.13, h * 0.535), (w * 0.155, h * 0.54)], detail_lw)
    draw_curve(draw, [(w * 0.855, h * 0.47), (w * 0.878, h * 0.50), (w * 0.87, h * 0.535), (w * 0.845, h * 0.54)], detail_lw)
    # Neck and shoulder hint below the occipital area.
    draw_curve(draw, [(w * 0.30, h * 0.84), (w * 0.36, h * 0.91), (w * 0.44, h * 0.91), (w * 0.47, h * 0.965)], lw)
    draw_curve(draw, [(w * 0.70, h * 0.84), (w * 0.64, h * 0.91), (w * 0.56, h * 0.91), (w * 0.53, h * 0.965)], lw)
    draw_curve(draw, [(w * 0.23, h * 0.88), (w * 0.32, h * 0.94), (w * 0.41, h * 0.965), (w * 0.47, h * 0.985)], detail_lw)
    draw_curve(draw, [(w * 0.77, h * 0.88), (w * 0.68, h * 0.94), (w * 0.59, h * 0.965), (w * 0.53, h * 0.985)], detail_lw)


def draw_female_genital(draw, w, h):
    lw = sw((w, h))
    draw_curve(draw, [(w * 0.16, h * 0.06), (w * 0.28, h * 0.24), (w * 0.35, h * 0.45), (w * 0.38, h * 0.92)], lw)
    draw_curve(draw, [(w * 0.84, h * 0.06), (w * 0.72, h * 0.24), (w * 0.65, h * 0.45), (w * 0.62, h * 0.92)], lw)
    draw_curve(draw, [(w * 0.50, h * 0.18), (w * 0.30, h * 0.27), (w * 0.32, h * 0.74), (w * 0.50, h * 0.86)], lw)
    draw_curve(draw, [(w * 0.50, h * 0.18), (w * 0.70, h * 0.27), (w * 0.68, h * 0.74), (w * 0.50, h * 0.86)], lw)
    ellipse(draw, (w * 0.46, h * 0.18, w * 0.54, h * 0.27), max(2, lw - 1))
    line(draw, [(w * 0.50, h * 0.30), (w * 0.50, h * 0.80)], max(2, lw - 1))


def draw_male_genital(draw, w, h):
    lw = sw((w, h))
    draw_curve(draw, [(w * 0.17, h * 0.06), (w * 0.31, h * 0.22), (w * 0.38, h * 0.44), (w * 0.42, h * 0.78)], lw)
    draw_curve(draw, [(w * 0.83, h * 0.06), (w * 0.69, h * 0.22), (w * 0.62, h * 0.44), (w * 0.58, h * 0.78)], lw)
    draw.rounded_rectangle((w * 0.43, h * 0.26, w * 0.57, h * 0.74), radius=max(8, int(w * 0.04)), outline=INK, width=lw)
    ellipse(draw, (w * 0.33, h * 0.61, w * 0.50, h * 0.88), lw)
    ellipse(draw, (w * 0.50, h * 0.61, w * 0.67, h * 0.88), lw)


def draw_front_torso(draw, w, h, side=None):
    lw = max(3, sw((w, h)))
    if side == "right":
        draw_curve(draw, [(w * 0.42, h * 0.04), (w * 0.58, h * 0.05), (w * 0.74, h * 0.13), (w * 0.78, h * 0.27), (w * 0.75, h * 0.44), (w * 0.70, h * 0.62), (w * 0.71, h * 0.80), (w * 0.61, h * 0.96)], lw)
        draw_curve(draw, [(w * 0.42, h * 0.05), (w * 0.33, h * 0.18), (w * 0.31, h * 0.36), (w * 0.36, h * 0.54), (w * 0.40, h * 0.72), (w * 0.46, h * 0.90), (w * 0.52, h * 0.97)], lw)
        draw_curve(draw, [(w * 0.44, h * 0.16), (w * 0.54, h * 0.18), (w * 0.65, h * 0.24), (w * 0.70, h * 0.35)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.42, h * 0.62), (w * 0.52, h * 0.66), (w * 0.61, h * 0.75), (w * 0.65, h * 0.88)], max(2, lw - 1))
    elif side == "left":
        draw_curve(draw, [(w * 0.58, h * 0.04), (w * 0.42, h * 0.05), (w * 0.26, h * 0.13), (w * 0.22, h * 0.27), (w * 0.25, h * 0.44), (w * 0.30, h * 0.62), (w * 0.29, h * 0.80), (w * 0.39, h * 0.96)], lw)
        draw_curve(draw, [(w * 0.58, h * 0.05), (w * 0.67, h * 0.18), (w * 0.69, h * 0.36), (w * 0.64, h * 0.54), (w * 0.60, h * 0.72), (w * 0.54, h * 0.90), (w * 0.48, h * 0.97)], lw)
        draw_curve(draw, [(w * 0.56, h * 0.16), (w * 0.46, h * 0.18), (w * 0.35, h * 0.24), (w * 0.30, h * 0.35)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.58, h * 0.62), (w * 0.48, h * 0.66), (w * 0.39, h * 0.75), (w * 0.35, h * 0.88)], max(2, lw - 1))
    else:
        draw_curve(draw, [(w * 0.42, h * 0.05), (w * 0.30, h * 0.08), (w * 0.18, h * 0.16), (w * 0.16, h * 0.29), (w * 0.17, h * 0.47), (w * 0.22, h * 0.64), (w * 0.30, h * 0.80), (w * 0.38, h * 0.93), (w * 0.43, h * 0.98)], lw)
        draw_curve(draw, [(w * 0.58, h * 0.05), (w * 0.70, h * 0.08), (w * 0.82, h * 0.16), (w * 0.84, h * 0.29), (w * 0.83, h * 0.47), (w * 0.78, h * 0.64), (w * 0.70, h * 0.80), (w * 0.62, h * 0.93), (w * 0.57, h * 0.98)], lw)
        draw_curve(draw, [(w * 0.40, h * 0.10), (w * 0.46, h * 0.16), (w * 0.54, h * 0.16), (w * 0.60, h * 0.10)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.31, h * 0.23), (w * 0.40, h * 0.27), (w * 0.46, h * 0.35), (w * 0.50, h * 0.43)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.69, h * 0.23), (w * 0.60, h * 0.27), (w * 0.54, h * 0.35), (w * 0.50, h * 0.43)], max(2, lw - 1))
        ellipse(draw, (w * 0.485, h * 0.50, w * 0.515, h * 0.535), max(2, lw - 1))
        draw_curve(draw, [(w * 0.41, h * 0.74), (w * 0.46, h * 0.70), (w * 0.50, h * 0.68), (w * 0.54, h * 0.70), (w * 0.59, h * 0.74), (w * 0.57, h * 0.88), (w * 0.55, h * 0.98)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.45, h * 0.98), (w * 0.43, h * 0.88), (w * 0.41, h * 0.74), (w * 0.45, h * 0.98)], max(2, lw - 1))


def draw_back_torso(draw, w, h, side=None):
    lw = max(3, sw((w, h)))
    if side == "right":
        draw_curve(draw, [(w * 0.46, h * 0.06), (w * 0.66, h * 0.12), (w * 0.76, h * 0.29), (w * 0.73, h * 0.48), (w * 0.76, h * 0.66), (w * 0.68, h * 0.84), (w * 0.58, h * 0.96)], lw)
        draw_curve(draw, [(w * 0.42, h * 0.08), (w * 0.32, h * 0.27), (w * 0.32, h * 0.52), (w * 0.42, h * 0.94)], lw)
    elif side == "left":
        draw_curve(draw, [(w * 0.54, h * 0.06), (w * 0.34, h * 0.12), (w * 0.24, h * 0.29), (w * 0.27, h * 0.48), (w * 0.24, h * 0.66), (w * 0.32, h * 0.84), (w * 0.42, h * 0.96)], lw)
        draw_curve(draw, [(w * 0.58, h * 0.08), (w * 0.68, h * 0.27), (w * 0.68, h * 0.52), (w * 0.58, h * 0.94)], lw)
    else:
        draw_curve(draw, [(w * 0.40, h * 0.05), (w * 0.27, h * 0.08), (w * 0.16, h * 0.16), (w * 0.15, h * 0.31), (w * 0.18, h * 0.50), (w * 0.23, h * 0.68), (w * 0.32, h * 0.84), (w * 0.40, h * 0.97)], lw)
        draw_curve(draw, [(w * 0.60, h * 0.05), (w * 0.73, h * 0.08), (w * 0.84, h * 0.16), (w * 0.85, h * 0.31), (w * 0.82, h * 0.50), (w * 0.77, h * 0.68), (w * 0.68, h * 0.84), (w * 0.60, h * 0.97)], lw)
        line(draw, [(w * 0.50, h * 0.10), (w * 0.50, h * 0.89)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.33, h * 0.23), (w * 0.42, h * 0.18), (w * 0.48, h * 0.28), (w * 0.46, h * 0.44)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.67, h * 0.23), (w * 0.58, h * 0.18), (w * 0.52, h * 0.28), (w * 0.54, h * 0.44)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.39, h * 0.72), (w * 0.45, h * 0.68), (w * 0.50, h * 0.66), (w * 0.55, h * 0.68), (w * 0.61, h * 0.72)], max(2, lw - 1))


def draw_front_legs(draw, w, h, back=False):
    lw = max(3, sw((w, h)))
    top = h * 0.04
    draw_curve(draw, [(w * 0.38, top), (w * 0.28, h * 0.17), (w * 0.25, h * 0.35), (w * 0.31, h * 0.50), (w * 0.36, h * 0.62), (w * 0.34, h * 0.76), (w * 0.31, h * 0.91), (w * 0.26, h * 0.97), (w * 0.37, h * 0.98)], lw)
    draw_curve(draw, [(w * 0.48, h * 0.08), (w * 0.43, h * 0.27), (w * 0.43, h * 0.47), (w * 0.47, h * 0.67), (w * 0.47, h * 0.84), (w * 0.45, h * 0.94), (w * 0.40, h * 0.98)], lw)
    draw_curve(draw, [(w * 0.52, h * 0.08), (w * 0.57, h * 0.27), (w * 0.57, h * 0.47), (w * 0.53, h * 0.67), (w * 0.53, h * 0.84), (w * 0.55, h * 0.94), (w * 0.60, h * 0.98)], lw)
    draw_curve(draw, [(w * 0.62, top), (w * 0.72, h * 0.17), (w * 0.75, h * 0.35), (w * 0.69, h * 0.50), (w * 0.64, h * 0.62), (w * 0.66, h * 0.76), (w * 0.69, h * 0.91), (w * 0.74, h * 0.97), (w * 0.63, h * 0.98)], lw)
    if not back:
        draw.arc((w * 0.42, h * 0.02, w * 0.58, h * 0.14), 20, 160, fill=INK, width=lw)
        draw.arc((w * 0.29, h * 0.39, w * 0.44, h * 0.53), 200, 350, fill=INK, width=max(2, lw - 1))
        draw.arc((w * 0.56, h * 0.39, w * 0.71, h * 0.53), 190, 340, fill=INK, width=max(2, lw - 1))
    else:
        line(draw, [(w * 0.50, h * 0.04), (w * 0.50, h * 0.16)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.31, h * 0.37), (w * 0.37, h * 0.46), (w * 0.34, h * 0.57), (w * 0.30, h * 0.65)], max(2, lw - 1))
        draw_curve(draw, [(w * 0.69, h * 0.37), (w * 0.63, h * 0.46), (w * 0.66, h * 0.57), (w * 0.70, h * 0.65)], max(2, lw - 1))


def draw_single_leg(draw, w, h, side="right"):
    lw = max(3, sw((w, h)))
    mirror = -1 if side == "left" else 1
    cx = w * 0.5
    def x(v): return cx + mirror * (v - cx)
    draw_curve(draw, [(x(w * 0.42), h * 0.04), (x(w * 0.30), h * 0.18), (x(w * 0.25), h * 0.36), (x(w * 0.31), h * 0.51), (x(w * 0.37), h * 0.64), (x(w * 0.35), h * 0.78), (x(w * 0.31), h * 0.92), (x(w * 0.25), h * 0.97), (x(w * 0.41), h * 0.98)], lw)
    draw_curve(draw, [(x(w * 0.61), h * 0.04), (x(w * 0.71), h * 0.19), (x(w * 0.74), h * 0.37), (x(w * 0.67), h * 0.52), (x(w * 0.62), h * 0.65), (x(w * 0.63), h * 0.80), (x(w * 0.68), h * 0.93), (x(w * 0.76), h * 0.97), (x(w * 0.59), h * 0.98)], lw)
    draw.arc((min(x(w * 0.30), x(w * 0.70)), h * 0.41, max(x(w * 0.30), x(w * 0.70)), h * 0.56), 195, 345, fill=INK, width=max(2, lw - 1))
    draw_curve(draw, [(x(w * 0.39), h * 0.61), (x(w * 0.48), h * 0.70), (x(w * 0.45), h * 0.86), (x(w * 0.40), h * 0.96)], max(2, lw - 1))


def mirrored_x(w, side):
    mirror = -1 if side == "left" else 1
    cx = w * 0.5

    def x(value):
        return cx + mirror * (value - cx)

    return x


def ordered_box(x1, y1, x2, y2):
    return (min(x1, x2), y1, max(x1, x2), y2)


def draw_hand_palm(draw, w, h, side="right", back=False):
    lw = max(3, sw((w, h)))
    x = mirrored_x(w, side)
    # Outer hand silhouette with anatomically plausible finger lengths.
    draw_curve(draw, [(x(w * 0.36), h * 0.94), (x(w * 0.33), h * 0.78), (x(w * 0.29), h * 0.60), (x(w * 0.26), h * 0.40)], lw)
    draw_curve(draw, [(x(w * 0.26), h * 0.40), (x(w * 0.20), h * 0.17), (x(w * 0.32), h * 0.10), (x(w * 0.35), h * 0.39)], lw)
    draw_curve(draw, [(x(w * 0.35), h * 0.39), (x(w * 0.34), h * 0.05), (x(w * 0.47), h * 0.03), (x(w * 0.47), h * 0.38)], lw)
    draw_curve(draw, [(x(w * 0.47), h * 0.38), (x(w * 0.47), h * 0.01), (x(w * 0.60), h * 0.02), (x(w * 0.59), h * 0.39)], lw)
    draw_curve(draw, [(x(w * 0.59), h * 0.39), (x(w * 0.60), h * 0.08), (x(w * 0.72), h * 0.10), (x(w * 0.70), h * 0.45)], lw)
    draw_curve(draw, [(x(w * 0.70), h * 0.45), (x(w * 0.82), h * 0.42), (x(w * 0.91), h * 0.52), (x(w * 0.78), h * 0.69)], lw)
    draw_curve(draw, [(x(w * 0.78), h * 0.69), (x(w * 0.68), h * 0.77), (x(w * 0.64), h * 0.88), (x(w * 0.62), h * 0.94)], lw)
    line(draw, [(x(w * 0.36), h * 0.94), (x(w * 0.62), h * 0.94)], lw)
    # Interior lines: palm creases or dorsal tendons, intentionally sparse.
    if back:
        for fx in (0.31, 0.43, 0.55, 0.67):
            ellipse(draw, ordered_box(x(w * (fx - 0.038)), h * 0.49, x(w * (fx + 0.038)), h * 0.535), max(2, lw - 1))
            line(draw, [(x(w * fx), h * 0.54), (x(w * (fx - 0.015)), h * 0.78)], max(2, lw - 1))
            arc(draw, ordered_box(x(w * (fx - 0.045)), h * 0.13, x(w * (fx + 0.045)), h * 0.20), 185, 355, max(2, lw - 1))
    else:
        draw_curve(draw, [(x(w * 0.32), h * 0.61), (x(w * 0.44), h * 0.58), (x(w * 0.58), h * 0.62), (x(w * 0.68), h * 0.73)], max(2, lw - 1))
        draw_curve(draw, [(x(w * 0.35), h * 0.72), (x(w * 0.47), h * 0.77), (x(w * 0.57), h * 0.78), (x(w * 0.66), h * 0.84)], max(2, lw - 1))
        draw_curve(draw, [(x(w * 0.56), h * 0.59), (x(w * 0.64), h * 0.66), (x(w * 0.70), h * 0.74), (x(w * 0.73), h * 0.84)], max(2, lw - 1))
    for fx in (0.30, 0.41, 0.53, 0.65):
        line(draw, [(x(w * (fx - 0.035)), h * 0.31), (x(w * (fx + 0.035)), h * 0.31)], max(2, lw - 1))


def draw_arm(draw, w, h, side="right", back=False):
    lw = max(3, sw((w, h)))
    x = mirrored_x(w, side)
    # Outer arm contour with a relaxed hand, drawn as a clean anatomical study.
    draw_curve(draw, [(x(w * 0.43), h * 0.04), (x(w * 0.55), h * 0.06), (x(w * 0.63), h * 0.18), (x(w * 0.62), h * 0.34), (x(w * 0.60), h * 0.50), (x(w * 0.66), h * 0.66), (x(w * 0.70), h * 0.78)], lw)
    draw_curve(draw, [(x(w * 0.56), h * 0.07), (x(w * 0.48), h * 0.19), (x(w * 0.45), h * 0.36), (x(w * 0.47), h * 0.53), (x(w * 0.43), h * 0.68), (x(w * 0.36), h * 0.82), (x(w * 0.34), h * 0.91)], lw)
    draw_curve(draw, [(x(w * 0.70), h * 0.78), (x(w * 0.76), h * 0.82), (x(w * 0.75), h * 0.89), (x(w * 0.67), h * 0.92)], lw)
    draw_curve(draw, [(x(w * 0.67), h * 0.92), (x(w * 0.58), h * 0.96), (x(w * 0.44), h * 0.96), (x(w * 0.34), h * 0.91)], lw)
    for i, fx in enumerate((0.62, 0.56, 0.50, 0.44)):
        line(draw, [(x(w * fx), h * (0.85 + i * 0.016)), (x(w * (fx - 0.025)), h * 0.94)], max(2, lw - 1))
    draw_curve(draw, [(x(w * 0.48), h * 0.43), (x(w * 0.55), h * 0.49), (x(w * 0.59), h * 0.58), (x(w * 0.60), h * 0.67)], max(2, lw - 1))
    if back:
        draw_curve(draw, [(x(w * 0.52), h * 0.17), (x(w * 0.56), h * 0.30), (x(w * 0.54), h * 0.44), (x(w * 0.49), h * 0.55)], max(2, lw - 1))
        draw_curve(draw, [(x(w * 0.55), h * 0.62), (x(w * 0.50), h * 0.72), (x(w * 0.46), h * 0.82), (x(w * 0.45), h * 0.91)], max(2, lw - 1))


def draw_foot(draw, w, h, side="right"):
    lw = max(3, sw((w, h)))
    x = mirrored_x(w, side)
    # Plantar view: toes at top, heel at bottom, with a subtle medial arch.
    draw_curve(draw, [(x(w * 0.33), h * 0.22), (x(w * 0.22), h * 0.33), (x(w * 0.20), h * 0.58), (x(w * 0.28), h * 0.78), (x(w * 0.34), h * 0.92), (x(w * 0.47), h * 0.96), (x(w * 0.50), h * 0.96)], lw)
    draw_curve(draw, [(x(w * 0.50), h * 0.96), (x(w * 0.63), h * 0.96), (x(w * 0.75), h * 0.82), (x(w * 0.78), h * 0.60), (x(w * 0.77), h * 0.40), (x(w * 0.69), h * 0.26), (x(w * 0.62), h * 0.20)], lw)
    # Toes, largest on the medial side.
    toes = [(0.30, 0.16, 0.070), (0.42, 0.10, 0.060), (0.53, 0.095, 0.055), (0.63, 0.12, 0.048), (0.71, 0.17, 0.040)]
    for fx, fy, r in toes:
        ellipse(draw, ordered_box(x(w * (fx - r)), h * (fy - r * 0.55), x(w * (fx + r)), h * (fy + r * 0.90)), max(2, lw - 1))
    draw_curve(draw, [(x(w * 0.36), h * 0.34), (x(w * 0.47), h * 0.45), (x(w * 0.53), h * 0.60), (x(w * 0.57), h * 0.80)], max(2, lw - 1))
    draw_curve(draw, [(x(w * 0.58), h * 0.28), (x(w * 0.65), h * 0.44), (x(w * 0.66), h * 0.63), (x(w * 0.62), h * 0.78)], max(2, lw - 1))
    arc(draw, ordered_box(x(w * 0.35), h * 0.78, x(w * 0.62), h * 0.94), 200, 340, max(2, lw - 1))


def manual_render(group, name):
    w, h = canvas_from_source(group, name)
    if name in {"女生殖器", "生殖器（男）", "男下生殖器"} and GENITAL_REFERENCE.exists():
        return reference_genital_line_art(name, (w, h))
    ai_asset = AI_LINE_ASSETS.get(name)
    if ai_asset and ai_asset.exists():
        options = {"scale": 0.96}
        options.update(AI_RENDER_OPTIONS.get(name, {}))
        return generated_line_art(ai_asset, (w, h), **options)
    if name == "頭頂":
        scale = 3
        hi = make_image((w * scale, h * scale))
        draw_top_head(ImageDraw.Draw(hi), w * scale, h * scale)
        return hi.resize((w, h), Image.Resampling.LANCZOS)
    im = make_image((w, h))
    draw = ImageDraw.Draw(im)
    if name == "正臉":
        draw_front_head(draw, w, h, neck=False)
    elif name in {"頭部", "前頸"}:
        draw_front_head(draw, w, h, neck=True)
    elif name in {"後腦", "頭部和右側胸肩", "頭部和左側胸肩"}:
        draw_back_head(draw, w, h, shoulders=True)
    elif name == "軀幹（正面）":
        draw_front_torso(draw, w, h)
    elif name == "右半側":
        draw_front_torso(draw, w, h, side="right")
    elif name == "左半側":
        draw_front_torso(draw, w, h, side="left")
    elif name == "軀幹（背面）":
        draw_back_torso(draw, w, h)
    elif name == "軀幹（右側）":
        draw_back_torso(draw, w, h, side="right")
    elif name == "軀幹（左側）":
        draw_back_torso(draw, w, h, side="left")
    elif name == "腿部（正面）":
        draw_front_legs(draw, w, h, back=False)
    elif name == "腿部（背面）":
        draw_front_legs(draw, w, h, back=True)
    elif name == "右腿（內、外側）":
        draw_single_leg(draw, w, h, side="right")
    elif name == "左腿（內、外側）":
        draw_single_leg(draw, w, h, side="left")
    elif name == "右手心":
        draw_hand_palm(draw, w, h, side="right", back=False)
    elif name == "左手心":
        draw_hand_palm(draw, w, h, side="left", back=False)
    elif name == "右手背":
        draw_hand_palm(draw, w, h, side="right", back=True)
    elif name == "左手背":
        draw_hand_palm(draw, w, h, side="left", back=True)
    elif name == "右手臂（前方）":
        draw_arm(draw, w, h, side="right", back=False)
    elif name == "左手臂（前方）":
        draw_arm(draw, w, h, side="left", back=False)
    elif name == "右手臂（後方）":
        draw_arm(draw, w, h, side="right", back=True)
    elif name == "左手臂（後方）":
        draw_arm(draw, w, h, side="left", back=True)
    elif name == "右腳掌":
        draw_foot(draw, w, h, side="right")
    elif name == "左腳掌":
        draw_foot(draw, w, h, side="left")
    elif name == "女生殖器":
        draw_female_genital(draw, w, h)
    elif name in {"生殖器（男）", "男下生殖器"}:
        draw_male_genital(draw, w, h)
    else:
        raise ValueError(name)
    return im


def render(group, name):
    if name in MANUAL_NAMES:
        im = manual_render(group, name)
    else:
        im = source_exterior_outline(group, name)
    out = OUT_ROOT / group / f"{name}.png"
    out.parent.mkdir(parents=True, exist_ok=True)
    im.save(out)
    return out


def main():
    outputs = []
    for src in sorted(SOURCE_ROOT.glob("*/*.png")):
        outputs.append(render(src.parent.name, src.stem))
    outputs.append(render("正面", "頭頂"))
    print(f"generated {len(outputs)} files")
    for path in outputs:
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
