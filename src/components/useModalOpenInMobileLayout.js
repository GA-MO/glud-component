/* eslint-disable */
import { useEffect } from 'react'

const getParentClosest = (elem, selector) => {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) { }
        return i > -1;
      };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
};

export default (ref, show) => {
  useEffect(() => {
    const parent = getParentClosest(ref.current, '#ui-container')


    if (parent && show) {
      const modalChild = parent.getAttribute('data-modalchild')
      if (modalChild) {
        parent.setAttribute('data-modalchild', `${Number(modalChild) + 1}`)
      } else {
        parent.setAttribute('data-modalchild', '1')
      }
      parent.style.overflow = 'hidden'
    }

    return () => {
      if (parent && show) {
        const modalChild = parent.getAttribute('data-modalchild')
        if (modalChild === '1') {
          parent.style.overflow = 'auto'
          parent.setAttribute('data-modalchild', '0')
        } else {
          const newModalChild = Number(modalChild) - 1
          parent.setAttribute('data-modalchild', `${newModalChild}`)
        }
      }
    }
  }, [show])
}