export default () => {
  import('jquery').then($ => {
    const dom = {
      app: $('#agreement-special'),
      contentHeight: 818,
      parseDom(domList) {
        // 解析并转换文本标签
        let [self, htmlStr] = [this, '']
        while (domList.length === 1) {
          domList = domList[0].childNodes
        }

        Array.from(domList).forEach((item, index) => {
          if (item.nodeType === 3) {
            htmlStr += !item.textContent
              ? ''
              : `<span>${item.textContent}</span>`
          } else if ($(item).height() >= self.contentHeight) {
            htmlStr += self.parseDom(item.childNodes)
          } else {
            htmlStr += item.outerHTML
          }
        })
        return htmlStr
      },
      getSplitDom() {
        // 解析并分割协议块
        let [self, htmlStr, domList, top] = [
          this,
          '',
          this.app[0].childNodes,
          this.contentHeight
        ]
        const lastSplitDom = () => {
          let [itemJq, str] = [$(domList[domList.length - 1]), '']
          Array.from(itemJq.prevUntil('.selected')).forEach(
            (v, i) => (str = v.outerHTML + str)
          )
          return `<div class="pact-block">${str + itemJq[0].outerHTML}</div>`
        }

        Array.from(domList).forEach((item, index) => {
          const itemJq = $(item)
          let topVal = itemJq.offset().top
          if (topVal > top) {
            top += self.contentHeight
            let str = ''
            Array.from(itemJq.prev().prevUntil('.selected')).forEach(
              (v, i) => (str = v.outerHTML + str)
            )
            htmlStr += `<div class="pact-block">${str}</div>`
            itemJq
              .prev()
              .prev()
              .addClass('selected')
          }
        })
        return htmlStr + lastSplitDom()
      },
      render(domList) {
        // 渲染最终解析处理的DOM
        this.app.html(this.getSplitDom())
        this.app.ready(() => {
          this.app.addClass('active')
        })
      }
    }
    dom.app.html(dom.parseDom(dom.app[0].childNodes))
    dom.app.ready(() => {
      dom.render()
    })
  })
}
