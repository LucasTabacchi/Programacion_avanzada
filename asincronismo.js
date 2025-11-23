/* 1) Suma de números únicos*/
function sumUnique(nums) {
  const set = new Set();

  for (const n of nums) {
    if (Number.isFinite(n)) {
      set.add(n);
    }
  }

  let total = 0;
  for (const v of set) {
    total += v;
  }
  return total;
}

/* 2) Seleccionar propiedades*/
function pick(obj, keys) {
  const result = {};
  for (const k of keys) {
    if (k in obj) {
      result[k] = obj[k];
    }
  }
  return result;
}

/* 3) Agrupar por clave o función*/
function groupBy(list, keyOrFn) {
  const result = {};

  for (const item of list) {
    const key = typeof keyOrFn === "function"
      ? keyOrFn(item)
      : item[keyOrFn];

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

/* 4) Ordenar por múltiples campos*/
function sortByMany(list, specs) {
  const copy = [...list]; // clon superficial

  copy.sort((a, b) => {
    for (const { key, dir } of specs) {
      const factor = dir === "asc" ? 1 : -1;

      if (a[key] < b[key]) return -1 * factor;
      if (a[key] > b[key]) return 1 * factor;
    }
    return 0;
  });

  return copy;
}

/* 5) deepEqual (objetos/arrays simples)*/
function deepEqual(a, b) {

  if (a === b) return true;

  if (a === null || b === null) return false;
  if (typeof a !== "object" || typeof b !== "object") return false;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  for (const k of aKeys) {
    if (!bKeys.includes(k)) return false;
    if (!deepEqual(a[k], b[k])) return false;
  }

  return true;
}

/* 6) Validador de paréntesis*/
function isBalanced(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      const top = stack.pop();
      if (top !== pairs[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/*7) Frecuencia de palabras*/
function wordFreq(text) {
  const clean = text
    .toLowerCase()
    .replace(/[.,:;!?]/g, ""); // elimina puntuación básica

  const words = clean.split(/\s+/).filter(Boolean); // separa por espacios y filtra vacíos
  const map = new Map();

  for (const w of words) {
    map.set(w, (map.get(w) || 0) + 1);
  }

  return map;
}

/* 9) Debounce*/
function debounce(fn, delay) {
  let timer = null;

  return function debounced(...args) {
    const ctx = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay);
  };
}

/* 10A) Asincronismo: withTimeout*/
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("Timeout"));
    }, ms);

    promise
      .then((value) => {
        clearTimeout(timeoutId);
        resolve(value);
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        reject(err);
      });
  });
}

/* 10B) Asincronismo: allSettledLite*/
function allSettledLite(promises) {
  const wrapped = promises.map((p) =>
    Promise.resolve(p)
      .then((value) => ({
        status: "fulfilled",
        value
      }))
      .catch((reason) => ({
        status: "rejected",
        reason
      }))
  );

  return Promise.all(wrapped);
}

