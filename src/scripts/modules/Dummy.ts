/**
 * dummy class
 */

interface IOpts {
  dummy_opt?: string
  [key: string]: any
}

export default class Dummy {
  private elem: HTMLElement
  private opts: IOpts

  constructor(elem: HTMLElement, opts: IOpts) {
    this.elem = elem
    this.opts = opts

    this.bindEvents()

    // import js module
    import('./Legacy.js' as any).then(
      module => new module.default(this.getElem())
    )
  }

  private bindEvents(): void {
    this.elem.addEventListener('click', () => {
      console.log(this.getInnerHtml(this.getElem())) // Click me!

      this.logger('hoge') // hoge
      this.logger(123) // 123
      this.logger(true) // true
      this.logger(null) // save from type error
    })
  }

  private logger = (arg: string | number | boolean | null): void => {
    if (arg) {
      console.log(arg.toString())
    } else {
      console.log('save from type error')
    }
  }

  public getInnerHtml = (elem: HTMLElement): string => elem.innerHTML

  public getElem = (): HTMLElement => this.elem
}
