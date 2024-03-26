/**
 * Represents a collection of input elements.
 * @type {NodeListOf<HTMLInputElement>}
 */
const inputs = document.querySelectorAll('.controls input');

/**
 * Updates the CSS variable value based on the input value.
 * @this {HTMLInputElement}
 */
function handleUpdate() {
  /**
   * The suffix to be added to the CSS variable value.
   * @type {string}
   */
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('pointermove', handleUpdate));