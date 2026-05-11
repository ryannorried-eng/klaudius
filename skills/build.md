# /build

Build a site for a single lead that has already been gathered.

## Usage
/build place_id="ChIJ..."

## Steps
1. Confirm builds/{place_id}/business.json exists — if not, run gather first
2. Copy template/base/ into builds/{place_id}/
3. Read business.json and populate all components with real data
4. Pick and inject a design system from template/design-systems/
5. Verify mobile rendering
6. Print: ready to deploy — run /deploy place_id="..."
