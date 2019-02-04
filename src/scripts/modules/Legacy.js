/**
 * dummy class
 */
export default class Legacy {
  constructor(elem, opts) {
    this.elem = elem
    this.opts = opts

    this.bindEvents()
  }

  /**
   * @returns void
   */
  bindEvents() {
    this.elem.addEventListener('click', () => {
      console.log(`${this.getInnerHtml(this.getElem())} from Legacy.js`) // Click me!
    })
  }

  /**
   * @returns HTMLElement
   */
  getElem = () => this.elem

  /**
   * @param elem HTMLElement
   * @returns string
   */
  getInnerHtml = elem => elem.innerHTML
}
