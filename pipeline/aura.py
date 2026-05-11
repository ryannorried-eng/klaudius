"""
Infers a business's aura type from its data, then maps it to a design system.

Aura types:  coastal | luxury | industrial | contractor | minimal_professional
Design systems: coastal | editorial | industrial | contractor | minimal

Usage:
    from pipeline.aura import infer_aura, get_copywriting_tone, get_layout_variant

    aura, design_system = infer_aura(business_dict)
    tone   = get_copywriting_tone(design_system)
    layout = get_layout_variant(design_system)

Or from CLI:
    python pipeline/aura.py builds/<place_id>/business.json
"""

import json
from pathlib import Path

_DS_DIR = Path(__file__).parent.parent / 'template' / 'design-systems'


def _load_signals() -> dict:
    signals = {}
    for ds_file in sorted(_DS_DIR.glob('*.json')):
        ds = json.loads(ds_file.read_text())
        aura = ds.get('aura')
        if not aura or 'aura_signals' not in ds:
            continue
        signals[aura] = {
            'name_keywords':  [k.lower() for k in ds['aura_signals'].get('name_keywords', [])],
            'review_signals': [k.lower() for k in ds['aura_signals'].get('review_signals', [])],
            'category_match': [k.lower() for k in ds['aura_signals'].get('category_match', [])],
            'design_system':  ds['name'],
        }
    return signals


def _score(text: str, keywords: list) -> int:
    t = text.lower()
    return sum(1 for kw in keywords if kw in t)


def infer_aura(business: dict) -> tuple[str, str]:
    """
    Returns (aura_type, design_system_name).

    business dict expected keys:
        name, category (str), types (list[str]), reviews (list[dict with 'text']), address
    """
    signals = _load_signals()

    name     = business.get('name', '')
    types    = ' '.join(business.get('types', []))
    category = business.get('category', '')
    reviews  = ' '.join(r.get('text', '') for r in business.get('reviews', []))

    scores: dict[str, int] = {}
    for aura, sig in signals.items():
        score = 0
        score += _score(name, sig['name_keywords']) * 3        # name is the strongest signal
        score += _score(category + ' ' + types, sig['category_match']) * 4  # category is strongest
        score += _score(reviews, sig['review_signals']) * 1    # reviews add nuance
        scores[aura] = score

    # Fall back to 'industrial' — covers the widest range of trade businesses
    if not any(scores.values()):
        return 'industrial', 'industrial'

    best_aura = max(scores, key=lambda a: scores[a])
    design_system = signals[best_aura]['design_system']
    return best_aura, design_system


def get_copywriting_tone(design_system: str) -> dict:
    """Returns the copywriting_tone block from a design system JSON."""
    ds_file = _DS_DIR / f'{design_system}.json'
    if not ds_file.exists():
        return {}
    return json.loads(ds_file.read_text()).get('copywriting_tone', {})


def get_layout_variant(design_system: str) -> dict:
    """Returns the layout_variant block from a design system JSON."""
    ds_file = _DS_DIR / f'{design_system}.json'
    if not ds_file.exists():
        return {}
    return json.loads(ds_file.read_text()).get('layout_variant', {})


def get_design_system(design_system: str) -> dict:
    """Returns the full design system JSON."""
    ds_file = _DS_DIR / f'{design_system}.json'
    if not ds_file.exists():
        return {}
    return json.loads(ds_file.read_text())


if __name__ == '__main__':
    import sys

    biz_path = Path(sys.argv[1]) if len(sys.argv) > 1 else None
    if not biz_path or not biz_path.exists():
        print('Usage: python pipeline/aura.py builds/<place_id>/business.json')
        sys.exit(1)

    biz = json.loads(biz_path.read_text())
    aura, ds = infer_aura(biz)
    tone   = get_copywriting_tone(ds)
    layout = get_layout_variant(ds)

    print(f'Business:      {biz.get("name", "?")}')
    print(f'Aura:          {aura}')
    print(f'Design system: {ds}')
    if tone:
        print(f'Tagline ex:    {tone.get("examples", {}).get("hero_tagline", "")}')
        print(f'CTA ex:        {tone.get("examples", {}).get("cta", "")}')
    if layout:
        print(f'Section order: {layout.get("section_order", [])}')
