import Dummy from 'modules/Dummy'

/** @test {Dummy} */
describe('Dummy class', () => {
  document.body.innerHTML = `
    <div id="root">Hello, World!</div>
  `

  const dummy = new Dummy(document.getElementById('root')!, {})

  it('should return innerHTML', () => {
    const expected = 'Hello, World!'

    expect(dummy.getInnerHtml(dummy.getElem())).toEqual(expected)
  })
})