document.querySelectorAll<HTMLHeadingElement>('h2, h3, h4, h5, h6').forEach((el) => {
  if (el.textContent && el.id) {
    let title = el.textContent

    if (outlineBadges === false) {
      const clone = el.cloneNode(true) as HTMLElement
      for (const child of clone.querySelectorAll('.VPBadge')) {
        child.remove()
      }
      title = clone.textContent || ''
    }

    updatedHeaders.push({
      level: Number(el.tagName[1]),
      title: title.replace(/\s+#\s*$/, ''),
      link: `#${el.id}`
    })
  }
})


