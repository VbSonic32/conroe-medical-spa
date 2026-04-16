```markdown
# Design System: High-End Medical Spa Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Tactile Sanctuary"**

This design system moves away from the clinical, sterile aesthetic typical of medical institutions and instead embraces the "Tactile Sanctuary." Our goal is to replicate the experience of walking into a high-end, quiet spa: the smell of sandalwood, the texture of heavy linen, and the soft glow of ambient lighting.

We reject the rigid, "boxed-in" layout of traditional web design. Instead, we embrace **Editorial Flow**. This means using intentional asymmetry, generous whitespace (negative space as a luxury), and tonal layering. The interface should feel like a premium print magazine—intentional, quiet, and deeply sophisticated.

---

## 2. Colors: Tonal Depth vs. Structural Lines
Our palette is rooted in the earth. We avoid stark blacks and pure whites in favor of organic, "living" tones.

### The Palette
- **Primary (`#596244`):** A sophisticated moss green. Use this for moments of quiet authority and primary actions.
- **Surface & Background (`#fbf9f5`):** A warm, linen-inspired base.
- **Accent/Tertiary (`#6a5c4b`):** A muted bronze/wood tone for refined highlights.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px borders are strictly prohibited for sectioning or containment. 
Boundaries must be defined through **Background Color Shifts**. For example, a service description block in `surface-container-low` should sit directly on a `surface` background. The shift in tone creates the "edge," not a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked materials.
- **Base Layer:** `surface`
- **Sectioning:** Use `surface-container-low` for large content blocks.
- **Prominence:** Use `surface-container-highest` for call-outs or navigation bars that need to feel "closer" to the user.

### The "Glass & Gradient" Rule
To add "soul," use subtle gradients on primary CTAs transitioning from `primary` (#596244) to `primary-container` (#8e9775). This mimics the way light hits a curved leaf or a silk ribbon.

---

## 3. Typography: Grace & Clarity
The typographic system relies on the tension between the organic curves of the serif and the modern efficiency of the sans-serif.

*   **Display & Headlines (Noto Serif):** These are our "Art Elements." Use `display-lg` and `headline-lg` with generous tracking and line-height. These should feel like a quiet whisper of luxury.
*   **Body & Labels (Manrope):** A clean, high-legibility sans-serif. Manrope provides a contemporary contrast to the serif, ensuring that medical information remains clear and trustworthy.
*   **Editorial Scaling:** Don't be afraid of extreme contrast. A `display-lg` headline followed by a `body-md` description creates a high-fashion, editorial feel that standard UI avoids.

---

## 4. Elevation & Depth
In a premium medical spa, lighting is never harsh. Our digital shadows and depth should follow suit.

*   **The Layering Principle:** Achieve depth by "stacking" container tiers. Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, natural "lift" without the need for visual noise.
*   **Ambient Shadows:** If a floating element (like a modal) is required, use a shadow with a 32px-64px blur and an opacity of 4-6%. Use a tint of `on-surface` (#1b1c1a) rather than pure black to maintain a soft, ambient glow.
*   **Glassmorphism:** For top navigation bars or floating action buttons, use `surface` at 80% opacity with a `backdrop-blur` of 20px. This allows the earthy colors of the page to bleed through, softening the interface.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background with `on-primary` text. Use `rounded-sm` (0.125rem) or `none` (0px) for a more architectural, bespoke feel. Avoid large pill shapes unless the context is very casual.
*   **Secondary:** No background. Use a `title-sm` font weight with a subtle underline (2px) in `primary-fixed-dim`.

### Cards & Content Blocks
*   **The Rule:** No dividers. Separate content using the Spacing Scale (80px–120px for sections) or subtle background transitions between `surface` and `surface-container-low`.
*   **Image Treatment:** Images should have a `md` (0.375rem) corner radius to feel like high-quality photo prints.

### Input Fields
*   **Style:** Minimalist. Only a bottom border using `outline-variant` at 40% opacity. When focused, the border transitions to `primary`. Labels should be in `label-md` and always visible (floating or top-aligned).

### Chips & Tags
*   Use `secondary-container` backgrounds with `on-secondary-container` text. These should be `full` rounded to distinguish them as interactive tokens against the more architectural layout.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Place a heading on the left and the body text on the right with a large gutter.
*   **Use High-Quality Imagery:** This system relies on photography of botanical textures, soft lighting, and serene spa environments.
*   **Prioritize Negative Space:** If you think there is enough space, add 24px more. Space equals luxury.

### Don't:
*   **Don't use 1px solid borders:** They look "templatey" and clinical.
*   **Don't use "pure" black (#000000):** Use `on-background` (#1b1c1a) for all dark text to maintain the soft, organic feel.
*   **Don't crowd the screen:** If the user has to process too much information at once, the "Sanctuary" feeling is lost.
*   **Don't use harsh animations:** Transitions should be slow (300ms-500ms) and use "Ease-In-Out" to mimic the slow, rhythmic pace of a spa treatment.