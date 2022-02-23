const xo = {
  _xo: null,
  storage: new Map,
  observe,
  unobserve
};

const DELAY = 30;
const loadQueue = new Set;
let timer;

export function getLazyLoader() {
  if (!xo._xo) {
    xo._xo = new IntersectionObserver(onIntersect);
  }
  return xo;
}

function observe(el, load, unload) {
  xo.storage.set(el, {load, unload});
  xo._xo.observe(el);
}

function unobserve(el) {
  xo.storage.delete(el);
  xo._xo.unobserve(el);
}

function onIntersect(entries) {
  clearTimeout(timer);
  timer = setTimeout(deque, DELAY);

  for (const entry of entries) {
    if (entry.isIntersecting) {
      loadQueue.add(entry.target);
    } else {
      loadQueue.delete(entry.target);
      xo.storage.get(entry.target).unload();
    }
  }
}

function deque() {
  for (const el of loadQueue) {
    xo.storage.get(el).load();
  }
  loadQueue.clear();
}
